import html from './app.html?raw'; // El ?raw es para que se importe el contenido del archivo html como un string, en lugar de ser tratado como un módulo o recurso.

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    // Cuando la funcion App sea ejecutada o se llama, se va a ejecutar esta función anónima
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
}