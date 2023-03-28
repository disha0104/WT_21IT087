async function demo() {
    let ctr = document.getElementById("country").value;
    const cbr= await fetch(`http://universities.hipolabs.com/search?country=${ctr}`);
    const data = await cbr.json();
    let mydiv = document.getElementById("demo");
    console.log(data);
}