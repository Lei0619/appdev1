const foods = ["Pizza", "Burger", "Pasta", "Sushi"];
foods.push("Tacos");
foods.shift();
foods.pop();
console.log(foods);

for (let food of foods) {
    console.log("I like " + food);
}

const favFood = foods.map((food) => {
    return "I like " + food;
});
console.log(favFood);
