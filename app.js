/*
 1.შექმენით index.html და app.js ფაილები. შემოტანეთ app.js html-ში.

 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.

 3. დამატებით შექმენით ცვლადები name,  dayOfWeek, favoriteActivity და მიანიჭეთ თქვენი სახელი, კვირის დღე, თქვენი ფავორიტი აქტივობა.

 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება:
 "Hi, my name is (აქ name ცვლადი)! Today is ( აქ dayOfWeek ცვლადი), a perfect day for (აქ favoriteActivity ცვლადი)."
 გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.
 მუშაობის პროცესში, ტესტირებისთვის გამოიყენეთ console.log();

 */

console.log("HomeWork_15");

let thisYear = 2024;
let thisMonth = "November";
let is_31_days = false;
let is_30_days = true;
const this_Year_days = 366;
const isFebruary_29 = true;
let myundefind;
let myNull = null;

console.log(thisMonth, is_30_days);

`/** @deprecated */
declare const name: void;`;

let name = "Paata";
let dayofweek = "saturday";
let favoriteActivity = "chill out with friends";

`
const sentence_000 = name + " " + dayofweek + " " + favoriteActivity;

console.log(sentence_000);
`;
const sentence_1 =
  "Hi, my name is " +
  name +
  "! Today is " +
  dayofweek +
  ", a perfect day for " +
  favoriteActivity +
  ".";

console.log(sentence_1);

const sentence_2 = `Hi, my name is ${name}! Today is ${dayofweek}, a perfect day for ${favoriteActivity}.`;

console.log(sentence_2);
