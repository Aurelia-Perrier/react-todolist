import './styles.scss';
import PropTypes from 'prop-types';

function TasksList({ tasks, handleTaskDone, handleDeleteTask }) {
  return (
    <ul className="list">
      {
        tasks.map((task) => (
          <li key={task.id}>
            <label htmlFor="checkbox" className={task.done ? 'list-item list-item--done' : 'list-item'}>
              <input
                name="checkbox"
                type="checkbox"
                checked={task.done}
                className="list-item-checkbox"
                onChange={() => handleTaskDone(task.id)}
              />
              {task.label}
              <span
                className="delete"
                onClick={() => handleDeleteTask(task.id)}
              >
                x
              </span>
            </label>
          </li>
        ))
    }
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  handleTaskDone: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TasksList;
