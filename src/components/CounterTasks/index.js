import './styles.scss';
import PropTypes from 'prop-types';

function CounterTasks({ toDoTasks }) {
  return (
    <h1 className="counter">{toDoTasks} tâches à effectuer</h1>
  );
}

CounterTasks.propTypes = {
  toDoTasks: PropTypes.number.isRequired,
};

export default CounterTasks;
