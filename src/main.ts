/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


var startMsg = "Willkommen bei der Begegnungsplattform Inklusion@DB!\n\nErkunde unseren durchlaufbaren Adventskalender mit deinem Avatar\n(du bewegst dich mit den PFEILTASTEN)\n Jeden Tag öffnet sich eine neue Tür,\nhinter der sich spannende Impulse zum Thema Inklusion verbergen\n\n Ein Überblicks-Plan der Umgebung wird bei jedem Schild und Wegweiser eingeblendet";
var popUpStart = "popUpStart";
let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    currentPopup =  WA.ui.openPopup(popUpStart, startMsg,[
        {
            label: "OK",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        }]
    );

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    WA.room.area.onEnter("ChatZone").subscribe(() => {
        WA.chat.open();
    });

    WA.room.area.onLeave("ChatZone").subscribe(() => {
        WA.chat.close();
    });

    WA.room.area.onEnter("ChatZoneSub").subscribe(() => {
        WA.chat.open();
    });

    WA.room.area.onLeave("ChatZoneSub").subscribe(() => {
        WA.chat.close();
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};