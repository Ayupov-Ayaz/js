
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
function confirm(message){
    alert(message);
}
 // Function Expression
var confirm = function(message){
   alert(message);
};
// Преимущество Function Expression:
var age = 17;
var sayHello = age > 18 ? function (){alert('доступ открыт')} : function () {alert('доступ закрыт')}
// функцию можно распечатать, если указать лишь его название:  alert(sayHello);
