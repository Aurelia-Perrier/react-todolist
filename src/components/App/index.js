import './styles.scss';
import CounterTasks from '../CounterTasks';
import Form from '../Form';
import TasksList from '../TasksList';

function App() {
  return (
    <div className="app">
      <Form />
      <CounterTasks />
      <TasksList />
    </div>

  );
}

export default App;
