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

