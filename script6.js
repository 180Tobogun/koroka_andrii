// class Human {
//     constructor(height, weight, name, birthday, gender, disability) {
//         this.height = height;
//         this.weight = weight;
//         this.name = name;
//         this.birthday = birthday;
//         this.gender = gender;
//         this.disability = disability;
//     }
//
//     get getInfo() {
//         return {
//             name: this.name,
//             birthday: this.birthday,
//             gender: this.gender,
//             weight: this.weight,
//             height: this.height,
//             disability: this.disability
//         }
//     }
//
//     get getHumanName() {
//         console.log(`Привет! Меня зовут ${this.name}`)
//     }
//
//     set setDisability(disability) {
//         this.disability = disability;
//     }
//
//     set setNewName(name) {
//         this.name = name;
//     }
//
// }
//
// const firstHuman = new Human('193', '112', 'John',
//     new Date('1992.18.10'), 'male', false);
// firstHuman.getInfo;
// firstHuman.getHumanName;
//
// // firstHuman.setNewName;
// // firstHuman.setDisability;
//
// class frontEndDev extends Human {
//     constructor(height, weight, name, birthday, gender, disability, start, company) {
//         super(height, weight, name, birthday, gender, disability);
//         this.start = start;
//         this.company = company;
//     }
//
//     get getFrontEndDevNameStart() {
//         console.log(`Привет! Меня зовут ${this.name}, я Фронтэнд разработчик работаю с ${this.start}`)
//     }
//
//     get getMoney() {
//         let arr1 = 0;
//         let moneyOfCareer = this.company.reduce((acc, el) => {
//             acc = Math.abs(el.end.getTime() - el.start.getTime());
//             acc = Math.floor((acc / (1000 * 60 * 60 * 25)) / 30);
//             acc = acc * el.salaryPerMonth;
//             arr1 += acc;
//         }, 0);
//         console.log(arr1);
//     }
//
//     myCompany(company) {
//         let searchCompany = this.company.filter(obj => {
//             return obj.companyName === company
//         });
//         console.log(searchCompany);
//     }
//
//     addCompany(obj) {
//         this.company.push(obj);
//         console.log(this.company);
//     }
//
//
// }
//
// const frontEndDevCareer = new frontEndDev(
//     155,
//     55,
//     'Andrii',
//     new Date('1992-18-10'),
//     'male',
//     false,
//     new Date('2022-05-05'),
//
//     [{
//         start: new Date('2022-05-05'),
//         end: new Date('2022-09-05'),
//         salaryPerMonth: 1000,
//         position: 'middle',
//         companyName: 'Windows',
//     },
//         {
//             start: new Date('2022-05-05'),
//             end: new Date('2022-05-10'),
//             salaryPerMonth: 2000,
//             position: 'middle',
//             companyName: 'IoS',
//         },
//         {
//             start: new Date('2022-11-01'),
//             end: new Date('2021-12-01'),
//             salaryPerMonth: 1500,
//             position: 'senior',
//             companyName: 'Ukraine',
//
//         }],);
//
// console.log(frontEndDevCareer.getInfo);
// console.log(frontEndDevCareer);
// frontEndDevCareer.getHumanName;
// frontEndDevCareer.getFrontEndDevNameStart
// frontEndDevCareer.getMoney;
// frontEndDevCareer.myCompany();
// frontEndDevCareer.addCompany({
//     start: new Date('2022-11-01'),
//     end: new Date('2022-12-01'),
//     salaryPerMonth: 1500,
//     position: 'middle',
//     companyName: 'Ukraine',
// });
//
// tool = ['кирка', 'топор'];
//
// class builder extends Human {
//     constructor(height, weight, name, birthday, gender, disability, tool, speed, location) {
//         super(height, weight, name, birthday, gender, disability);
//
//         this.speed = speed;
//         this.tool = tool;
//         this.location = location;
//     }
//
//     building(Area) {
//         let workTime = Math.floor(this.speed * Area / 60);
//         let sumHour = workTime % 24;
//         let workDay = Math.floor(workTime / 24);
//         let day = workDay % 7;
//         let workWeek = Math.floor(day / 7);
//         let week = workWeek % 4.3;
//         let workMonth = Math.floor(workWeek / 4.3);
//         let month = workMonth % 12;
//         let workYear = Math.floor(workMonth / 12);
//         if (workTime < 24) {
//             console.log(`Работа займет ${workTime}`);
//         } else if (workTime > 24 && workDay < 7) {
//             console.log(`Работа займет ${workDay} дней и ${sumHour} часов`);
//         } else if (workDay > 7 && workWeek < 4) {
//             console.log(`Работа займет ${workWeek} недель ${day} дней и ${sumHour}`);
//         } else if (workWeek > 4.3 && workMonth < 12) {
//             console.log(`Работа займет ${month} месяцев ${week} недель ${day} дней ${sumHour} часов`)
//         } else {
//             console.log(`Работа займет ${workYear} лет ${month} месяцев ${week} недель ${day} дней ${sumHour} часов`)
//         }
//
//     }
//
// }
//
// const myBuilder = new builder('193', '112', 'Andrii', '1992-18-10', 'male', false,
//     tool, 7);
//
// console.log(myBuilder.getInfo);
// myBuilder.building();
// myBuilder.building(3000);
//
