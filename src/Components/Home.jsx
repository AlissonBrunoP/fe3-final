import React, { useState, useEffect } from 'react';
import Doctor from '../images/doctor.jpg';

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMode = () => {
    if (props.setChangeMode) {
      props.setChangeMode(!props.changeMode);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={props.changeMode ? 'dark' : 'light'}>
      <h1>Lista de Usuarios</h1>
      <button className="button" onClick={toggleMode}>
        <img src={props.changeMode ? 'sun.png' : 'moon.png'} alt="Logo" />
      </button>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={Doctor} alt="" />
              <p>{user.name}</p>
              <p>{user.username}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
