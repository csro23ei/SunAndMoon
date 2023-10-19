var bildElement = document.getElementById("bild");
var solBild = "sol.jpg";
var MoonBild = "Moon.jpg";
var aktuellBild = solBild;

// Funktion för att byta bilden mellan solen och månen
function bytBild() {
    if (aktuellBild === solBild) {
        bildElement.src = MoonBild;
        bildElement.alt = "Månen";
        aktuellBild = MoonBild;
    } else {
        bildElement.src = solBild;
        bildElement.alt = "Solen";
        aktuellBild = solBild;
    }
}

// Lyssna på klickhändelse och anropa funktionen för bildbyte
bildElement.addEventListener("click", bytBild);