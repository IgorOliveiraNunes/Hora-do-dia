function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data =new Date()
var hora = data.getHours()
//var hora = ;
msg.innerHTML = "Agora são "+hora+" horas."
if (hora >=0 && hora < 12){
    //bom dia
    img.src = "manha.png"
    document.body.style.background = '#FF8C00'
} else if(hora >=12 && hora <= 18){
    //Boa tarde
    img.src = "tarde.png"
    document.body.style.background = '#DAA520'
}else{
    //boa noite
img.src = "noite.png"
document.body.style.background = '#191970'
 }
}