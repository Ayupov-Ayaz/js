
// вычисление суммы чисел в цикле
function sum_to(x){
    var sum = 0;
    for(var i = +x; i > 0; i--){
        sum += i;
    }
    return sum;
}

/** вычисление суммы чисел в рекурсии
    функция записана в формате Named Function Expression,
    рекурсию желательно записывать именно так, что бы обезопасить от случаем,
    когда наша функция в каком нибудь месте кода будет скопирована под другим именем
*/
var sum_to_r = function s(x){
    if(x == 1)
        return 1;    
    return x + s(x - 1);
}
// вычисление суммы чисел по формуле суммы арифметической прогрессии
function sum_to_ar(x){
    return x * (x + 1) / 2;
}

// вычисление суммы чисел фибоначи
var fibo = function f(x){
    if(x == 1 || x == 2){
        return 1;
    }
    return f(x - 1) + f(x - 2);
}

// вычисление факториала
function factorial(x){
    var f = 1;
    for(var i = 1; i <= x; i++){
        f *= i;
    }
    return f;
}

