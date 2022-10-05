import { taskName } from './selectors.js';
import Task from './tasks.js';
import refreshList from './refresh.js';

const createTask = () => {
  const task = new Task(taskName.value, false);
  task.addTask();
  refreshList();
  taskName.value = '';
  document.location.reload();
};

export default createTask;