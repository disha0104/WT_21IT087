function check() {
    //userid is required
    let x = document.getElementById('userid').value;
    if (x.length < 5 || x.length > 12 || x[0] == ' ') {
        alert('Please enter proper userid');
    }
    //password is required
    let y = document.getElementById('password').value
    if (y.length < 7 || y.length > 12 || y[0] == ' ') {
        alert('Please enter valid password');
    }
    //name is required
    let z = document.getElementById('name').value
    let flag = false;
    for (let i in z) {
        if (z[i] <= 'z' && z[i] >= 'a' || z[i] <= 'Z' && z[i] >= 'A')
            flag = true;
        else {
            flag = false;
            break;
        }
    }
    if (!flag)
        alert("Enter proper name:")
    //country is required
    if (document.getElementById('stay').value == 10)
        alert('select country');
    //email is required
    let e = document.getElementById('email').value
    let ch = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!e.match(ch) || e == "")
        alert("Please enter valid email address");
    //gender is required
    let g = document.querySelector('input[name="gender"]:checked')
    if (g == null)
        alert("Please select gender")
        //language is required
    let l = document.querySelector('input[name="Events"]:checked')
    if (l == null)
        alert("Please select the type of event you want to participate")
}
