window.onload = function(){
    const weatherContainer = document.getElementById("weather-result");
    const submitButton = document.getElementById("submit-button");
    const cityInput = document.getElementById("city-input");

    submitButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const city = cityInput.value;
        try {
            const response = await fetch(`https://wttr.in/${city}?format=%C:+%t+%T+%w+%W+%h+%m+%s`);
            const data = await response.text();
            weatherContainer.innerHTML = `<pre>${data}</pre>`;
        } catch (error) {
            console.log(error);
        }
    });
}
