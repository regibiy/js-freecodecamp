const productsName = ["Chocolate", "Avocado", "Vanilla", "Mango", "Red Velvet"];
const quantities = [12, 13, 34, 45, 64];
const myList = [];

for (let i = 0; i <= 4; i++) {
  myList.push([]);
  myList[i].push(productsName[i], quantities[i]);
}

console.log(myList);
