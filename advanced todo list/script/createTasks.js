import { modalTask, taskName} from './selector';

const date = document.querySelector('.deadline')

let localItems = {}, currentValue = null;

const createTask = (e) => {
  e.preventDefault();
  if (taskName.value === '') return alert('Please, write your task');
  if (date.value === '') return alert('Please, write deadline');

  let groupList = document.querySelectorAll('.group-list');

  groupList.forEach((el, ind) => {
    if (el.selected) {
      currentValue = ind;
    }
  });

  taskObj = {
    text: taskName.value,
    status: 'new',
    date: transformDate(date.value),
  };

  addItemsToLocalstorage(taskObj);
  showTasks();
};

const addItemsToLocalstorage = (taskObj) => {
  let localItems = JSON.parse(localStorage.getItem('local')) || {};

  localItems[currentValue].tasks.push(taskObj);
  localStorage.setItem('local', JSON.stringify(localItems));
};

export const showTasks = () => {
  let groupItems = document.querySelectorAll('.group__items'),
  localItems = JSON.parse(localStorage.getItem('local')) || {};

  groupItems.forEach((el, i) =>{
    tasks = localItems[i].tasks
    for (let task in tasks) {
      el.innerHTML += `
      <div class="group__task">
        <div class="group__task-name">
            ${task.name}
        </div>
        <div class="group__task-status"> 
        <fieldset class="legend">
            <legend>Status</legend>
            <select class="group__task-select">
                <option value="">New</option>
                <option value="">In progress</option>
                <option value="">Done</option>
            </select>
        </fieldset>
        </div>
        <div class="group__task-deadline"> ${task.date}</div>
      </div>
    `;
    }
  })

  taskName.value = '';
  date.value = '';
  modalTask.style.display = 'none';
};

const transformDate = (date) => {
  return date.split('-').reverse().join('.');
};

export default createTask;
