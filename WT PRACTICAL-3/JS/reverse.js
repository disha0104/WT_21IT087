function reverseInput() {
    var inputBox = document.getElementById("inputBox");
    var input = inputBox.value;
    var reversedInput = input.split('').reverse().join('');
    document.getElementById("output").innerHTML = reversedInput;
  }
