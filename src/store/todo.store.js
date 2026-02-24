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
 * @param {String} filter 
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
  
        default:
            throw new Error(`Option ${filter} is not valid`);
            break;
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
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
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    Object.keys(Filters).includes(newFilter) || new Error(`Option ${newFilter} is not valid`);
    state.filter = newFilter;
}

/**
 * @returns {String} current filter
 */
const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}