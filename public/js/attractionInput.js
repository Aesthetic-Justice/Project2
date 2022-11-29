const submit = document.querySelector(".button")

const addAttraction = async (event)=>{
    event.preventDefault();

    const cityName= document.querySelector('.city-name');
    const attractionName = document.querySelector('.attraction');
    const attractionType= document.querySelector('.location-type');
    const description = document.querySelector('.description');
    

    if (cityName && attractionName && attractionType && description){
        const response = await fetch('../api/post/addAttraction', {
            method: 'POST', 
            body: JSON.stringify({
                city_id: cityName,
                name: attractionName,
                location_type: attractionType,
                description: description
            }),
            headers: {"Content-Type": "application/json"}
        })
        if(response.ok) {
            alert("Your attraction has been successfully added")
            document.location.replace("/homepage/")
        }
        else {
            alert("Failed to create attraction")
        }
    }
}

submit.addEventListener("click", (addAttraction))

