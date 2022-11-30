"use strict";
//ELOKUVAHAKEMISTO
let elokuvat = []; //elokuvat Array
//Lisätty muutama elokuva valmiiksi
elokuvat[0] = new Elokuva("Batman Begins", "Christopher Nolan", 2005, "rikos", 5, "batmanbegins");
elokuvat[1] = new Elokuva("Dark Knight", "Christopher Nolan", 2008, "rikos", 5, "darkknight");
elokuvat[2] = new Elokuva("Dark Knight returns", "Christopher Nolan", 2012, "rikos", 5, "darkknightreturns");
elokuvat[3] = new Elokuva("Inception", "Christopher Nolan", 2010, "scifi", 5, "inception");
elokuvat[4] = new Elokuva("Tenet", "Christopher Nolan", 2020, "scifi", 4, "tenet");
elokuvat[5] = new Elokuva("Blade Runner 2049", "Denis Villeneuve", 2017, "scifi", 4, "bladerunner2049");
//KONSTRUKTORI
    function Elokuva(nimi,ohjaaja,julkaisuvuosi,kategoria,tahdet,juliste){
        this.nimi = nimi;
        this.ohjaaja = ohjaaja;
        this.julkaisuvuosi = julkaisuvuosi;
        this.kategoria = kategoria;
        this.tahdet = tahdet;
        this.juliste = luoJuliste(juliste); //Metodi jolla määritellään julistekuvan tiedostopolku ja lisätään tiedostopääte nimeen.
    }
//LUO JA LISÄÄ
    function lisaaElokuva(){
        let nimi = document.getElementById("nimi").value;
        let ohjaaja = document.getElementById("ohjaaja").value;
        let julkaisuvuosi = document.getElementById("julkaisuvuosi").value;
        let kategoria = document.getElementById("kategoria").value;
        let tahdet = document.getElementById("tahdet").value;
        let juliste = document.getElementById("juliste").value;
        
        let elokuvaOlio;
        elokuvaOlio = new Elokuva(nimi,ohjaaja,julkaisuvuosi,kategoria,tahdet,juliste);
        elokuvat.push(elokuvaOlio);
        //Tyhjennetään lopuksi lisäys input kentät
        document.getElementById("nimi").value = "";
        document.getElementById("ohjaaja").value = "";
        document.getElementById("julkaisuvuosi").value = "";
        document.getElementById("kategoria").value = "";
        document.getElementById("tahdet").value = "";
        document.getElementById("juliste").value = "";
    }
//JULISTE
    function luoJuliste(juliste){ //Julistemetodin funktio
        var x = "kuvat/" + juliste + ".jpg";
                return x;
    }
//TULOSTA KAIKKI
    function haeKaikki(){
        //Tyhjennetään tulostus- ja kuva-alueet
        document.getElementById("tulostusAlue").innerHTML = "";
        document.getElementById("kuvaAlue").innerHTML = "";
        //Tulostetaan elokuvat Arrayn sisältö kokonaisuudessaan
        for(let i = 0;i < elokuvat.length;i++){
            document.getElementById("tulostusAlue").innerHTML += "<span style='font-weight: bold'>Nimi: </span>" + elokuvat[i].nimi + "<br >" + 
            "<span style='font-weight: bold'>Ohjaaja: </span>" + elokuvat[i].ohjaaja + "<br />" + 
            "<span style='font-weight: bold'>Julkaisuvuosi: </span>" + elokuvat[i].julkaisuvuosi + "<br />" + 
            "<span style='font-weight: bold'>Kategoria: </span>" + elokuvat[i].kategoria + "<br />" + 
            "<span style='font-weight: bold'>Tähdet: </span>" + elokuvat[i].tahdet + "/5" + "<br />";
            document.getElementById("tulostusAlue").innerHTML += "<br style='scontent:' '><br>";
            document.getElementById("kuvaAlue").innerHTML += "<img style='height: 130px; float: right; padding-bottom: 52px;' src=\"" + elokuvat[i].juliste + "\"><br>";
        }
    }
