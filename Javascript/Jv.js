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

        chargeImg: function () {

            this.img1 = "img/prova1.jpg"

            this.messaggio = "Prima del corso Boolean"
        },

        chargeImg2: function () {

            this.img1 = "https://images-cdn.9gag.com/photo/aegryWm_700b.jpg"

            this.messaggio = "Dopo il corso Boolean"
        }

    }

}).mount ('#app');