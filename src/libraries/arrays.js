/**
 * Посмотреть последний элемент массива
 * @param {Array} array 
 */
function getLastElementInArray(array) {
  return array[array.length - 1];
}

/**
 * Функция вытаскивает последний элемент массива
 * @param {Array} array 
 */
function pop(array) {
  var lastElement = array[array.length - 1];
  array.length--;
  return lastElement;
}

/**
 * Добавление в конец массива
 * @param {Array} array 
 * @param {any} element 
 */
function push(array, element) {
  array[array.length] = element;
}

/**
 * Функция для замены элемента в массиве
 * @param {Array} array - массив где нужно заменить элемент 
 * @param {any} element - элемент на который нужно заменить 
 * @param {number} position - позиция в массиве
 */
function swapElementInArray(array, element, position) {
  var count = array.length;
  if(count <= +position ) return false;
  if(position > 0) {
    array[position] = element;
  }else {
    array[count - 1 + position] = element;
  }
  return true;
}

/**
 * Функция получения с удалением первого элемента массива
 * @param {Array} array 
 */
function shift(array) {
  var firstElement = array[0];

  for(var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
  return firstElement;
}

/**
 * Получение с удалением первого элемента массива
 * @param {Array} array 
 * @param {any} element 
 */
function unshift(array, element) {
  for(var i = array.length; i > -1; i--) {
    array[i] = array[i - 1];
  }
  array[0] = element;
}

/**
 * Получение рандомного элемента массива
 * @param {Array} array 
 */
function getRandomElementInArray(array) {
  var index = randomNumber(0, array.length - 1);
  return array[index];
}

/**
 * Функция заполнения массива через функцию prompt
 * для выхода нужно передать не число
 */
function setArrayNumbers() {
  var numbers = [];

  while(true) {
    var currentElement = prompt('Введите число?');
    if(!isNumeric(currentElement)) {
      return numbers;
    }

    numbers[numbers.length] = +currentElement;
  } 
}

function findInArray(array, value) {
  for( var i = 0; i < array.length; i++) {
    if(array[i] === value) return i;
  }
  return -1;
}

/**
 * 
 * @param {Array} array - Массив с числами
 * @param {number} min - минимальный диапазон (вкл)
 * @param {number} max - максимальный диапазон (вкл)
 */
function filterRange(array, min, max) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] >= min && array[i] <= max) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

/**
 * Функция выводит простые числа в диапазоне от 1 до N
 * @param {number} number - N
 */
function primes(number) {
  var numbers = [];
  for(var i = 0; i < number; i++) {
    numbers[i] = i + 1;
  } 

  for(var i = 1; i < numbers.length - 1; i++) {
    if(numbers[i] == 0) continue;
    for(var j = i +1; j < numbers.length; j++){
      if(numbers[j] != 0 && isInteger(numbers[j] / numbers[i])) {
        numbers[j] = 0;
      }
    }
  }

  newNumbers = [];
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] != 0) {
      newNumbers[newNumbers.length] = numbers[i];
    }
  }
  return newNumbers;
}