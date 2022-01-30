const minuteContainer = document.getElementById("minutes");
const hourContainer = document.getElementById("hour");
const meridiem = document.getElementById("meridiem");

function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    setHours(hours);
    setMinutes(minutes);
    setMeridiem(hours);
};

function setHours(hours) {
    let standardHours;
    if (hours > 12) {
        standardHours = hours - 12;
    } else {
        standardHours = hours;
    }
    hourContainer.innerText = standardHours;
};

function setMinutes(minutes) {
    if (minutes < 10) {
        minuteContainer.innerText = `0${minutes}`;
    } else {
        minuteContainer.innerText = minutes;
    }
};

function setMeridiem(hours) {
    if(hours >= 12) {
        meridiem.innerText = "PM";
    } else {
        meridiem.innerText = "AM";
    }
};

function updateTime() {
    showTime();
    setInterval(showTime, 1000);
};

updateTime();