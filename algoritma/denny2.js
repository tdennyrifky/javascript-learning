// var n = 5;
// var temp = "";

// for(var i = 0; i < n; i++){
//     for(var j = 0; j < n; j++){
//         temp+= j+i
//     }
//     console.log(temp);
//     temp = "";
// }

/**
 * array
 *
 */
// var numbers = [100, 50, 75];
// console.log(numbers.length);

// mau nambah angka

//  numbers.push(10);
//  console.log(numbers);

// // mau hapus angka

// numbers.pop(50);
// console.log(numbers);

/**
 *
 * study case
 *
 * buat lah nilai rata rata (mean) dari sebuah array
 *
 * result : mean = 1.45
 * contoh:
 */

// var data = [1.5, 0.75, 2.25, 1.75, 1]
// var total = 0

// for(var i = 0; i < data.length; i++){
//     total += data[i]
// }
// console.log(total);

// var mean = total / data.length
// console.log("mean = " + mean);

/**
 * study case
 *
 * kelompokkan angka yang lebih dari satu
 * contoh:
 */

// var data = [1.5, 0.75, 2.25, 1.75, 1];
// var arrResult = [];
// for(var i = 0; i < data.length; i++){
//     if(data[i] > 1){
//         arrResult.push(data[i])
//     }
// }
// console.log(arrResult);

/**
 * study case
 *
 * pecah kalimat menjadi beberapa kata
 *
 * var pantun = "makan nasi bayarnya pakai paku"
 *
 * result:
 * ["makan", "nasi", "bayarnya", "pakai", "paku"]
 */

// var pantun = "makan nasi bayarnya pakai paku";
// var temp = "";
// var arrResult = [];

// for (var i = 0; i < pantun.length; i++) {
//   if (pantun[i] !== " ") {
//     temp += pantun[i];
//   } else {
//     arrResult.push(temp);
//     temp = "";
//   }
//    if (i === pantun.length - 1) {
//      arrResult.push(temp);
//      temp = "";
//    }
// }
// console.log(arrResult);


// var input = "5279312";
// var temp = '';
// var arrResult = [];

// for(var i = 0; i < input.length -1; i++) {
//     temp = input[i] + input[i+1]; {
//         arrResult.push(Number(temp));
//         temp = "";
//     }  
// }
// // console.log(arrResult); ****pencarian sebelum lanjut bawah tapi nanti harus dihapus kalo mau cari hasil yang di bawah

// var currentscore = arrResult[0];
// for(var i = 0; i < arrResult.length; i++){
//     if(currentscore < arrResult[i]) {
//         currentscore = arrResult[i]
//     }
// }
// console.log(currentscore);

/**
 * 
 * FUNCTION
 * 
 * 
 */

// function cekganjilgenap(angka) {
//     if(angka % 2 === 0) {
//         console.log("Genap");
//     }else{
//         console.log("Ganjil");
//     }
// }
// cekganjilgenap(7);


// var input = "5279312";

// function numbertoarray(input)
// var temp = '';
// var arrResult = [];
// for(var i = 0; i < input.length -1; i++) {
//     temp = input[i] + input[i+1]; {
//         arrResult.push(Number(temp));
//         temp = "";
//     }  
// }
// function findmaxscore(input) {
//     var arrResult = numbertoarray(input)
//     //console.log(arrResult);
//     var currentscore = arrResult[0];
//     for(var i = 0; i <arrResult.length; i++) {
//         if(currentscore < arrResult[i]) {
//             currentscore = arrResult[i]
//         }
//     }
//     console.log(currentscore);
// }
// findmaxscore(input)

/** 
 * 
 * study case 
 * 
 * buatlah sebuah calculator yang memiliki sebuah function :
 * 1. jumlah(a,b) untuk menjumlahkan dua angka
 * 2. kurang(a,b) untuk menjumlahkan dua angka
 * 3. kali(a,b) untuk mengalikan dua angka
 * 4. bagi(a,b) untuk membagikan dua angka
 * 5. calculator (a, opr, b) sebagai fungsi utama dimana mengandung 4 function di atas.
 * 
 * contoh:
 * calculator (5, '+', 3) // 8
 * calculator (5, '-', 3) // 2
 * calculator (5, '*', 3) // 15
 * calculator (5, '/', 3) // 1.66
//  * calculator (5, '#', 3) // masukkan operator yang benar
//  */

