
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

// Рекурсивная функция для возведения в степень числа
function pow_rec(x, n) {
  if(!isInteger(n) || !isPositiveInt(n)){
    console.log('nan');
    return NaN;
  }

  if(n != 1)
    return x * pow(x, n - 1);    
  else
    return x;
}

// Возведение в степень числа циклом
function pow(x, n) {
  if(!isInteger(n) || !isPositiveInt(n)) {
    return NaN;
  }
    
  var result = x;
  
  for(var i = 1; i < n; i++) {
    result *= x;   
  }
  return result;
}

// Целое ли число
function isInteger(num) {
  return (num ^ 0) === num;
}

// Положительное ли число
function isPositiveInt(num) {
  return num > 0;
}

