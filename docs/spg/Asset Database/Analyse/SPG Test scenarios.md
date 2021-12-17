
title: SPG Test scenarios
created at: Mon Jun 15 2020 13:57:29 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 18:37:51 GMT+0000 (Coordinated Universal Time)
---

# SPG Test scenarios

# Login

-   Upon entering the website for the first time, I am redirected to the auth0 login screen
-   I can login with my username and password
    -   If I enter a wrong username / password combination I see an error message
-   After logging in, I am redirected to the Asset Database homepage

# Profile

-   I can see my user avatar in the header.
    -   If there is no avatar configured for my profile I see my initials
-   Upon clicking my avatar I can see a flyout with my username and actions.
-   I can click the "logout" action and am redirected back to the login page.

# Notifications

-   I can see a notification bell next to my avatar in the header with a label showing the unread notifications count
-   If a notification is received while I am visiting the application, I see the count increasing
-   Upon clicking the notification bell I can see a flyout with a list of my unread notifications
-   I can mark a notification as read by clicking the `mark as read` button
-   I can navigate to the relevant data by clicking the link in the notification card
-   If there are no notifications, I see a clear explanation

# Project overview

-   I see a list of projects, sorted by `most recent update` by default
-   I can sort the list by:
    -   most recent update
    -   project name
-   I can filter the list by
    -   project phase
    -   ACC type
    -   ACC size
    -   location
-   If I choose a filter, the list is refreshed and shows me the filtered results
-   I can clear all filters by pressing the `clear filters` button
-   If there are no results, I see a clear explanation
-   I can create a new project by clicking the `new project` button

# New project wizard

-   I can enter a project name
    -   If I have not entered a project name and click the `next step` button, a warning is shown
-   I can choose a project template
    -   If I have not chosen a project template and click the `next step` button, a warning is shown
-   I can verify the template packages
    -   Upon clicking on a package link I can view the package contents in a collapsible interface
    -   fields are shown grouped by component and component group
-   I can navigate back to the template index by clicking the `back` link
-   I can configure the team
    -   Team members are shown grouped by package
    -   Management roles are shown separately in a `management` package
    -   I can choose a user for each role shown in the team configuration
        -   I can choose a user from the available users of the application using a dropdown menu
-   I can create the project
    -   If there is an issue creating the project, I see a clear explanation in an error message and can try again
    -   Once my project is created, I am redirected to the project overview page
-   At any time, I can close the project wizard
    -   A confirmation popup is shown, allowing me to either keep configuring the new project or canceling my actions
-   At any time, I can go the the previous step to make some changes by clicking the `previous step` button

# Project overview page

-   I can see my current branch
    -   Upon clicking the current branch name, I see a flyout that allows me to
        -   search for branches in the list shown below
        -   choose a branch from a list
        -   create a new branch by clicking the `new branch` button
    -   I can create a new branch by clicking the `new branch` button
        -   a dialog opens which allows me to enter a branch name and description
            -   if I click the `create branch` button before entering a name, a warning is shown
            -   if I click the `create branch` button before entering a description, a warning is shown
            -   I can cancel my actions by clicking the `cancel` button
        -   Once my branch is created, I remain on the project overview page with the new branch selected as current branch
    -   If I have sufficient permissions, I can create a merge request by clicking the `request merge to master` button
        -   I am redirected to the `request merge` page
-   I can see a quick overview of the general project information
    -   a thumbnail of the project 3d model
        -   if no thumbnail is available, the image is hidden
    -   the date the project was created
    -   the phase the project is currently in (shown as a label)
    -   the BEM number for the project
    -   the name of the client
    -   the location of the project
    -   the ACC size
    -   the ACC type
-   I can see an overview of the merge requests
    -   merge requests are shown in a tabbed interface
        -   using the state (accompanied by a counter) as tab title
        -   merge requests are shown as cards
            -   name
            -   description
            -   requester
            -   assigned approvers
        -   no more than 4 merge requests are shown at any time
    -   I can click the `see all requests` link to navigate to the `merge requests page`
    -   I can click a merge request card to navigate to the merge `request detail page`
-   I can see an overview of all available packages
    -   shown as a card grid, detailing:
        -   package name
        -   last updated date
    -   I can click a package card to navigate to the `package detail page`
