
title: SPG Release Schedule
created at: Fri Mar 13 2020 13:33:51 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 20:42:37 GMT+0000 (Coordinated Universal Time)
---

# SPG Release Schedule

# Sprint schedule

## Start sprint

-   sprint starts on Wednesday (week 1)
-   create new release on Jira & start sprint
-   continuous deployment to DEV
-   hotfix deploy to ACC for blocking issues

## End sprint

-   final release to DEV on Monday morning (week 2)
-   QA on DEV on Monday afternoon (week 2)
-   go/no-go on Tuesday morning (week 2)
-   release to ACC on Tuesday morning (week 2)
-   QA on ACC on Tuesday afternoon (week 2)
-   sprint ends on Tuesday (week 2)

## MTP

-   QA on ACC (SPG) in week 3 & 4
-   go/no-go on Thursday (week 3)
-   release to PROD on Monday (week 4)

<!-- ![Slice.png](media_SPG%20Release%20Schedule/Slice.png) -->

# Release model

-   major bump for each project phase
-   minor bump for each sprint
-   patch bump for hotfixes

E.g.:

-   start phase 2 => `v2.0.0`
    -   start sprint 1 => `v2.1.0`
        -   hotfix => `v2.1.1`
    -   start sprint 2 => `v2.2.0`
    -   start sprint 3 => `v2.3.0`
        -   hotfix => `v2.3.1`
        -   hotfix => `v2.3.2`
    -   start sprint 4 => `v2.4.0`
-   start phase 3 => `v3.0.0`


-   steerco: epics bepalen
-   refinement: stories uitschrijven
-   sprintplanning: subtaken op stories toevoegen + inschatten

Story in Sprint

-   created: backlog
-   (to analyze: timeboxed)
-   to poker: na refinement
-   to do: ingeschat en ingepland
    -   release
    -   component

