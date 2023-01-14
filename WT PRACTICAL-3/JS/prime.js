console.log("connected..");
function printPrimeNumbers() {
    var num = document.getElementById("num").value;
    var primes = "";
    for (var i = 2; i <= num; i++) {
        var isPrime = true;
        for (var j = 2; j <= i/2; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes += i + " ";
        }
    }
    document.getElementById("result").innerHTML = primes;
}