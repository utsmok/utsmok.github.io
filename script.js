// Define a global variable to store the data
var data;

// Define a function to create the table using Tabulator
function createTable() {
    // Create a new Tabulator object with the div id and options
    var table = new Tabulator("#table", {
        // Set the height of the table to fit the screen
        height: "100vh",
        // Set the data source to the global data variable
        data: data,
        // Set the layout to fit the columns to the width of the table
        layout: "fitColumns",
        // Set the columns definition with the fields and titles
        columns: [
            {title: "Name", field: "Title", sorter: "string"},
            {title: "URL", field: "Adress", formatter:"link", formatterParams:{target:"_blank"}},
            {title: "Description", field: "Description", sorter: "string", formatter:"textarea"},
            {title: "Category", field: "Category", sorter: "string", formatterParams:{stars:3}},
            {title: "Depth", field: "Depth", formatter: "star", sorter:"numeric"},
        ],
        // Set the row click callback function to open the detail page
        rowClick: function(e, row) {
            // Get the row data object
            var rowData = row.getData();
            // Create a new window object
            var win = window.open("", "_blank");
            // Get the template source from the template.hbs file
            $.get("template.hbs", function(source) {
                // Compile the template using Handlebars
                var template = Handlebars.compile(source);
                // Render the template with the row data object
                var html = template(rowData);
                // Write the html to the new window document
                win.document.write(html);
                // Close the document stream
                win.document.close();
            });
        }
    });
}

// Define a function to create the cards using Bootstrap
function createCards() {
    // Loop through each item in the data array
    for (var i = 0; i < data.length; i++) {
        // Get the item object
        var item = data[i];
        // Create a new div element for the card
        var card = document.createElement("div");
        // Add the card class to the div element
        card.classList.add("card");
        // Create a new img element for the card image
        var img = document.createElement("img");
        // Add the card-img-top class to the img element
        img.classList.add("card-img-top");
        // Set the src attribute to the item image url
        img.setAttribute("src", item.image);
        // Set the alt attribute to the item name
        img.setAttribute("alt", item.Title);
        // Set the data-lightbox attribute to enable lightbox feature
        img.setAttribute("data-lightbox", "gallery");
        // Set the data-title attribute to show the item name on lightbox
        img.setAttribute("data-title", item.Title);
        // Append the img element to the card element
        card.appendChild(img);
        // Create a new div element for the card body
        var body = document.createElement("div");
        // Add the card-body class to the div element
        body.classList.add("card-body");
        // Create a new h5 element for the card title
        var title = document.createElement("h5");
        // Add the card-title class to the h5 element
        title.classList.add("card-title");
        // Set the text content to the item name
        title.textContent = item.Title;
        // Append the title element to the body element
        body.appendChild(title);
        // Create a new p element for the card text
        var text = document.createElement("p");
        // Add the card-text class to the p element
        text.classList.add("card-text");
        // Set the text content to show some item details
        text.textContent = `Category: ${item.Category}\nDepth: ${item.Depth}}`;        
        // Append the text element to the body element
        body.appendChild(text);
        // Append the body element to the card element
        card.appendChild(body);
        // Get the cards div element by id
        var cards = document.getElementById("cards");
        // Append the card element to the cards element
        cards.appendChild(card);
        }

}

// Define a function to toggle between table mode and gallery mode

function toggleMode() {

// Get the mode switch input element by id
var modeSwitch = document.getElementById("modeSwitch");

// Get the table mode div element by id
var tableMode = document.getElementById("tableMode");


// Get the gallery mode div element by id
var galleryMode = document.getElementById("galleryMode");
// Check the mode switch checked state
if (modeSwitch.checked) {
    // If checked, show the table mode and hide the gallery mode
    tableMode.classList.remove("d-none");
    galleryMode.classList.add("d-none");
} else {
    // If not checked, hide the table mode and show the gallery mode
    tableMode.classList.add("d-none");
    galleryMode.classList.remove("d-none");
}
}

// When the document is ready
$(document).ready(function() {
// Parse the CSV file using Papa Parse
Papa.parse("data.csv", {
// Set the header option to true to use the first row as field names
header: true,
// Set the download option to true to fetch the file from the URL
download: true,
// Set the complete callback function to handle the parsed data
complete: function(results) {
    // Assign the data array to the global data variable
    data = results.data;
    // Create the table using Tabulator
    createTable();
    // Create the cards using Bootstrap
    createCards();
}
});
// Add a change event listener to the mode switch input element
$("#modeSwitch").change(function() {
// Toggle between table mode and gallery mode
toggleMode();
});
});
