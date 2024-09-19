//Task 3 - Iterate over object properties
let a = {
  name: "Esther",
  age: 16,
  hair: "Brown",
  complexion: "light - skinned",
  Nationality: "Nigeria",
};

for (const key in a) {
    console.log(`${key}: ${a[key]}`);
}