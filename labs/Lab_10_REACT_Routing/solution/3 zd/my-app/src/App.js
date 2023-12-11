import './App.css';
import './App 2.0.css';
import React from 'react';
import User from './zd_3/User';
import UsersList from './zd_3/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
	<a href='/'>Главная</a> 
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;