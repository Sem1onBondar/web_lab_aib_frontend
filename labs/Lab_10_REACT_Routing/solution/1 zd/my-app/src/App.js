import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import NotFound from './zd_1/NotКnown'
import About from './zd_1/About'
import Main from './zd_1/Main'


function App() {
  return (
    <>
      <body>
        <div><Link to="/">Главная</Link></div>
        <div><Link to="/about">Компания</Link></div>
      </body>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;