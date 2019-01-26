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