//HAE NIMI
    function hae(){
        var haku = document.getElementById("hakunimi").value; //Määritellään mitä nimeä haetaan
        var loytyyko = false; 
        //Tyhjennetään tulostus- ja kuva-alueet
        document.getElementById("tulostusAlue").innerHTML = "";
        document.getElementById("kuvaAlue").innerHTML = "";
            for(let i = 0;i < elokuvat.length;i++){ //Käydään Arrayta läpi
                    if(haku == elokuvat[i].nimi){ //Jos Arraysta löytyy nimi jota haetaan tulostetaan alla olevat tiedot tulostus ja kuva-alueille
                        loytyyko = true;
                        
                        document.getElementById("tulostusAlue").innerHTML += "<span style='font-weight: bold'>Nimi: </span>" + elokuvat[i].nimi + "<br >" + 
                        "<span style='font-weight: bold'>Ohjaaja: </span>" + elokuvat[i].ohjaaja + "<br />" + 
                        "<span style='font-weight: bold'>Julkaisuvuosi: </span>" + elokuvat[i].julkaisuvuosi + "<br />" + 
                        "<span style='font-weight: bold'>Kategoria: </span>" + elokuvat[i].kategoria + "<br />" + 
                        "<span style='font-weight: bold'>Tähdet: </span>" + elokuvat[i].tahdet + "/5" + "<br />";
                        document.getElementById("tulostusAlue").innerHTML += "<br style='scontent:' '><br>";
                        document.getElementById("kuvaAlue").innerHTML += "<img style='height: 130px; float: right; padding-bottom: 52px;' src=\"" + elokuvat[i].juliste + "\"><br>";
                    }
            }
            if(!loytyyko){ //Jos Arraysta ei löydy nimeä jota haetaan suoritetaan seuraava haku ohjaajan mukaan
                haeOhjaaja();
            }
    }
//HAE OHJAAJA
//Toimintaperiaate sama kuin funktiossa hae(), poikkeuksena tässä mikäli haku ei löydä ohjaajaa siirrytään etsimään julkaisuvuotta toisella funktiolla jne jne...
    function haeOhjaaja(){
        var haku = document.getElementById("hakuohjaaja").value;
        var loytyyko = false; 
            for(let i = 0;i < elokuvat.length;i++){
                    if(haku == elokuvat[i].ohjaaja){
                        loytyyko = true;
                        
                        document.getElementById("tulostusAlue").innerHTML += "<span style='font-weight: bold'>Nimi: </span>" + elokuvat[i].nimi + "<br >" + 
                        "<span style='font-weight: bold'>Ohjaaja: </span>" + elokuvat[i].ohjaaja + "<br />" + 
                        "<span style='font-weight: bold'>Julkaisuvuosi: </span>" + elokuvat[i].julkaisuvuosi + "<br />" + 
                        "<span style='font-weight: bold'>Kategoria: </span>" + elokuvat[i].kategoria + "<br />" + 
                        "<span style='font-weight: bold'>Tähdet: </span>" + elokuvat[i].tahdet + "/5" + "<br />";
                        document.getElementById("tulostusAlue").innerHTML += "<br style='scontent:' '><br>";
                        document.getElementById("kuvaAlue").innerHTML += "<img style='height: 130px; float: right; padding-bottom: 52px;' src=\"" + elokuvat[i].juliste + "\"><br>";
                    }
            }
            if(!loytyyko){
                haeJulkaisuvuosi();
            }
    }  
