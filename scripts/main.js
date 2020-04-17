console.log("Yod")

// console.log("first console log")
// fetch("http://localhost:8088/food")
// .then(foods => {
//     console.log("foods", foods)
//     return foods.json()
// })

// .then(parsedFoods =>{
//     console.table(parsedFoods)
// })
// console.log("Last console log")

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })




const foodFactory = (food) => {
    return `<div class="container">
        <h2>${food.name}</h2>
        <section>${food.category}</section>
        <aside>${food.ethnicity}</aside>
        <div>`
}




// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })



fetch("http://localhost:8080/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
        console.log(foodFactory(food))
        const foodContainer = document.querySelector(".foodList")
        foodContainer.innerHTML += foodFactory(food)
        })
    })