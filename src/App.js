import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/navigation';
import Router from './router/router'
// import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
     
    </div>
  );
}

export default App;
