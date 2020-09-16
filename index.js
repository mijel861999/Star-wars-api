//DECLARAR LAS URLS
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
let i = 1
const options = { crossDomain: true }

//Creación de la promesa

function onError(id){
    console.log("Hubo un error")
}

function ObtenerPersonaje(id){
    
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, options, function(data){
            resolve(data)
        })
        .fail(()=>reject(id))
    })
}


function SiguientePersonaje (){
    i ++;

    let nombre = document.getElementById('nombre')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let cabello = document.getElementById('color-cabello')
    console.log(i)

    ObtenerPersonaje(i)
        .then(personaje =>{
            nombre.innerHTML = `<h1>NOMBRE: <br> ${personaje.name}</h1>`;
            altura.innerHTML = `<p>Altura: <br>${personaje.height}</p>`
            peso.innerHTML = `<p>Peso: <br>${personaje.mass} </p>`
            cabello.innerHTML = `<p>Cabello: <br> ${personaje.hair_color}</p>`
        })
        .catch(onError)
}

function AnteriorPersonaje() {

    if(i < 0){
        alert('No hay nadie antes que el')
    }else{
        i --;

        let nombre = document.getElementById('nombre')
        let altura = document.getElementById('altura')
        let peso = document.getElementById('peso')
        let cabello = document.getElementById('color-cabello')
        console.log(i)

        ObtenerPersonaje(i)
            .then(personaje =>{
                nombre.innerHTML = `<h1>NOMBRE: <br> ${personaje.name}</h1>`;
                altura.innerHTML = `<p>Altura: <br>${personaje.height}</p>`
                peso.innerHTML = `<p>Peso: <br>${personaje.mass} </p>`
                cabello.innerHTML = `<p>Cabello: <br> ${personaje.hair_color}</p>`
            })
            .catch(onError)
        }
    
}
