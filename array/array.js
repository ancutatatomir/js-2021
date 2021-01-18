let bubbles = [60, 59, 48, 71, 23, 17, 10, 8, 56, 79]


let fruits = ["apples", "mango", "apple" , "oranges" , "cucumber"] 



bubbles.sort()
max = bubbles.pop()


fruits.sort()
fruits.reverse()


bubbles[0]
fruits[2]

console.log(max)
console.log(fruits)


for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
    
}

for (const fruit of fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
    
    
}

fruits.forEach(fruit => {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
    
});

// toate variantele de mai sus sunt similare

for (const fruit in fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)     
  
}