const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function checkSeatStatus(row, number) {
  if (typeof row !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number");

  //if(row.length !== 1) throw new TypeError("Row has to be a letter");
  if (row.length > 1) throw new TypeError("Row has to be a single letter");
  if (row.length < 1) throw new TypeError("Row can't be a empty string");

  // const numberRow = getRowNumber(row);
  // const layoutRows = layout[numberRow];
  // const seat = layoutRows[number];
  // return seat.booked;
  const seat = getSeat(row, number);
  return seat.booked;
}

function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;
}

function book(row, number) {
  if (checkSeatStatus(row, number))
    return `Seat in ${row}${number} is already booked`;

  // const numberRow = getRowNumber(row);
  // const layoutRows = layout[numberRow];
  // const seat = layoutRows[number];
  // seat.booked = true;
  const seat = getSeat(row, number);
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`;
}

function getSeat(letter, number) {
  const numberRow = getRowNumber(letter);
  if (numberRow <= layout.length - 1) {
    const layoutRows = layout[numberRow];
    if (number <= layoutRows.length - 1) {
      const seat = layoutRows[number];
      return seat;
    } else {
      throw new Error("Column has to be one of these numbers: 0, 1, 2, 3");
    }
  } else {
    throw new Error("Row has to be one of these letters: A, B, C, D, E");
  }
}

function resumen() {
  return {
    "Asientos Totales": asientosTotales(),
    "Asientos Reservados": asientosReservados(true).length,
    "Asientos Libres": asientosReservados(false).length,
    Recaudación: "$" + recaudacion(),
  };
}

function sinFilasYColumnas() {
  let newLayout = [];
  for (let i = 0; i < layout.length; i++) {
    newLayout = [...newLayout, ...layout[i]];
  }
  return newLayout;
}

function asientosTotales() {
  return sinFilasYColumnas().length;
}

function asientosReservados(estaReservado) {
  let rta;
  let newLayout = sinFilasYColumnas();
  rta = newLayout.filter((element) => element.booked === estaReservado);
  return rta;
}

function recaudacion() {
  let reservados = asientosReservados(true);
  let recaudacion = 0;
  for (let i = 0; i < reservados.length; i++) {
    if (reservados[i].type === "ECONOMIC") recaudacion = recaudacion + 300;
    if (reservados[i].type === "NORMAL") recaudacion = recaudacion + 450;
    if (reservados[i].type === "VIP") recaudacion = recaudacion + 600;
  }
  return recaudacion;
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  getSeat,
  resumen,
};
