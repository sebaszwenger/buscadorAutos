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

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('input', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

//Funciones
//Muestra resultados en el html
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
//Filtra por selector seleccionado
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    console.log(resultado);

    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
};
//Filtra Marca
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
       return auto.marca === datosBusqueda.marca;
    } 
    return auto;
};
//Filtra año
function filtrarYear(auto) {
    if(datosBusqueda.year){
       return auto.year === datosBusqueda.year;
    } 
    return auto;
};
//Filtra precio minimo
function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
       return auto.precio >= datosBusqueda.minimo;
    } 
    return auto;
};
//Filtra precio maximo
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
       return auto.precio <= datosBusqueda.maximo;
    } 
    return auto;
};
//Filtra por cantidad de puertas
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
       return auto.puertas == datosBusqueda.puertas;
    } 
    return auto;
};
//Filtra por transmision
function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
       return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
};
//Filtra por color
function filtrarColor(auto) {
    if(datosBusqueda.color){
       return auto.color === datosBusqueda.color;
    } 
    return auto;
};
//Limpia HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
};
//Limpia HTML y pone mensaje de no resultados
function noResultado() {
    limpiarHTML();

    const mensaje0Resultados = document.createElement('p');
    mensaje0Resultados.textContent = 'NO HAY RESULTADOS';
    mensaje0Resultados.classList.add('alerta', 'error');
    resultado.appendChild(mensaje0Resultados);
};
