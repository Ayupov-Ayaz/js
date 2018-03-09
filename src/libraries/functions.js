
function say(from, message){
  // значение переменной можно присваивать с помощью оператора или,
  // такая запись равносильно указанию дефолтного значения в аргументах функции
  var message = message || "текст не передан!";
  var from = "**"+ from + "**";
  alert(from + ": " + message);
}
/**
* Function Expression и Function Declaration
* такие записи отличаются лишь тем, что  функция объявленная как Function Declaration,
* создает интерпритатором до выполнения кода. Следовательно она доступна как до объявления функции,
* так и после.
*/
// Function Declaration
function shoMessage(message){
  alert(message);
}
// Function Expression
var shoMessage = function(message){
 alert(message);
};
// Преимущество Function Expression:
var age = 17;
var sayHello = age > 18 ? function (){alert('доступ открыт')} : function () {alert('доступ закрыт')}
// функцию можно распечатать, если указать лишь его название:  alert(sayHello);

// анонимная функция
// ask('are you gay ?',
//     function(){alert('Are you serios?')}, 
//     function(){alert('Welcome to my home!')}
// );

function ask(question, yes, no){
    confirm(question) ? yes() : no() ;
}

// Возможность создать функцию на лету с помощью конструкции new.
// Первым параметром передается строка в которой через запятую перечисляются переменные
// Вторым параметром передается строка - тело функции
var myFunc = new Function('a,b,c', 'return b * b - 4 * a * c');


/**
 * Функция сравнения
 * 0 - равны
 * 1 - x больше чем y
 * -1 - x меньше чем y 
 * -2 - нельзя сравнить
 * @param {any} x 
 * @param {any} y 
 */
function compare(x, y){
  // Сравнение массивов
  if(Array.isArray(x) && Array.isArray(y)) {
    if(x.length > y.length) return 1;
    else if( x.length < y.length) return -1;
     
    for( var i = 0; i < x.length; i++) {
      if(x[i] > y[i]) return 1;
      else if(x[i] < y[i]) return -1;
    }
    return 0;
  }
  // Если передано массив и не массив
  if(!Array.isArray(x) && Array.isArray(y) || Array.isArray(x) && !Array.isArray(y)) {
    return -2;
  }

  if(x == y)
    return 0;
  if(x > y)
    return 1;
  // NaN нельзя сравнивать
  if(isNaN(x) || isNaN(y)) {
    return -2;
  } 
  return -1;
}

/**
 * Функция возвращает все вхождения в строке в виде массива
 * @param {string} str - переданная строка
 * @param {string} find - что нужно найти
 */
function indexOfInString(str, find) {
  str = str + '';
  var position = -1;
  
  var positions = new Array();
  while((position = str.indexOf(find, position + 1)) != -1) {
    positions.push(position);
  }
  return positions;
}
/**
 * Функция возвращает строку с заглавной буквой
 * @param {string} str 
 */
function ucFirst(str) {
  if(str.length < 1) return str;
  
  var newString = str.charAt(0).toUpperCase();
  newString += str.slice(1);
  return newString; 
}

/**
 * Функция проверяет строки на наличие запрещенных слов
 * @param {string} str 
 */
function checkSpam(str) {
  if(str.length < 1) return false;
  var lowerStr = str.toLowerCase();
  var spam = ['terror', 'XXX'];
  for(var i = 0; i < spam.length; i++) {
    if(lowerStr.indexOf(spam[i]) != -1) return true;
  }
  return false;
}

/**
 * Функция для обрезания строки
 * @param {string} str 
 * @param {number} maxlength 
 */
function trunCate(str, maxlength) {
  var newString = str.trim();
  return newString.length < maxlength ? newString 
    : newString.slice(0, maxlength - 3) + '...';  
}

/**
 * Функция принимающая строку в валюте и возвращающая число
 * @param {string} str 
 */
function extractCurrencyValue(str) {
  var number;
  if(!isNaN(number = parseInt(str))) return number;
  return parseInt(str.slice(1));
}

/**
 * Проверка объекта на наличие свойств у объекта
 * @param {object} obj 
 */
function isEmpty(obj) {
  for(var key in obj) {
    return false;
  }
  return true;
}