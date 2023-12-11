import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        Страница не найдена, обратись к - <Link to='/'>Главной</Link>
    </div>
  )
}

export default NotFound