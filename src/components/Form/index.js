import PropTypes from 'prop-types';
import './styles.scss';

function Form({ addTask, handleNewLabel, taskLabel }) {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        className="form-input"
        placeholder="Ajouter une tâche"
        onChange={handleNewLabel}
        value={taskLabel}
      />
    </form>
  );
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
  handleNewLabel: PropTypes.func.isRequired,
  taskLabel: PropTypes.string.isRequired,
};

export default Form;
