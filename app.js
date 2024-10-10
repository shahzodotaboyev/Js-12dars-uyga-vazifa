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

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   let totalSum = 0;
  
//   products.forEach(product => {
//     const discountedPrice = product.price * (1 - product.discount / 100);
//     totalSum += discountedPrice * product.quantity;
//   });
  
//   console.log(`Umumiy summa: ${totalSum} so'm`);
  
// 12
// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   const resultArray = Object.entries(obj).flat();
  
//   console.log(resultArray);
  

// 13 (Ishlap bilamdim)

// 14
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C" };

// let correctCount = 0; 
// let wrongCount = 0;

// for (let question in rightAnswers) {
//   if (myAnswers[question] === rightAnswers[question]) {
//     correctCount++; 
//   } else {
//     wrongCount++; 
//   }
// }

// console.log(`To'g'ri javoblar: ${correctCount}`);
// console.log(`Noto'g'ri javoblar: ${wrongCount}`);



// 15
// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getMultipleValues(n) {
//   const result = {}; 
  
//   for (let key in obj) {
//     result[key] = obj[key] * n; 
//   }
  
//   return result; 
// }

// let n = 3;
// const res = getMultipleValues(n);

// console.log(res);


// 16
// const product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   const {
//     name: productName,
//     company: {
//       name: companyName,
//       price: companyPrice,
//       founder: {
//         firstName: founderFirstName,
//         lastName: founderLastName,
//         birthDate: founderBirthDate,
//       },
//     },
//   } = product;
  
//   console.log(companyPrice);
//   console.log(founderFirstName);  
//   console.log(founderLastName);   
//   console.log(founderBirthDate);  



// 17 (Ishlay olmadim)

// 18 (Chatgptdan foyydalanip ishsladm)

// const students = [
//     { name: "Shahzod", percent: 85 },
//     { name: "Abdulaziz", percent: 90 },
//     { name: "Munira", percent: 75 },
//     { name: "Dilnoza", percent: 95 },
//   ];
  
//   // Protsentlarning umumiy yig'indisini va o'rtacha qiymatini topamiz
//   let totalPercent = 0;
  
//   students.forEach(student => {
//     totalPercent += student.percent;
//   });
  
//   const averagePercent = totalPercent / students.length;
  
//   // Yangi massivni baho (`grade`) va status bilan qaytaramiz
//   const updatedStudents = students.map(student => {
//     let grade;
    
//     // Protsentga qarab baho beramiz
//     if (student.percent >= 90 && student.percent <= 100) {
//       grade = 5;
//     } else if (student.percent >= 80 && student.percent < 90) {
//       grade = 4;
//     } else if (student.percent >= 70 && student.percent < 80) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
  
//     return {
//       ...student,
//       status: student.percent >= 80 ? "passed" : "failed",
//       grade: grade // Yangi property - baho
//     };
//   });
  
//   console.log(`O'rtacha protsent: ${averagePercent.toFixed(2)}`);
//   console.log(updatedStudents);
  

// 19 (Chatgptdan oldim)
// const students = [
//     { name: "Shahzod", percent: 85 },
//     { name: "Abdulaziz", percent: 90 },
//     { name: "Munira", percent: 75 },
//     { name: "Dilnoza", percent: 65 },
//   ];
  
//   // Protsentlarning umumiy yig'indisini va o'rtacha qiymatini topamiz
//   let totalPercent = 0;
  
//   students.forEach(student => {
//     totalPercent += student.percent;
//   });
  
//   const averagePercent = totalPercent / students.length;
  
//   // Yangi massivni baho (`grade`), status (`status`), va isPassed (`isPassed`) bilan qaytaramiz
//   const updatedStudents = students.map(student => {
//     let grade;
//     let status;
//     let isPassed;
  
//     // Protsentga qarab baho beramiz
//     if (student.percent >= 90) {
//       grade = 5;
//     } else if (student.percent >= 80) {
//       grade = 4;
//     } else if (student.percent >= 70) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
  
//     // Protsentga qarab status beramiz
//     if (student.percent >= 80) {
//       status = "passed";
//     } else {
//       status = "failed";
//     }
  
//     // Protsent 70 yoki undan katta bo'lsa true, aks holda false
//     isPassed = student.percent >= 70;
  
//     return {
//       ...student,
//       status: status,     // Status qo'shish
//       grade: grade,       // Baho qo'shish
//       isPassed: isPassed  // isPassed qo'shish
//     };
//   });
  
//   console.log(`O'rtacha protsent: ${averagePercent.toFixed(2)}`);
//   console.log(updatedStudents);
  

// 20
// const pupils = [
//     { name: "Elbek", protcent: 95 },
//     { name: "Zafar", protcent: 78 },
//     { name: "Aziz", protcent: 83 },
//     { name: "Jasur", protcent: 88 },
//     { name: "Bobur", protcent: 66 },
//     { name: "Kamron", protcent: 75 },
//   ];
  
//   let passedCount = 0;
//   let failedCount = 0;
  
//   const updatedPupils = pupils.map(pupil => {
//     let isPassed = pupil.protcent >= 70; 
  
//     if (isPassed) {
//       passedCount++;
//     } else {
//       failedCount++;
//     }
  
//     return {
//       ...pupil,
//       isPassed: isPassed
//     };
//   });
  
//   console.log(`Imtihondan o'tganlar soni: ${passedCount}`);
//   console.log(`Imtihondan o'ta olmaganlar soni: ${failedCount}`);
//   console.log(updatedPupils);
  