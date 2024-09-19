//Task 5 - Merge objects
let a = {
  name: "Esther",
  age: 16,
  hair: "Brown",
};
let b = { complexion: "light - skinned", Nationality: "Nigeria" };

let c = Object.assign({}, a, b);

console.log(c);