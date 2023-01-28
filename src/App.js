
import './App.css';
import Navbar from './Components/Navbar';
import Upcase from './Components/Upcase';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  const toggleMode = () => {
    console.log("clicked");
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212'
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode Disabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Upcase showAlert={showAlert} mode={mode} />} />
        </Routes>
        </div>
      </Router>
    
    </>
  );
}

export default App;
