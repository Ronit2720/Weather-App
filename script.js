const apiKey="539715a045fdfd9296af205aeb7ed1f8";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".icon")


async function checkWeather(city){
    const response = await fetch(apiUrl +
        city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°F";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
    
    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png" 
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzel"){
        icon.src = "images/drizzel.png"
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }  
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
