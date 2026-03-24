import { Todo } from '../todos/models/todo-model.js';
// Un store en javascript es un objeto que contiene el estado de la aplicación y las funciones para modificar ese estado. En este caso, el store de la aplicación de tareas (TodoApp) podría tener la siguiente estructura:

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [], 
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('Init Store');
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;
    
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
    
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
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
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    })
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    Object.keys(Filters).includes(newFilter) || new Error(`Option ${newFilter} is not valid`);
    state.filter = newFilter;
    saveStateToLocalStorage();
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