/*

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

*/



//SVOLGIMENTO
const { createApp } = Vue;

createApp({

    data() {
        return {
            messaggio : "ciao a tutti"
        }
    }

}).mount ('#app');