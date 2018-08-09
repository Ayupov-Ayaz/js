/**
 * Получить дату на n - количество дней позже заданной даты
 * @param date
 * @param days
 */
function getDateAgo(date, days){
    var lastDate = days * 24 * 60 * 60 * 1000;
    var currentDate = Date.parse(date);

    var newDate = currentDate - lastDate;
    alert(new Date(newDate));
}

/**
 * Функция по получению дня недели из даты
 * @param date
 * @returns {string}
 */
function getWeekDay(date) {
    var days = getWeek();
    return days[date.getDay()];
}

/**
 * Получить форматы дней недель
 * @param format - формат
 * @param location - язык
 * @returns {string[]}
 */
function getWeek(format, location) {
    format = format || 'sm';
    location = location || 'ru';
    if(format === 'sm' && location === 'ru') {
        return ['вс','пн','вт','ср','чт','пт','суб'];
    } else if(format === 'la' && location === 'ru') {
        return ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
    }
}
