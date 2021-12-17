
title: Handling project changes
created at: Tue Jun 30 2020 11:39:14 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 21:07:58 GMT+0000 (Coordinated Universal Time)
---

# Handling project changes

The project admin has the rights to add, update and delete packages, component groups, components and fields. When these changes are saved, we reconfigure the project structure and values of the master branch, but need to handle existing branches and revisions as well. The impact made needs to be clear to the user, therefore, we want to provide a good 'handling project changes'-strategy.

## Visualising impact

There has to be made a distinction between two scenario's: changed fields and deleted fields.

**Changed fields**

Whenever the project admin changes a formula, unit, ... of some fields, we want to see if and how existing branches are impacted. To do so, we will need to fetch the latest branch revision, get the fields that the project admin changed, and check whether these fieldIds exist in the revision. If none of the impacted fields exist in the revision, the change can go on without further notice. If some or all of the changed fields exist in the revision, we can list the branch and fields, to visualise the impact for the project admin.

_Flow:_

1.  Project admin makes changes in a component detail, eg changing a field formula
2.  Clicking save opens, for example, a popup with feedback about the affected branches and their fields
3.  Project admin can decide to save or decline the changes

When we detect a branch that is affected by a change of the project admin, we give the branch a conflict status, and adjust the revision to set the conflicted fields to a conflict status as well. To resolve this, user action on the branch is required. We can highlight conflicted fields, and ask whether the user want to keep the updated value or the new value in master. Once all the conflicts are resolved, the branch can be merged again.

**Deleted fields**

The project admin can delete whole packages, component groups and components, and thus also fields. If a branch had changes in one of the deleted parts, we will list them as well when the project admin tries to save. To handle this properly in a revision, we will need to save a list of deleted fieldIds (that are in the revision) to the revision model. That way, we can make sure they get ignored, without messing with the revision value itself. This will all be handled in the BE, and does not require any changes in the UI (for now).

_BE flow:_

1.  Project admin deletes a field which affects a branch
2.  Deleted fieldId will be saved to the revision model, in a `deletedFields` property
3.  When patching revision values to the component fields, we filter out fieldIds that are in in the deletedFields array first

          