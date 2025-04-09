function cor(){
    list = ["green", 'red', 'blue', 'purple']
    elemento = list[Math.floor(Math.random() * list.length)]
    document.body.style.backgroundColor = elemento;
}
let i = 1;
let botao = document.getElementById('botao');
function mais(){
    i++;
    botao.innerHTML = i;
}