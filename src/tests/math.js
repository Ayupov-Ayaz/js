
var assert = chai.assert;

describe("pow", function(){
  it("Возводит в степень",
    function(){
      assert.equal(pow(2,3), 8);
    })
});

describe("fibo", function(){
  it("Вычисление суммы чисел фибоначи",
     function(){
      assert.equal(fibo(7), 13);
     });
})