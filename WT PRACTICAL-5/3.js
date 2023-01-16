var color = ["red", "green", "blue", "yellow", "orange", "pink", "brown",
    "purple", "grey", "black"
];
var table = document.getElementsByTagName("table")[0];
var tr = table.getElementsByTagName("tr");
for (var i = 0; i < tr.length; i++) {
    tr[i].style.backgroundColor = color[i];
}
