function Fridge(power) {
    Machine.apply(this, arguments);
    // массив с едой
    var food = [];

    // максимальное количество еды
    var maxFood = power / 100;

    this.addFood = function(arg1, arg2, arg3){
        if(!this._enabled) {
            throw new Error('Нельзя добавлять еду в выключенный холодильник');
        }
        if(food.length >= maxFood) {
            throw new Error('Нельзя добавлять больше еды. Емкость холодильника составляет - ' + maxFood + ' ед. продуктов.');
        }
        for(var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };

    this.removeFood = function(removeFood) {
        var i = food.indexOf(removeFood);
        if( i !== -1 ) {
            food.splice(i, 1);
        }
    };

    var parentDisable = this.disable;
    this.disable = function() {
        if(food.length > 0) {
            throw new Error('Нельзя выключать холодильник с едой');
        }
        parentDisable();
    };
    // получить определенную еду
    this.filterFood = function(callback) {
        return food.filter(callback);
    };


    // посмотреть что в холодильнике
    this.getFood = function() {
        return food.slice();
    }
}