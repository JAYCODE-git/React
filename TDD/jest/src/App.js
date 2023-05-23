import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('khaki');
  const newColor = buttonColor === 'khaki' ? 'blue' : 'khaki';

  return (
    <button
      type='button'
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newColor)}
    >
      Change to {newColor}!
    </button>
  );
}

export default App;
