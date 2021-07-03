const hourElement = document.getElementById("hour");
const secondElement = document.getElementById("second");
const minuteElement = document.getElementById("minute");

setInterval(() => {
    date = new Date();
    hTime = date.getHours();
    mTime =date.getMinutes();
    sTime = date.getSeconds();

    hRotation = 30 * hTime + (mTime/2);
    mRotation = 6 * mTime;
    sRotation = 6 * sTime;

    hourElement.style.transform = `rotate(${hRotation}deg)`;
    minuteElement.style.transform = `rotate(${mRotation}deg)`;
    secondElement.style.transform = `rotate(${sRotation}deg)`
}, 1000);