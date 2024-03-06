import React, { useState } from "react";
import "../Form/reservationForm.css";

function ReservationForm({ onReserve, onClose }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recopilar datos del formulario
    const formData = {
      name,
      lastName,
      
    };

    // Llamar a la función onReserve para enviar los datos al padre (CardTurno)
    onReserve(formData);
    console.log(formData)
    // Cerrar el formulario después de enviarlo
    onClose();
  };

  
  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        
        <button className="btn-form" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
