
title: Tekla integration - 03/02/2020
created at: Tue Mar 03 2020 10:30:54 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 02:43:11 GMT+0000 (Coordinated Universal Time)
---

# Tekla integration - 03/02/2020

**Type**: call

**Created by:** @mrtom

**Project:** SPG Asset Database

**Participants:**\_ \_Jan Festjens, Manninger Peter, Benoît Thiry, Max Zeni, Tom Opdebeeck

**Date & time: **03/02/2020 11:00 - 12:00

# **🎯\*\*** Agenda\*\*

-   integrate Tekla with the asset database

# **🗒 Notes**

-   current POC with Tekla + Excel
    -   custom Excel file format made by Max
    -   imported in Tekla => calculcates connections
-   integration with API
    -   by file export/import
        -   possible with current implementation + dev from Max
    -   by connecting to the API
        -   authentication and connection is possible
        -   need to know the project
        -   fetch fields and if needed update fields
        -   will need to add a lot of geometrical data in Asset Database that **should not be shown** in the interface
-   do we need to store Tekla data in the database?
    -   lot of geometrical data, not very useful for analytics
    -   might be enough to use Asset Database as starting point but keep geometrical data in Tekla model
    -   => discussion internally with Sanjeev

# **📌\*\*** TL;DR Outcomes\*\*

-   for now we will focus on accessing the database from Tekla
-   we need to figure out what data we want to store from the Tekla results and how

# **✅\*\*** Action items\*\*

-   [ ] @mrtom will send Max info and credentials for accessing the API
-   [ ] Benoît, Peter, Max and Sanjeev will discuss what to do with the data
-   [ ] @mrtom will analyse the Excel format used by Max

          