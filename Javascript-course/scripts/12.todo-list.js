// to do list js
const todoList = [{
        name: "make dinner",
        dueDate: "19-06-2025"
    },
    {
        name: "wash dishes",
        dueDate: "19-06/2025"
    },
    {
        name: "watch youtube",
        dueDate: "19-06/2025"
    }];

renderTodoList();

// show to do list
function renderTodoList() {
    let todoListHTML = "";

    todoList.forEach((todoObject) => {
        // destructure
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-button">Delete</button>
        `; // generate html
        todoListHTML += html;
});

// for (let i = 0; i < todoList.length; i++) {
//     const todoObject = todoList[i];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
    
//     // destructure
//     const { name, dueDate } = todoObject;
//     const html = `
//     <div>${name}</div>
//     <div>${dueDate}</div>
//     <button onclick="
//         todoList.splice(${i}, 1);
//         renderTodoList();
//     " class="delete-todo-button">Delete</button>
//     `; // generate html
//     todoListHTML += html;
// }

document.querySelector(".js-todo-list").innerHTML = todoListHTML;

// add event listener - delete button
document.querySelectorAll(".js-delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
        console.log(index); // closure
        todoList.splice(index, 1);
        renderTodoList();
    });
});

}

// add event listener
// add button
document.querySelector(".js-add-todo-button").addEventListener("click", () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;

    const dateInputElement = document.querySelector(".js-due-date-input");
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = "";

    renderTodoList();
}
