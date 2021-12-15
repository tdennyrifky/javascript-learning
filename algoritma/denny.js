/**
 * STUDY CASE 1
 * 
 * Buatlah sebuah rumus luas segitiga
 * 
 * ALGORITMA
 * 1. Cari definisi dari rumus luas segitiga = 1/2 * alas * tinggi
 * 2. Buat variable alas
 * 3. Buat variable tinggi
 * 4. Buat variable luas
 * 5. Masukkan rumus luas segitiga ke dalam variable luas
 * 6. Proses luas
 * 7. Cetak luas
 * 
 * PSEUDOCODE
 * 
 * STORE alas WITH ANY NUMBER
 * STORE tinggi WITH ANY NUMBER
 * 
 * SET luas WITH 1/2 MULTIPLY alas MULTIPLY tinggi
 * PRINT luas
 */

// var alas = 5;
// var tinggi = 5;

// var luas = 1 / 2 * alas * tinggi;
// console.log(luas);

/**
 * STUDY CASE 2
 * 
 * Buatlah luas lingkaran
 * 
 * ALGORITMA
 * 1. Cari definisi dari luas lingkaran = pi * r * r
 * 2. Buat variable r
 * 3. Buat variable pi isi dengan angka 3.14
 * 4. Buat variable luas
 * 5. Isi luas dengan rumus = pi * r * r
 * 6. Proses luas
 * 7. Cetak luas
 * 
 * PSEUDOCODE
 * 
 * STORE pi WITH 3.14
 * STORE r WITH ANY NUMBER
 * 
 * SET luas WITH pi MULTIPLY r MULTIPLY r
 * PRINT luas
 * 
 */

// var pi = 3.14;
// var r = 7;

// var luas = pi * r * r;
// console.log(Math.round(luas));
// Math.round(luas)

/**
 * STUDY CASE 3
 * 
 * Buat rumus luas permukaan balok
 * 
 * ALGORITMA
 * 
 * cari definis luas permukaan balok
 * 
 * buat nilai konstanta
 * buat variable panjang
 * buat variabel tinggi
 * buat variabel lebar
 * isi luas dengan rumus luas = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
 * hitung luas 
 * cetak luas
 * 
 * PSEUDOCODE
 *
 * STORE konstannta WITH 2
 * STORE panjang WITH ANY NUMBER
 * STORE lebar WITH ANY NUMBER
 * STORE tinggi WITH ANY NUMBER
 * 
 * SET luas WITH 2 * ((panjang * lebar) + (panjang * tinggi) + lebar * tinggi)
 *  
 */
//  var p = 10;
//  var l = 6;
//  var t = 5;
//  const konstanta = 2;
//  var pl = 60;
//  var pt = 50;
//  var lt = 30
 
//  var luas = konstanta * (pl + pt + lt);
//  console.log(luas);

// // operation logic
// var a = 10;
// var b = 5; 
// var c = a < b;
// console.log(c);

// var angka = 1;
// if(angka === 1){
//     console.log("angka 1");
// } else if(angka !== 1){
//     console.log("angka selain 1");
// }

// var umur = 17;
// if(umur > 16){
//     console.log("Bisa Bikin KTP");
// } else if (umur <17){
//     console.log("Belum bisa bikin KTP");
// }

// var makanan = "hati";
// var nama = "baginda";
// var result = " ";

// switch (makanan){
//     case "hati":
//         result = nama + ", jangan banyak makan " + makanan + " ya";
//         break;
//     case " paru":
//         result = nama + ", jangan banyak makan " + makanan + " ya";
//         break;
// }

// console.log(result);

/**
 * 
 * study case 1
 * 
 * cek apakah sebuah bilangan itu genap atau ganjil
 * contoh : n = 5
 * result 5 adalah ganjil
 * 
 * algoritma
 * 1. cari definisi bilangan genap dan ganjil
 * 1.1 genaap habis dibagi 2
 * 1.2 ganjil tak habis
 * 
 * 2. buat variabel angka
 * 3. cek angka:
 * 3.1 jika angka habis dibagi 2 maka genap
 * 3.2 jika angka tidak habis dibagi 2 makan ganjil
 * 4. Print hasil
 * 
 * pseudocode
 * 
 * STORE angka WITH ANY NUMBER
 * 
 * IF angka MOD 2 Equal 0 THEN
 * PRINT angka + "adalah genap"
 * else if angka MODULUS 2 EQUAL 1 THEN
 * PRINT angka + "adalah ganjil"
 */

// var angka = 5;
// if(angka % 2 === 0){
//     console.log(angka + " adalah genap");
// }else if(angka % 2 === 1){
//     console.log(angka + " adalah ganjil");
// }

// var berat = 75;

// if(berat > 100){
//     console.log("obesitas");
// } else if(berat <= 100 && berat > 80){
//     console.log("gembrot");
// } else if (berat <=80 && berat > 65){
//     console.log("mayanLaa");
// }

// var umur = 17;
// var tinggi = 150;{

// if(umur < 17);
//     if(tinggi < 150){
//         console.log("tidak boleh masuk");
//     }else if(tinggi >= 150){
//         console.log("boleh masuk");
//     }
// }

// var buku = "coding";
// var total = 121000;
// var name = "denny"
// var totalBayar;

// switch(buku){
//     case "coding":
//         if (total >= 120000){
//             totalBayar = total - (total * 0.1)
//         } else {
//             totalBayar = total - (total * 0.05)
//         }
//         console.log(name + " kamu pesan " + buku);
//     case "cooking":
//         if (total >= 120000){
//             totalBayar = total - (total * 0.2)
//         } else {
//             totalBayar = total - (total * 0.01)
//         }
//         console.log(name + "kamu pesan" + buku);
    
