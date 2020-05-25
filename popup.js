

function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {

    const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');

    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");

    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove();" class="close">X</span><p><br>' + indhold + '</p>';

    modalindhold.style.width = bredde;
    modalindhold.style.height = hoejde;
    modalindhold.style.backgroundColor = baggrundsfarve;
    modalindhold.style.color = fontfarve;

    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "50%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
    } else if (placering === "bund") {
        modalindhold.style.left = "0";
        modalindhold.style.bottom = "0";
    } else if (placering === "top") {
        modalindhold.style.left = "0";
        modalindhold.style.top = "0";
    }

    if (knapper) {
        dialogIndhold += '<div class="knappanel"><button type="button" class="knapper" onclick="modaldialog.remove();"><a href="#sign up"><p>SIGN UP</p></a></button></div>';
    }

    modalindhold.innerHTML = dialogIndhold;
}


function minDialogFunktion() {
    dialog("30%", "40%", "#ECE8E8", "black", "centrer"," <h1>HEY YOU</h1>"+"<p>BLIV EN DEL AF VORES UNIVERS OG MODTAG SNEAK PEAKS, PÅMINDELSER, NYHEDSBREVE OG 10% PÅ DIN FØRSTE ORDRE!</p>", true);
    clearInterval(minDialog);
}

// Hovedprogram

let minDialog = setInterval(minDialogFunktion, 1000)
