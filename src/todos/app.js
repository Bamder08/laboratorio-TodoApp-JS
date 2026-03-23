import todoStore from '../store/todo.store';
import html from './app.html?raw'; // El ?raw es para que se importe el contenido del archivo html como un string, en lugar de ser tratado como un módulo o recurso.
import { renderTodos } from './uses-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    todoDelete: '.destroy',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
    }

    // Cuando la funcion App sea ejecutada o se llama, se va a ejecutar esta función anónima
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUl = document.querySelector(ElementIDs.TodoList);
    const todoDeleteBtn = document.querySelector(ElementIDs.todoDelete);

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode !== 13) return; // Si el código de la tecla presionada no es 13 (Enter), no hacer nada
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = ''; // Limpiar el input después de agregar el todo
    });

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]'); // Busca el elemento más cercano que tenga el atributo data-id
        todoStore.toggleTodo(element.getAttribute('data-id')); // Obtiene el valor del atributo data-id y lo pasa a la función toggleTodo del store
        displayTodos();
    })

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.classList.contains('destroy')
            ? event.target.closest('[data-id]') // Si el elemento clickeado tiene la clase 'destroy', busca el elemento más cercano con el atributo data-id
            : null; // Si no, asigna null
        if(!element) return;

        todoStore.deleteTodo(element.getAttribute('data-id')); // Obtiene el valor del atributo data-id y lo pasa a la función deleteTodo del store
        displayTodos();
    })
    
}