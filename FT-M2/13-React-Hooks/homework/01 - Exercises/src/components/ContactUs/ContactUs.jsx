import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(enviarForm(form));
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput} value={form.nombre}></input>
      <input name="email" onChange={handleInput} value={form.email}></input>
      <input name="asunto" onChange={handleInput} value={form.asunto}></input>
      <input name="mensaje" onChange={handleInput} value={form.mensaje}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
