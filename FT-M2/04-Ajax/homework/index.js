// JQUERY

$("#boton").click(function () {
  $.get("http://localhost:5000/amigos", function (data) {
    mostrarAmigos(data);
  });
});

$("#search").click(function () {
  let idAmigo = $("#input").val();
  $.get(`http://localhost:5000/amigos/${idAmigo}`, function (data) {
    $("#amigo").text(data.name);
  });
});

$("#delete").click(function () {
  let idAmigo = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${idAmigo}`,
    type: "DELETE",
    success: function (data) {
      mostrarAmigos(data);
      $("#success").text("Tu amigo ha sido eliminado");
    },
    error: function (error) {
      alert(error.message);
    },
  });
});

function mostrarAmigos(data) {
  $("#lista").html("");
  data.forEach((element) => {
    // const item = document.createElement('li');
    // item.innerText = element.name;
    // $('#lista').append(item);
    $("#lista").append(`<li>${element.name}</li>`);
  });
}

// JS VANILLA

document.querySelector("#boton").addEventListener("click", function () {
  fetch("http://localhost:5000/amigos/")
    .then((response) => response.json())
    .then((data) => {
      mostrarAmigos(data);
    });
});

document.querySelector("#search").addEventListener("click", function () {
  let idAmigo = document.querySelector("#inputSearch").value;
  fetch("http://localhost:5000/amigos/" + idAmigo)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#amigo").innerText = data.name;
    });
});

document.querySelector("#delete").addEventListener("click", function () {
  let idAmigo = document.querySelector("#inputDelete").value;
  fetch("http://localhost:5000/amigos/" + idAmigo, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      mostrarAmigos(data);
      document.querySelector("#success").innerHTML =
        "Tu amigo fue borrado con éxito.";
    });
});

function mostrarAmigos(data) {
  document.querySelector("#lista").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let amigo = document.createElement("li");
    amigo.innerText = data[i].name;
    document.querySelector("#lista").append(amigo);
  }
}
