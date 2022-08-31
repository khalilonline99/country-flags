const url = 'https://restcountries.com/v3.1/all';
fetch(url)
.then(resp => resp.json())
.then(data => allData(data))

const allData = (datas) => {
    // console.log(datas);
    const divCountryContainer = document.getElementById('country-container');
    for (data of datas){
        console.log(data)
        const divCountryNewDiv = document.createElement('div');
        divCountryNewDiv.classList.add('country-box');
        divCountryNewDiv.innerHTML = `
            <h3>Country: ${data.name.common}</h3>
            <h4>Capital: ${data.capital}</h4>
            <button onclick="showFlag('${data.flags.png}')">Flag</button>
            `;
        divCountryContainer.appendChild(divCountryNewDiv);

    }
            
}

const showFlag = (country) => {
    console.log(country);
    const countryFlag = document.getElementById('country-flag');
    countryFlag.innerHTML = `
    <img class="flag-image" src="${country}" alt="">
    `;
    

}
