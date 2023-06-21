import { useState } from "react";
import style from "./Form.module.css";
import validate from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <p>{errors.email}</p>

      <label>Password:</label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <p>{errors.password}</p>

      {/* <input type="submit" value="LOGIN" /> */}
      <button>LOGIN</button>
    </form>
  );
}
