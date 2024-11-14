const input = document.querySelector('#favchamp');
const button = document.querySelector('submit');
const list = document.querySelector('list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

input.Value = '';

button.addEventListener('click', function(){
    if (input.Value.trim() !== '') {
        li.textContent = input.Value;
        deleteButton.textContent = "❎";
        li.append(deleteButton);
        list.append(li);
    }
    input.focus();
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});