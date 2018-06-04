$(window).on("load", start);

/*start side musik køre og når der trykkes på knappen skifter scenen*/
function start() {
    console.log("klar");
    $("#intro_beat")[0].play();
    $("#knap_bottom").on("click", showScene2);
}


/*forside fader ud og Storms værelse fader ind, lyd på start side stopper og musikken på storms værelse starter + volumen af musik på værelset sættes her*/

function showScene2() {
    $('#forside').fadeOut();
    $('#storms_vaerlse').fadeIn();
    $("#intro_beat")[0].pause();
    $("#storm_beat")[0].play();
    $("#storm_beat")[0].volume = 0.5;

    setTimeout(takeOutPhone, 4000);
}



function takeOutPhone() {
    console.log("storm tager telefon frem");
    $("#storm_sprite_1").removeClass("sprite1");
    $("#storm_sprite_1").addClass("sprite2");


    setTimeout(serBesked, 2000);

}

function serBesked() {
    console.log("storm ser beskeder");
    $("#storm_sprite_1").removeClass("sprite2");
    $("#storm_sprite_1").addClass("sprite3");

    setTimeout(surprised, 2000);
}

function surprised() {
    console.log("storm blir forbavset");
    $("#storm_sprite_1").removeClass("sprite3");
    $("#storm_sprite_1").addClass("sprite4");
}

/* kode for Storms beskeder*/
/*sekunderne før næste besked skal starte*/
setTimeout(storm_besked1, 8000);
setTimeout(storm_svar, 7500);
setTimeout(storm_besked2, 10000);
setTimeout(storm_besked3, 12000);


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


/*viser tredje besked og starter lyden*/
function storm_besked3() {
    text_3.style.display = "block";
    $("#besked_lyd_1")[0].play();

    setTimeout(stormSvar, 3000);
}

function stormSvar() {
    $("#besked_lyd_1")[0].pause();
    $("#knap_textbox").show();
    $("#knap_1").show();
    $("#knap_2").show();
    $("#knap_1").on("click", spillerMed);
    $("#knap_2").on("click", spillerIkkeMed);
}



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


function privatSnak() {
    console.log("privatSnak");

    $("#storms_vaerlse").hide();
    $("#endsite").show();
    $("#intro_beat")[0].play();

}
