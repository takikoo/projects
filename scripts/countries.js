'strict mode'

const countries = getCountries()

renderOptions(countries)

document.querySelector('#country-list').addEventListener('change', (e)=>{
    const country = e.target.value
    if (country !== 'selector'){
        renderInfoPage(countries, country)
    }
})