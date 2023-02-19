import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';
import Search from './components/Search';
import Account from './components/Account';
import Login from './components/Login';
import Anons from './components/Anons';
import SignUp from './components/SignUp';
//import Logowanie from './components/Logowanie';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
<div>
   <Router>
    <div className="container">
          <Navigation/>
          <Routes>
            <Route exact path="/" element={< Main />} />
            <Route path="/search" element={< Search />}/>
            <Route path="/account" element={< Account />} />
            <Route path="/login" element={< SignUp />} />
          </Routes>
      
    </div>
  </Router>
 
</div>
   

      
  );
}

export default App;
