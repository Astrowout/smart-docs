
title: Sales integratie 17/11/2020
created at: Tue Nov 17 2020 12:35:33 GMT+0000 (Coordinated Universal Time)
updated at: Sun Dec 13 2020 22:41:50 GMT+0000 (Coordinated Universal Time)
---

# Sales integratie 17/11/2020

**Type**: call

**Created by:** @Tom Opdebeeck

**Project:** [Asset Database](/Projects/Projects/SPG%20Drycooling/Asset%20Database.md)\*\* \*\*

**Participants: **Jan Festjens, Peter Manninger, Lieven Van Laere, Sanjeev Narayanan, @Tom Opdebeeck

**Date & time: **2020-11-17

# **🎯\*\*** Agenda\*\*

-   as is situation
-   overlap and requirements for Vault & Consilio

# **🗒 Notes**

-   as is
    -   data can be extracted from thermal datasheet and imported into Consilio
    -   data can be pulled in Inventor to quickly create a roughly accurate model
    -   today we only have 1 sales project in consilio that is linked to 1 project in Vault
        -   1 project = a loooot of files
        -   project gets overwritten for each sales track
        -   changes are stored in export files
-   to be
    -   do we need separate environments for sales vs "normal" projects?
        -   nope
        -   Vault can set a "sales" flag
            -   what about user access?
                -   not that easy to set up different user access within the same Vault
                -   will mostly be accessed by designers anyway, no distinction needed
        -   Consilio can use project status and user roles to filter out projects
    -   changes to Vault
        -   no big changes needed, can be implemented with existing and pending functionality
    -   changes to Consilio
        -   add sales role, filter out on project status
        -   extend filter on overview
            -   filter out sales status by default
            -   allow multiple statuses to be selected

# **✅\*\*** Action items\*\*

-   [ ] LF adds status filter on homepage
-   [ ] LF adds role in Auth0 that can only access projects in sales phase
-   [ ] Arkance runs test to see if new folder structure works

          