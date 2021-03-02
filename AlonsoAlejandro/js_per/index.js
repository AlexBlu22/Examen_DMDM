window.onload = function (){
  document.getElementById("id_desplegable_monedas").addEventListener("click", desplegable_monedas);
  document.getElementById("id_cambio").addEventListener("click", boton_cambio);
};

// 1º Desplegable 
function desplegable_monedas (evento) {
  const url = `https://api.coinbase.com/v2/currencies`;
  fetch(url)
    .then(function(respuesta_deplegable) {
      return respuesta_deplegable.json();
    })
    .then(function(respuesta_deplegable) {
      console.log(respuesta_deplegable);

      // Mostrar lista
      mostrar_desplegale (respuesta_deplegable);

    })
    .catch((error) =>{
      console.log(error);
    });
}

// 2º Cambio 
function boton_cambio (evento) {
  const url = `https://api.coinbase.com/v2/exchange-rates?currency=${valor_desplegable}`;

  fetch(url)
    .then(function(respuesta_boton) {
      return respuesta_boton.json();
    })
    .then(function(respuesta_boton) {
      console.log(respuesta_boton);

      // Mostrar lista
      mostrar_cambio (respuesta_cambio);
    })
    .catch((error) =>{
      console.log(error);
    });
}

// Mostrar lista
function mostrar_desplegale (respuesta_desplegable) {
  console.log (respuesta_desplegable)
  let tipos_moneda = respuesta_desplegable.data;
  id_desplegable_monedas.innerHTML = '';
  tipos_moneda.forEach(tipos_monedas => {
    id_desplegable_monedas.innerHTML += `<option value="${tipos_monedas.id}">${tipos_monedas.name} </option>`;
  });
  var valor_lista = document.getElementById("${tipos_monedas.id}").value;
  console.log(valor_lista);
}

// // Mostrar cambio
// function mostrar_desplegale (respuesta_cambio) {
//   console.log (respuesta_cambio)
//   let tipos_ = respuesta_cambio.data;
//   id_desplegable_monedas.innerHTML = '';
//   tipos_moneda.forEach(tipos_monedas => {
//     id_desplegable_monedas.innerHTML += `<option value="${tipos_monedas.id}">${tipos_monedas.name} </option>`;
//   });
//   var valor_lista = document.getElementById("${tipos_monedas.id}").value;
//   console.log(valor_lista);
// }



// // 2º Mostrar cambio

// function boton_cambio (evento) {

//   // Respuesta de la API
//   const url = `https://api.coinbase.com/v2/exchange-rates?currency=EUR`;

//   fetch(url)
//     .then(function(respuesta_api_1) {
//       return respuesta_api_1.json();
//     })
//     .then(function(datos_api_1) {
//       console.log(datos_api_1);

//       // Comunicacion con la Api
//       let moneda = datos_api_1.data.rates.ATOM;
//       console.log(moneda);
//     })
//     .catch((error) =>{
//       console.log(error);
//     });
//   }

//   function datos_api_2 (evento) {
  
//     // Respuesta de la API
//     const url = `https://api.coinbase.com/v2/currencies`;
  
//     fetch(url)
//       .then(function(respuesta_api_2) {
//         return respuesta_api_2.json();
//       })
//       .then(function(datos_api_2) {
//         console.log(datos_api_2);

//         // Arrai: para que te salga en lista
//         let moneda = datos_api_2.data;
//         moneda.forEach(monedas => {
//           console.log(`${monedas.name}`)
//         });

//         // Hacer array fuera de then
//         mostrar_array_api_2 (datos_api_2);

//       })
//       .catch((error) =>{
//         console.log(error);
//       });
//     }

//     // Funcion array para la tabla
//     function mostrar_array_api_2 (respuesta_api_2) {
//       console.log (respuesta_api_2)
//       let moneda = respuesta_api_2.data;
//       cuerpo_tabla.innerHTML = '';
//       moneda.forEach(monedas => {
//         cuerpo_tabla.innerHTML += "<tr>";
//         cuerpo_tabla.innerHTML += `<td>${monedas.name}</td>`,
//         cuerpo_tabla.innerHTML += "<tr>";
//       });
//     }