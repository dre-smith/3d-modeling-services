const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        const timer = getTimeRemaining();

        const addZero = (number) => {
            return number <= 9 ? `0${number}` : number;
        };

        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        if (timer.timeRemaining <= 0) {
            clearInterval(timeInterval);
        };

        if (timer.hours <= 0 && timer.minutes <= 0 && timer.seconds <= 0) {
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        };
    };
    const timeInterval = setInterval(updateClock, 1000);
};

export default countTimer;