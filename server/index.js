const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

//middleware
app.use(cors());
app.use(express.json());

// ROUTES

//create a todo_item (use _item that not sign todo)

//get all todos

// get a todo_item

// update a todo_item

//delete a todo_item


app.listen(5000, () => {
    console.log('Server has started on port 5000');
});
