document.getElementById("wild").addEventListener("mouseover", mouseOverWild);
document.getElementById("wild").addEventListener("mouseout", mouseOutWild);

function mouseOverWild() {
    document.getElementById("wild").style.color = "#fd691f";
}

function mouseOutWild() {
    document.getElementById("wild").style.color = "#013a33";
}