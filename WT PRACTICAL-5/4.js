var image = document.getElementById("image");
image.addEventListener("mouseover", zoomIn);
image.addEventListener("mouseout", zoomOut);
 
function zoomIn() {
    image.style.width = "700px";
    image.style.height = "700px";
}
 
function zoomOut() {
    image.style.width = "200px";
    image.style.height = "200px";
}
