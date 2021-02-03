console.log("ola mundo");
/*
comentario de varias linhas
*/
// comentarios de uma linha
// variaveis
let nome;
nome ="Vanessa";//string
console.log(nome)
let idade=39;//number
let resposta=true;//boolean
nome="vanessa dias"
console.log(nome);
//array
let frutas=['Maça','Banana','Limao'];
console.log(frutas[2]);
frutas[0]="Melão";
//objeto
let pessoa={
    nome:"Vanessa",
    idade:39,
    sexo:'feminino',
    interesses:'musica, livros'
};
console.log(pessoa,nome);
//constante
const pontos =100;

//Operadores
console.log(10+5);
console.log(10-7);

let numero1=10, numero2=3;
console.log(numero1/numero2);
console.log(numero1*numero2);

console.log(10==3);
console.log(10!=3);
console.log(numero1>numero2);
console.log(numero1<100);
console.log(10>=11);
console.log(10<=11);

function EscreverMes(){
console.log("Fevereio");
}
let titulo=document.querySelector("#titulo");
titulo.textContent="Revisão de js";
function Mutiplica(num1,num2){
    let resultado=num1*num2;
    return resultado;
}

console.clear();
idade=18;
if(idade>=18){
    console.log("Maior de idade");
}else if(idade>=16){
    console.log("Quase lá");
}else{
    console.log("Menor de idade");
}

let dia=5;
switch(dia){
    case 1:
        console.log("Domingo");
        break;
        case 2:
        console.log("Segunda");
        break;
        default:
            console.log("Outro dia");
            break;
        
}

let contador =0;
while(contador<5){
    console.log("olá");
    contador++;
}

contador=0;
do{
console.log("tchau");
contador++
}while(contador <5)

for(let i = 0;i<5; i++){
    console.log("oi");
}

//Document object model
function MudarTitulo(texto){
document.querySelector("#titulo").textContent= texto;

}