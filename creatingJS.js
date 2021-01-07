document.getElementById("cross").addEventListener("mouseover", mouseOverCross);
document.getElementById("cross").addEventListener("mouseout", mouseOutCross);

function mouseOverCross() {
    document.getElementById("cross").style.color = "#fd691f";
}

function mouseOutCross() {
    document.getElementById("cross").style.color = "#013a33"
}