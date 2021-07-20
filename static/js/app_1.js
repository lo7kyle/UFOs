// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// building the table 
function buildTable(data) {
    // Clears out any existing data
    tbody.html("");

    // loop through each obj in data and append a row and cell for each value in row
    data.forEach((dataRow) => {
        // this tells js to find tbody tag in html and add table row <tr> 
        let row = tbody.append("tr");
        /* loops through each field in dataRow 
           reference 1 obj from data and place in one row
           1 object per row
        */
        Object.values(dataRow).forEach((val) => {
            // this sets up the action of appending dat into table data tag <td>
            let cell = row.append("td");
            // variable that holds only each value from the object
            cell.text(val);
        });

    });

}
// Function to filter table we built 
function handleClick() {
    // Tell D3 to look for the #datetime id in the HTML tags. 
    // chaining select tells D3 to grab the info and hold it in the date variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads (default)
buildTable(tableData);
