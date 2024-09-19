//Task 5 - Filter elements in an array
let a = [
  "shoes",
  "bags",
  "clothes",
  "jewelry",
  "hair",
  "makeup",
  "purse",
  "wallet",
];

let b = a.filter(function (element) {
    return element.length > 4;
});

console.log(b);