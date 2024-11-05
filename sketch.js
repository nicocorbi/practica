//let string1 = "Hola"
//let string2 = "Mundo"
const vocales = "aeiou".split("")
const consonantes = "qwrtypsdfghjklñxcvbnm".split("")
console.log(vocales,consonantes)

function crearPalabra(n_silabas)
{
    let palabra = ""
    //console.log(vocales, consonantes)
    for(let i = 0; i < n_silabas; i++){
        
        palabra += random(consonantes) + random(vocales)
    }
   
   // console.log(palabra)
    return palabra 
}
// let lista = ["hola", "mundo", "!"]

function setup() {
    createCanvas(400, 400);
    frameRate(1)
    background(220);
  }
  
  function draw() {
   // const string_final = lista[0] + " " + lista[1] + " " + lista[2]
    const string_final = crearPalabra(random(1)) 
    
    text(crearPalabra(random(5)),random(width), random(height));
    
  }