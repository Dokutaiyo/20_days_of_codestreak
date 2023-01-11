const table = document.getElementById("multiplication-table");

for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    for (let j = 1; j <= 10; j++) {
        let cell = row.insertCell();
        cell.innerHTML = i * j;
    }
}
