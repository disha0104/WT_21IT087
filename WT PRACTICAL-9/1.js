let myDiv1 = document.getElementById("Div1");
let myDiv2 = document.getElementById("Div2");
let myDiv3 = document.getElementById("Div3");
let myDiv4 = document.getElementById("Div4");
let myDiv5 = document.getElementById("Div5");
let myDiv6 = document.getElementById("Div6");
const students = [
    { firstName: 'Ranbir', lastName: 'Kapoor', age: '47', },
    { firstName: 'Kartik', lastName: 'Aryan', age: '32' },
    { firstName: 'Varun', lastName: 'Dhawan', age: '35' },
];
//forEach() Function 
students.forEach((student, index) => {
    myDiv1.innerHTML += `Index ${index}: ${student.firstName} ${student.lastName} <br/>`;
});
//map() Function 
students.map((student, index) => {
    myDiv2.innerHTML += `Index ${index}: ${student.firstName} ${student.lastName} <br/>`;
});
//reduce() Function
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
myDiv3.innerHTML = sum;
//apply() Function
const max = Math.max.apply(null, numbers);
myDiv5.innerHTML = max;
//call() Function
const person = {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
const fullName = person.fullName.call({ firstName: 'Monica', lastName: 'Geller' });
myDiv4.innerHTML = fullName;
//bind() Function
const fullNameB = person.fullName.bind({ firstName: 'Rachel', lastName: 'Green' });
myDiv6.innerHTML = fullNameB();
