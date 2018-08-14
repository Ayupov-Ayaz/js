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
 * вызов работает так: sum(a)(b)(c)(d)
 * @param a
 * @returns {function(*): *}
 */
function sum(a) {
    var currentSum = a;

    function s(b) {
        currentSum += b;
        return s;
    }

    s.toString = function() {
        return currentSum;
    };

    s.valueOf = function() {
        return currentSum;
    };

    return s;
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

/**
 * Создает калькулятор
 * @returns {calculator}
 */
function makeCalculator() {
    var a, b;
    var calculator = function(){};

    var read = function() {
        this.a = parseInt(prompt('Введите a =', '0'));
        this.b = parseInt(prompt('Введите b =', '0'));
    };
    var sum = function() {
        return this.a + this.b;
    };

    var mul = function () {
        return this.a * this.b;
    };

    calculator.read = read;
    calculator.sum = sum;
    calculator.mul = mul;
    return calculator;
};