-   I can import data by clicking the `import data` button
    -   a dialog is opened where I can choose a file to import
        -   I can choose a file by clicking the `upload file` link again or dropping a file in the upload dropzone
        -   I can consult the guidelines by clicking the `Asset Database Guidelines` link
        -   I can cancel my actions at any time by clicking the `cancel` button or clicking the overlay
        -   I cannot click the upload button until a file has been selected
        -   Upon choosing a file, I can see the file name in the dialog
            -   I can choose a new file by clicking the `upload file` link again or dropping a new file in the upload dropzone
    -   Upon uploading my file, I get feedback regarding the imported data
        -   If all went wel, I get a confirmation message
        -   If there was an issue, I get a clear explanation
    -   Once the import is done, I can close the dialog by clicking the `view changes` button
        -   a branch and merge request are automatically created, using the current date and time for the branch name
        -   I am redirected to the `merge request detail` page
-   I can navigate to the `merging history` page by clicking the `merging history` button in the sidebar
-   I can see the management of the project by expanding the `project team` collapsible in the sidebar
    -   If no team is configured, I get a clear explanation
    -   I can see all members that currently have a management role
-   I can navigate to the `project team` page by clicking the `See all team members` link
    -   If no team is configured the link will read `Configure the team`

# Request merge page

-   I can choose a branch to merge to master
    -   a dropdown menu allows me to search for active branches
    -   I can choose a branch from the list
    -   upon choosing a branch, the relevant changes are shown on the right side
-   I can add a description to my merge request, explaining what I changed
-   I can assign approvers to my merge request
    -   I can choose approvers from a dropdown menu
    -   I can search in the list of approvers
    -   Upon choosing an approver, they are shown as an inline list of cards
    -   Approvers that have already been assigned, are no longer shown in the dropdown list
    -   I can remove an approver by clicking the `x` button in their card
-   I can see the changes relevant to my merge request on the right side
    -   fields are grouped by component in a collapsible interface
    -   I can see the amount of changes for each component in the collapsible header
    -   fields are shown in a table layout
        -   field name
        -   previous value
        -   new value
        -   unit
    -   I cannot edit the values shown
-   I can cancel my actions at any time by clicking the `cancel` or `x` button
    -   the dialog is closed and I am back at the `project overview` page
-   I can submit my request by clicking the `send request` button
    -   the dialog is closed and I am back at the `project overview` page
    -   my merge request is shown in the `pending` tab in the merge request overview

# Merge request detail page

-   I can see the branch that is being merged into master
    -   I cannot change the branch
-   I can see the requester info
-   I can see the merge request description
-   I can see the assigned approvers
    -   shown as user cards
    -   I cannot remove the approvers
-   I can see the changes relevant to the merge request on the right side
    -   fields are grouped by component in a collapsible interface
    -   I can see the amount of changes for each component in the collapsible header
    -   fields are shown in a table layout
        -   field name
        -   previous value
        -   new value
        -   unit
    -   I cannot edit the values shown
-   I can navigate back to the previous page by clicking the `x` button
    -   the dialog is closed and I am redirected to the page I started my action from
-   If I have sufficient permissions I can approve the request
    -   if there is an issue, I get a clear explanation in an error message
    -   once the request is approved, the dialog is closed and I am redirected to the page I started my action from
-   If I have sufficient permissions I can disapprove the request
    -   if there is an issue, I get a clear explanation in an error message
    -   once the request is approved, the dialog is closed and I am redirected to the page I started my action from
-   If I have sufficient permissions I can decline the request
    -   if there is an issue, I get a clear explanation in an error message
    -   once the request is approved, the dialog is closed and I am redirected to the page I started my action from

# Package detail page

-   If I navigate to the package detail page without a component selected, I am redirected to the first component in the first component group in the package
-   I can navigate back to the project overview by clicking the `back` link
-   I can navigate in the project using the breadcrumb bar
    -   I can switch to a different branch using a flyout menu
    -   I can switch to a different package using a flyout menu
    -   I can switch to a different component group using a flyout menu
    -   I can switch to a different component using a flyout menu
-   If there is no data for the selected component, I see a clear explanation
-   If there is an issue with retrieving or showing the data, I see a clear explanation in an error message
-   I can see the component data
    -   shown as a table, with for each field:
        -   the field status (shown as an icon)
        -   the field name
        -   the field value
        -   the field unit
            -   if not applicable unit is available, this column is empty
    -   If I have sufficient permissions, I can edit the data by clicking the cells
    -   field values are shown rounded to 4 digits after the decimal point
        -   I can see the complete value by clicking the cell
    -   editable fields are shown with a yellow background, non editable fields are shown with a white background
