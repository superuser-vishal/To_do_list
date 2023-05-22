// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

// Create an instance of the express application
const app = express();

// Initialize arrays for items and work items
let items = [];
let workItems = [];

// Set the view engine to use EJS templates
app.set('view engine', 'ejs');

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
    let day = date.getDate();

// Render the "list" view with the current day and items
res.render("list", { listTitle: day, newListItems: items });
});

// Handle the POST request to the root URL ("/")
app.post("/", (req, res) => {
var item = req.body.newItem;

// Check if the item belongs to the work list
if (req.body.list === "Work") {
workItems.push(item);
res.redirect("/work");
} else {
items.push(item);
res.redirect("/");
}
});

// Define a route for the "/work" URL
app.get("/work", (req, res) => {
// Render the "list" view with the work list items
res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
console.log('Server is listening on port 3000');
});