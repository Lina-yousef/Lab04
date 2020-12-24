var userName = prompt('Please enter your name');

while (userName === null || userName === '' ) {
    userName = prompt('Please enter your name');
}
console.log(userName);

alert('Hi ' + userName + '! Welcome to Pink Flower');

document.write('Hi ' + userName + '! Welcome to Pink Flower store');

var budget = 50;
var message;
budget = prompt('insert your budget');

if (budget < 50) {
    message = 'Order now and get 30% discount for shipping' + userName;
}
else {
    message = 'Order now and get a free shipping ,' + userName;
}

alert(message);



var Bouquet = prompt('How many Bouquet do you want ?');
var tagToAdd = "";
for (var i= 0;  Bouquet > i ; i++) {

    //tagToAdd = tagToAdd + '<p>' + "" + Bouquet+'</p>';
    document.write('<p>'+(i+1)+'</p>');
    document.write('<img src="flower.webp">');

   //var  document.getElementById()

}

