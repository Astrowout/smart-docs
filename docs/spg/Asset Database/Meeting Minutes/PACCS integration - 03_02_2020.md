
title: PACCS integration - 03/02/2020
created at: Tue Mar 03 2020 09:56:37 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 02:43:11 GMT+0000 (Coordinated Universal Time)
---

# PACCS integration - 03/02/2020

**Type**: call

**Created by:** @mrtom

**Project:** SPG Asset Database

**Participants:**\_ \_Jan Festjens, Peter Manninger, Benoît Thiry, Tom Opdebeeck

**Date & time: **03/02/2020 10:00 - 11:00

# **🎯\*\*** Agenda\*\*

-   discuss PACCS integration with asset database

# **🗒 Notes**

-   PACCS needs data input from the asset database
-   we will need to allow dynamically added fields based on input
    -   e.g. number of rows => add additional fields for each row
-   PACCS uses a text input file to import data
    -   we can repurpose this to enable communication with the database
-   we will have to allow component export with additional fields from the project
    -   start from component
    -   add additional fields or other components
-   we can create a custom view that captures all fields required by PACCS
-   we should allow component export to the intermediary format
    -   `[code]=[description]=[value]=[unit]=[component]`

# **📌\*\*** TL;DR Outcomes\*\*

-   component export needs to be extended (should check with functional & design)
-   schematic made by Benoît needs some analyzing
-   PACCS fields need to be added to the Asset Database
-   new custom view is needed to aggregate PACCS input data

# **✅\*\*** Action items\*\*

-   [ ] @mrtom summarizes next steps for Jan
-   [ ] Benoît provides schematic

          