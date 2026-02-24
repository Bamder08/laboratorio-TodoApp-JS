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
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('Init Store');
}

const loadStore = () => {
    throw new Error('Not implemented');
    
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
}

/**
 * @returns {String} current filter
 */
const getCurrentFilter = () => {
    throw new Error('Not implemented');
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}