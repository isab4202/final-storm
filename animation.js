$(window).on("load", start);

/*start side musik køre og når der trykkes på knappen skifter scenen*/
function start() {
    console.log("klar");
    $("#intro_beat")[0].play();
    $("#knap_bottom").on("click", showScene2);
}


/*forside fader ud og Storms værelse fader ind, lyd på start side stopper og musikken på storms værelse starter + volumen af musik på værelset sættes her der bliver sat en timeout på 5.5sekunder på funktionen takeOutPhone og vi starter funktionen beskeder kommer frem som der er timeout på*/

function showScene2() {
    $('#forside').fadeOut();
    $('#storms_vaerlse').fadeIn();
    $("#intro_beat")[0].pause();
    $("#storm_beat")[0].play();
    $("#storm_beat")[0].volume = 0.5;
    beskederKommerFrem();

    setTimeout(takeOutPhone, 5500);
}

/*første spritesheet bliver fjernet. Spriten takeoutphone starter og der er blevet sat en timeout på 2 sekunder  til funktionen serBesked.*/

function takeOutPhone() {
    console.log("storm tager telefon frem");
    $("#storm_sprite_1").removeClass("sprite1");
    $("#storm_sprite_1").addClass("sprite2");


    setTimeout(serBesked, 2000);

}

/* andet spritesheet "takeOutPhone" bliver fjernet. funktionen (hvor han står med telefonene) starter og spriten bliver vist, der bliver sat en ny timeout til funktionen Surprised/ spriten hvor storm bliver forbavset.*/

function serBesked() {
    console.log("storm ser beskeder");
    $("#storm_sprite_1").removeClass("sprite2");
    $("#storm_sprite_1").addClass("sprite3");

    setTimeout(surprised, 2000);
}

/* Tredje spritesheet "sprite3" bliver fjernet. funktionen Surprised starter og spriten bliver vist hvor storm bliver forbavset.*/

function surprised() {
    console.log("storm blir forbavset");
    $("#storm_sprite_1").removeClass("sprite3");
    $("#storm_sprite_1").addClass("sprite4");
}

/* kode for Storms beskeder*/
/* Storms beskeder er kommet ind i en funktion så den bliver calledet i funktionen showScene2*/
/*der er blevet sat timer til at næste besked skal starte*/
function beskederKommerFrem() {
    setTimeout(storm_besked1, 8000);
    setTimeout(storm_svar, 7500);
    setTimeout(storm_besked2, 10000);
    setTimeout(storm_besked3, 12000);
}


/*viser svar stedet*/
function storm_svar() {
    svar.style.display = "block";
}

/*viser første besked og starter lyden*/
function storm_besked1() {
    text_1.style.display = "block";
    $("#besked_lyd_1")[0].play();
}


/*viser anden besked og starter lyden*/
function storm_besked2() {
    text_2.style.display = "block";
    $("#besked_lyd_1")[0].play();
}


/*viser tredje besked og starter lyden. Når tredje bedsked er blevet vist bliver der sat en timer til funktionen stormSvar*/
function storm_besked3() {
    text_3.style.display = "block";
    $("#besked_lyd_1")[0].play();

    setTimeout(stormSvar, 3000);
}

/*Besked lydene bliver stoppet/pauset. ved denne function popper tekst-boksen og de to knapper op med svarmuligheder, hvis man klikker på knap 1 kommer man til funktionen spiller med. hvis man klikker på knap 2 kommer man til funktionen spiller ikke med */

function stormSvar() {
    $("#besked_lyd_1")[0].pause();
    $("#knap_textbox").show();
    $("#knap_1").show();
    $("#knap_2").show();
    $("#knap_1").on("click", spillerMed);
    $("#knap_2").on("click", spillerIkkeMed);
}


/*funktionen spiller med starter. starter en politi lyd, textboksen og knapper bliver hidet  og funktionen at du kan klikke på knapperne bliver slukket. Politman_container bliver vist og der kommer en Timeout på 5 sekunder til slutsiden Privatsnak */

function spillerMed() {
    console.log("Spil med");

    $("#polit_lyd")[0].play();
    $("#knap_textbox").hide();
    $("#knap_1").hide();
    $("#knap_2").hide();
    $("#knap_1").off("click", spillerMed);
    $("#knap_2").off("click", spillerIkkeMed);


    $("#politimand_full_container").show();
    setTimeout(privatSnak, 5000);

}

/*funktionen spiller ikke med starter. starter en thumbsup lyd, textboksen og knapper bliver hidet  og funktionen at du kan klikke på knapperne bliver slukket. thumbsup_container bliver vist og der kommer en Timeout på 5 sekunder til slutsiden Privatsnak */

function spillerIkkeMed() {
    console.log("Spil ikke med");

    $("#thumbsup_lyd")[0].play();
    $("#knap_textbox").hide();
    $("#knap_1").hide();
    $("#knap_2").hide();
    $("#knap_1").off("click", spillerMed);
    $("#knap_2").off("click", spillerIkkeMed);


    $("#thumbsup_full_container").show();
    setTimeout(privatSnak, 5000);
}


/*funktionen privatsnak starter. storm beat bliver stoppet/pauset, Storms værelse bliver hidet. Endsite bliver vist og intro_beat bliver startet */

function privatSnak() {
    console.log("privatSnak");
    $("#storm_beat")[0].pause();
    $("#storms_vaerlse").hide();
    $("#endsite").show();
    $("#intro_beat")[0].play();

}
