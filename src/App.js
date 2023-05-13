import TodoList from './components/TodoList'
import './App.css';

const todos = [
    {
    id: 1,
    title: 'Belajar React', 
    description: 'Belajar React Hooks, Components, Props, State, Lifecycle', 
    completed: false
    },
    {
    id: 2,
    title: 'Membuat Aplikasi React',
    description: 'Membuat aplikasi TODO List',
    completed: true
    },
    {
    id: 3, 
    title: 'Membuat Aplikasi Chat', 
    description: 'Membuat aplikasi Chat menggunakan React dan Firebase', 
    completed: false 
    },
    {
    id: 4,
    title: 'Belajar Node.js', 
    description: 'Belajar membuat server menggunakan Node.js dan Express', 
    completed: false
    },
];


function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

