import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../redux/actions';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'done' ? task.isDone : filter === 'not' ? !task.isDone : true
  );

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="done">Done</option>
        <option value="not">Not Done</option>
      </select>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
