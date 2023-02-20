document.querySelector(".arrow").addEventListener("click",function(){
    let hello = "";
    val = document.querySelector(".input1").value;
    
    hello = (val) => "Hello " + val;
    document.querySelector("#arrow").innerHTML = hello(val);
})


