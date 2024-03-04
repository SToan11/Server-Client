document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;

    fetch(`/weather?city=${city}&date=${date}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather for ${city}</h2>
                <p>Date: ${date}</p>
                <p>Temperature: ${data.temperature}</p>
                <p>Description: ${data.description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
