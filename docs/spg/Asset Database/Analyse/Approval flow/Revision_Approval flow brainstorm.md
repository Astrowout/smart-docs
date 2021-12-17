
title: Revision/Approval flow brainstorm
created at: Wed Mar 18 2020 15:17:11 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 04:57:38 GMT+0000 (Coordinated Universal Time)
---

# Revision/Approval flow brainstorm

## Current (Component) Revision Flow

When a component is saved, we send the updated component (all fields/props, both changed and unchanged) to the BE. Here, we will create a diff based on the changes between the original component and the updated one. This diff will be stored in a revision, along with the userId, version number, date, and other properties. Since there isn't any approval functionalty yet, the changes will automatically be published and patched to the component. Changes can be undone by taking the revision and reverse patching the changes stored in the revision.

## New revision/approval flow proposition

There is a single source of thruth for every project, the Master branch, or in this case, the Master task. Users can start a new task, starting from master. The Task model won't contain a lot, just some basic information (name, description?), and a relation with the MergeRequest model, to check for outgoing merge requests.

Task model:

```json
{
  "id": "string",
  "name": "string",
  "mergeRequests": MergeRequest[],
}
```

The MergeRequest model is the state of a merge request. We define the status, the state machine, the user which has requested the MR, a description, ...

MergeRequest model:

```json
{
  "id": "string",
  "taskId": "string",
  "status": "enum", → (pending, merged, declined, ...),
  "description": "string",
  "userId": "string",
  "machine": "object",
}
```

**Note:** Eventually this model will be extended by adding reviewers, comments etc as well.

**Example**

If we want to open a MR to the master branch, the Task/MergeRequest will look like something like this:

Component_001 task:

```json
{
  "id": "a248a3b9-864d-46fc-a1c2-7f27991392e7",
  "name": "component_001",
  "mergeRequests": ["01fa61f2-3071-48d7-8518-1e8701a76085"]
}
```

MergeRequest `01fa61f2-3071-48d7-8518-1e8701a76085` :

```json
{
  "id": "01fa61f2-3071-48d7-8518-1e8701a76085",
  "taskId": "a248a3b9-864d-46fc-a1c2-7f27991392e7",
  "status": "PENDING",
  "description": "I want to merge the component_001 branch into master",
  "userId": "29c4be40-2fe9-4d00-816c-74425629a981",
  "machine": "{}" // TODO
}
```

## Okay, so where are the changes?

Here comes the revision flow into play. When we make changes on, for example, a component, we are already creating revisions. We want to extend this logic, to make it useful for the approval flow. We need to pass the current task id to the BE. By doing this, we can have quite an extensive log of every change made. Which user made the change, which values changed, what the current Task is, and so on.

When we want to see changes made in a task, we simply fetch all the revisions based on the task id and patch them (this probably isn't super performant to say the least, so would be good if we found a more performant solution for this). Once the MR is approved, we simply loop through all the revisions and patch the changes to master.

          