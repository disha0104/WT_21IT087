console.log("connected...");
const btnObj = document.getElementsByTagName("button");

function showtime() {
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    document.getElementById("date").innerHTML = d.toLocaleDateString();
  }

btnObj[0].addEventListener("click",showtime);
