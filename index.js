// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");



// const coffeeStock = require('./state');
 
// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// }
 
// makeCoffee("robusta", 80);
// console.log(coffeeStock);
 

// const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);
 
// import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
// console.log(stock);
// console.log(isCoffeeMachineReady);
 


// Penangan Error Try
// // Penangan error 2 cabang
// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
//   } catch (error) {
//     console.log("Tidak terjadi eror, maka kode ini diabaikan");
//   }

// // penangan error lebih 3 cabang
// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
//   } catch (error) {
//     console.log("Terjadi error!");  // (4)
//   }

// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//   }


// Penangan Error try-catch-finally

// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
//   } catch (error) {
//     console.log("Baris ini diabaikan");
//   } finally {
//     console.log("Akan tetap dieksekusi");
//   }

//   penangangan Error Throwing Errors

// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }


// penangan Error Custom Error

// let json = '{ "age": 30 }';
 
// try {
//   let user = JSON.parse(json);
 
//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
   
//   const json = '{ "age": 30 }';
   
//   try {
//     const user = JSON.parse(json);
   
//     if (!user.name) {
//       throw new ValidationError("'name' is required.");
//     }
//     if (!user.age) {
//       throw new ValidationError("'age' is required.");
//     }
   
//     console.log(user.name);
//     console.log(user.age);
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//       console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//       console.log(error.message);
//     } else {
//       console.log(error.stack);
//     }
//   }


// Testing Error

// try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]);
//     }
// } catch(e) {
//     console.log("Out of bounds");
// }


// Asyncronous

// settimeout
// console.log('Selamat datang!');
 
// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silakan datang kembali!');
// }, 3000)
 
// console.log('Ada yang bisa dibantu?');


// Pola Callback
// function getUsers(callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
   
//       callback(users);
//     }, 3000);
//   }
   
//   function usersCallback(users) {
//     console.log(users);
//   }
   
//   getUsers(usersCallback);


// function getUsers(isOffline, callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
   
//       if (isOffline) {
//         callback(new Error('cannot retrieve users due offline'), null);
//         return;
//       }
   
//       callback(null, users);
//     }, 3000);
//   }
   
//   function usersCallback(error, users) {
//     if (error) {
//       console.log('process failed:', error.message);
//       return;
//     }
//     console.log('process success:', users);
//   }
   
//   getUsers(false, usersCallback);
//   getUsers(true, usersCallback);


// function getUsers(isOffline) {
//     // return a promise object
//     return new Promise((resolve, reject) => {
  
//       // simulate network delay
//       setTimeout(() => {
//         const users = ['John', 'Jack', 'Abigail'];
      
//         if (isOffline) {
//           reject(new Error('cannot retrieve users due offline'));
//           return;
//         }
  
//         resolve(users);
//       }, 3000);
//     });
//   }
  
//   getUsers(false)
//     .then(users => console.log(users))
//     .catch(err => console.log(err.message));


// Mengubah Callback Menjadi Promise dengan Promisify
// function getUsers(isOffline, callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
    
//       if (isOffline) {
//         callback(new Error('cannot retrieve users due offline'), null);
//         return;
//       }
   
//       callback(null, users);
//     }, 3000);
//   }

// const util = require('util');

// function getProvinces(countryId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (countryId === 'id') {
//         resolve([
//           { id: 'id-jk', name: 'Jakarta' },
//           { id: 'id-bt', name: 'Banten' },
//           { id: 'id-jr', name: 'Jawa Barat' },
//         ]);
//       } else {
//         reject(new Error('Country not found'));
//       }
//     }, 1000);
//   });
// }

// module.exports = { getProvinces };


// Promise Berantai

// function withDrawMoney(amount) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (amount > 100) {
//           reject(new Error('Not enough money to withdraw'));
//         }
  
//         resolve(amount);
//       }, 1000);
//     });
//   }
  
//   function buyCinemaTicket(money) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (money < 10) {
//           reject(new Error('not enough money to buy ticket'));
//         }
  
//         resolve('ticket-1');
//       }, 1000);
//     });
//   }
  
//   function goInsideCinema(ticket) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!ticket) {
//           reject(new Error('no ticket'));
//         }
  
//         resolve('enjoy the movie');
//       }, 1000);
//     });
//   }
  
//   function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => {
//         return buyCinemaTicket(money);
//       })
//       .then((ticket) => {
//         return goInsideCinema(ticket);
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }
  
//   watchMovie();


// Promise Static Method
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik


// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error.message)); // ups


// handling and Wait
// async function watchMovie() {
//     try {
//       const money = await withDrawMoney(10);
//       const ticket = await buyCinemaTicket(money);
//       const result = await goInsideCinema(ticket);
   
//       console.log(result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
   
//   watchMovie().then(() => console.log('done'));
   

// pengujian kode
// const averageExams = (valuesExam) => {
//   const numberValidation = valuesExam.every(exam => typeof exam === 'number');
//   if (!numberValidation) throw Error('please input number');

//   const sumValues = valuesExam.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
//   return sumValues / valuesExam.length;
// };

// const isStudentPassExam = (valuesExam, name) => {
//   const minValues = 75;
//   const average = averageExams(valuesExam);
  
//   if (average > minValues) {
//       console.log(`${name} pass the exams`);
//       return true;
//   } else {
//       console.log(`${name} fail the exams`);
//       return false;
//   }
// };

// module.exports = { averageExams, isStudentPassExam };

// class MyCustomError extends Error {
//   constructor(message) {
//       super(message);
//       this.name = "MyError";
//   }
// }

// try {
//   throw new MyCustomError("This is an error");
// } catch (e) {
//   console.log(e.message);
// }