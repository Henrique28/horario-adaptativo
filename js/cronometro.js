function carregar(){

    let msg = document.getElementById('texto')
    let img = document.getElementById('imagem')
    let saudacao = document.getElementById('saudacao')
    

    let data = new Date()
    let hora = data.getHours()     

    msg.innerHTML = `Agora são: ${hora} horas`

    if(hora >= 5 && hora <= 11){
        img.src = 'img/manhã.jpg'
        saudacao.innerHTML = 'Bom Dia!'
        document.body.style.background = '#fde247'

    }else if(hora >= 12 && hora <= 18){
        img.src = 'img/Tarde.jpg'
        saudacao.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#ff9352'
    }else{
        img.src = 'img/Noite.jpg'
        saudacao.innerHTML = 'Boa Noite!'
        document.body.style.background = '#4e3d61'
    }
}

function relogio(){
    let relogio = document.getElementById('relogio')

    let data = new Date()
    let hora = data.getHours()  
    let min = data.getMinutes()
    let seg = data.getSeconds()


    if (hora < 10){
        hora = '0' + hora
    }
    if (min < 10){
        min = '0' + min
    }
    if (seg < 10){
        seg = '0' + seg
    }
    
    
    relogio.innerHTML = `${hora}:${min}:${seg}`
}

var contador = setInterval(relogio, 1000)