import React, {useEffect, useState} from "react";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                { todos.map(todo =>
                    (<tr key={ todo.todo_id }>
                        <td>{ todo.description }</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>)
                ) }
                </tbody>
            </table>
        </>
    );
};

export default ListTodos;
