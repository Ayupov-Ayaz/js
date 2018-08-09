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
