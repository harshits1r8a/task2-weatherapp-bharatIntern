const key = '1f9001323f49100ea9c186109f41a398';

const url = 'https://api.openweathermap.org/data/2.5/weather?'


const search = document.querySelector('.search-btn')

search.addEventListener('click', (e) => {
    let city = document.querySelector('#input')
    const cityName = city.value

    document.querySelector('.error-message').style.display = 'none'

    // function
    async function weatherDetail(cityName) {
        try {
            // **** Fetching data Code Space **************************
            const data = await fetch(`${url}q=${cityName}&appid=${key}&units=metric`);
            const jsonData = await data.json();
            // console.log(jsonData);
            // console.log(`Temp : ${jsonData.main.temp}`);
            // console.log(`Wind speed : ${jsonData.wind.speed}`);
            // console.log(`Wind humadity : ${jsonData.main.humidity}`);
            // console.log(`main : ${jsonData.weather[0].main}`);
            // **** End of Fetching data Code Space **************************

            // ********************  Updated Data ***************************
            // City
            const location = document.querySelector('.location')
            location.innerText = cityName

            // temp-value
            document.querySelector('.temp-value').innerText = Math.round(jsonData.main.temp)


            // humadity
            document.querySelector('.h-value').innerText = `${jsonData.main.humidity}%`

            // speed
            document.querySelector('.s-value').innerText = `${Math.round(jsonData.wind.speed * 3.6)} km/h`


            // Update image
            let img = document.querySelector('.w-img')
            if (jsonData.weather[0].main == 'Clear') {
                img.src = "./images/clear.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1546440730-4716c1a47815?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            } else if (jsonData.weather[0].main == 'Clouds') {
                img.src = "./images/clouds.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506563805286-a52f937ec9ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            } else if (jsonData.weather[0].main == 'Rain') {
                img.src = "./images/rain.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            } else if (jsonData.weather[0].main == 'Drizzle') {
                img.src = "./images/drizzle.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1556485689-33e55ab56127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            } else if (jsonData.weather[0].main == 'Mist') {
                img.src = "./images/mist.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1620937170928-a03bb6261277?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            } else if (jsonData.weather[0].main == 'Snow') {
                img.src = "./images/snow.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1642091821481-e7ec143d44d3?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            } else if (jsonData.weather[0].main == 'Haze') {
                img.src = "./images/haze.png"
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1531224127972-4b10c9eae19e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            }

            city.value = '';

            document.querySelector('.data-display').style.display = 'block'

        } catch (err) {
            // console.log("Something wen wrong!");
            document.querySelector('.error-message').style.display = 'block'
            document.querySelector('.data-display').style.display = 'none'
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603437873662-dc1f44901825?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }
    }

    weatherDetail(cityName)

})







