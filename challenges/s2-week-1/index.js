const clockHours = document.querySelector('.clock__hours');
const clockMinutes = document.querySelector('.clock__minutes');
const clockSeconds = document.querySelector('.clock__seconds');


const setClockRotation = () =>{
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsRotation = (seconds / 60) * 360;
    const minutesRotation = ((minutes + seconds/60)/60) * 360;
    const hoursRotation = ((hours + hours/60)/12) * 360;
};

setInterval(setClockRotation, 1000);

setClockRotation();
    
