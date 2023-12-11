import React from 'react'
import { Outlet } from 'react-router-dom';

function Users() {
  return (
    <div>
      Пользователи
      <Outlet/>
    </div>
  );
}

export default Users