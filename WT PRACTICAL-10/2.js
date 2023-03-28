let url1 = 'https://api.genderize.io?name='
        let name = document.getElementById('inputName');
        name.addEventListener('blur', function () {

            name = document.getElementById('inputName');
            console.log(name.value);
            url2 = `${url1}${name.value}`
            console.log(url1);
            fetch(url2)
                .then((response) => {
                    console.log(response);
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    let output = '';
                    output += `
                <ul>
                    <li>${data.name}</li>
                    <li>${data.gender}</li>
                    <li>${data.probability}</li>
                    <li>${data.count}</li>
                </ul>
                `;
                    document.getElementById('display').innerHTML = output;
                })
                .catch(err => console.log(err));
        })