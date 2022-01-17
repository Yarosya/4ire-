import groupModalView from './script/modalGroup';
import taskModalView from './script/modalTask';
import { createGroup, showGroup } from './script/createGroup';
import { group, task, btnCreateGroup, btnCreateTask } from './script/selector';
import {createTask, showTasks} from './script/createTasks';

group.addEventListener('click', groupModalView);
task.addEventListener('click', taskModalView);
btnCreateGroup.addEventListener('click', createGroup);
showGroup();
btnCreateTask.addEventListener('click', createTask);
showTasks();
