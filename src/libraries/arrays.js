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