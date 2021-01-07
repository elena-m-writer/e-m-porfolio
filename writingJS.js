document.getElementById("blog").addEventListener("mouseover", mouseOverBlog);
document.getElementById("blog").addEventListener("mouseout", mouseOutBlog);

document.getElementById("freelance").addEventListener("mouseover", mouseOverFree);
document.getElementById("freelance").addEventListener("mouseout", mouseOutFree);

function mouseOverBlog() {
  document.getElementById("blog").style.color = "#fd691f";
  console.log(mouseOverBlog)
}

function mouseOutBlog() {
  document.getElementById("blog").style.color = "#013a33";
}


function mouseOverFree() {
  document.getElementById("freelance").style.color = "#fd691f";
}

function mouseOutFree() {
  document.getElementById("freelance").style.color = "#013a33";
}

