document.getElementById("wild").addEventListener("mouseover", mouseOverWild);
document.getElementById("wild").addEventListener("mouseout", mouseOutWild);

document.getElementById("yoga").addEventListener("mouseover", mouseOverYoga);
document.getElementById("yoga").addEventListener("mouseout", mouseOutYoga);

function mouseOverWild() {
    document.getElementById("wild").style.color = "#fd691f";
}

function mouseOutWild() {
    document.getElementById("wild").style.color = "#013a33";
}

function mouseOverYoga() {
    document.getElementById("yoga").style.color = "#fd691f";
}

function mouseOutYoga() {
    document.getElemenyById("yoga").style.color = "#013a33";
}