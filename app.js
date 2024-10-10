// 1

// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],

// };

// const output = {
//     firstName: me.firstName,
//     lastName: me.lastName,
//     age: me.age,
//     languages: me.languages.join(','),
//     friends: me.friends.join('+')
// }
// console.log(output);


// 2
// function createSquareObject(son) {
//     const javop = {};

//     for (let i = 1; i <= son; i++) {
//         javop[i] = i * i;

//     }
//     return javop;

// }

// let output = createSquareObject(9);
// console.log(output);


// 3 ()

// 4
// function countLetter(input){
//     const letterOnly = input.replace(/[^a-zA-Z]/g, '');
//     return letterOnly.length;
// }
// const inputs = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// const letterCount = inputs.map(countLetter);
// console.log(letterCount);


// 5
// const products = {
//     "Apelsin": 10000,
//     "Olma": 12000,
//     "Mandarin": 8000,
//     "Banan": 20000
// }

// const yigindi = (Object.values(products)).reduce((sum, price) => sum +  price, 0);
// console.log(yigindi);


// 6
// function defineObject(obj) {
//     const keys = Object.keys(obj);
//     return keys.every(keys => typeof key === "string");
// }
// console.log(defineObject({ abc: 1, 123: 2, d: 5 }));


// 7
