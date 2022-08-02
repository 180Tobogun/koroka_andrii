// // 1 - Создать переменную каждого типа данных.
// let year1 = 12;
// console.log(typeof year1);
// let name = 'Andrii';
// console.log(typeof name);
// let boolean = true;
// console.log(typeof boolean);
// let bitIntNumber = 10n;
// console.log(typeof bitIntNumber);
// let nullian = null;
// console.log(typeof nullian);
// let symboll = Symbol('id');
// console.log(typeof symboll);
//
//
// // 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
// let greeting = 'Father!';
// console.log(greeting);
// console.log(greeting);
//
// greeting = 'Mother!';
// console.log(greeting);
// console.log(greeting);
// для var тоже самое

// 7 Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».

//
// const year = +prompt('Введите Ваш год рождения:');
// const age = 2022 - year;
// alert(age >= 16 ? (`Вам ${age} лет! Доступ разрешен!`) : (`Вам ${age} лет! Доступ запрешен!`));


// 8 - Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
//     Пользователь вводит стаж работы, а программа пишет ему надбавку.

// function moneyUp() {
//     const yearExperience = +prompt('Введите Ваш стаж работы:');
//     const salary = +prompt('Введите Ваш оклад:');
//     const percent = 0.15
//
//     if (yearExperience < 2) {
//         alert(`Вашего стажа недостаточно для надбавки!`)
//     } else if (yearExperience >= 2 && yearExperience < 15) {
//         const up = salary * percent;
//         alert(`Ваша надбавка равна : ${up} `)
//     } else if (yearExperience >= 15 && yearExperience <= 20) {
//         const up = salary * percent * 2;
//         alert(`Ваша надбавка равна : ${up} `)
//     } else {
//         const up = salary * percent * 3;
//         alert(`Ваша надбавка равна : ${up} `)
//     }
// }
//
// moneyUp();

// 12 - Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
//
// function houseNumber() {
//     const flatNumber = +prompt('Введите номер квартиры:');
//
//     if (flatNumber === 0 && flatNumber === 91) {
//         alert(`нет такой квартиры`)
//     } else if (flatNumber >= 1 && flatNumber <= 20) {
//         alert(`Ваш подьезд : 1 `)
//     } else if (flatNumber >= 21 && flatNumber <= 48) {
//         alert(`Ваш подьезд : 2`)
//     } else if (flatNumber >= 49 && flatNumber <= 90) {
//         alert(`Ваш подьезд : 3 `)
//     } else {
//         alert(`нет такой квартиры`)
//     }
// }
//
// houseNumber();

//         2 - Создать переменную var, let, const. Перезаписать их значения(не для const)      //

// var x = 1;
// x = 2;
//
// let y = 1;
// y = 2;


//  3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).              //

//
// let number = 17;
// console.log(17 + 'string');
//
// number = number.toString()
// console.log(number);
//
// let string = +prompt('123');
//
// const bigInt = 10n;
//
// const bigInt = BigInt(10);
//
// const bigInt = BigInt("10");
//
// const bigInt = BigInt("srtring");
//
// var bool = NaN;
// true === !false;
// Boolean(bool); //false
//
// var bool = 'false';
// !!bool; //true
// Boolean(bool); //true
//
// variable = null;
// console.log(variable);
// variable = undefined;
//
// variable = null;
//
// let id = Symbol("id");
//
// let id = 1 + ("1")
// console.log(id);
//
// const permanentName = {name: 'delete', number: 15};
// console.log(permanentName);
//
// let variable = new Object(null);


//  4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.      //

// var number = (1 + 1);
// console.log(number);

// var number = (1 + 'лет');
// console.log(number);

// var number = (1 + true);
// console.log(number);

// var number = (1 + null);
// console.log(number);

// var number = (1 + undefined);
// console.log(number);

// var number = (1 + 10n);
// console.log(number);

// var number = 1 + {'name': 1}
// console.log(number);

// var number = 1 + ("log");
// console.log(number);

// var string = ('string1' + 'string12');
// console.log(string);

// var string = (1 + 'string1');
// console.log(string);

// var string = ('string1' + true);
// console.log(string);

// var string = ('string1' + null);
// console.log(string);

// var string = ('string1' + undefined);
// console.log(string);

// var string = ('string1' + 10n);
// console.log(string);

// var string = 'string1' + {'number': 1}
// console.log(string);

