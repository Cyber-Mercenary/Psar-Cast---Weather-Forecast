const btn = document.getElementById("button");
const city = document.querySelector(".search input");
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='



async function check(city){
    const info = await fetch(apiurl + city + '&appid=#insert your own open weather API Key');
    var data = await info.json();

    if (info.status == 404){
        document.querySelector(".invalid").style.display = "block"
        document.querySelector(".info").style.display = "none"
    } else {
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + " Km/h";



        if (data.weather[0].main == "Clouds"){
            document.getElementById("logo").src = "images/clouds.png"
        }else if (data.weather[0].main == "Clear"){
            document.getElementById("logo").src = "images/clear.png"
        }else if (data.weather[0].main == "Rain"){
            document.getElementById("logo").src = "images/rain.png"
        }else if (data.weather[0].main == "Mist"){
            document.getElementById("logo").src = "images/mist.png"
        }else if (data.weather[0].main == "Drizzle"){
            document.getElementById("logo").src = "images/drizzle.png"
        }else if (data.weather[0].main == "Snow"){
            document.getElementById("logo").src = "images/snow.png"
        }


        document.querySelector(".info").style.display = "block"
        document.querySelector("invalid").style.display = "none"

        console.log(data)
    }

    

}

city.addEventListener("keypress", (e) => {
    if (e.key === 'Enter'){
        check(city.value)
    }
})
btn.addEventListener("click", () => {
    check(city.value)
})