// function jumlah(a,b){
//     return a + b;
// }
// function kurang(a,b){
//     return a - b;
// }
// function kali(a,b){
//     return a * b;
// }
// function bagi(a,b){
//     return a / b;
// }

// function calculator(a,opr,b){
//     switch(opr){
//         case '+':
//             var penjumlah = jumlah(a,b)
//             console.log(penjumlah)
//             break;
//         case '-':
//             var pengurang = kurang(a,b)
//             console.log(pengurang)
//             break;
//         case '*':
//             var pengali = kali(a,b)
//             console.log(pengali)
//             break;
//         case '/':
//             var pembagi = bagi(a,b)
//             console.log(pembagi)
//             break;
//         default:
//             console.log("masukkan operator yang benar")
//             break;        
//     }
// }

// calculator(9, '/', 5);

/** OBJECT */

/** ubah array berikut menjadi objek
 * 
 * var buah = ("durian", 75000, true);
//  * 
//  */

// function changeToObject(array){
//     var result = {}
//     result.jenis = array[0];
//     result.harga = array[1];
// //     result.enak = array[2];
// //     return result;
// // }
// // console.log(changeToObject( ["durian", 7500, true]))

// //contoh lain

// // var student = {
// //     name : "denny",
// //     gpa : 3.33,
// //     isGraduated : true
// // }
// // console.log(student.isGraduated);

// // mau looping key nya doang

// // for(var key in student) {
// //     console.log(key);
// // }

// // mau looping isi dari key nya

// // for(var key in student) {
// //     console.log(student[key]);
// // }

// // MATERI ARRAY OF OBJECT
// // CONTOH
// //

// var profil = [
//     {
//         id: 1,
//         name : 'denny',
//         age : 29,
//         location : 'jakarta',
//     },
//     {
//         id : 2,
//         name : 'dnny',
//         age : 29,
//         location : 'jakarta',
//     },
//     {
//         id : 3,
//         name : 'denn',
//         age : 29,
//         location : "jakarta",
//     }

// ]
// console.log(profil);

// function profil(profil) {
//     console.log("profil: ");
//     for(var i = 0; i < profil.length; i++);
//         console.log(profil[i].id);
// }

/** study case OBJECT
 * 
 * hitung jumlah huruf vocal dalam sebuah string
 * contoh:
 * var str - "saya makan sayur asem lagi"
 * 
 */

// function countVocal(str){
//     var count = {
//         a : 0,
//         i : 0,
//         u : 0,
//         e : 0,
//         o : 0,
//     }
//     for(var i = 0; i < str.length; i++) {
//         if (str[i] === "a"){
//             count.a++
//         }else if (str[i] === "i") {
//             count.i++
//         }else if (str[i] === "u") {
//             count.u++
//         }else if (str[i] === "e") {
//             count.e++
//         }else if (str[i] === "o") {
//             count.o++
//         }
//     }
//     return count
// }
// console.log(countVocal("saya makan sayur asem lagi"));
// console.log(countVocal("saya makan lagi"));

/**
 * 
 * study case OBJECT
 * 
 * hitung jumlah suara pemilihan ktua kelas
 * 
 * contoh
 * 
 * var votes = ["vincent", "ncent", "vinsen", "stella", stellaa", "vincentt", "encent"]
 * 
 * result :
//  * vincent : 3
//  * ncent : 2
//  * stella : 2
//  */

// function countVote(votes){
//  var count = {
//     vincent : 0,
//     ncent : 0,
//     stella : 0,
//  }   
//  for(var i =0; i < votes.length; i++){
//     if(votes[i].toLowerCase() === "vincent"){
//         count.vincent++
//     } else if(votes[i].toLowerCase() === "ncent"){
//         count.ncent++
//     }else if(votes[i].toLowerCase() === "stella"){
//         count.stella++
//     }
//  }
//  return count
// }
// var votes = ["vincent", "ncent", "vinCenT", "stellA", "stella", "vincent", "encEnt"]

