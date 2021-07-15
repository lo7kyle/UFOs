// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// building the table 
function buildTable(data) {
    // Clears out any existing data
    tbody.html("");
    // loop through each obj in data and append a row and cell for each value in row
    data.array.forEach(dataRow => {
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
