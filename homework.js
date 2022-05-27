// ÖDEV1:
// fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

const fiyatlar = [100, 250, 50, 89];


fiyatlar.forEach((v, i, arr) => (arr[i] = Math.floor(v * 1.10)));

console.log(fiyatlar); // [ 110, 275, 55, 97 ]




// ÖDEV2:
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.


fiyatlar.forEach((v) => v > 90 ? console.log(v) : null);



// ÖDEV3:
// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const fiyatlar2 = [100, 250, 50, 89];

fiyatlar2.forEach((v, i, arr) => v < 110 && console.log(arr[i] = Math.floor(v * 1.10)));
console.log(fiyatlar);



fiyatlar2.forEach((v, i, arr) => v < 110 && console.log(arr[i] = (v * 1.10).toFixed(2)));
console.log(fiyatlar);



// ÖDEV4:
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];


const t = maaslar
    .filter((v) => v < 4000)
    .map((v) => Math.floor(v * 1.5));

console.log(t);



// ÖDEV5:
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

const maaslar1 = [3000, 5000, 4000, 6000, 6500];

const p = maaslar1
    .filter((v) => v > 4000)
    .map((v) => Math.floor(v * 1.25));

console.log(p);




// ÖDEV6:
// Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.


const maaslar2 = [3000, 5000, 4000, 6000, 6500];

let toplam = 0;

maaslar2.forEach((v) => toplam += v);

console.log(toplam);


// *************

const maas = [3000, 5000, 4000, 6000, 6500];

let sum = 0;

maaslar.reduce((v, i) => sum = v + i)

console.log(sum);


