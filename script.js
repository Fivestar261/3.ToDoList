
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Function to create a new task item
    const addTask = () => {
        const taskText = input.value.trim();
        if (taskText === '') return; // Do nothing if input is empty

        // Create list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;

        // Append list item to the list
        todoList.appendChild(listItem);

        // Clear input field after adding task
        input.value = '';

        // Attach event listener to delete button
        const deleteButton = listItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        // Attach event listener to mark task as checked/unchecked
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('checked');
        });
    };

    // Event listener for Add button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press in input field
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});


