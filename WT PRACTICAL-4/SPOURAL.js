console.log("Connected");
function display() {
    var obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    college: document.getElementById("college").value,
    year: document.getElementById("year").value,
    branch: document.getElementById("branch").value,
    }
    document.write("<table border='1'>");
    document.write("<tr><th>Name</th><th>Email</th><th>Phone</th><th>College</th><th>Year</th><th>Branch</th></tr>");
    document.write("<tr><td>" + obj.name + "</td><td>" + obj.email + "</td><td>"+ obj.phone + "</td><td>" + obj.college + "</td><td>" + obj.year + "</td><td>" + obj.branch + "</td></tr>");document.write("</table>");
    }
    console.log(obj);