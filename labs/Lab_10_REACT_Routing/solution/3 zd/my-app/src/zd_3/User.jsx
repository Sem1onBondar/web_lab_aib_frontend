// User.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

 return (
<div className="user-info">
  <h2>Информация о персонаже:</h2>
  {user && (
    <div>
      <img src={user.image} alt={user.name} />
      <p>ID Персонажа: {id}</p>
      <p>Имя: {user.name}</p>
      <p>Статус: {user.status}</p>
      <p>Вид: {user.species}</p>
      <p>Тип: {user.type}</p>
      <p>Пол: {user.gender}</p>
        </div>
      )}
      <Link to={`/user/${parseInt(id) + 1}`}>Следующий 	персонаж</Link>
      <Link to={`/user/${parseInt(id) - 1}`}>Предующий 	персонаж</Link>
    </div>
  );
};

export default User;