//     default:
//         console.log("thank you");
//         break;
// }

// var acces = "public";
// var level =  4;

// switch(acces){
//     case "public":
//         if(level < 5){
//             console.log("Public Di Bawah 5");
//         } else if(level > 5){
//             console.log("Public Di Atas 5");
//         } else if(level === 5){
//             console.log("Public Five")
//         }
//         break;
//     case "private":
//         if(level < 5){
//             console.log("Private Di Bawah 5");
//         } else if(level > 5){
//             console.log("Private Di Atas 5");
//         } else if(level === 5){
//             console.log("Private Five")
//         }
//         break;
//     case "private":
//         if(level < 5){
//             console.log("Private Di Bawah 5");
//         } else if(level > 5){
//             console.log("Private Di Atas 5");
//         } else if(level === 5){
//             console.log("Private Five")
//         }
//         break;
//     case '':
//         console.log("Input Acces")
//         break;
//     default:
//         console.log("Access is not defined")    
//         break;    
// }

// for(var i = 0; i < 3; i++) {
//     console.log("makan");
// }

// for(var i = 0; i < 10; i+=5) {
//     console.log("makan");
// }

// for(var i = 1; i < 11; i++) {
// //      if(i % 2 === 0){
// //          console.log(i + "genap");
// //      } else {
// //          console.log(i + "ganjil");
// //      }
// // }

// // var sayur = "sayur asem paling enak";
// // for(var i = 0; i < 10; i++) {
// //     console.log(sayur[i])
// // }

// // var sayur = "sayur asem paling enak";
// // for(var i = 0; i < sayur.length; i++) {
// //     console.log(sayur[i])
// // }

// //  var sayur = "sayur asem paling enak";
// //  for(var i = 0; i < 10; i++)
// //     if(i % 2 === 0){
// //         console.log(sayur[i])
// //     }else{
// //         console.log(sayur[i])
// //     }

// // var n = 5;
// // var temp = " ";

// // for(var i = 1; i <= n; i++) {
// //     temp = temp + i;
// // }
// // console.log(temp);






// // var n = 5

// // if(n % 2 === 1){
// //     var temp = " ";
   
// //     for(var i = 0; i <=n; i++){
// //         if(i % 2 === 0) {
// //         temp = temp + "#"
// //         }else{
// //             temp = temp + "@"
// //         }
// //     }
// //     console.log(temp);
// // }else { 
// //     console.log("Angka Harus Ganjil");
// // }


// /**
//  * 
//  * study case
//  * 
//  * cek apakah ada huruf 'x' dala sebuah string
//  * 
//  * contoh
//  * var str = 'abcdexfgh'
//  * 
//  * result:
//  * true
//  * 
//  * 
//  */

// // var flag = false;
// // var str = "abcdexfgh"

// // for(var i = 0; i < str.length; i++){
// //     if(str[i] === 'x'){
// //         flag = true;
// //     }
// // }
// // if(flag){
// //     console.log("huruf x ditemukan")
// // }else{
// // //     console.log("huruf x tidak ditemukan")
// // }

// // ******** cara lain untuk menggantikan if dan else yaitu cara ternary:
// // // ternary
// // // flag ? console.log("huruf x ditemukan") : console.log("huruf x tidak ditemukan")

// /**
//  * 
//  * study case
//  * 
//  * cek jumlah "x" dalam sebuah string
//  * 
//  * var kata = 'xaxbxcz'
//  * 
//  * result:
//  * jumlah "x" = 3
//  * 
//  */

// // var kata = 'xaxbxcz';
// // var flagX = 0;

// // for(var i = 0; i < kata.length; i++) {
// //     if(kata[i] === "x") {
// //         flagX++
// //     }
// // }
// // /** jawaban pakai ternary */

// // flagX !== 0 ? console.log("jumlah x = " + flagX) : console.log("huruf x tidak ditemukan")

// var XO = "xoxoxoxo";
// var flagX = 0;
// var flagO = 0;

// for(var i = 0; i < XO.length; i++) {
//     if(flagX[i] === "x") {
//         flagX++
//     }
// }

// for(var i = 0; i < XO.length; i++) {
//     if(flagO[i] === "o") {
//         flagO++
//     }
// }

// if(flagX === flagO) {
//     console.log("jumlah x dan o sama");
// }

/** study case
 * 
 * buat kotak persegi
 * 
 * n = 5
 * 
 * result:
 * #####
 * #####
 * #####
 * #####
 * #####
 * 
 */

// var n = 5;
// var m = 3;
// var temp = ''

// for(var i = 0; i < n; i++) {
//     for(var j = 0; j < m; j++) {
//         temp += '#'
//     }
//     console.log(temp);
//     temp = '';
// }



/**
 * study case 
 * 
 * buat kotak seperti berikut
 * contoh:
 * 
 * n=5
 * 
 * result:
 * #####
 * @@@@@
 * #####
 * @@@@@
 * #####
 */

// var n = 5;
// var temp = "";

// for(var i = 0; i < n; i++){
//     if(i % 2 === 0){
//         for(var j = 0; j < n; j++){
//             temp += "#"
//         }
//     }else{
//         for(var j = 0; j < n; j++){
//             temp += "@"
//         }
//     }
//     console.log(temp);
//     temp = "";
// }

/**
 * 
 * study case
 * 
 * buat segitiga berikut
 * 
 * contoh
 * 
 * n=5
 * 
 * result
 * #
 * ##
 * ###
 * ####
 * #####
 * 
 */

// var n = 5;
// var temp = "";

// for(var i = 0; i < n; i++){
//     for(var j = 0; j < n; i++){
//         temp+= j+i
//     }
//     console.log(temp);
//     temp = "";
// }