import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Doctor from '../images/doctor.jpg';
import Star from '../images/star.png';
import './Home.css';

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

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

  const goToDentist = (id) => {
    navigate(`/Dentista/${id}`);
  };

  return (
    <div id='contenedorDoctores' className={props.changeMode ? 'dark' : 'light'}>
      <h1 className='tituloHome'>Home</h1>
      <div className='listaDentistas'>
        {users.map((user) => (
          <div key={user.id} className="doctor-container">
            <div className="doctor-info">
              {/* Utiliza una función para navegar al componente Dentist */}
              <span onClick={() => goToDentist(user.id)}>
                <img src={Doctor} alt="" className='imgDoctor' />
                <p>{user.name}</p>
              </span>
              <p>{user.username}</p>
            </div>
            <div className="star-container">
              <button><img src={Star} alt="" id='imgStar' /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
