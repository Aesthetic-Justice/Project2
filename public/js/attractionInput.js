const submit = document.querySelector(".button")

const addAttraction = async (event) => {
    event.preventDefault();

    const cityName = document.getElementById('city-dropdown');
    const attractionName = document.querySelector('.attraction');
    const attractionType = document.querySelector('.location-type');
    const description = document.querySelector('.description');
   console.log(cityName.value);

    if (cityName && attractionName && attractionType && description) {
        const response = await fetch('../api/post/addAttraction', {
            method: 'POST',
            body: JSON.stringify({
                city_id: cityName.value,
                name: attractionName.value,
                location_type: attractionType.value,
                description: description.value
            }),
            headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
            alert("Your attraction has been successfully added")
            document.location.replace("/")
        }
        else {
            alert("Failed to create attraction")
        }
    }
}

submit.addEventListener("click", (addAttraction))

