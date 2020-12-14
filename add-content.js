var today = new Date ();
var hourNow = today.getHours();
var greetings;

if (hourNow > 18) {
    greetings - 'Salamat Malam!';
} else if (hourNow > 12) {
    greetings = 'Selamat Sore!';
} else if (hourNow > 0) {
    greetings = 'Selamat Pagi!';
} else {
    greetings = 'Selamat!';
}

document.write('<h3>' + greetings + '</h3>');