//HAE VUOSI
    function haeJulkaisuvuosi(){
        var haku = document.getElementById("hakujulkaisuvuosi").value;
        var loytyyko = false; 
            for(let i = 0;i < elokuvat.length;i++){
                    if(haku == elokuvat[i].julkaisuvuosi){
                        loytyyko = true;
                        
                        document.getElementById("tulostusAlue").innerHTML += "<span style='font-weight: bold'>Nimi: </span>" + elokuvat[i].nimi + "<br >" + 
                        "<span style='font-weight: bold'>Ohjaaja: </span>" + elokuvat[i].ohjaaja + "<br />" + 
                        "<span style='font-weight: bold'>Julkaisuvuosi: </span>" + elokuvat[i].julkaisuvuosi + "<br />" + 
                        "<span style='font-weight: bold'>Kategoria: </span>" + elokuvat[i].kategoria + "<br />" + 
                        "<span style='font-weight: bold'>Tähdet: </span>" + elokuvat[i].tahdet + "/5" + "<br />";
                        document.getElementById("tulostusAlue").innerHTML += "<br style='scontent:' '><br>";
                        document.getElementById("kuvaAlue").innerHTML += "<img style='height: 130px; float: right; padding-bottom: 52px;' src=\"" + elokuvat[i].juliste + "\"><br>";
                    }
            }
            if(!loytyyko){
                haeKategoria();
            }
    }  
//HAE KATEGORIA
    function haeKategoria(){
        var haku = document.getElementById("hakukategoria").value;
        var loytyyko = false; 
            for(let i = 0;i < elokuvat.length;i++){
                    if(haku == elokuvat[i].kategoria){
                        loytyyko = true;
                        
                        document.getElementById("tulostusAlue").innerHTML += "<span style='font-weight: bold'>Nimi: </span>" + elokuvat[i].nimi + "<br >" + 
                        "<span style='font-weight: bold'>Ohjaaja: </span>" + elokuvat[i].ohjaaja + "<br />" + 
                        "<span style='font-weight: bold'>Julkaisuvuosi: </span>" + elokuvat[i].julkaisuvuosi + "<br />" + 
                        "<span style='font-weight: bold'>Kategoria: </span>" + elokuvat[i].kategoria + "<br />" + 
                        "<span style='font-weight: bold'>Tähdet: </span>" + elokuvat[i].tahdet + "/5" + "<br />";
                        document.getElementById("tulostusAlue").innerHTML += "<br style='scontent:' '><br>";
                        document.getElementById("kuvaAlue").innerHTML += "<img style='height: 130px; float: right; padding-bottom: 52px;' src=\"" + elokuvat[i].juliste + "\"><br>";
                    }
            }
            if(!loytyyko){
                haeTahdet();
            }
    }  
//HAE TÄHDET
    function haeTahdet(){
        var haku = document.getElementById("hakutahdet").value;
        var loytyyko = false; 
            for(let i = 0;i < elokuvat.length;i++){
                    if(haku == elokuvat[i].tahdet){
                        loytyyko = true;
                        
                        document.getElementById("tulostusAlue").innerHTML += "<span style='font-weight: bold'>Nimi: </span>" + elokuvat[i].nimi + "<br >" + 
                        "<span style='font-weight: bold'>Ohjaaja: </span>" + elokuvat[i].ohjaaja + "<br />" + 
                        "<span style='font-weight: bold'>Julkaisuvuosi: </span>" + elokuvat[i].julkaisuvuosi + "<br />" + 
                        "<span style='font-weight: bold'>Kategoria: </span>" + elokuvat[i].kategoria + "<br />" + 
                        "<span style='font-weight: bold'>Tähdet: </span>" + elokuvat[i].tahdet + "/5" + "<br />";
                        document.getElementById("tulostusAlue").innerHTML += "<br style='scontent:' '><br>";
                        document.getElementById("kuvaAlue").innerHTML += "<img style='height: 130px; float: right; padding-bottom: 52px;' src=\"" + elokuvat[i].juliste + "\"><br>";
                    }
            }
            if(!loytyyko){ //Mikäli mikään
                document.getElementById("tulostusAlue").innerHTML = "Ei löydy!";
            }
    }  