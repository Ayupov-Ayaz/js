
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
function ask(question, yes, no){
    confirm(question) ? yes() : no() ;
}

ask('are you gay ?',
    function(){alert('Are you serios?')}, 
    function(){alert('Welcome to my home!')}
);

// Возможность создать функцию на лету с помощью конструкции new.
// Первым параметром передается строка в которой через запятую перечисляются переменные
// Вторым параметром передается строка - тело функции
var myFunc = new Function('a,b,c', 'return b * b - 4 * a * c');


// Рекурсия
function pow(x, n){
    if(n != 1)
        return x * pow(x, n - 1);    
    else
        return x;
}