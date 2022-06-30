import { lugares } from './data.js'
// Enlazando
const continente_africa = document.getElementById('continente_africa')
const continente_asia = document.getElementById('continente_asia')
const continente_europa = document.getElementById('continente_europa')
const continente_oceania = document.getElementById('continente_oceania')
const continente_america = document.getElementById('continente_america')
const lugares_africa = document.getElementById('lugares_africa')
const lugares_asia = document.getElementById('lugares_asia')
const lugares_europa = document.getElementById('lugares_europa')
const lugares_oceania = document.getElementById('lugares_oceania')
const lugares_america = document.getElementById('lugares_america')
const more_name = document.getElementById('more_name')
const more_description = document.getElementById('more_description')
const more = document.getElementById('more')
const more_image = document.getElementById('more_image')
const image_continent = document.getElementById('image_continent')
const nombre_lugar = document.getElementById('nombre_lugar')
const continente_lugar = document.getElementById('continente_lugar')
const volver = document.getElementById('volver')
const continentess = document.getElementById('continentess')

const cards = [0,1,2,3,4,5]
let continent_filter;

function continentf (lugares,cont_id_continent){
    continent_filter = lugares.filter(x => x.id_continente == cont_id_continent);
}

function more_date (continent_filter,e){
    for(let i = 0; i < continent_filter.length; i++){
        if(e.target.id == continent_filter[i].id_lugar){
            more_name.innerHTML = continent_filter[i].nombre;
            more_description.innerHTML = continent_filter[i].description;
            more_image.setAttribute('src',continent_filter[i].img);
            image_continent.setAttribute('src',continent_filter[i].img_continent);
            nombre_lugar.setAttribute('placeholder',continent_filter[i].nombre);
            continente_lugar.setAttribute('placeholder',continent_filter[i].nombre_continente);
        }
    }
}

// Al iniciar
document.addEventListener('DOMContentLoaded',()=>{
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    more.hidden = true;
})

let cont_africa = 0;
continente_africa.addEventListener('click',()=>{
    lugares_africa.hidden = false;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    // Solo trae los de africa
    let cont_id_continent = 1;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_africa == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_africa.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_africa++;
    lugares_africa.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_africa.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = false;
                lugares_asia.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = true;
                lugares_oceania.hidden = true;
            })       
        }
    })
})

let cont_asia = 0;
continente_asia.addEventListener('click',()=>{
    lugares_africa.hidden = true;
    lugares_asia.hidden = false;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    more.hidden = true;
    // Solo trae los de asia
    let cont_id_continent = 2;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_asia == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_asia.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_asia++;
    lugares_asia.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_asia.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_asia.hidden = false;
                lugares_africa.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = true;
                lugares_oceania.hidden = true;
            })  
        }
    })
})

let cont_europa = 0;
continente_europa.addEventListener('click',()=>{
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = false;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    more.hidden = true;
    // Solo trae los de europa
    let cont_id_continent = 3;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_europa == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_europa.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_europa++;
    lugares_europa.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_europa.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = true;
                lugares_asia.hidden = true;
                lugares_europa.hidden = false;
                lugares_america.hidden = true;
                lugares_oceania.hidden = true;
            })       
        }
    })
})

let cont_oceania = 0;
continente_oceania.addEventListener('click',()=>{
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = false;
    lugares_america.hidden = true;
    more.hidden = true;
    // Solo trae los de oceania
    let cont_id_continent = 4;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_oceania == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_oceania.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center"id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_oceania++;
    lugares_oceania.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_oceania.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = true;
                lugares_asia.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = true;
                lugares_oceania.hidden = false;
            })       
        }
    })
})

let cont_america = 0;
continente_america.addEventListener('click',()=>{
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = false;
    more.hidden = true;
    // Solo trae los de oceania
    let cont_id_continent = 5;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_america == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_america.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_america++;
    lugares_america.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_america.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = true;
                lugares_asia.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = false;
                lugares_oceania.hidden = true;
            })       
        }
    })
})