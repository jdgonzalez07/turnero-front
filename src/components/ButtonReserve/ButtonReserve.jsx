import React, { useState } from "react";
import "./buttonReserve.css";
import ReservationForm from "../Form/ReservationForm";

function ButtonReserve({ onReserve }) {
  const [showForm, setShowForm] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  /* const [buttonDisabled, setButtonDisabled] = useState(false); */

  const handleClick = () => {
    setShowForm(!showForm);
   /*  setButtonDisabled(!buttonDisabled); */
  };

  const handleFormSubmit = (formData) => {
    // Llamar a la función onReserve pasada como prop para enviar los datos al padre
    onReserve(formData);
    setUserRegister(true);
    // Oculta el formulario después de enviarlo
    setShowForm(false);
    /* setButtonDisabled(true); */ // Deshabilitar el botón después de enviar la información
  };

  const handleCancelClick = () => {
    setShowForm(false);
   /*  setButtonDisabled(false); */ // Habilitar el botón cuando se cancela el formulario
  };

  return (
    <>
      <button
        onClick={showForm ? handleCancelClick : handleClick}
        type="button"
        className="btnReserve"
        disabled={userRegister}
      >
        <span>
          {userRegister ? "Reservado" : showForm ? "Cancelar" : "Agregar nombre"}
        </span>
      </button>

      {showForm && (
        <ReservationForm
          onReserve={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}

export default ButtonReserve;
