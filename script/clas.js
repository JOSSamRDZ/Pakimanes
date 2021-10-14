//Canvas
var cvs =document.getElementById("granja");
var papel= cvs.getContext ("2d");
document.addEventListener("keyup",keytpe);
//posicion del pokemon 
var ypak = 139;
var xpak = 250;
var mov=10;
//objeo literal para funcion con teclando
var teclas = {
    left:37,
    up:38,
    right:39,
    down:40
};



//funcion para numeros aleatorios
function randomNumbers (min,max)
{
    var one= 1
    var resultado;
    resultado= Math.floor (Math.random () * (max - min + one)) + min
    return resultado;
}

//numeros aleatorio de los pokemones

var ac= randomNumbers(0,4);
var as= randomNumbers (0,3);
var ab= randomNumbers (0,3);

//objetos literales
    var fondo =
    {
        url: "image/fondo.png",
        cargaOk: false
    
    }

    var arcaine = 
    {
        url: "image/arcaine.png",
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
    arcaine.imagen = new Image();
    charmander.imagen = new Image ();
    bulbasaur.imagen = new Image ();
    squirtle.imagen = new Image ();

  


    fondo.imagen.src= fondo.url;
    arcaine.imagen.src= arcaine.url;
    charmander.imagen.src= charmander.url;
    bulbasaur.imagen.src= bulbasaur.url;
    squirtle.imagen.src= squirtle.url;
   
    //

    fondo.imagen.addEventListener ("load", cargarFondo);
    arcaine.imagen.addEventListener ("load", cargaPikachu);
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
        arcaine.cargaOk= true;
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

    function cargaSquirtle ()
    {
        squirtle.cargaOk=true;
        dibujar ()
    }

    // funcion para mover a Pikachu con teclado
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
                var cx= randomNumbers (0,8);
                var cy= randomNumbers (0,8);
                cx= cx*50;
                cy= cy*50;
                papel.drawImage (charmander.imagen,cx,cy)
             } 

         }
         
        if (squirtle.cargaOk)
         {
             for (s=0; s<as; s++)
                {   
                    var bx= randomNumbers(0,4);
                    var by= randomNumbers(0,4);
                    bx= bx*50
                    by= by*50

                    papel.drawImage(squirtle.imagen, bx,by);
                } 
                



         }
       
    /*      if (bulbasaur.cargaOk)
         {
            for (b=0; b<as; b++)
            {   
                var bx= randomNumbers(0,4);
                var by= randomNumbers(0,4);
              

                papel.drawImage(bulbasaur.imagen, bx,by);
            } 
            
         } */
         if (arcaine.cargaOk)
            {
                papel.drawImage (arcaine.imagen,ypak,xpak)
            }


    
        }
