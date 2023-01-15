async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const dataContainer = document.getElementById("data-container");
        data.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `<p>Name: ${item.name}</p><p>Email: ${item.email}</p><p>City: ${item.address.city}</p>`;
            dataContainer.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}
fetchData();
