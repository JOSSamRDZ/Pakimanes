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
