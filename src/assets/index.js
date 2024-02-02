const API_KEY = "0f586cf9d80141f79f9044086080d115"
async function getCity(name){
    const url= `api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}`
    const response =await fetch(url)
    const data = await response.json()
    return data

}

export {getCity};
    