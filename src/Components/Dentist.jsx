import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dentist = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener los datos del dentista por su ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del dentista: ", error);
      });
  }, [id]);

  if (!dentist) {
    return <div>Cargando datos del dentista...</div>;
  }

  return (
    <div>
      <h2>Detalle del Dentista</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dentist;