// console.log(countVote(votes));

/**
 * study case OBJECT
 * 
 * jika lebih dari 3 nama atau tidak tahu berapa jumlah
 */

// function countPeople(arr) {
//     var result = {}

//     for(var i = 0; i < arr.length; i++){
//         if(result[arr[i]] === undefined) {
//             result[arr[i]] = 1;
//         }else{
//             result[arr[i]] += 1;
//         }
//     }
//     return result;
// }
// console.log(countPeople(["james", "jim", "jake", "james", "john", "john", "james", "jane"]))


/** 
 * STUDY CASE OBJECT
 * 
 * buatlah dua function dengan ketentuan berikut;
 * 
 * DALAM sebuah kelas terdapat banyak suara untuk memilih siapa yang menjadi sekretaris.
 * tentukan nama dari pemenang dengan cara memilih dari yang paling banyak suaranya
 * 
 * buatlah dua function dengan ketentuan berikut:
 * 1. countPeople[arr]
 *      parameter berupa array berisi suara vote
 *      result yang dihasilkan berupa objek
 * 2. function vote winner{objek}
 *      parameter berupa objek yang dihasilkan oleh function countPeople(arr)
 *      hasil return berupa string nama pemenang
 * 
 */

// function countPeople(arr){
//     var result = {}

//     for(var i = 0; i < arr.length; i++){
//         if(result[arr[i]] === undefined) {
//             result[arr[i]] = 1;
//         }else{
//             result[arr[i]] += 1;
//         }
//     }
//     return result;
// }



// function voteWinner(arr){
//     var objVote = countPeople(arr);
//     var currentScore = 0;
//     var winner;

//     if(arr.length !== 0) {
//         for(var key in objVote){
//             if(currentScore < objVote[key]) {
//                 currentScore = objVote[key];
//                 winner = key
//             }
//         }
//         return winner
//     }else {
//         return "tidak ada suara"
//     }
// }
// console.log(voteWinner(["james", "jim", "jake", "james", "john", "john", "james", "jane"]))



// var todos = [
//     {
//         id: 1,
//         task: "belajar Object",
//         status: 0
//     }, {
//         id: 2,
//         task: "belajar Function",
//         status: 1
//     }
// ];

// function viewTodos(todos) {
//     console.log("Todo List: ")
//     for (var i = 0; i < todos.length; i++) {
//         if (todos[i].status === 0) {
//             console.log(todos[i].id + ". [ ] " + todos[i].task);
//         } else {
//             console.log(todos[i].id + ". [X] " + todos[i].task);
//         }
//     }
// }
// function addTodo(task, status) {
//     var id = todos[todos.length - 1].id + 1;
//     var tempObj = {
//         id,
//         task,
//         status
//     }
//     // push ke todos
//     todos.push(tempObj)
//     console.log("'" + task + "' has been created")
// }

// function deleteTodo(id){
//     var tempArray = []

//     for(var i = 0; i < todos.length; i++){
//         if(todos[i].id !== id){
//             tempArray.push(todos[i])
//         }
//     }
//     // overwrite existing todos
//     todos = tempArray
//     console.log("Id: " + id + " has been deleted")
// }
// // viewTodos(todos)
// addTodo("Belajar ES6", 0)
// addTodo("makan siang", 1);
// addTodo("Jemput dia", 0)
// deleteTodo(3)
// deleteTodo(5)
// viewTodos(todos)

/** study case
 * 
 * 
 */


// var tracks = [
//   {
//     id: 1,
//     name: "dagang baju",
//     type: "income",
//     total: 1000000
//   }, {
//     id: 2,
//     name: "beli baju",
//     type: "expense",
//     total: 750000
//   }
// ];

