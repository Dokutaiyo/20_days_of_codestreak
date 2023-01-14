const data = [
    { name: "Ram", age: 25, city: "Punjab" },
    { name: "Shyam", age: 32, city: "Bihar" },
    { name: "Sagar", age: 30, city: "Delhi" },
    { name: "Ban", age: 35, city: "Delhi" },
    { name: "Dan", age: 28, city: "Jaipur" }
];

const output = document.getElementById("output");

const filteredData = _.filter(data, function(item) {
    return item.city === "Delhi";
});

const sortedData = _.sortBy(filteredData, "age");

output.innerHTML = JSON.stringify(sortedData);
