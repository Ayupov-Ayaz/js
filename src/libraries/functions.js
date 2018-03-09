
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


// Функция для сравнения
function compare(x, y){
  if(x == y)
    return 0;
  if(x > y)
    return 1;
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