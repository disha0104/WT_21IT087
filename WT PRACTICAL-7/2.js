document.querySelector(".darray").addEventListener("click",function(){
    let arr = ["Disha", "Mistry"];
// destructuring assignment
// sets firstname = arr[0]
// and surname = arr[1]
let [firstname, surname] = arr;
    document.querySelector("#darray").innerHTML = firstname +" " + surname ;
})
document.querySelector(".dobject").addEventListener("click",function(){
    let options = {
        title: "Car",
        model: "BMW M5",
        year: 2020
      };
      let {
        title,
        model,
        year
      } = options;
    document.querySelector("#object").innerHTML = title + " " + model+ " " + year ;
})
