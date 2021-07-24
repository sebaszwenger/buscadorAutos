const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

//llena el selector de year
const max = new Date().getFullYear();
const min = 2010;

for (let i = max; i >= min; i--) {
    const years = document.createElement('option');
    years.textContent = i;
    year.appendChild(years);
}

//Datos busqueda
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    filtrarAuto();
});

console.log(datosBusqueda);

//Funciones

//Muestra los autos en el html
function mostrarAutos(autos) {
    limpiarHTML();

    autos.forEach( auto => {
        const autoHTML = document.createElement('P');
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        autoHTML.innerHTML = `
        <p>${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}</p>`
        resultado.appendChild(autoHTML);
    })
}

//Filtra la marca seleccionada
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    console.log(resultado);

    if(resultado.length) {
        mostrarAutos(resultado);
    }
};

function filtrarMarca(auto) {
    if(datosBusqueda.marca){
       return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}

function filtrarYear(auto) {
    if(datosBusqueda.year){
       return auto.year === datosBusqueda.year;
    } 
    return auto;
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}