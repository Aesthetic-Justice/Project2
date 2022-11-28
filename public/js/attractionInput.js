const addAttraction = async (event)=>{
    event.preventDeault();

    const cityName= document.querySelector('.city-name');
    const attractionType= document.querySelector('.location-type');
    const description = document.querySelector('.description');

    if (cityName && attractionType && description){
        const response = await fetch('../API/users/attractionInput', {
            method: 'POST', 

        })
    }
}