
title: Approval flow
created at: Thu Feb 27 2020 16:37:38 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 02:32:04 GMT+0000 (Coordinated Universal Time)
---

# Approval flow

Considering the current workflow and interaction between different disciplines, software and the asset database, we propose a simplified version of the [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model.

The GitFlow model allows a team to work in parallel on the same code base and offers some solutions towards handling conflicts and release management.

To avoid unnecessary added complexity, a few restrictions will be imposed:

-   creating a new branch is only allowed starting from the master branch
-   a branch can only be merged back to the master branch
-   a push to the master branch is unequivocally pushed to all existing branches
-   no change can be pushed directly to the master branch

[\[https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&page-id=ux0AXTphQLFMlaxMwhbu&title=Approval%20flow.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fa%2Fdistrict01.be%2Fuc%3Fid%3D1RB0jSadL6n0cTi_SZNi_muDe95Dbmr9p%26export%3Ddownload\]](https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&page-id=ux0AXTphQLFMlaxMwhbu&title=Approval%20flow.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fa%2Fdistrict01.be%2Fuc%3Fid%3D1RB0jSadL6n0cTi_SZNi_muDe95Dbmr9p%26export%3Ddownload)

# Branching model

This proposal is based on a couple fundamental principles:

-   master branch
-   branches
-   merge
-   push/pull principle

## Master branch

The master branch is the **single source of truth** for all data. This branch will always exist and serve as the **main source of data** for all requests to the asset database.

The data in the asset database is stored as a set of **fields**, linked to a **project**. All other intermediary levels (component group, package, etc.) were added for management purposes.

This means in case of the asset database, the master branch is the **fields table**. Whenever a change is published, this table will be updated and used as the single source of truth for the data in the asset database.

## Branches

A **parallel version** of the master branch can be created, this version is called a **branch**. Changes to the data can be recorded to this branch, **without impacting** any other branches.

Multiple branches can exist **at the same time**.

In case of the asset database, whenever a change to field data is made, a **revision** is created. This revision is **linked to a user,** can have a **human readable name** and will **store all changes** made to the data. To prevent unnecessary duplication of data only the changed values, along with their previous values, are stored.

## Merge

A branch can be **merged** back to the master branch. This means **all changes** recorded on the branch are **applied to the data** in the master branch.

In case of the asset database, this means a revision is published. All changes recorded in the revision are applied to the fields table and the revision is marked as published.

## Push/pull principle

When a change is made on a branch, it is **pushed** to the branch. When a change is pushed to the master branch, it can be **pulled** from the master branch into the current branch.

In this simplified proposal, the pull from the master branch is not optional. All changes pushed to the master branch, will be automatically pushed to all existing branches as well.

In case of the asset database, this means a revision was published and the data in the fields table was updated. Any recorded values in the current revision will be updated according to the conflict resolution policy as described below.

# Conflict resolution

When multiple branches exist at the same time and are affecting the same data, conflicts can arise. Whereas in a normal GitFlow model some form of conflict resolution is required (often by manual intervention), in this simplified proposal the conflict resolution is handled by the asset database automatically.

In case of a conflict, there are 4 possibilities:

1.  the change in master is more recent than the change in the branch

    _=> apply the change from master_

2.  the change in the branch is more recent than the change in master

    _=> keep the change in the branch_

3.  the change in master is not yet relevant in the branch

    _=> apply the change from master_

4.  the change in the branch is no longer relevant in master

    _=> ignore the change in the branch_

Changes within a branch will be handled sequentially. This means that multiple users working on the same branch can overwrite and interfere with eachothers work. Considering the existing workflow and interaction between the different disciplines, we don't foresee any issues with this approach.

## 1. The change in master is more recent than the change in the branch

In this case, the fields table was updated and the value recorded in the change is outdated.

This change will be removed from the change request.

## 2. The change in the branch is more recent than the change in master

In this case, the change was recorded after an update in the fields table. The previous value in the change will be updated to the latest value from master and the change will be kept.

## 3. The change in master is not yet relevant in the branch

When a change has been made in master that is not yet present in the branch but is relevant to the change request, it will be added to the change request.

## 4. The change in the branch is no longer relevant in master

When a change has been recorded but the field no longer exists in master, the recorded value is no longer relevant to the project. This change will be removed from the change request.

# Change request

When a branch is ready to be merged back to the master branch, a **change request** needs to be made. Approval for the change request is always required (the exact amount and level can vary).

## Who approves? Who merges?

Merging the branch to the master branch is the **responsibility of the requester**, the approvers will never merge a branch themselves. However, it is possible for the requester and approver to be **the same person**.

## Cascading changes

If the change to be merged causes new changes, additional approval might be required. Depending on the approval configuration, this might mean additional approvers are added and notified automatically.

The requester will always have the option to change approvers or merge the request without waiting for all approvers to approve. All actions will be logged in the system for future reference.

# Reverting changes

Changes can be reverted **on** **change request level**. This means all changes recorded in the change request will be reset to their previous value. This will be seen as a push to master and will automatically trigger a push to all existing branches. The change request will be flagged as _reverted_.

This is typically an action preserved for administrator profiles.

          