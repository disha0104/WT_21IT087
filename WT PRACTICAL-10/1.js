console.log("connected");
setInterval(displayDog, 1500);
function displayDog() {
let url = 'https://dog.ceo/api/breeds/image/random'
let div = document.getElementById('image');
console.log(url);
fetch(url)
.then((response) => {
    console.log(response);
    return response.json()
})
.then(data => {
    console.log(data);
    div.innerHTML = `<img src="${data.message}" alt="" width=500 height=500>`
    })
.catch(err => console.log(err));
}

    