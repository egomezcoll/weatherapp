const myRestaurantPriceMenu = 20;
const priceChecker = function(amount){
    if(myRestaurantPriceMenu > amount) {
        document.querySelector('input').style.borderColor = 'red';
    }else if (myRestaurantPriceMenu < amount){
        document.querySelector('input').style.borderColor = 'red';
    }else{
        document.querySelector('input').style.borderColor = 'green';
    }
}
const checkemail = function(email){
    if(email.includes('@') && email.includes('.com')){
        document.querySelector('input').style.borderColor = 'green';
    }else{
        document.querySelector('input').style.borderColor = 'red';
    }
}
//priceChecker(20);

let taskList = new Array();
const addNewTask = function(){
    taskList.push(document.querySelector('input').value);
    document.querySelector('div#taskList').innerHTML = '<ul>';
    taskList.forEach((item)=>{
        document.querySelector('div#taskList').innerHTML += '<li>'+item+'</li>';
    });
    document.querySelector('div#taskList').innerHTML += '</ul>';

    removeInputValue();
}

const removeInputValue = function() {
    document.querySelector('input').value = '';
}

const checkKeyPressed = function(event) {
    if(event.keyCode === 13){
        addNewTask();
    }
}


  
const getMeTheWeather = function(){
    let city = document.querySelector('input#city').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9b76a47a29c8dd99c9cf9b0c7f6d78df&units=metric')
    .then(response => response.json())
    .then(data => printInformation(data));
}

const printInformation = function(data){
    let weatherInfo = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"> ${data.main.temp}`;
    document.querySelector('div#weatherData').innerHTML = weatherInfo;
}

// img url https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png

/*var typeNumber = 24;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('https://www.google.es');
qr.make();
document.getElementById('canvas').innerHTML = qr.createImgTag();
*/