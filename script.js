const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const emptyMessage = document.querySelector('#empty-message');

function updateEmptyMessage() {
  emptyMessage.hidden = list.children.length > 0;
}

// Add a feature to toggle into dark mode.
// Add a git fetch and merge tools.

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement('li');
  const label = document.createElement('span');
  label.textContent = task;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'done-button';
  button.textContent = 'Done';
  button.setAttribute('aria-label', `Complete ${task}`);

  item.append(label, button);
  list.append(item);
  form.reset();
  input.focus();
  updateEmptyMessage();
});

list.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest('.done-button');
  if (!button || !list.contains(button)) return;
  button.closest('li').remove();
  updateEmptyMessage();
});
