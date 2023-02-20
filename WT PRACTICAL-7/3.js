const { firstName, lastName, ...otherInfo } = {
    firstName: "Disha",
    lastName: "Mistry", 
    companyName: "CodeDev",
    profession: "Web Developer",
    gender: "Female"
  }
document.querySelector(".fname").addEventListener("click",function(){
    document.querySelector("#fname").innerHTML = firstName;
})
document.querySelector(".lname").addEventListener("click",function(){
    document.querySelector("#lname").innerHTML = lastName;
})
document.querySelector(".othinfo").addEventListener("click",function(){
    document.querySelector("#othinfo").innerHTML = otherInfo;
})
document.querySelector(".sp").addEventListener("click",function(){
    let str = document.querySelector(".spread").value;
    document.querySelector("#spread").innerHTML = [...str];
})
