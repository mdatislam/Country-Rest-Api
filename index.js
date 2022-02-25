console.log('Atiqq');
const loadCountry= continent =>{
    const countyUrl = `https://restcountries.com/v3.1/region/${continent}`
    fetch(countyUrl)
    .then(res => res.json())
    .then(data => displayCountry(data))
}

/* const loadAllCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
loadAllCountry() */
const displayCountry = data =>{
    // console.log(data.length);
    const totalCountry  = data.length;
    document.getElementById('total').innerText = totalCountry;
    const displayCountry = document.getElementById('display-country');
    displayCountry.textContent ='';

    data.forEach( item => {
        const name = item.name.common;
        const capital = item.capital;
        const continent = item.continents;
        const flagUrl = item.flags.png;
        const googleMap = item.maps.openStreetMaps;
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`
        <div class="card border-info border-2">
              <img src="${flagUrl}" class="card-img-top h-100" alt="...">
              <div class="card-body">
                <h5 class="card-title text-center">${name}</h5>
                <p class="card-text fw-bold text-danger"> ${capital}</p>
                <button class="btn btn-warning w-75 mx-auto d-block" onclick = "loadCountryDetail('${name}')">Detail</button>
              </div>
            </div>`
        displayCountry.appendChild(div)    
    })
}

// County Detail showing part

const loadCountryDetail = country =>{
    // console.log(name)
   const url = `https://restcountries.com/v3.1/name/${country}`;
   fetch(url)
   .then(res=> res.json())
   .then(countyData => displaySingleCountry(countyData))
    // console.log(url)
}

const displaySingleCountry = info => {
    
    const detail = document.getElementById('detail')  
    detail.textContent =''; 
    info.forEach(details => {
        const name = details.name.common;
        const capital = details.capital;
        const continent = details.continents;
        const flagUrl = details.flags.png;
        const googleMap = details.maps.openStreetMaps;
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`
        <div class="card border-info border-2 bg-warning w-25">
              <img src="${flagUrl}" class="card-img-top h-100" alt="...">
              <div class="card-body">
                <h5 class="card-title text-center">${name}</h5>
                <p class="card-text fw-bold text-danger"> ${capital}</p>
                <a href="${googleMap}" target="_blank">Google-Map</a>
              </div>
            </div>`
        detail.appendChild(div)
    })
}







/* 
<div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          South America */