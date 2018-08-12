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

/**
 * Получить число последнего дня месяца
 * @param year
 * @param month
 * @returns {number}
 */
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

/**
 * Получить сколько секунд прошло с начала текущего дня
 * @returns {number}
 */
function getSecondsToday() {
    return  Date.now() / 1000 ^ 0;
}

/**
 * Получить секунды до нового дня
 * @returns {number}
 */
function getSecondsTomorrow() {
    var today = new Date();
    var tommorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return (tommorrow - today) / 1000 ^ 0;
}


/**
 * Получить дату на сколько-то дней позже указанной
 * @param date
 * @param days
 * @returns {Date}
 */
function getDateAgo(date, days) {
    var copyDate = new Date(date);
    copyDate.setDate(copyDate.getDate() - days);
    return copyDate;
}

/**
 * Возвращает отформатированную дату
 * @param date
 * @param format
 * @returns {string}
 */
function formatDate(date, format) {
    var _date = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth();

    if(month < 10) {
        month = '0'+month;
    }
    switch (format) {
        case 'dd.mm.YYYY':
        case 'dd.mm.YY':
            return _date + '.' + month + '.' + year;

        default:
            return  date;
    }
}