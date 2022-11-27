const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES

//create a todo_item (use _item that not sign todo)
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query('INSERT INTO todo(description) VALUES($1) RETURNING *',
            [description]);
        res.json(newTodo.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

//get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// get a todo_item
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id=$1',
            [id]);
        res.json(todo.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// update a todo_item

//delete a todo_item


app.listen(5000, () => {
    console.log('Server has started on port 5000');
});