// function getTracks(tracks) {
//   console.log("Income ")
//   for (var i = 0; i < tracks.length; i++) {
//     if (tracks[i].type === "income") {
//       console.log(tracks[i].id + ". " + tracks[i].name + ": " + tracks[i].total);
//     }
//   }
//   console.log("Expense ")
//   for (var i = 0; i < tracks.length; i++) {
//     if (tracks[i].type === "expense") {
//       console.log(tracks[i].id + ". " + tracks[i].name + ": " + tracks[i].total);
//     }
//   }

// }
//   getTracks(tracks);

// function addTodo(task, status) {
//     var id = todos[todos.length - 1].id + 1;
//     var tempObj = {
//         id,
//         task,
// //         status
// //     }
// //     // push ke todos
// //     todos.push(tempObj)
// //     console.log("'" + task + "' has been created")
// // }

// function addTracks(name, type, total) {
//   var id = tracks[tracks.length - 1].id + 1;
//   var tempTracks = {
//     id,
//     name,
//     type,
//     total
//   }
//   tracks.push(tempTracks)

// }
// addTracks("jual ikan", "income", 150000);
// getTracks(tracks);

/** 
 * MATERI ES6
 * 
 * console.log(angka);
 * var angka = 10;
 * maka hasilnya akan undefined, harusnya error
 * sehingga harus memakai let (ES6)
 * 
 * console.log(angka);
 * let angka = 10;
 * maka hasilnya error. ini benar hasilnya memang error karena deklarasi nilai angka di bawah harusnya di atas agar tidak error
 *
 * 
 * istilah:
 * 
 * deklarasi adalah membuat sebuah variabel
 * initialitation adalah memasukkan nilai ke dalam variabel
 * reassign adalah assign ulang atau memasukkan nilai lain ke dalam  
 */


// console.log(pi);
// var pi = 3.14;

// contoh soal cara console.log mudah

// var kata1 = "saya";
// var kata2 = "mau";
// var kata3 = "makan";

// console.log(`${kata1} ${kata2} ${kata3}.`)




// expression of function

// const hello = function(){
//   console.log("met pagi")
// }
// hello()

// arrow replace Function
/**
 * 
 * const hello = () => {
 *     console.log("met pagi")
 * }
 * hello()
 * 
 * CONTOH LAIN
 */

// const checkGanjilGenap = function(num){
//   if(num % 2 === 0){
//     return "genap"
//   }else{
//     return "ganjil"
//   }
// }
// console.log(checkGanjilGenap(5))

// ******Kalau pakai ternary****

// const checkGanjilGenap = num => num % 2 === 0 ? "Genap" : "Ganjil";
// console.log(checkGanjilGenap(5))

// destructuing array dan
/* 
 
*/
// let items = ["samsung a50", "laptop", 500000];

// let[name, type, price] = items
// console.log(name, type, price)


// destructuring object

// const student = {
//   name : "denny",
//   gpa : 3.33,
//   status : true
// }
// let{name, gpa, status} = student
// console.log(name, gpa, status)


//high order function 
// forEach, map, filter

// forEach

// const numbers = [3, 2, 5, 7, 10];
// cara es5
// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }
// cara es6

// numbers.forEach(number => {
//   console.log(number)
// })

// MAP

// let squareNumbers = [];
// for (let i = 0; i < squareNumbers.length; i++) {
//   squareNumbers.push(numbers[i] ** 2);
// }
// console.log(squareNumbers)

// let squareNumbers = numbers.map(number => number ** 2)

// console.log(squareNumbers)


// let filterNumbers = number.filter(number => number >= 5)

// console.log(filterNumbers)


// Chaining party
// const numbers = [100, 55, -15, 75, -10, 0, 123, -50];
/**
 * Numbers akan di kali 10
 * Numbers akan di pilih lebih besar dari 0
 * Numbers akan di show
 */

// ES5
// nomor 1
// function processNumbers(Numbers) {

//   let Numbers10 = [];
//   for (let i = 0; i < numbers.length; i++) {
//     Numbers10.push(numbers[i] * 10)


//     // nomor 2
//     let filterNumbers = numbers.filter(numbers => numbers >= 0)

