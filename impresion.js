let precios = [];
let nombreMoneda = [];

const crypto2= async ()=> {
  const respuesta = await fetch("https://api.coincap.io/v2/assets");
  const resultado = await respuesta.json();
  graficar(resultado.data);
 
}

function graficar(datos) {
    datos.forEach((dato) => {
    precios.push(dato.priceUsd);
    nombreMoneda.push(dato.name);})

   
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nombreMoneda,
        datasets: [{
          label: '# of Votes',
          data: precios,
          borderWidth: 1
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

  }

  