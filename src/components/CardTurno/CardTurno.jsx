import { useEffect, useState } from "react";
import ButtonReserve from "../ButtonReserve/ButtonReserve";
import "./cardTurno.css";
import ReservationForm from "../Form/ReservationForm";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

import axios from "axios";

function CardTurno({ data, user }) {
  const { day, hour, servicie, profesional, signal, price } = data;

  const [formVisible, setFormVisible] = useState(false);

  const [userData, setUserData] = useState(user || {});

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("APP_USR-0683c833-a3b8-4681-b9c8-119b364dc832", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/create-order",
        {
          title: "Seña criolipolisis",
          unit_price: 4000,
          quantity: 1,
        }
      );

      const { id } = response.data;
      console.log(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    // Actualiza userData cuando user cambia
    setUserData(user || {});
  }, [user]);

  const handleReserve = (formData) => {
    // Actualizar el estado del usuario con los datos del formulario
    setUserData(formData);
    // Cerrar el formulario
    setFormVisible(false);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  console.log("Card Turno:", userData);

  return (
    <div className="container-cardTurno">
      <ul>
        <li>
          Servicio: <span>{servicie} </span>
        </li>
       {/*  <li>
          Profesional: <span>{profesional} </span>
        </li> */}
        <li>
          Fecha: <span>{day} </span>
        </li>
        <li>
          Hora: <span>{hour} </span>
        </li>
        <li>
          Precio: <span>${price}</span>
        </li>
        <li>
          Seña: <span>{signal} </span>
        </li>

        {formVisible && (
          <ReservationForm
            onReserve={handleReserve}
            onClose={handleCloseForm}
          />
        )}
        {userData.name && (
          <li className="name-apellido">
            Nombre: <span>{userData.name} </span>
          </li>
        )}
        {userData.lastName && (
          <li className="name-apellido">
            Apellido: <span>{userData.lastName} </span>
          </li>
        )}

        <ButtonReserve onReserve={handleReserve} />
      </ul>
      <button className="btn-seña" onClick={handleBuy}>
        ¡ABONAR SEÑA!
      </button>

      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      )}
    </div>
  );
}

export default CardTurno;
