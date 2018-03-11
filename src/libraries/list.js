/**
 * Функция выводит в цикле все значения связанного списка
 * @param {*} list 
 */
function printList(list) {
  var current = list;
  while(current) {
    console.log(current.value);
    current = current.next;
  }
}
/**
 * Функция выводит рекурсивно все значения связанного списка
 * @param {*} list 
 */
function printListRec(list) {

  var printL = function(list) {
    console.log(list.value);
    if(list.next) {
      printL(list.next);
    }
  }

  printL(list);
}

/**
 * Функция выводит в цикле значения связанного списка в обратной последовательности
 *
 * @param {*} list 
 */
function printReverseList(list) {
  var current = list;
  var arr = [];
  while(current) {
    arr.push(current['value']);
    current = current.next;
  }

  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

/**
 * Функция выводит рекурсивно значения связанного списка в обратной последовательности
 * 
 * @param {*} list 
 */
function printReverseListRec(list) {
  
  var printL = function(list) {
    if(list.next){
      printL(list.next);
    }
    console.log(list.value);
  }

  printL(list);
}