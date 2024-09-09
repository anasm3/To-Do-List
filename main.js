const addCloseButton = (li) => {
    const span = document.createElement('SPAN');
    span.textContent = '\u00D7';
    span.className = 'close';
    li.appendChild(span);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById('myUL');
    const addBtn = document.getElementById('addBtn');
    const input = document.getElementById('myInput');
  
    document.querySelectorAll('ul li').forEach(li => addCloseButton(li));
    
    ul.addEventListener('click', event => {
      if (event.target.classList.contains('close')) {
        event.target.parentElement.style.display = 'none';
      } else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
      }
    });
  
    addBtn.addEventListener('click', () => {
      const inputValue = input.value.trim();
      if (inputValue) {
        const li = document.createElement('li');
        li.textContent = inputValue;
        addCloseButton(li);
        ul.appendChild(li);
        input.value = '';
      } else {
        alert('You must write something!');
      }
    });
  });
  