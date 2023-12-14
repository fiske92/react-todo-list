import { useState } from 'react';
import './App.css';
import ToDoPage from "./pages/ToDoPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return <div className={darkMode ? 'dark' : ''}>
    <ToDoPage setDarkModeProp={{darkMode, setDarkMode}} />
  </div>
}

export default App;
