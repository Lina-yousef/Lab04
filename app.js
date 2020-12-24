var userName = prompt('Please enter your name');
console.log(userName);
alert('Hi ' + userName + '! Welcome to Pink Flower');

document.write('Hi' + ' ' + userName + '! Welcome to Pink Flower store');

var budget = 50;
var message;
budget = prompt('insert your budget');

if (budget < 50) {
    message = 'Order now and get 30% discount for shipping' + userName;

}
else {
    message = 'Order now and get a free shipping ,' + + userName;
}


alert(message);

