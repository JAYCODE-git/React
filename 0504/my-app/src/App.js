import './App.css';
import Menu from './components/menu/Menu';
import List from './components/list/List';

function App() {
  const name = '🐥 JAY'
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>충분히 잘 하고있다~ 화이팅!</p>
      <Menu />
      <List />
    </div>
  );
}


export default App;
