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