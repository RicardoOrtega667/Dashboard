let url = "https://dragon-ball-super-api.herokuapp.com/api/characters/";
let container = document.getElementById("container");
let code = document.getElementById("code");

const llamada = async () => {
  const resp = await fetch(url);
  const datos = await resp.json();

  // code.innerHTML = JSON.stringify(datos.imageUrl);

  imprimir(datos);
  console.log(datos);
};

function imprimir(datos) {
  datos.forEach((dato) => {
    const div = document.createElement("div");
    div.className = "tarjeta"
        div.innerHTML += `
    <img src=${dato.imageUrl} />
    <p>Nombre: ${dato.name}</p>
    <p>Especie: ${dato.specie}</p>
    <p>Papel: ${dato.role}</p>
    <p>Planeta: ${dato.originplanet}</p>
    <p>Estatus actual: ${dato.status}</p>
    <p>Universo al que pertenece: ${dato.universe}</p>
    <p>Numero de ID : ${dato.id}</p>

            
    
    `;
    code.appendChild(div);
  });
}

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
