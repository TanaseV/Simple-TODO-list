window.onload = () => {
	const todoForm = document.querySelector("#add-new-todo-form");
	const todosContainer = document.getElementById("todos");
	const newTodoInput = document.getElementById("new-todo-input-field");

	todoForm.addEventListener("submit", function(event) {
		event.preventDefault(); // Prevent the form from submitting the traditional way

		const newTodoText = newTodoInput.value.trim(); // Get the input value and trim any extra spaces

		if (newTodoText === "") {
			alert("Please enter a task."); // Check if the input is empty
			return;
		}

		// Create a new task element
		const newTask = document.createElement("div");
		newTask.classList.add("task");

		const contentDiv = document.createElement("div");
		contentDiv.classList.add("content");

		const taskInput = document.createElement("input");
		taskInput.type = "text";
		taskInput.classList.add("text");
		taskInput.value = newTodoText;
		taskInput.readOnly = true;

		contentDiv.appendChild(taskInput);

		const actionsDiv = document.createElement("div");
		actionsDiv.classList.add("actions");

		const editButton = document.createElement("button");
		editButton.classList.add("edit");
		editButton.innerText = "Edit";

		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete");
		deleteButton.innerText = "Delete";

		actionsDiv.appendChild(editButton);
		actionsDiv.appendChild(deleteButton);

		newTask.appendChild(contentDiv);
		newTask.appendChild(actionsDiv);

		// Append the new task to the todos container
		todosContainer.appendChild(newTask);

		// Clear the input field after adding the task
		newTodoInput.value = "";

		// Add event listeners for edit and delete buttons
		editButton.addEventListener("click", function() {
			if (editButton.innerText.toLowerCase() === "edit") {
				taskInput.readOnly = false;
				taskInput.focus();
				editButton.innerText = "Save";
			} else {
				taskInput.readOnly = true;
				editButton.innerText = "Edit";
			}
		});

		deleteButton.addEventListener("click", function() {
			todosContainer.removeChild(newTask);
		});
	});
};