// var string = 'string1' + ("log");
// console.log(string);

// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
// var string = (1 - 'лет');
// console.log(string);

// var string = ('string' - true);
// console.log(string);

// var string = ('string' - null);
// console.log(string);

// var string = ('string' - undefined);
// console.log(string);

// var string = ('string - 10n);
// console.log(string);

// var string = 'string' - {'log': 3}
// console.log(string);

// var string = 'string' - ("number");
// console.log(string);


//  6 - Задача (Условный оператор)
//  Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

//
// let userName = prompt("Введите логин", '');
// if (userName === 'kykold') {
//     let password = prompt('Введите пароль', '');
//     if (password === '1234asdQQ') {
//         alert( 'Добро пожаловать' );
//     } else if (password === '' || password === null) {
//         alert( 'Oшибка ввода' );
//     } else {
//         alert( 'Oшибка ввода' );
//     }
// } else if (userName === '' || userName === null) {
//     alert( 'Oшибка ввода' );
// } else {
//     alert( "Oшибка ввода" );
// }


// 9 - Задача (Условный оператор и свитч кейс)
//    Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//    9.1 Решить на иф елсах
//    9.2 Решить на свитч кейсе
//    9.3 Решить на тернарном операторе
//
// let day = +prompt('введите число от 1 до 7');
// if (day === 1) {
//     alert('monday')
// } else if (day === 2) {
//     alert('Tuesday')
// } else if (day === 3) {
//     alert('Wednesday')
// } else if (day === 4) {
//     alert('Thursday')
// } else if (day === 5) {
//     alert('Friday')
// } else if (day === 6) {
//     alert('Saturday')
// } else if (day === 7) {
//     alert('Sunday')
// }
// if (day >= 8) {
//     alert('читайте условие ввода')
// }
//
// let day = +prompt('введите число от 1 до 7');
// switch (day) {
//     case 1:
//         alert('monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     case 7:
//         alert('Sunday');
//         break;
//     default:
//         alert('читайте условие ввода');
// }
//
// let day = +prompt('введите число от 1 до 7');
// day === (1) ?
//     alert('monday') :
//     day === (2) ?
//         alert('Tuesday') :
//         day === (3) ?
//             alert('Wednesday') :
//             day === (4) ?
//                 alert('Thursday') :
//                 day === (5) ?
//                     alert('Friday') :
//                     day === (6) ?
//                         alert('Saturday') :
//                         day === (7) ?
//                             alert('Sunday') :
//                             alert('читайте условие ввода')


// 10 - Задача (Условный оператор)
//     Используя конструкцию if..else, напишите код,
//     который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//
//
// let number1 = +prompt('enter value');
//
// if (number1 >= 1) {
//     alert(1);
// } else if (number1 <= -1) {
//     alert(-1);
// } else alert(0);


//
// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//               let message;
//
//         if (login == 'Сотрудник') {
//                message = 'Привет';
//         } else if (login == 'Директор') {
//                message = 'Здравствуйте';
//         } else if (login == '') {
//                message = 'Нет логина';
//         } else {
//                message = '';
//         }
//
// let login = prompt('введите логин');
// login === ('сотрудник') ?
//     alert('привет') :
//     login === ('директор') ?
//         alert('Здравствуйте') :
//         login === '' ?
//             alert('нет логина') :
//             alert('');



//   13 - Задача (Условный оператор)
//   Напишите if..else, соответствующий следующему switch:
//
//    switch (browser) {
//      case 'Edge':
//        alert( "You've got the Edge!" );
//        break;
//
//      case 'Chrome':
//      case 'Firefox':
//      case 'Safari':
//      case 'Opera':
//        alert( 'Okay we support these browsers too' );
//        break;
//
//      default:
//        alert( 'We hope that this page looks ok!' );
//     }
//
// let browser = prompt('check');
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//         || browser === 'Safari'
//             || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

//
//
// 14 - Задача (свитч кейс)
// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:
//
//     const number = +prompt('Введите число между 0 и 3', '');
//
//     if (number === 0) {
//         alert('Вы ввели число 0');
//     }
//
//     if (number === 1) {
//         alert('Вы ввели число 1');
//     }
//
//     if (number === 2 || number === 3) {
//         alert('Вы ввели число 2, а может и 3');
//     }

//
// const number = +prompt('Введите число между 0 и 3', '')
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//         break;
//     default:
//         alert('читайте условия ввода');
// }