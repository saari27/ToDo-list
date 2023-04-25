const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const todoList = document.querySelector("#todo-list");
const checkboxes = document.querySelectorAll('.checkbox');


form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (input.value === '') {
		return;
	}
	const taskText = input.value;
	const li = document.createElement('li');

	li.innerHTML = '<input type="checkbox" class="checkbox">' + taskText;

	ul.appendChild(li);
	input.value = '';
});

ul.addEventListener('click', function(event) {

	if (event.target.tagName === 'INPUT') {
		event.target.parentElement.remove();
	}
	else if (event.target.tagName === 'BUTTON') {
		event.target.parentElement.remove();

	}
});

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentNode.remove();
        }
    });
});