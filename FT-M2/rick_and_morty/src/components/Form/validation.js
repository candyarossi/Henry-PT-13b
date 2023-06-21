export default function validate(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{6,10}$/;
  let errors = {};
  !inputs.email ? (errors.email = "Campo obligatorio") : (errors.email = "");
  inputs.email.length > 35
    ? (errors.email = "No puede superar los 35 caracteres")
    : (errors.email = "");
  !regexEmail.test(inputs.email)
    ? (errors.email = "Debe ser un email válido")
    : (errors.email = "");
  !regexPassword.test(inputs.password)
    ? (errors.password =
        "La contraseña debe tener entre 6 y 10 caracteres, y al menos un número")
    : (errors.password = "");
  return errors;
}
