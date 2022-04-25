class Contador {
    constructor(displayNumero){
        this.numeroActual = 0
        this.displayNumero = displayNumero
    }

    
    sumar(){
        this.numeroActual = this.numeroActual + 1
        this.actualizarDisplay()
    }


    restar(){
        if (this.numeroActual === 0){
            return;
        }
        this.numeroActual = this.numeroActual - 1 
        
        this.actualizarDisplay()
    }

    resetear(){
        this.numeroActual = 0
        this.actualizarDisplay()

    }

    actualizarDisplay(){
        this.displayNumero.innerText = this.numeroActual
    }
}

class Video{
    constructor(videoPlayer){
        this.videoPlayer = videoPlayer
        this.playbackRate = this.videoPlayer.playbackRate
    }

    masRapido(){
        this.playbackRate += 0.05
        this.videoPlayer.playbackRate = this.playbackRate
    }

    masLento(){
        this.playbackRate -= 0.05
        this.videoPlayer.playbackRate = this.playbackRate
    }

    reset(){
        this.playbackRate = 1.0
        this.videoPlayer.playbackRate = this.playbackRate
    }

}

var numero = document.getElementById("numero")

var botonRestar = document.getElementById("restar")
var botonResetear = document.getElementById("resetear")
var botonSumar = document.getElementById("sumar")

var video = document.getElementById("myVideo")


var contador = new Contador(numero)
var videoClass = new Video(video)


botonSumar.onclick = function(){
    contador.sumar()
    videoClass.masRapido()
    
}

botonResetear.onclick = function (){
    contador.resetear()
    videoClass.reset()

}

botonRestar.onclick = function (){
    
    
    contador.restar()
    if(contador.numeroActual !==0){
        videoClass.masLento()
    }

}


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 13:
            // ENTER
            botonResetear.click()
        case 37:
            // LEFT
            botonRestar.click()
            break;
        case 38:
            // UP
            botonSumar.click()
            break;
        case 39:
            // RIGHT
            botonSumar.click()
            break;
        case 40:
            // DOWN
            botonRestar.click()
            break;
    }
};