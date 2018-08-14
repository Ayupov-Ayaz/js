/**
 * Создать счетчик
 * @returns {{set: set, reset: reset, getNext: (function(): number)}}
 */
function makeCounter() {
    var currentCount = 1;

     function counter() {
        return currentCount++;
     }

     counter.set = function(value) {
         currentCount = value;
     }

     counter.reset = function() {
         currentCount = 1;
     }

     return counter;
}

/**
 * Пример работы callback function
 * вызов работает так: sum(a)(b)
 * @param a
 * @returns {function(*): *}
 */
function sum(a) {
    return function(b) {
        return a + b;
    }
}

/**
 * Создание буфера
 * @returns {Function}
 */
function makeBuffer() {
    var buffer = {};

    function currentBuffer(key, value) {
        if(key === undefined) {
            return buffer;
        } else if(value === undefined) {
            return buffer[key];
        } else {
            buffer[key] = value;
        }
    }

    currentBuffer.clear = function(key) {
        if(key === undefined) {
            buffer = {};
        } else if(key in buffer) {
            delete buffer[key];
        }

    }
    return currentBuffer;


}