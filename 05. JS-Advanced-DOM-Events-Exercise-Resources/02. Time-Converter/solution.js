function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type = "button"]'));

    buttons.forEach(button => {
        button.addEventListener('click', Convert);
    });


    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400

    }

    function ChangeUnits(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds

        }
    }

    function Convert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = ChangeUnits(input.value, input.id);
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }

}