
//funcion para numeros aleatorios
function randomNumbers (min,max)
{
    var one= 1
    var resultado;
    resultado= Math.floor (Math.random () * (max - min + one)) + min
}

var rev= randomNumbers (1, 50);

console.log (rev)

//objetos literales
    var teclas = {
        UP:37,
        DAWN:38,
        LEFT:39,
        RIGHT:40
    }
