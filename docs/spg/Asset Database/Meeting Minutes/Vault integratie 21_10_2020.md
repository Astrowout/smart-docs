
title: Vault integratie 21/10/2020
created at: Wed Oct 21 2020 13:09:06 GMT+0000 (Coordinated Universal Time)
updated at: Sun Dec 13 2020 17:15:54 GMT+0000 (Coordinated Universal Time)
---

# Vault integratie 21/10/2020

**Type**: call

**Created by:** @Tom Opdebeeck

**Project: **[**Asset Database**](/Projects/Projects/SPG%20Drycooling/Asset%20Database.md)\*\* \*\*

**Participants: **@Tom Opdebeeck, @Jo Smets, Marie Denys, Lieven Van Laere, Andries Muylaert

**Date & time: **2020-10-21

# **🎯\*\*** Agenda\*\*

-   overlopen designs
-   raakpunten met Vault bespreken
    -   ophalen alle files voor project
    -   zoeken door files
        -   filters
    -   acties op files
        -   openen in vault
        -   downloaden
        -   transmittals
    -   informatie bij file
        -   created
        -   status
        -   version?
        -   transmittal info
-   transmittals
    -   publieke link voor klant

# **🗒 Notes**

-   overlopen designs
-   raakpunten met Vault bespreken
    -   moet een project manager files kunnen zien die niet gereleased zijn?
        -   assumptie: enkel released files zichtbaar, enkel PDF's die naar de klant mogen worden gestuurd
    -   hoe mappen we de files naar de componenten?
        -   file code = `<package><group><component><file>`
            -   bv. `5216` = package 5, group 520, component 521
    -   calls:
        -   fetch all files (filtered)
            -   package
            -   group
            -   component
            -   status
            -   file type
            -   client & supplier nodig?
        -   fetch 1 file
            -   include revisions
    -   statussen gebruiken uit Vault
        -   redline?
            -   comment op file
        -   hoe bim360 comments oppikken?
            -   wordt nu manueel gedaan
                -   engineer ziet comment in bim360
                -   past file aan en maakt nieuwe versie in vault
            -   geen link tussen versies in vault en bim360
                -   upload in bim360 = nieuwe versie in bim360
                -   loopt niet gelijk met versies uit vault
            -   kort door de bocht:
                -   filename gebruiken
                -   laatste versie in bim360
                -   mogelijk niet de juiste revision en dus geen relevante comments meer
            -   voorlopig geen comments tonen
                -   → overleggen met SPG wat hier de beste oplossing kan zijn
-   transmittals
    -   heel gelijkaardig aan huidige oplossing in vault, maar meer security in consilio
-   hoe gaan we de files "publiek" beschikbaar maken?
    -   sharepoint? publieke url? oplossing via vault?
    -   → verder bespreken met SPG

# **📌\*\*** TL;DR Outcomes\*\*

-   assumptie: project managers kunnen enkel released files zien die naar de klant mogen verstuurd worden
-   mapping van files naar components kan a.d.h.v. file code
-   3 calls voorzien in de API
    -   lijst van gefilterde files ophalen
    -   1 file ophalen met revisions
    -   specifieke versie van een file ophalen
-   bim360 comments kunnen we niet correct genoeg mappen, dus voorlopig parkeren en verder bespreken met SPG
-   transmittals zitten in consilio
-   oplossing nodig om files te sharen met klanten

# **✅\*\*** Action items\*\*

-   [ ] bespreken met SPG (op volgende steerco?):
    -   [ ] assumptie uitklaren
    -   [ ] bim360 comments
    -   [ ] share oplossing

          