
let showWeatherCoor = (latitude, longitude) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
    let request = new XMLHttpRequest();

    request.open('GET', url);

    request.responseType = 'json';
    
    request.send();    


    request.onload = function () {
        if(request.readyState === request.DONE){
            if(request.status === 200){
                let response = request.response.main.temp;
                
                document.querySelector('.weather').textContent = response;
                document.querySelector('.city').textContent = request.response.name;
    
            }
        }
    }    
}


let showWeatherCity = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
    let request = new XMLHttpRequest();

    request.open('GET', url);

    request.responseType = 'json';
    
    request.send();    


    request.onload = function () {
        if(request.readyState === request.DONE){
            if(request.status === 200){
                let response = request.response.main.temp;
                
                document.querySelector('.weather').textContent = response;
                document.querySelector('.city').textContent = request.response.name;
    
            }
        }
    }    
}





let error = () => {
    
    showWeatherCoor(46.5196535, 6.6322734);
}

let options = () => {
    enableHighAccury: true;
}


if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        showWeatherCoor(latitude, longitude);
    
    }, error, options)
}



document.querySelector('#change').addEventListener('click', () => {
    showWeatherCity(prompt('Enter a city '));
})

