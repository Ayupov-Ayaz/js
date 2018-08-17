function CoffeeMachine() {
    // Наследуемся от класса Machine
    Machine.apply(this, arguments);

    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timeoutId;

    var onReadyMethod = function() {
        alert('Кофе готово!');
    };

    this.isRunning = function() {
        return !!timeoutId;

    };

    // переопределение методов родителя
    var parentEnable = this.enable;
    this.enable = function () {
        parentEnable();
        console.log('enable() in CoffeeMachine');
    };

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable();
        if(timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / this._power;
    }

    function onReady() {
        return onReadyMethod();
    }

    this.run = function() {
        timeoutId = null;
        if(!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timeoutId = setTimeout(function(){
            onReady();
        }, getBoilTime());
    };

    this.stop = function() {
        clearTimeout(timeoutId);
    };

    this.setOnReady = function(callback) {
        onReadyMethod = callback;
    }
}