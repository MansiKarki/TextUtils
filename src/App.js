import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';
import Abouts from './components/Abouts';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#042743';
      showAlert("Light mode has been enabled", "success");
    }
  }, [mode]);

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} setMode={setMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          {/* exact is IMPORTANT */}
          <Route exact path="/">
            <TextForm
              heading="Enter text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>

          <Route exact path="/about">
            <Abouts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
