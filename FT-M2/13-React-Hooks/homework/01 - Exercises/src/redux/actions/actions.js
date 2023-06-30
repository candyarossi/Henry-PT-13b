export const FORM_DATA = "FORM_DATA";

export function enviarForm(formulario) {
  return {
    type: FORM_DATA,
    payload: formulario,
  };
}
