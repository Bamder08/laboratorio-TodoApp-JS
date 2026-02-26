import { Todo } from "../models/todo-model";

/**
 * 
 * @param {Todo} todo 
 * @returns 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A TODO Object is required');
    const html = `<h1>${todo.description}</h1>`;
    const LiElement = document.createElement('li');
    LiElement.innerHTML = html;
    return LiElement;
}