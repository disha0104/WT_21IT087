var toyocar = { 
    name: "Toyota Fortuner", 
    price: "Rs. 30,00,000", 
    model: "2021", 
    displayToyotaDetails: function() { 
    document.getElementById("toyota").innerHTML = 
    "<table><tr><th>Name</th><th>Price</th><th>Model</th></tr><tr><td>" + this.name + "</td><td>" + this.price + "</td><td>" + this.model + "</td></tr></table>"; } 
    } 
    var maruticar = { 
    name: "Maruti Swift", 
    price: "Rs. 5,00,000", 
    model: "2021", 
    displayMarutiDetails: function() { 
    document.getElementById("maruti").innerHTML = 
    "<table><tr><th>Name</th><th>Price</th><th>Model</th></tr><tr><td>" + this.name + "</td><td>" + this.price + "</td><td>" + this.model + "</td></tr></table>"; } 
    } 
    var hyundaicar = { 
    name: "Hyundai Venue", 
    price: "Rs. 10,00,000", 
    model: "2021", 
    displayHyundaiDetails: function() { 
    document.getElementById("hyundai").innerHTML = 
    "<table><tr><th>Name</th><th>Price</th><th>Model</th></tr><tr><td>" + this.name + "</td><td>" + this.price + "</td><td>" + this.model + "</td></tr></table>"; } 
    }
    