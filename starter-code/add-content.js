var today = new Date ();
var hourNow = today.getHours();
var greeting;

function addGreeting() {
    if (hourNow > 18) {
        greeting = 'Salamat Malam!';
    } else if (hourNow > 12) {
        greeting = 'Selamat Sore!';
    } else if (hourNow > 0) {
        greeting = 'Selamat Pagi!';
    } else {
        greeting = 'Selamat!';
    }
    document.write('<h3>' + greeting + '</h3>');
}

addGreeting();