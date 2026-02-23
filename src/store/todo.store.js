import { Todo } from '../todos/models/todo-model.js';
// Un store en javascript es un objeto que contiene el estado de la aplicación y las funciones para modificar ese estado. En este caso, el store de la aplicación de tareas (TodoApp) podría tener la siguiente estructura:

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Comprar leche'),
        new Todo('Hacer ejercicio'),
        new Todo('Leer un libro'),
    ], 
    filter: Fileters.All,
}