'strict mode'

const getCountries = async ()=>{
    return fetch('https://restcountries.eu/rest/v2/all').then((response)=>{
        if (response.status === 200){
            return response.json()
        } else {
            throw new Error(response.status)
        } 
    }).then((data)=>{
        return data
    })
}