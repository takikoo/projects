'strict mode'

// Render country names as options in dropdown
const renderOptions = async (data)=>{
    const countries = await data

    countries.forEach((country)=>{
        const optionElement = document.createElement('option')
        optionElement.setAttribute('class', 'dropdown__option')
        optionElement.textContent = country.name
        document.querySelector('#country-list').appendChild(optionElement)
    })
}

// Crete DOM structure for the header
const GetHeaderDOM = (country) => {

    // Create sub header element
    const subHeaderElement = document.createElement('div')
    subHeaderElement.setAttribute('class', 'content-header')
    document.querySelector('#country-info').appendChild(subHeaderElement)

    // Create and append country flag
    const countryFlagElement = document.createElement('img')
    countryFlagElement.setAttribute('src', `${country.flag}`)
    countryFlagElement.setAttribute('class', 'content-header content-header__flag')
    subHeaderElement.appendChild(countryFlagElement)

    // Create and append country title element
    const countryTitleElement = document.createElement('h1')
    countryTitleElement.textContent = `${country.name} (${country.alpha2Code})`
    countryTitleElement.setAttribute('class', 'content-header content-header__title')
    subHeaderElement.appendChild(countryTitleElement)

    // Create and append country subtitle element
    const countrySubTitleElement = document.createElement('h2')
    countrySubTitleElement.textContent = `${country.nativeName}`
    countrySubTitleElement.setAttribute('class', 'content-header content-header__subtitle')
    subHeaderElement.appendChild(countrySubTitleElement)
}

// Crete DOM structure for the content
const GetContentDOM = (country)=>{

    //Create content element
    const countryInfoElement = document.createElement('div')
    countryInfoElement.setAttribute('class', 'content-body')
    document.querySelector('#country-info').appendChild(countryInfoElement)

    //Create and append capital
    const capitalElement = document.createElement('p')
    capitalElement.setAttribute('class', 'content-item')
    capitalElement.textContent = `Capital: ${country.capital}`
    countryInfoElement.appendChild(capitalElement)

    //Create and append region element
    const regionElement = document.createElement('p')
    regionElement.setAttribute('class', 'content-item')
    regionElement.textContent = `Region: ${country.region}`
    countryInfoElement.appendChild(regionElement)

    //Create and append population element
    const populationElement = document.createElement('p')
    populationElement.setAttribute('class', 'content-item')
    populationElement.textContent = `Population: ${country.population}`
    countryInfoElement.appendChild(populationElement)

    //Create and append area element
    const areaElement = document.createElement('p')
    areaElement.setAttribute('class', 'content-item')
    areaElement.textContent = `Area: ${country.area} km\xb2`
    countryInfoElement.appendChild(areaElement)

    //Create and append timezone element
    const timeZoneElement = document.createElement('p')
    timeZoneElement.setAttribute('class', 'content-item')
    timeZoneElement.textContent = `Timezone: ${country.timezones[0]}`
    countryInfoElement.appendChild(timeZoneElement)

    //Create and append languages element
    const languagesListElement = document.createElement('p')
    languagesListElement.setAttribute('class', 'content-item')
    languagesListElement.textContent = 'Languages:'

    country.languages.forEach((language)=>{
        languagesListElement.textContent += ` ${language.name}, `
    })

    languagesListElement.textContent = languagesListElement.textContent.trim().slice(0, -1)
    countryInfoElement.appendChild(languagesListElement)

    //Create and append currency elements    
    const currenciesListElement = document.createElement('p')
    currenciesListElement.setAttribute('class', 'content-item')
    currenciesListElement.textContent = 'Currencies: '

    country.currencies.forEach((currency)=>{
        currenciesListElement.textContent += `${currency.name} (${currency.symbol}), `
    })

    currenciesListElement.textContent = currenciesListElement.textContent.trim().slice(0, -1)
    countryInfoElement.appendChild(currenciesListElement)

    //Create and append calling codes elements
    const callingCodesListElement = document.createElement('p')
    callingCodesListElement.setAttribute('class', 'content-item')
    callingCodesListElement.textContent = 'Calling Codes: '

    country.callingCodes.forEach((callingCode)=>{
        callingCodesListElement.textContent += `+${callingCode}, `
    })

    callingCodesListElement.textContent = callingCodesListElement.textContent.trim().slice(0, -1)
    countryInfoElement.appendChild(callingCodesListElement)

    //Create and append toplevel domains elements        
    const domainsListElement = document.createElement('p')
    domainsListElement.setAttribute('class', 'content-item')
    domainsListElement.textContent = 'Top Level Domains: '

    country.topLevelDomain.forEach((domain)=>{
        domainsListElement.textContent += `${domain}, `
    })

    domainsListElement.textContent = domainsListElement.textContent.trim().slice(0, -1)
    countryInfoElement.appendChild(domainsListElement)
}

// Render page with country info
const renderInfoPage = async (data, targetCountry)=>{
    document.querySelector('#country-info').innerHTML=''
    const countries = await data
    const country = countries.find((country)=>country.name === targetCountry)
    GetHeaderDOM(country)
    GetContentDOM(country)
}