"use strict";
(async () => {
  const countries = await getCountries();
  const countryListElement = document.querySelector("#country-list");
  const countryInfoElement = document.querySelector("#country-info");

  async function getCountries() {
    return fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        return data;
      });
  }
  const generateCountryContent = (country) => {
    if (country === undefined || country === null) {
      return `<h3>Please select a country</h3>`;
    }

    let currencyLine = country.currencies
      .map(({ name, symbol }) => {
        return `${name} (${symbol})`;
      })
      .join(", ");

    let html = `<div class="content-header"><img src="${country.flag}"
        class="content-header content-header__flag">
      <h2 class="content-header content-header__title">${
        country.alpha2Code
      }</h2>
      <h3 class="content-header content-header__subtitle">${
        country.nativeName
      }</h3>
    </div>
    <div class="content-body">
      <p class="content-item">Capital: ${country.capital}</p>
      <p class="content-item">Region: ${country.region}</p>
      <p class="content-item">Population: ${country.population}</p>
      <p class="content-item">Area: ${country.area}</p>
      <p class="content-item">Timezone: ${country.timezones[0]}</p>
      <p class="content-item">Languages: ${country.languages
        .map((lang) => lang.name)
        .join(", ")}</p>
      <p class="content-item">Currencies: ${currencyLine}</p>
      <p class="content-item">Calling Codes: ${country.callingCodes
        .map((c) => `+${c}`)
        .join(", ")}</p>
      <p class="content-item">Top Level Domains: ${country.topLevelDomain.join(
        ", "
      )}</p>
    </div>`;

    return html;
  };
  const generateSelectOptions = (countries) => {
    let html = `<option class="dropdown__option" value="selector">----Select Country----</option>`;
    return (
      html +
      countries
        .map((country) => {
          return `<option class="dropdown__option">${country.name}</option>`;
        })
        .join("\n")
    );
  };
  const renderCountryInfo = (selectedCountry) => {
    let country = countries.filter((c) => c.name === selectedCountry).pop();
    countryInfoElement.innerHTML = generateCountryContent(country);
  };
  const countryListHandler = (e) => {
    const selectedCountry = e.target.value;

    renderCountryInfo(selectedCountry);
  };

  countryListElement.innerHTML = generateSelectOptions(countries);
  countryListElement.addEventListener("change", countryListHandler, false);
})();
