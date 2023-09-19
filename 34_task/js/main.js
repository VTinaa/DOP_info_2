// 2. Напишіть функцію пошуку найбільшого спільного дільника.

{
    function findGCD(a, b) {
        if (b == 0) {
            return a;
        } else {
            return findGCD(b, a % b);
        }
    }
    console.log(findGCD(30, 15))
}



// 3. Напишіть функцію для пошуку максимальної цифри у числі.

{
    function maxDigit(number) {
        if (number < 10) {
            return number;
        }

        let maxInRest = maxDigit(Math.floor(number / 10));

        let currentDigit = number % 10;
        return Math.max(currentDigit, maxInRest);
    }
    console.log(maxDigit(56789))
}


// 4. Напишіть функцію, яка визначає чи є передане число простим.


{
    //2
    function isPrime(number, divisor = 2) {
        if (number <= 1) {
          return false;
        }
        if (number <= 3) {
          return true;
        }
        if (number % divisor === 0) {
          return false;
        }
        if (divisor * divisor > number) {
          return true;
        }
        return isPrime(number, divisor + 1);
      }

      console.log(isPrime(17))
}


// 5. Напишіть функцію для виведення усіх множників, переданих числу у зростаючому порядку.Наприклад: число 18 – множники 2*3*3.


{
    function findFactors(number, divisor = 2) {
       
        if (number <= 1) {
          return [];
        }
        
        if (number % divisor == 0) {

          let factors = [divisor, ...findFactors(number / divisor, divisor)];
          return factors;
        } else {
         
          return findFactors(number, divisor + 1);
        }
      }
      
     
      console.log(findFactors(18).join('*'))

}


//6. Написати функцію, яка повертає число Фібоначчі за переданим порядковим номером.Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на тому, що кожне число дорівнює сумі двох попередніх чисел. Наприклад: порядковий номер 3 – число 2, порядковий номер 6 – число 8.

{
    function fibonacci(n) {
        if (n <= 0) {
          return 0;
        } else if (n == 1) {
          return 1;
        } else {
      
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      }
      
      let n = 6;
      let result = fibonacci(n);
      console.log(`Число Фібоначчі з порядковим номером ${n} - ${result}`);
}

