<<<<<<< HEAD


//funcion para numeros aleatorios
function randomNumbers (min,max)
{
    var one= 1
    var resultado;
    resultado= Math.floor (Math.random () * (max - min + one)) + min
}

//numeros aleatorio de los pokemones

var ac= aleatorio(10,20);
var as= aleatorio (10,20);
var ab= aleatorio (10,20);
//xp=420
//yp=
//movP=

//objetos literales
    var teclas = {
        UP:37,
        DAWN:38,
        LEFT:39,
        RIGHT:40
    }

    var fondo =
    {
        url: "image/granja.jpg",
        cargaOk: false
    
    }

    var pikachu = 
    {
        url: "image/Pikachu.png",
        cargaOk: false 
    } 

    var charmander = 
    {
        url: "image/charmander.png",
        cargaOk: false 
    } 

    var bulbasaur= 
    {
        url: "image/bulbasaur.png",
        cargaOk: false 
    } 

    var squirtle =
    {
        url: "image/squirtle.png",
        cargaOk: false
    } 

    //clases y insercion de imagenes por url 
 
    fondo.imagen = new Image ();
    pikachu.imagen = new Image();
    charmander.imagen = new Image ();
    bulbasaur.imagen = new Image ();
    squirtle.imagen = new Image ();

    fondo.imagen.src= fondo.url;
    pikachu.imagen.src= pikachu.url;
    charmander.imagen.src= charmander.url;
    bulbasaur.imagen.src= bulbasaur.url;
    squirtle.imagen.src= squirtle.url;
   
    //

    fondo.imagen.addEventListener ("load", cargarFondo);
    pikachu.imagen.addEventListener ("load", cargaPikachu);
    charmander.imagen.addEventListener ("load", cargaCharmander);
    bulbasaur.imagen.addEventListener ("load", cargaBulbasaur);
    squirtle.imagen.addEventListener ("load", cargaSquirtle);

    //funcion de carga pokemones,fondo y de dibujar en el canvas

    function cargarFondo ()
    {
        fondo.cargaOk= true;
        dibujar ()
    }

    function cargaPikachu ()
    {
        pikachu.cargaOk= true;
        dibujar ()
    }
  
    function cargaCharmander ()
    {
        charmander.cargaOk= true;
        dibujar()
    }

    function cargaBulbasaur ()
    {
        squirtle.cargaOk= true;
        dibujar ()
    }

    function dibujar ()
    {
        if (fondo.cargaOk)
            {
              papel.drawImage (fondo.imagen, 0,0)
            }

        if (charmander.cargaOk)
         {
            for(c=0;c<ac;c++)
             {
                var cx= aleatorio (0,8);
                var cy= aleatorio (0,8);
                cx= cx*50;
                cy= cy*50;
                papel.drawImage (charmander.imagen,cx,cy)
             } 

         }
         
        if (squirtle.cargaOk)
         {
             for (s=0; s<as; s++)
                {   
                    var sx= aleatorio (0,6)
                    var sy= aleatorio (0,6)
                    sx = sx*50;
                    sy= sy*50;
                    papel.drawImage (charmander.imagen,sx,sy)

                }

         }
        if (bulbasaur.cargaOk)
         {
             for (b=0; b<ab: b++)
                {
                    var bx= aleatorio(0,4);
                    var by= aleatorio(0,4);
                    bx= bx*50
                    by= by*50

                    bulbasaur (bulbasaur.imagen, bx,by);
                }
         }

    
    }
=======
var indexCvs =document.getElementById("pkCvs");
var cvsPaper = indexCvs.getContext ("2d");
document.addEventListener("keyup",keytpe);
var ypak = 139;
var xpak = 380;
var mov=10;
var teclas = {
    left:37,
    up:38,
    right:39,
    down:40
};

function keytpe(event)
{
    
   
    switch (event.keyCode)
    {   

        case teclas.UP:
            ypak=ypak-mov;
            dibujar();
        break;                             
        
        case teclas.DOWN:
            ypak=ypak+mov    
            dibujar();                      
        break;   
        case teclas.RIGHT:
            xpak=xpak+mov   
            dibujar();                        
        break;   
        case teclas.LEFT:
            xpak=xpak-mov     
            dibujar();                       
        break;   
    }
    
    
   
} 
>>>>>>> eventsCode
