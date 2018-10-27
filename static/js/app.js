// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

submit.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(observation => observation.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((observation)=> {
        var row = tbody.append("tr");
        Object.entries(observation).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
});


