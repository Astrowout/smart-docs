
title: Retro SPG 2020
created at: Tue Dec 01 2020 09:12:01 GMT+0000 (Coordinated Universal Time)
updated at: Mon Dec 14 2020 02:31:17 GMT+0000 (Coordinated Universal Time)
---

# [RETRO] SPG 2020

* * *

!! <https://trello.com/b/SvTvrDlK/spg-2020-retrospective-internal>

[\[https://trello.com/b/SvTvrDlK/spg-2020-retrospective-internal\]](https://trello.com/b/SvTvrDlK/spg-2020-retrospective-internal)

* * *

# 🚦** Status**

In mei 2020 deden we een retro met het hele project team (inclusief Leap Forward) en daaruit kwamen heel concrete actiepunten.

Nu PACKAGE 1 opgeleverd is en we 2020 stil aan afsluiten kijken we even terug op hoe we dit project intern ervaren hebben en welke lessen we er uit kunnen leren voor de toekomst.

De actiepunten van de vorige retrospective waren. We nemen deze even snel door om te bekijken of we deze als "beter" ervaren hebben tegenover dan.

-   [x] Shift naar product-mindset
-   [x] PR's functioneel nakijken
-   [x] PR's sneller oppikken en mergen
-   [x] Niet te snel een PR openzetten
-   [x] Deadlines hard maken
-   [x] Bugs loggen
-   [x] In features werken (op voorhand met het team bespreken)
-   [x] Focus op kwaliteit en uitbreidbaarheid
-   [x] Vragen blijven stellen en uitleg blijven geven
-   [x] Teamsfeer bewaken
-   [x] Individuele planing bewaken

## 🙅‍♂️ Stop doing

### Setup en codebase

De store was mogelijks té complex op een aantal punten, wat ons de vraag kan doen stellen of we in een toekomstige set-up dezelfde beslissingen zouden maken of we meer gebruik zouden maken van verschillende methodes om data af te handelen ipv. alles via de store te laten lopen zoals nu het geval was. (Misschien NgRx Component states?)

Er waren dingen die teveel zijn blijven aanslepen en daardoor niet of onvoldoende gedaan zijn geraakt. Op die manier bekomen we een API waar hier en daar 2 verschillende manieren van werken gebruikt zijn voor endpoints etc.

Code ownership. Als je een feature vastneemt, die ook afwerken en zorgen dat die zonder bugs op de acceptatie en productieomgeving kan geraken.

### Samenwerking en Quality Control

De testen waren te weinig en vaak kwalitatief niet goed genoeg. Dan gaat het zowel om testen die wij schreven, die LMR voorzien heeft en onze controle op collega's hun testen.

Dit was ook vaak het eerste kantje dat we er af probeerden te snijden als de deadline moesten halen, wat een heel short-term oplossing is die niet altijd terug recht getrokken kan worden.

PR's stonden te lang open en waren vaak nog niet klaar als ze open gingen waardoor er aan PR's gewerkt werd en het overzicht verloren ging. Ook de prioriteit van PR's was vaak een bijzaak eens we echt gingen mergen.

We schoten vaak pas in gang als de deadline in zicht kwam, na het aanmodderen in de tijd er voor.

### Jira

De bugs loggen in Jira stelde ons in staat om de bugs in kaart te brengen maar een vast moment ingepland krijgen in de sprint om deze echt op te nemen was iets wat beter zou kunnen in de toekomst.

De voorbije maanden is Jira terug verwaarloost, de huidige actieve sprint is nog van oktober en bijgevolg is het ook moeilijk om daar het nodige overzicht te krijgen.

Op een bepaald moment is de Jira heel complex geworden. Sommige dingen waren niet heel erg zichtbaar, zeker als je on/off op het project stond. Daarnaast moest je ook soms gaan zoeken naar een net aangemaakt ticket omdat de board-filters het niet toonden by-default.

## 👍 Keep doing

### Code ownership op features

Dit bouwt verder "code ownership" uit stop doing. We pakken features op en werken die af. Iets waar we op moeten blijven inzetten. (Met af bedoelen we dan ook wel echt klaar en getest).

### Communicatie en team dynamiek

We willen blijven inzetten op kort-op-de-bal communicatie, met het thuiswerken was dat vaak gebaseerd op Slack en Google Meet. Daar hebben we het gevoel dat we echt met elkaar blijven samenwerken en zoeken naar oplossingen via die wegen.

Het team meer betrekken bij analyse en concept was een goede stap vooruit. Het hielp dat bijvoorbeeld ook Jo goed op de hoogte was naast Tom.

### Feature-based werken

We zijn na de eerste retro meer beginnen werken aan features in plaats van aan alles tegelijk. Dit heeft er voor gezorgd dat we de features meer afgewerkt konden opleveren wat een heel stuk beter was.

Dat feature-based werken maakte het ook makkelijker om Senn en Maarten in te schakelen als het nodig was. Zij konden relatief eenvoudig inpluggen op het project en aan hun stukje werken zonder de hele context van in het begin te moeten hebben. Wat handig is in een project van deze schaal.

### Bugfixing

Het was handig dat we tussendoor eens een bug konden oppakken en fixen als we bijvoorbeeld ergens vast zaten. De Jira setup maakte dit handig en zichtbaar.

### Samenwerking met Leap Forward

Het voortouw nemen bij hun devs en de deadlines zichtbaar maken, aan de kar blijven trekken was vaak nodig en moeten we ook blijven doen.

De samenwerking met Maïté was overwegend positief. We zouden haar echter liever echt dedicated op het project hebben gehad in latere fases in plaats van hier en daar eens wat tijd. Dit zou ook naar het einde een positieve impact gehad hebben op design beslissingen.

## ❓Start doing

### Deadlines

We vinden dat we als team meer en beter hadden kunnen inzetten op deadlines, al is het niet helemaal duidelijk hoe. Vanuit Tom zijn rol als PM/Lead op het project zijn de deadlines heel vaak en duidelijk gecommuniceerd, alsook wat er klaar moest zijn en de gevolgen naar de klant toe. Dit bleef te weinig hangen for some reason.

Aan de andere kant was er als team misschien te weinig input en actie naar elkaar toe om die deadline zichtbaar te houden. PR's bleven bijvoorbeeld openstaan tot het einde van de sprint en als je dan alles er snel doorknalt krijg je een oplevering met veel zwarte gaten die ongetest zijn. Als team hadden we (en moeten we) meer en actiever inzetten om alles te laten draaien de hele sprint door en niet enkel op het einde van de sprint.

_Open vraag? Heeft (on)productiviteit bij het thuiswerken een grote invloed in deze situatie?_

### Teamsamenstelling

We misten echt een dedicaten PO/PM/... op het project. Iemand die het project high-level door en door kende en ook het nodige kader kon voorzien. We keken daarvoor eigenlijk naar LF kant maar merken dat Tom dit heel vaak op zich heeft genomen met de nodige gevolgen op het dev-team.

Daarnaast hadden we ook een hardere lijn moeten trekken tussen LMR devs en onze devs en het werk dat ze deden. Nu was daar teveel overlap en dat heeft gezorgd voor overhead en heel veel dingen die door elkaar gedaan werden.

### PR's

We moeten iets strenger durven zijn voor PR's. We zijn intern heel streng in sommige teams (niet altijd) maar voor LMR devs trekken we die lijn niet helemaal door. In principe is de regel: PR niet in orde = declined. PR in orde betekent afgewerkt, voorzien van testen en volledig doorgetest.

### Bugs & Features

We moeten blijven bewaken waar de lijn ligt tussen wat een bug of een feature is. Het zou ook helpen mochten bug-tickets voorzien worden van een duidelijke beschrijving aangevuld met een screenshot of screencapture van het probleem. Nu is het nog te vaak zoeken en dus ook tijd verliezen om bugs te gaan nabootsen.

### Project meetings

Er was in het algemeen vaak wat te weinig kader en timeboxing. Vermoedelijk komt dat door het missende profiel (zie teamsamenstelling) die dit kader eigenlijk had moeten voorbereiden en bewaken.

We misten ook demo's op het einde van een sprint zodat we even de progressie zichtbaar konden maken voor het hele team. (en potentieel misschien een bug of 2 zien en oplossen?)

### Time management

Time management moet strakker, op die manier krijgen we ook ruimte voor de nodige refactoring en opkuis.

## 🎯 Action points

-   [ ] Ervaren profielen voldoende \_effectief \_inplannen voor development.
-   [ ] Het juiste profiel voorzien voor de juiste taken (PM/PO/Analyse/...).
-   [ ] Rollen en verantwoordelijkheden binnen het team afbakenen.
-   [ ] Per feature blijven werken.
-   [ ] Communicatie kort-op-de-bal en open houden (ook tijdens het thuiswerken).
-   [ ] Project meetings timeboxen/kaderen en dat bewaken.
-   [ ] Jira actief gebruiken maar ook op manier die duidelijk blijft voor iedereen.
-   [ ] Jira bugs duidelijk zichtbaar maken en zorgen voor de nodige middelen om het eenvoudig na te bootsen.
-   [ ] Deadlines niet enkel benadrukken vanuit een PM perspectief maar ook vanuit het team blijven benadrukken in de dagelijkse werking.
-   [ ] Ownership (blijven) nemen over features waar je aan werkt. Af is klaar, voorzien van testen en doorgetest. Dan pas een PR en mergen.
-   [ ] PR's echt nakijken, eventueel uitchecken en testen en mergen in de juiste volgorde.
-   [ ] PR niet in orde = declined.
-   [ ] Codebase durven evalueren en vereenvoudigen indien mogelijk. Complex =/= beter.

