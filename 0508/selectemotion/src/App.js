import MenuList from './components/MenuList/MenuList';
import DisplayMood from './components/DisplayMood/DisplayMood';
import { useState } from 'react';

function App() {
  const [currentMood, setCurrentMood] = useState('');

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