-   If I try leaving the page without saving my changes, a dialog is opened
    -   I can save my changes
    -   I can discard my changes
-   different views on the data are shown in the tab bar at the bottom
    -   I can switch to a different view by clicking the tab in the tab bar
    -   I can still change data and save changes in the different views
-   I can navigate to the `export component page` by clicking the `export component` link
-   I can save my changes by clicking the `save changes` button
    -   I get a confirmation message

# Export component page

-   I see the name of the component I started the export from in the title
-   I see all fields for the component in a table, with for each field
    -   a checkbox to include it in the export
        -   the field status (shown as an icon)
        -   the field name
        -   the field value
        -   the field unit
            -   if not applicable unit is available, this column is empty
    -   I cannot change any values, except for the field unit
-   I can select all fields by clicking the checkbox in the table header
-   I can add additional fields by using the `search for fields` dropdown
    -   I can search for a field by name or description
    -   I can add the field to the export list
-   I can navigate to the preview by clicking the `next step` button
-   I can see the preview
    -   general project info is shown at the top
        -   client name
        -   project location
        -   ACC size
        -   ACC type
        -   BEM number
        -   export version (current data)
        -   component name
    -   I can see all fields I selected shown in the same table configuration, minus the checkboxes
        -   I can no longer change the unit
    -   I can navigate back to the previous step by clicking `edit selection`
    -   I can export the list as an excel file
        -   a download is started in the browser
        -   if there is an issue, I get a clear explanation in an error message and I can try again
    -   I can export the list as a data file
        -   a download is started in the browser
        -   if there is an issue, I get a clear explanation in an error message and I can try again
-   I can cancel my actions at any time by clicking the `x` button
    -   a dialog is shown to ask for confirmation
        -   I can close the confirmation dialog and continue by clicking on `stay on this page`
        -   I can cancel the export\`
    -   upon cancelling, the dialog is closed and I am returned to the `package detail page`

# Merging history page

-   I see an overview of all active branches, in chronological order
    -   I can see the branch name, status and last updated date
    -   branches are shown as a (minimal) timeline
    -   I can see all merged branches as well, by clicking the `show all merged branches` link
        -   merged branches are shown as a separate card list (not in the timeline)
-   I can see all relevant changes for a branch by clicking a branch in the timeline or merged branches list
    -   fields are grouped by component in a collapsible interface
    -   I can see the amount of changes for each component in the collapsible header
    -   fields are shown in a table layout
        -   field name
        -   previous value
        -   new value
        -   unit
    -   I cannot edit the values shown
-   I can navigate back to the `project overview` page by clicking the `x` button

# Project team page

-   I can see all team members, grouped by package
    -   if there are no members selected for the package, I see a clear explanation
    -   management members are shown separately in the `management` package
    -   members are shown as user cards
        -   avatar
        -   full name
        -   role in the project
-   I can edit the team by clicking the `edit team` button
    -   I can choose team members for each role as defined in the team structure
        -   I can choose a user from all available users with a flyout menu
    -   I can save my changes by hitting the `save changes` button
        -   I get a confirmation message upon completion
    -   I can cancel my actions at any time by hitting the `cancel` or `x` button
-   I can navigate back to the `project overview` page by clicking the `x` button

# Search

-   I can start a search action by clicking the search icon button next to the notification bell
-   an input field and a fullscreen semitransparent background are shown on top of the current page
    -   the search is explained using a label in the input field and a tooltip message below the input field
-   I can search for a field, component, component group, package or project
    -   I enter some characters and hit enter
    -   results are displayed as a tabbed interface (by type)
        -   type and amount of hits are shown in the tab title
        -   by default, the first tab with results is selected
        -   I can navigate the results interface using the `tab` key
            -   active tab headers are highlighted with a slightly red background
            -   active items are highlighted with a red border on the left side
        -   results are shown as a list of the item name and path to the data
    -   I can navigate to a search result by clicking an item in the list
    -   if there are no results for a type, I get a clear explanation
-   I can clear my search query by clicking the `x` button
-   I can filter the results by project by typing `in`
    -   an `in` tag is automatically added in the input field
    -   I can remove the tag by hitting `backspace`
    -   I can search for a project
        -   I enter some characters and hit enter
        -   results are shown as a list of project names
    -   I can select a project to filter on by clicking an item from the list
        -   an `in: <project>` tag is automatically added
        -   I can continue searching as before, but all results are now filtered on the project I selected
        -   I can remove the tag by hitting backspace

          