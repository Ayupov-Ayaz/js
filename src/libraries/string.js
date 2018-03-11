/**
 * Функция для преобразования строки типа background-color в backgroudColor
 * Применяется для css 
 * @param {string} str 
 */
function camelize(str) {
  var strArr = str.split('-');
  for(var i = 1; i < strArr.length; i++) {
    strArr[i] = ucFirst(strArr[i]);
  }
  str = strArr.join('');
  return str;
}

/**
 * Функция возвращает строку с заглавной буквой
 * @param {string} str 
 */
function ucFirst(str) {
  if(str.length < 1) return;

  var newString = str.charAt(0).toUpperCase();
  newString += str.slice(1);
  return newString;
}