//     // nomor 3

//     for (let i = 0; i < filterNumbers.length; i++) {
//       console.log(filterNumbers[i])
//     }
//   }
// }

//  ES6

// numbers.map(number => number * 10). filter(number => number > 0).forEach(number => console.log(number))



//=================================================================================================================
//=================================================================================================================


// OOP : Object Oriented Programming

// let vehicle = {
//     // attributes atau keys
//     name: "Civic 2022",
//     type: "sedan",
//     cc: 1500,
//     engine: false,
//     tags: [
//         "lcgc", "affordable"
//     ],
//     // method
//     startEngine: function () {
//         console.log("Start Engine!")
//         this.engine = true;
//     },
//     stopEngine: function () {
//         console.log("Stop Engine!")
//         this.engine = false;
//     },
//     identifySelf: function () {
//         console.log(`${this.name}, type: ${this.type}, cc : ${this.cc}`)
//     },
//     showTags: function () {
//         console.log("Vehicle tags: ")
//         this.tags.forEach((tag, index) => {
//             console.log(`${index + 1}. ${tag}`)
//         })
//     },
//     addTag: function (tag) {
//         this.tags.push(tag)
//     }
// }
/**
    Vehicle tags:
    1. lcgc
    2. affordable
 */
// vehicle.startEngine();
// console.log(vehicle.engine);
// vehicle.stopEngine();
// console.log(vehicle.engine);
// vehicle.identifySelf();
// vehicle.addTag("city car")
// vehicle.showTags()

// MEMASUKKAN CLASS ============================================================================================
//==============================================================================================================


// class Vehicle {
//   constructor(name, type, cc) {
//       this.name = name;
//       this.type = type;
//       this.cc = cc
//   }
// }

// // vehicle merupakan instansi / instance of dari class Vehicle
// let vehicle = new Vehicle("Civic 2022","sedan",1500);
// console.log(vehicle);
// // console.log(Vehicle)


// class todo {
//   constructor(id, task, status) {
//     this.id = id;
//     this.task = task;
//     this.status = status;
//   }
// }

// class taskBoard {
//   constructor(boards) {
//     this.boards = this.boards || [];
//   }
//   showTodo() {
//     console.log("Show To Do")
//     this.boards = this.boards
//   }
// }

// let orangPertama = new todo("denny", "Belajar OOP", "[x]");
// let orangKedua = new todo("rifky", "Kerjain Tugas", "[ ]");
// let orangKetiga = new taskBoard("tdr");
// console.log(orangKedua)

/**
 * TEORI OOP
 * 
 * PILAR UTAMA OOP
 * 1. INHERITANCE
 * 2. POLYMORPHISM
 * 3. ENCAPSULATION
 * 4. ABSTRACTION
 * 
 */

// parent class
class vehicle {
  constructor(name, type, cc) {
    this.name = name;
    this.type = type;
    this.cc = cc;
  }
}
// child class
class sedan extends vehicle {
  constructor (name, type, cc, nitro) {
    super(name, type, cc)
    this.nitro = nitro;
  }
}
class suv extends vehicle{
  constructor (name, type, cc, wheel){
    super(name, type, cc)
    this.wheel = wheel;
  }
}

const civic = new sedan("civic 2021", "sedan", 1500, true);
const tiguan = new suv("tiguan", "suv", 5000, "4wd");

// console.log(civic)
// console.log(tiguan)

// factory class

class showroom{
  constructor(rooms){
    this.rooms = rooms || []; // ini cara supaya hasil showroom tidak undefined (yang maknanya false)
  }
  showVehicles(){
    console.log("Showroom Cars: ")
    this.rooms.forEach((room, i) => {
      let {name, type, cc} = room;
      console.log(` ${i+1}, ${name}, type: ${type}, cc : ${cc}`)
    })
  }
  addCars(cars){
    this.rooms.push(cars)
  }
}
const Showroom = new showroom([]);
// console.log(Showroom)
Showroom.addCars(civic);
Showroom.addCars(tiguan);
Showroom.showVehicles()

