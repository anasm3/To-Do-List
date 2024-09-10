const addCloseButton = (li) => {
  const span = document.createElement('SPAN');
  span.textContent = '\u00D7';
  span.className = 'close';
  li.appendChild(span);
};

const loadTasks = () => {
  const ul = document.getElementById('myUL');
  ul.innerHTML = '';
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.checked) {
      li.classList.add('checked');
    }
    addCloseButton(li);
    ul.appendChild(li);
  });
};

const saveTasks = () => {
  const tasks = [];
  document.querySelectorAll('#myUL li').forEach(li => {
    tasks.push({
      text: li.textContent.replace('\u00D7', '').trim(),
      checked: li.classList.contains('checked')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  
  const ul = document.getElementById('myUL');
  const addBtn = document.getElementById('addBtn');
  const input = document.getElementById('myInput');
  
  ul.addEventListener('click', event => {
    if (event.target.classList.contains('close')) {
      event.target.parentElement.remove();
      saveTasks();
    } else if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
      saveTasks();
    }
  });
  
  addBtn.addEventListener('click', () => {
    const inputValue = input.value.trim();
    if (inputValue) {
      const existingItems = Array.from(document.querySelectorAll('#myUL li')).map(li => li.textContent.replace('\u00D7', '').trim());
      if (!existingItems.includes(inputValue)) {
        const li = document.createElement('li');
        li.textContent = inputValue;
        addCloseButton(li);
        document.getElementById('myUL').appendChild(li);
        input.value = '';
        saveTasks();
      } else {
        alert('This item already exists!');
      }
    } else {
      alert('You must write something!');
    }
  });
});
