// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//    а вторым - сколько элементов должно быть в массиве.
//    Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(a, b) {
//     let array = [];
//     for (let i = 0; i < b; i++) {
//         array.push(a);
//     }
//     return array;
// }
//
// console.log(arrayFill('x', 5));


// 2) Сделайте функцию isNumberInRange,
//    которая параметром принимает число и проверяет,
//    что оно больше нуля и меньше 10.
//    Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(num) {
//     return num > 0 && num <= 10;
// }
//
// console.log(isNumberInRange(5))


// 3) Сделайте функцию isEven() (even - это четный),
// которая параметром принимает
// целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(num) {
//     return num % 2 === 0;
// }
//
// console.log(isEven(4))

// 4) Дан массив с целыми числами. Создайте из него новый массив,
//    где останутся лежать только четные из этих чисел.
//    Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// function isEven(num) {
//     return num % 2 === 0;
// }
//
// let arrNumber = [0, 1, 2, 3, 4, 5, 6];
// let array = [];
//
// for (let i = 0; i < arrNumber.length; i++) {
//     if (isEven(i)) {
//         array.push(i);
//     }
// }
//
// console.log(array);

// 5) Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function mathFunction(a, b) {
//     let arr = a ** b;
//     console.log(arr);
// }
//
// mathFunction(2, 4);

// 6) Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// function age(a) {
//     if (a < 16) {
//         console.log('вы еще молоды')
//     } else if (a >= 16) {
//         console.log('добро пожаловать')
//     }
// }
//
// age(17);

// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//    В таком случае выведите сообщение – “Введите возраст”.
//    Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// function age(a) {
//     if (a < 16) {
//         console.log('вы еще молоды')
//     } else if (a >= 16) {
//         console.log('добро пожаловать')
//     } else if (a === undefined || a === 0)
//         console.log('введите возраст')
//
// }
//
// age(16);

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function ucFirst(word) {
//     return word[0].toUpperCase() + word.substr(1)
// }
//
// let str = 'our bond is iron';
// let result = [];
//
// let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     result.push(ucFirst(arr[i]));
// }
// let strRes = result.join(' ');
//
// console.log(result);
// console.log(strRes);

// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
//    ( с помощью функции, которая принимает строку)

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.substr(1);
// }
//
// let textString = 'var_text_hello';
// let res = [];
// let arr = textString.split('_');
// res.push(arr[0]);
//
// for (let i = 1; i < arr.length; i++) {
//     let str1 = ucFirst(arr[i]);
//     res.push(str1);
// }
//
// let resultString = res.join('');
// console.log(resultString);

// 10) Сделайте функцию inArray, которая определяет,
//     есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента,
//     а вторым - массив, в котором делается поиск.
//     Функция должна возвращать true или false.
//
// function inArray(k, j) {
//     for (let i = 0; i < j.length; i++) {
//         if (j[i] === k) {
//             return true;
//         }
//     }
//     return false;
// }
//
// let arr = ['I', 'live', 'in', 'Ukraine']
// console.log(inArray('I', arr));