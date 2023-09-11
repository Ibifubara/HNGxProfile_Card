let today = document.getElementById('today');
let time = document.getElementById('time');

let date = new Date();
let day = date.getDay();
let uTime = date.getUTCMilliseconds();

switch(day){
    case 0:
        day = "Sunday";
    break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wednesday";
    break;
    case 4:
        day = "Thursday";
    break;
    case 5:
        day = "Friday";
    break;
    case 0:
        day = "Saturday";
    break;
}

today.innerHTML = day;
time.innerHTML = uTime;