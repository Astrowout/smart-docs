
title: Bugbashing 25/09/2020
created at: Fri Sep 25 2020 10:00:09 GMT+0000 (Coordinated Universal Time)
updated at: Sun Dec 13 2020 11:56:45 GMT+0000 (Coordinated Universal Time)
---

# Bugbashing 25/09/2020

**Type**: call

**Created by:** Tom Opdebeeck

**Project:** [SPG Drycooling](/Projects/Projects/SPG%20Drycooling.md)

**Participants:**\_ \_Jan Festjens, Sanjeev Narayanan, Peter Manninger, Akshay Jha, Tom Opdebeeck

**Date & time: **2020-09-25

# **🎯\*\*** Agenda\*\*

-   overview of new features and bugfixes deployed to QA
    -   datasheet export
    -   project admin
    -   bugfixes:
        -   search
        -   merge request approvals

# **🗒 Notes**

-   import
    -   should show spinner, takes a long time with many fields
-   export
    -   do we need a full export?
        -   yes
        -   we also need to have a workflow for a sales phase project
            -   → bidding phase
            -   → can be filtered out if need be
    -   show spinner while building datasheet
    -   datasheets should only be exported from master
        -   disable templates on branches
-   datasheets
    -   few styling tweaks:
        -   page breaks
        -   decimal rounding
        -   cell alignment
    -   revisions
        -   can be checked automatically by consilio
        -   can be automatically updated in the exported sheet, but:
            -   when should a new version created?
            -   we don't keep track of exports
                -   → should add a log in the DB
        -   is this part of the transmittal?
            -   would make sense to track this when a transmittal is made
            -   should discuss further with SPG
        -   temporary solution
            -   hard to pinpoint revision
                -   sheets sent to client should only be exports from master
                -   changes for client should be on branch
            -   should highlight the changed fields
                -   choose a starting point (merged MRs)
                -   highlight fields in exported sheet
                -   → Akshay so planning is not impacted
    -   formulas in fan motor sheet
        -   probably just for verification with engineers
        -   check with Isabel if they are still needed → Akshay
-   project overview
    -   filters should be multiselect
        -   → check prio with SPG
-   project admin
    -   unit switching is not working properly
    -   should have the possibility to move a field
    -   cannot add new members
-   merge requests
    -   header is shown as well as modal header
        -   scroll bug
    -   translation in header is missing
    -   approvals that have been approved or declined should still show up (historic info)
    -   discard MR button is still not there
-   project overview
    -   ACC format is not useful
        -   fields from general package are stored and updated separately
        -   → to check with SPG what should be shown in the general info
-   project version
    -   should be added somewhere in the interface
        -   e.g. in user flyout, footer, popup on consilio logo on homepage, ...
        -   → check with Maïté

# **✅\*\*** Action items\*\*

**LF:**

-   [ ] import
    -   [ ] show loading state on import
-   [ ] export
    -   [ ] template export should not be available on branches
    -   [ ] should have templates linked to packages as well
-   [ ] datasheets
    -   [ ] styling tweaks: cell alignment, formatting & page breaks
    -   [ ] missing images → research further with SheetJS
    -   [ ] formulas in fan motor sheet → Akshay checks with Isabel
-   [ ] project admin
    -   [ ] switching units in field edit is not working properly
    -   [ ] cannot add new members
-   [ ] merge requests
    -   [ ] header bug
    -   [ ] translations missing
    -   [ ] approvals historic information
    -   [ ] discard button is missing
-   [ ] project version should be added in the UI somewhere → check with Maïté

**SPG:**

-   [ ] project overview
    -   [ ] define list of useful fields to show

**To Discuss (with regards to planning):**

-   [ ] export
    -   [ ] export of full project data
-   [ ] datasheets
    -   [ ] revisions: when to implement temporary solution?
-   [ ] project overview
    -   [ ] presales workflow (filter on bidding stage)
    -   [ ] multiselect filters in project list
-   [ ] project admin
    -   [ ] should be possible to move a field to a different component

          