
/**
 * Вычисление суммы чисел
 * @param {number} x 
 */
function sum_to(x){
  var sum = 0;
  for(var i = +x; i > 0; i--){
    sum += i;
  }
  return sum;
}

/**
 * Вычисление суммы чисел в рекурсии
 * @param {number} x 
 */
var sum_to_recurs = function s(x){
  /** функция записана в формате Named Function Expression,
  * рекурсию желательно записывать именно так, что бы обезопасить от случаем,
  * когда наша функция в каком нибудь месте кода будет скопирована под другим именем
  */
  if(x == 1)
    return 1;    
  return x + s(x - 1);
}

/**
 * Вычисление суммы числа по формуле арифметической прогресии
 * @param {number} x 
 */
function sum_to_ar(x){
  return x * (x + 1) / 2;
}

/**
 * Вычисление суммы чисел Фиббоначи
 * @param {number} x 
 */
var fibo = function f(x){
  if(x == 1 || x == 2){
    return 1;
  }
  return f(x - 1) + f(x - 2);
}

/**
 * Вычисление факториала числа
 * @param {number} x 
 */
function factorial(x){
  var f = 1;
  for(var i = 1; i <= x; i++){
    f *= i;
  }
  return f;
}

/**
 * Возведение числа в степень с помощью рекурсии
 * @param {number} x 
 * @param {number} n 
 */
var pow_recurs = function pow_r(x, n) {
  if(!isInteger(n) || !isPositiveInt(n)){
    return NaN;
  }

  if(n != 1)
    return x * pow_r(x, n - 1);    
  else
    return x;
}

/**
 * Возведение числа в степень
 * @param {number} x - число
 * @param {number} n - степень
 */
function pow(x, n) {
  if(!isInteger(n) || !isPositiveInt(n) || (x == 0 && n == 0)) {
    return NaN;
  }
  
  if(n == 0 && x != 0)
    return 1;

  var result = x;
  
  for(var i = 1; i < n; i++) {
    result *= x;   
  }
  return result;
}

/**
 * Проверка на число
 * @param {any} n
 */
function isNumeric(n) {
  /** 
   * isFinite -  преобразует аргумент к числу и возвращает true,
   * если это не Infinity/-Infinity/NaN. Таким образом, правая часть отсеет
   *  заведомо не-числа, но оставит такие значения как true/false/null  
   * и пустую строку '', так как они корректно преобразуются в числа.
   * Для их проверки нужна левая часть.
   * Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
  */
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Проверка числа на целостность
 * @param {number} num 
 */
function isInteger(num) {
  return (num ^ 0) === num;
}

/**
 * Проверка на положительное число
 * @param {number} num
 */
function isPositiveInt(num) {
  return num >= 0;
}

