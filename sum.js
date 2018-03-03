
// вычисление суммы чисел в цикле
function sum_to(x){
    var sum = 0;
    for(var i = +x; i > 0; i--){
        sum += i;
    }
    return sum;
}

// вычисление суммы чисел в рекурсии
function sum_to_r(x){
    if(x == 1)
        return 1;    
    return x + sum_to_r(x - 1);
}
// вычисление суммы чисел по формуле суммы арифметической прогрессии
function sum_to_ar(x){
    return x * (x + 1) / 2;
}

// вычисление суммы чисел фибоначи
function sum_fibo(x){
    if(x == 1 || x == 2){
        return 1;
    }

    return sum_fibo(x - 1) + sum_fibo(x - 2);
}