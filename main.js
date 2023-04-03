function clock() {
    const elementClock = document.querySelector('.clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formatoHours = hours.toString().padStart(2, "0");
    const formatoMinutes = minutes.toString().padStart(2, "0");
    const formatoSeconds = seconds.toString().padStart(2, "0");
    
    elementClock.textContent = `${formatoHours}:${formatoMinutes}:${formatoSeconds}`;

}

setInterval(clock, 1000);

// PadStart é a forma que será vísivel a string, exemplo número de caracteres.