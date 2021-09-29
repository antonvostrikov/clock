let dateSpan = document.querySelector('.span-date'),
    timeSpan = document.querySelector('.span-time'),
    daySpan  = document.querySelector('.span-day');

    let monthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
     'Сентябрь', 'Октрябрь', 'Ноябрь', 'Декарь'];

    let dayOfTheWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

setInterval(function() {

    let date = new Date(),
        dateDay = date.getDate(),
        dateMonth  = date.getMonth(),
        dateHours = date.getHours(),
        dateMinutes = date.getMinutes(),
        dateDayOfTheWeek = date.getDay() -1;

    for (let i = 0; i < monthArray.length; i++) {
        let presentMonth = monthArray[dateMonth];
        dateSpan.innerHTML = `${dateDay} ${presentMonth}`; 
    }

    timeSpan.innerHTML = `${dateHours}:${dateMinutes}`;
    
    for (let i = 0; i < dayOfTheWeek.length; i++) {
        let presentDay = dayOfTheWeek[dateDayOfTheWeek];
        daySpan.innerHTML = presentDay;
    }

}, 1000);