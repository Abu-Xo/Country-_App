function getData(){
    const url = "https://restcountries.com/v3/all"
    axios.get(url)
    .then(response => displayData(response.data))
    .catch(err => console.log(err))
}

getData()

// * Display the info
function displayData(countries){
    const root = document.getElementById("root")
    root.innerHTML = " "
    countries.forEach(country=>{
        const {latlng,capital,flags,area,region,name, languages} = country 
        console.log('country:', country)
        const div = document.createElement("div")
        div.setAttribute("class", "col-sm mt-2 mb-2")
        div.innerHTML = `
                <div class="card" style="width: 18rem;">

                    <img class="card-img-top" src="${flags.pop()}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${name.common}, ${region}</h5>
                      <p class="card-subtitle mb-2 text-muted">${latlng},${capital}</p>

                      <p class="card-text">Languages : ${country.hasOwnProperty('languages') ? Object.values(languages).toString() : "NONE"}</p>
                      <p class="card-text">Area : ${area}</p>
                    </div>
                  </div>
        `
root.appendChild(div)
    })

}


