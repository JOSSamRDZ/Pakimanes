var cvs= document.getElementById ("vpCanvas");// Nos traemos el canvas y asignamos a variable cvs
var papel= cvs.getContext ("2d"); // Tomamos el contexto 2d del canvas y lo asignamos a variable papel
var teclas= { // Aca creamos un objeto, una variable con muchas variables dentro o en este caso atributos.

    LEFT:37,
    UP:38,
    RIGHT:39,
    DOWN:40
};
document.addEventListener ("keyup", moverConTeclado);
// Aca creamos objetos literales que guardaran variables/atributos para cada imagen
var vaca = {
url: "vaca.png", // url guarda la direccion
cargaOk: false // cargaOk es el estado de carga de la imagen, inicialmente es falso pues aun no se carga
};




var fondo = {
    url:"https://static.platzi.com/media/files/funciones-matematicas-y-numeros-aleatorios-en-java/villa.html",
    cargaOk: false
};

var cerdo = {
    url:"cerdo.png",
    cargaOk: false
};

var pollo = {
    url:"pollo.png",
    cargaOk: false
};
// Creamos clases para las imagenes, como no podemos agregar new Image() a los objetos creados (l12) creamos un atributo
// para cada objeto y le asignamos la clase new Image()
fondo.imagen= new Image();
vaca.imagen= new Image (); 
cerdo.imagen= new Image ();
pollo.imagen= new Image ();

// guardamos la variable .url que es la direccion de la imagen en la variable .imagen 
fondo.imagen.src=fondo.url;
vaca.imagen.src= vaca.url;
cerdo.imagen.src= cerdo.url;
pollo.imagen.src= pollo.url;

// Añadimos escuchadores de eventos que detecten cuando cada imagen ha sido cargada para despues ejecutar 
//las funciones que cargaran cada imagen 
fondo.imagen.addEventListener ("load",cargarFondo);
vaca.imagen.addEventListener ("load",cargarVacas);
cerdo.imagen.addEventListener ("load",cargarCerdos);
pollo.imagen.addEventListener ("load",cargarPollos);


// Añadimos las funciones de carga las cuales al ser cargada la imagen correspondiente pondran en true la variable
// .cargaOk (l7) para cada objeto literal, tambien la funcion de dibujar las imagenes sera ejecutada consecuentemente.

function cargarFondo()
{
    fondo.cargaOk=true;
    dibujar();
    
}

function cargarVacas ()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos ()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos ()
{
    pollo.cargaOk = true;
    dibujar();
}

var cv= aleatorio(10,20);
var cp= aleatorio(1,30);
var xc= 420;
var yc= 250;
var mov=10;

function moverConTeclado(event)// si escribimos una variable en el parentesis esta adquiere los parametros del addEventListener
{
    
   
    switch (event.keyCode)
    {   

        case teclas.UP:
            yc=yc-mov;
            dibujar();
        break;                             
        
        case teclas.DOWN:
            yc=yc+mov    
            dibujar();                      
        break;   
        case teclas.RIGHT:
            xc=xc+mov   
            dibujar();                        
        break;   
        case teclas.LEFT:
            xc=xc-mov     
            dibujar();                       
        break;   
    }
    
    
   
}
function dibujar() // ejecutada cada ves que una de las imagenes fondo,vaca,cerdo,pollo haya sido cargada
{
    if( fondo.cargaOk) // si se cargo la imagen de fondo entonces fondo.cargaOK estara en true y se dibujara el fondo
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if( vaca.cargaOk) 
    {   for(v=0;v<cv;v++) 
        {
            var xv= aleatorio(0,8); 
            var yv= aleatorio(0,8); 
            xv=xv*50;
            yv=yv*50;
            papel.drawImage(vaca.imagen,xv,yv);
            
        }
        
    }
    if( cerdo.cargaOk)
    {   
        papel.drawImage(cerdo.imagen,xc,yc);
    }
    if( pollo.cargaOk)
    {   for(p=0;p<cp;p++) 
        {
            var xp= aleatorio(0,6); 
            var yp= aleatorio(0,6); 
            xp=xp*80;
            yp=yp*80;
            papel.drawImage(pollo.imagen,xp,yp);
        }
        
    }
}
    

// Aca creamos funcion que arroja numeros aleatorios
function aleatorio (min,max)
{
    var result;
    result = Math.floor(Math.random()*(max-min + 1))+min;
    return result; // Return result guarda el resultado en la funcion, podemos asignar la funcion auna variable,
                    // de este modo se guardara el valor de result en la variable
}                  



//----------------------------otro codigo-------------------------------------------------------

//Aca hacemos un ciclo donde se escribiran 10 numeros aleatorios, 
//var z;
//for (var i=0; i<10; i++) 
//{
  //  z = aleatorio (100,200);
    //document.write (z + ", ");
//}

 
