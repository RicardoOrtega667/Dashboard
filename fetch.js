async function crypto() {
  const respuesta = await fetch("https://api.coincap.io/v2/assets");
  const resultado = await respuesta.json();
  imprimir(resultado.data);
}

function imprimir(datos) {
  datos.forEach((dato) => {
    code.innerHTML += `
    <div class="contenedores">
    <div>
    <p>id : ${dato.id} </p>
    <p>Rango o posicion : ${dato.rank} </p>
    <p>Abreviatura : ${dato.symbol} </p>
    <p>Nombre comercial : ${dato.name} </p>
    <p>price en Dolares : 
    body$${dato.priceUsd} </p>
    <a href=${dato.explorer}>Mas informacion, presione aqui</a>
    </div>
    <div>

        `;
  });
}

const ctx = document.getElementById('myChart');

      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [etiquetas],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 12
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// let url = "https://pokeapi.co/api/v2/pokemon/"
// let container = document.getElementById("container");
// let code = document.getElementById("code");

// const llamada = async () => {
//   const resp = await fetch(url);
//   const datos = await resp.json();

//   // code.innerHTML = JSON.stringify(datos.imageUrl);

//   console.log(datos);
// };

// function imprimir(datos) {
//   datos.forEach((dato) => {
//     const div = document.createElement("div");
//     div.className = "tarjeta";
//     div.innerHTML += `

//     <img src=${dato.imageUrl} />
//     <p>Nombre: ${dato.name}</p>
//     <p>Especie: ${dato.specie}</p>
//     <p>Papel: ${dato.role}</p>
//     <p>Planeta: ${dato.originplanet}</p>
//     <p>Estatus actual: ${dato.status}</p>
//     <p>Universo al que pertenece: ${dato.universe}</p>
//     <p>Numero de ID : ${dato.id}</p>

//     `;
//     code.appendChild(div);
//   });
// }

// const graficas = async () => {
//   const resp = await fetch(url);
//   const datos = await resp.json();

//   // code.innerHTML = JSON.stringify(datos.imageUrl);

//   paint(datos);
// };

// function paint(datos) {
//   const universo0 = datos.filter((dato) => {
//     return dato.universe == 0;
//   });
//   const universo1 = datos.filter((dato) => {
//     return dato.universe == 1;
//   });
//   const universo2 = datos.filter((dato) => {
//     return dato.universe == 2;
//   });
//   const universo3 = datos.filter((dato) => {
//     return dato.universe == 3;
//   });
//   const universo4 = datos.filter((dato) => {
//     return dato.universe == 4;
//   });
//   const universo5 = datos.filter((dato) => {
//     return dato.universe == 5;
//   });
//   const universo6 = datos.filter((dato) => {
//     return dato.universe == 6;
//   });
//   const universo7 = datos.filter((dato) => {
//     return dato.universe == 7;
//   });
//   const universo8 = datos.filter((dato) => {
//     return dato.universe == 8;
//   });
//   const universo9 = datos.filter((dato) => {
//     return dato.universe == 9;
//   });
//   const universo10 = datos.filter((dato) => {
//     return dato.universe == 10;
//   });

//   const arregloUniversos = [0,1,2,3,4,5,6,7,8,9,10];
//   const dataUniversos = [universo0.length, universo1.length, universo2.length,universo3.length,universo4.length,universo5.length,universo6.length,universo7.length,universo8.length,universo9.length,universo10.length]

//   console.log(dataUniversos)
//   console.log(arregloUniversos)
// }

// }

// function imprimir(datos) {
//   code.innerHTML = "";
//   const div = document.createElement("div");
//   div.innerHTML = `
//   <img src=${datos.image} class="imagen1" />
//   <blockquote>${datos.image}</blockquote>
//   `;
//   code.appendChild(div);
// }

// const peticion = async () => {
//   const resp = await fetch(url);
//   const datos = await resp.json();

//   pintar(datos);
// };

// function pintar(datos) {
//   datos.forEach((dato) => {
//     console.log(dato.nome);

//     codigo.innerHTML+= `
//     <div>
//     <span>${dato.nome}</span>
//     <span>${dato.codigo}</span>
//     </div>`
//   });
// }
