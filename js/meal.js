const searchFood = () => {
    const searchInput = document.getElementById("search-input");
    const searchtext = searchInput.value;
    console.log(searchtext)

    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data))

}
const m = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => meal(data))

}
const meal = data => {
    const categories = data.categories
    const food = document.getElementById('food')
    console.log(categories)
    categories.forEach(i => {
        console.log(i)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 ">
        <img src="${i.strCategoryThumb}" class="card-img-top p-2" alt="...">
        <div class="card-body">
            <h5 class="card-title">${i.strCategory}</h5>
            <p class="card-text">${i.strCategoryDescription.slice(0, 120)}</p>
        </div>
    </div>
        
        `
        food.appendChild(div)

    });

}

m();







const displayMeals = data => {
    const searchResult = document.getElementById("search-Result")

    const meals = data.meals;
    console.log(meals)

    meals.forEach(i => {

        console.log(i)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 ">
        <img src="${i.strMealThumb}" class="card-img-top p-2" alt="...">
        <div class="card-body">
            <h5 class="card-title">${i.strMeal}</h5>
            <p class="card-text">${i.strInstructions.slice(0, 120)}</p>
        </div>
    </div>
        
        `
        searchResult.appendChild(div)


    });
}
