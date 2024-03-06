import axios from "axios";
import "./showTurnos.css";
import { useEffect, useState } from "react";
import CardTurno from "../CardTurno/CardTurno";
import ShowReservedShift from "../ShowReservedShift/ShowReservedShift";
import ReservationForm from "../Form/ReservationForm";

function ShowTurnos() {
  const [turno, setTurno] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:3000/api/turnos")
      .then((res) => {
        setTurno(res.data.res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  function TitleDisponibles() {
    return (
      <div className="title-disponibles">
        <h1>Turnos disponibles</h1>
      </div>
    );
  }
/* 
  function TitleReserved() {
    return (
      <div className="title-reserved">
        <h2>Turnos Reservados</h2>
      </div>
    );
  } */

  return (
    <div className="container-showTurnos">
      <div className="container-turnosDisponibles">
        <TitleDisponibles />
        {turno.map((turno) => (
          <CardTurno key={turno._id} data={turno} />
        ))}
      </div>
      
    </div>
  );
}

export default ShowTurnos;
