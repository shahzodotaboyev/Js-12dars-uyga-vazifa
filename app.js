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
// function removeFalsyValues(obj) {
//     let result = {}; {
//     }

//     Object.keys(obj).forEach(key => {
//         if (obj[key])
//             result[key] = obj[key];
//     })
//     return result;
// }
// const input = { a: false, b: 12, c: true, d: 0 };
// const output = removeFalsyValues(input);
// console.log(output);

// 8
// function countOccurrences(arr) {
//     let result = {};
//     arr.forEach(num => {
//         if (result[num]) {
//             result[num]++;
//         }else{
//             result[num] = 1;
//         }
//     });
//     return result;
// }

// const input = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const output = countOccurrences(input);
// console.log(output);

// 9
// function splitNumber(num){
//     const numStr = num.toString();
//     const result = {};

//     result.birlik = numStr.slice(-3);
//     result.minglik = numStr.slice(-6, -3);
//     result.millionlik = numStr.slice(-9, -6);
//     result.milliardlik = numStr.slice(-12, -9);
//     result.trilionlik = numStr.slice(-15,-12)
//     return result; 

// }

// const input = 8945472985629;
// const output = splitNumber(input);
// console.log(output);



// 10
// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   books.forEach((book, index) => {
//     const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${index + 1}. ${book.author}ning "${book.title}" kitobi ${readStatus};`);
//   });
  

// 11