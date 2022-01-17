import { doc } from 'prettier';
import { modalGroup, colorValue, groupName, groupItem } from './selector';
let groupObj, localItems = JSON.parse(localStorage.getItem('local')) || {}

export const createGroup = function (e) {
  e.preventDefault();
  if (groupName.value === '') return alert('Please, write group name');

  groupObj = {
    name: groupName.value,
    color: colorValue.value,
    tasks: []
  }
  showGroup(groupObj);
  renderNewGroup();
};

const renderNewGroup = () => {
  addToLocalStorage(groupObj)
  colorValue.value = '#000000';
  groupName.value = '';
  modalGroup.style.display = 'none';
};

const addToLocalStorage = (groupObj) => {
  let groupList = document.querySelectorAll('.group-list'),
  groupIndex = null;

  groupList.forEach((el, ind) => {
    if (el.value === groupObj.name) {
      groupIndex = ind;
    }
  });

  if (groupIndex != null) {
    localItems[`${groupIndex}`] = groupObj;
  }
  
  localStorage.setItem('local', JSON.stringify(localItems));
};

export const showGroup = (groupObj = null) => {
  const modalSelect = document.querySelector('.modal-task__select');
  let groupsList = Object.keys(localItems).map(function(key){
    return localItems[key];
  }) || [],
  selectGroup,
  groupBlock = '';

  if (groupObj) {
    groupsList.push(groupObj)
  }

  for (let index in groupsList){
    groupBlock += `
    <div class="group__items">
      <div class="group__name">
        <fieldset style="background-color:${groupsList[index].color}" class="group__legend legend">
          <legend >Group</legend>
            <h2 class="group__title">${groupsList[index].name}</h2>
        </fieldset>
      </div>
     <button class="delete group__delete"><i class="far fa-trash-alt"></i></button>
    </div>
    `;
  }

  groupItem.innerHTML = groupBlock;
  groupsList.forEach((element, index) => {
    selectGroup += `<option class = 'group-list' data-id =${index}>${element.name}</option>`;
  });
 
  modalSelect.innerHTML = selectGroup;
};
