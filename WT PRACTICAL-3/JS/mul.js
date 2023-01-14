function createTable() {
    var num = document.getElementById("num").value;
    var table = document.getElementById("table");
  
    table.innerHTML = "";
  
    for (var i = 1; i <= 10; i++) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
  
      cell1.innerHTML = num + "x" + i;
      cell2.innerHTML = "=";
      cell3.innerHTML = num * i;
    }
  }