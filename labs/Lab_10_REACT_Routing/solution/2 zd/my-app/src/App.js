import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './zd_2/Main'
import User from './zd_2/User'
import About from './zd_2/About'
import Users from './zd_2/Users'
import NotFound from './zd_2/NotКnown'

function App() {
  return (
    <>
      <body>
        <div><Link to="/">Главная</Link></div>
        <div><Link to="/about">Компания</Link></div>
        <div><Link to="/*">Ошибка 404</Link></div>
        <div><Link to='/users'>Пользователи</Link></div>
        <div><Link to='/users/1'>Пользователь №1</Link></div>
        <div><Link to='/users/2'>Пользователь №2</Link></div>
        <div><Link to='/users/3'>Пользователь №3</Link></div>
      </body>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/users' element={<Users/>}>
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;