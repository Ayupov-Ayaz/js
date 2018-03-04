
var assert = chai.assert;
before(function() {console.log('Начало тестов')});
after(function() {console.log('Конец тестов')});
  
describe("pow", function() {
  beforeEach(function() { console.log('Запуск теста pow')});
  afterEach(function() { console.log('Выход из теста pow')});
  
  it("Возводит в степень",
    function(){
      assert.equal(pow(2,3), 8);
    })
});

describe("fibo", function() {
  beforeEach(function() { console.log('Запуск теста fibo')});
  afterEach(function() {console.log('Выход из теста fibo')});
  
  it("Вычисление суммы чисел фибоначи",
     function(){
      assert.equal(fibo(7), 13);
     });
})