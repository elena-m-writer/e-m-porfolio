document.getElementById("code").addEventListener("mouseover", mouseOverCode);
document.getElementById("code").addEventListener("mouseout", mouseOutCode);

document.getElementById("type").addEventListener("mouseover", mouseOverType);
document.getElementById("type").addEventListener("mouseout", mouseOutType);

document.getElementById("javaScript").addEventListener("mouseover", mouseOverJavaScript);
document.getElementById("javaScript").addEventListener("mouseout", mouseOutJavaScript);

function mouseOverCode() {
  document.getElementById("code").style.color = "#fd691f";
}

function mouseOutCode() {
document.getElementById("code").style.color = "#013a33"; 
}

function mouseOverType() {
  document.getElementById("type").style.color = "#fd691f";
}

function mouseOutType() {
  document.getElementById("type").style.color = "#013a33";
}

function mouseOverJavaScript() {
  document.getElementById("javaScript").style.color = "#fd691f";
}

function mouseOutJavaScript() {
  document.getElementById("javaScript").style.color = "#013a33";
}
