/**
 * Функция добавляет в поле класса дополнительное свойство, если его там нет
 * @param {Object} obj - Объект
 * @param {String} propertyName - Свойство поля 
 * @param {String} className - Добавляемый класс
 * @param {String} separator - разделитель строки с классом для функции split
 */
function addClass(obj, propertyName, className, separator = " ") {
  var classes = obj[propertyName].split(separator);

  for(var i = 0; i < classes.length; i++) {
    if(classes[i] == className) {
      return;
    }
  }
  classes.push(className);
  obj[propertyName] =  classes.join(' ');
}