/**
 * Функция добавляет в поле класса дополнительное свойство, если его там нет
 * @param {Object} obj - Объект
 * @param {String} propertyName - Свойство поля 
 * @param {String} className - Добавляемый класс
 * @param {String} separator - разделитель строки с классом для функции split
 */
function addClass(obj, propertyName, className, separator = " ") {
  var classes = obj[propertyName].split(separator);

  for(var i = 0; i < classes.length; i++) {
    if(classes[i] == className) {
      return;
    }
  }
  classes.push(className);
  obj[propertyName] =  classes.join(' ');
}

/**
 * Функция для удаления класса из свойств объекта
 * @param {Object} obj 
 * @param {string} propertyName  свойство объекта
 * @param {string} className  название класса, который нужно удалить
 * @param {string} separator  разделитель строки с классом для функции split 
 */
function removeClass(obj, propertyName, className, separator = ' ') {
  var classes = obj[propertyName].split(separator);
  
  var changed = false;
  for(var i = 0; i < classes.length;) {
    if(classes[i] == className) {
      classes.splice(i, 1);
      changed = true;
    }else{
      i++;
    }
  }
   
  if(changed) {
    var strClasses = classes.join(' ');
    obj[propertyName] = strClasses;
  }
}

/**
 * Сортировка массива объектов по их свойству
 * 
 * @param {Array} array - Массив объектов 
 * @param {string} property - свойство по которому нужно отсортировать
 */
function sortObjectsByProperty(array, property) {
  
  var swap = function(a,b) {
    tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
  }

  for(var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if(array[j][property] < array[i][property]) {
        swap(i,j);
      }
    }
  }
}

/**
 * Определяет пустой ли объект
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj) {
  var count = 0;
  for(var propery in obj) {
    count++;
  }
  if(count === 0) return true;
  return false;
}

/**
 * Функция создает объект калькулятор
 */
function makeCalculator() {
    var calculator = {};
    calculator.a = 0;
    calculator.b = 0;

    // functions
    calculator.read = function() {
        this.a = parseInt(prompt('Введите a=', '0'));
        this.b = parseInt(prompt('Введите b=', '0'));
    };

    calculator.sum = function() {
        return this.a + this.b;
    };

    calculator.mul = function() {
        return this.a * this.b;
    };

    return calculator;
}

/**
 * Создание объекта калькулятор через конструктор
 * @constructor
 */
function Calculator() {
    this.read = function() {
        this.a = parseInt(prompt('Введите а=','0'));
        this.b = parseInt(prompt('Введите b=','0'));
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    }
}