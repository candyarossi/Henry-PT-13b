import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
    //  console.log(inputs);
    //  console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Debe llenar todos los campos");
    }
    // console.log(inputs);
    // console.log(errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          placeholder="Escribe tu nombre..."
          name="name"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        <p className="danger">{errors.name}</p>

        <label htmlFor="">Correo Electrónico:</label>
        <input
          type="text"
          placeholder="Escribe tu email..."
          name="email"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className="danger">{errors.email}</p>

        <label htmlFor="">Teléfono:</label>
        <input
          type="number"
          placeholder="Escribe un teléfono..."
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          className={errors.phone && "warning"}
        />
        <p className="danger">{errors.phone}</p>

        <label htmlFor="">Asunto:</label>
        <input
          type="text"
          placeholder="Escribe el asunto..."
          name="subject"
          value={inputs.subject}
          onChange={handleChange}
          className={errors.subject && "warning"}
        />
        <p className="danger">{errors.subject}</p>

        <label htmlFor="">Mensaje:</label>
        <textarea
          placeholder="Escribe tu mensaje..."
          name="message"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        <p className="danger">{errors.message}</p>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email))
    errors.email = "Debe ser un correo electrónico";
  if (inputs.phone < 0) errors.phone = "Sólo números positivos";
  if (!inputs.subject) errors.subject = "Se requiere un asunto";
  if (!inputs.message) errors.message = "Se requiere un mensaje";
  return errors;
}
