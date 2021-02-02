'use strict';

const labelCountry = document.querySelector('.country');
const labelCapital = document.querySelector('.capital');
const labelLanguage = document.querySelector('.language');
const labelPopulation = document.querySelector('.population');
const imgFlag = document.querySelector('.flag');

const getJson =function(url, msg='something went wrong'){
    return fetch(url).then(function(response){
        if(!response.ok){
    throw new Error (msg);
        }
        return response.json()});
    }
    
    const getCountry = function(countryName){
        
        getJson(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(data=> getJson(`https://restcountries.eu/rest/v2/alpha/${data[0].borders[0]}`))
        .then(data=> getJson(`https://restcountries.eu/rest/v2/alpha/${data.borders[0]}`))
        .then(data=> getJson(`https://restcountries.eu/rest/v2/alpha/${data.borders[0]}`))
        .then(function(data){
        let {name,capital,languages,population,flag} = data;
        labelCountry.textContent=name;
        labelCapital.textContent=capital;
        labelLanguage.textContent=languages[0].name;
        labelPopulation.textContent=population;
        imgFlag.src=flag;
     }).catch(err=>alert(err));
    }
    
    
     getCountry('Portugal');
    
    
    