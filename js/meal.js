const searchFood = () => {
    const searchInput = document.getElementById("search-input");
    const searchtext = searchInput.value;
    console.log(searchtext)
    // remove input 
    searchInput.value = '';


    // lode data 
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
m();



const meal = data => {
    const categories = data.categories
    const food = document.getElementById('food')
    // console.log(categories)
    categories.forEach(i => {
        //console.log(i)
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









const displayMeals = data => {
    const searchResult = document.getElementById("search-Result")
    searchResult.innerHTML = ' ';
    const meals = data.meals;
    console.log(meals)

    meals.forEach(i => {

        //console.log(i)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="lodeMealDetails(${i.idMeal})" class="card h-100 ">
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

const lodeMealDetails = id => {
    console.log(id)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(d => mealDetails(d.meals[0]))



}
const mealDetails = data => {
    //console.log(data)
    const mealDetails = document.getElementById("meal-details")
    const div = document.createElement('div')
    div.classList.add("card")
    div.innerHTML = `
    <img src="${data.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.strMeal}</h5>
      <p class="card-text">${data.strInstructions.slice(0, 120)}</p>
      <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div)

}
