function Machine(power) {
    var self = this;
    // через нижнее подчеркивание означает, что эту переменную можно использовать только внутри класса родителя и детей
    // то есть protected, нельзя трогать эту переменную из вне
    self._power = power;
    self._enabled = false;

    this.enable = function() {
        console.log('enable() in Machine');
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

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

    // переопределение методов родителя
    var parentEnable = this.enable;

    this.isRunning = function() {
        return !!timeoutId;
    };

    this.enable = function () {
        parentEnable();
        console.log('enable() in CoffeeMachine');
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