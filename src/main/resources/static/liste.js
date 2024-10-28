let opplyst;
let neste;
let forrige = -1;
let liste = ["101", "103", "104", "Aasen", "Al-Azkari", "Bartholdsen", "Collett", "102 Dubois", "Eide", "Hagen", "Hamid", "301 Hansen", "Dahl", "6 De Reuter", "Fjeldstad", "Hoel Hovden", "Hovland", "Ibsen", "Isnes", "Ivanov", "Jakobsen", "Kristiansen", "Nguyen", "Patel", "Pedersen", "Raa", "Raja", "Rasmussen", "12 Skedsmo", "Smith", "Tajik", "Ås"];

function lysOpp() {
    $("#l1").html(liste[0]);
    $("#l2").html(liste[1]);
    $("#l3").html(liste[2]);
    $("#l4").html(liste[3]);
    $("#l1").css("background-color", "grey");
    opplyst = $("#l1").val();
    neste = 4;
}

function pilNed() {
    if (opplyst === 1) {
        $("#l1").css("background-color", "");
        $("#l2").css("background-color", "grey");
        opplyst = $("#l2").val()
    } else if (opplyst === 2) {
        $("#l2").css("background-color", "");
        $("#l3").css("background-color", "grey");
        opplyst = $("#l3").val()
    } else if (opplyst === 3) {
        $("#l3").css("background-color", "");
        $("#l4").css("background-color", "grey");
        opplyst = $("#l4").val()
    } else if (opplyst === 4) {
        if (neste < liste.length) {
            $("#l1").html(liste[neste-3]);
            $("#l2").html(liste[neste-2]);
            $("#l3").html(liste[neste-1]);
            $("#l4").html(liste[neste]);
            neste++;
            forrige++;
        }
    }
}

function pilOpp() {
    if (opplyst === 4) {
        $("#l4").css("background-color", "");
        $("#l3").css("background-color", "grey");
        opplyst = $("#l3").val()
    } else if (opplyst === 3) {
        $("#l3").css("background-color", "");
        $("#l2").css("background-color", "grey");
        opplyst = $("#l2").val()
    } else if (opplyst === 2) {
        $("#l2").css("background-color", "");
        $("#l1").css("background-color", "grey");
        opplyst = $("#l1").val()
    } else if (opplyst === 1) {
        if (forrige >= 0) {
            $("#l1").html(liste[forrige]);
            $("#l2").html(liste[forrige+1]);
            $("#l3").html(liste[forrige+2]);
            $("#l4").html(liste[forrige+3]);
            forrige--;
            neste--;
        }
    }
}