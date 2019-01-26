
var assert = chai.assert;
before(function() {console.log('Начало тестов')});
after(function() {console.log('Конец тестов')});
  
describe("pow", function() {
  beforeEach(function() { console.log('Запуск теста pow')});
  afterEach(function() { console.log('Выход из теста pow')});

  it("Возведение натурального числа в положительную степень", function() {
    assert.equal(pow(2,3), 8);
  });
  
  it("При возведение в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2,-2)), "pow(2, -2) - не NaN");
  });

  it("При возведение в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 3.4)), "pow(2, 3.4) - не NaN");
  });

  it("При возведение 0 в 0 степень результат NaN", function() {
    assert(isNaN(pow(0, 0)));
  });

  it("При возведение числа > 0 в 0 степень результат 1", function() {
    assert.equal(pow(3,0), 1);
  });
});

describe("fibo", function() {
  beforeEach(function() { console.log('Запуск теста fibo')});
  afterEach(function() {console.log('Выход из теста fibo')});
  
  it("Вычисление суммы чисел фибоначи",
     function(){
      assert.equal(fibo(7), 13);
     });
})