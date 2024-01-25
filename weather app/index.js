var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = 'bec7639c8c097f4acf56234da8d2f91a';

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descriptionVal = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            city.innerHTML = 'Weather of <span>' + nameval + '</span>';
            temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + '°C</span>';
            descrip.innerHTML = 'Sky conditions: <span>' + descriptionVal + '</span>';
            wind.innerHTML = 'Wind speed: <span>' + windSpeed + ' km/h</span>';
        })
        .catch(err => alert('You entered the wrong city name'));
});
