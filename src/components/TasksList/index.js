import './styles.scss';

function TasksList() {
  return (
    <ul className="list">
      <li>
        <label htmlFor="checkbox" className="list-item">
          <input
            name="checkbox"
            type="checkbox"
            className="list-item-checkbox"
          />
          Manger
          <span
            className="delete"
          >
            x
          </span>
        </label>
      </li>
    </ul>
  );
}

export default TasksList;
