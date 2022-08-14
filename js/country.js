const countriesLode = () => {

    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displaycountries(data))

}

const lodeCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}
  `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))


}
const displayCountryDetails = c => {
    console.log(c)

    const div = document.getElementById("details-show");
    div.innerHTML = `
         <h5>${c.name}</h5>
         <p>${c.population}</p>
         <img width='120x' src="${c.flag}">
          
       
         `


}











const displaycountries = data => {


    const countriesDiv = document.getElementById('countries')
    data.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country');

        div.innerHTML = `
        <h2> ${country.name}</h2 >
        <p>${country.capital}</p>
        <button onclick="lodeCountryByName('${country.name}'
        )">Details</button>

    `




        /* const h3 = document.createElement('h3')
        h3.innerText = country.name
        div.appendChild(h3)
        const p = document.createElement('p')
        p.innerText = country.capital
        div.appendChild(p); */
        countriesDiv.appendChild(div)



    });




}

