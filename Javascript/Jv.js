/*

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

*/



//SVOLGIMENTO
const { createApp } = Vue;

createApp({

    data() {
        return {
            messaggio : "ciao a tutti",

            img1: "img/prova.jpg",

            sfondo: "imgS",

            Background: "ConainerimgS",

            Button1: "button"
        }
    },
    methods: {
        greetings: function () {
            alert ("ok ok");
        }
    }

}).mount ('#app');