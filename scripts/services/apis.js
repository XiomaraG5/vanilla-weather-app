
const param={
    'method':'GET',
    'access_token':'pk.eyJ1IjoieGlvbWcxNTcwIiwiYSI6ImNsMDc3YmszcDBpNjgzcnJ1YW8zeGZuOWIifQ.RJnqEyce8d5qq92AJfKDZQ',
    'limit': 5,
    'language':'es'       
}

export const getPlace= async (place ='')=>{
    try {
        const instance = fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoieGlvbWcxNTcwIiwiYSI6ImNsMDc3YmszcDBpNjgzcnJ1YW8zeGZuOWIifQ.RJnqEyce8d5qq92AJfKDZQ`),
        resp = await  (await instance).json();
        
        console.log('city: ', resp);
        return resp.features.map(e=>({
            id: e.id,
            name:e.place_name,
            lng: e.center[0],
            lat:e.center[1]
        })) // retorna los luagres o ciudades que coincidan con el parametro
        
    } catch (error) {
        console.log(error);
    }
}

export const weatherPlace= async(lat='',lon='')=>{
        try{
            // instance
            const instance = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=dc79406ee7beda7e0a3279099cc446d6&units=metric&lang=es`)
            ,
            res = await (await instance).json()
             console.log(res);
            return res

                // desc:res.data.weather[0].description,
                // min:res.data.main.temp_min,
                // max:res.data.main.temp_max,
                // temp:res.data.main.temp
            
        }catch(error){
            return []
        }
    }