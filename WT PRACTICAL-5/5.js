function moveImage(e) {
    var img = document.getElementById("img");
    if (e.keyCode == 37) {
        cs37();
    } else if (e.keyCode == 38) {
        cs38();
    } else if (e.keyCode == 39) {
        cs39();
    } else if (e.keyCode == 40) {
        cs40();
    }
}
 
function cs37() {
    img.style.left = parseInt(img.style.left) - 10 + "px";
}
 
function cs38() {
    img.style.top = parseInt(img.style.top) - 10 + "px";
}
 
function cs39() {
    img.style.left = parseInt(img.style.left) + 10 + "px";
}
 
function cs40() {
    img.style.top = parseInt(img.style.top) + 10 + "px";
}
document.onkeydown = moveImage;
