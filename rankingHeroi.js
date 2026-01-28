let quantidadeDeVitorias = 148
let quantidadeDeDerrotas= 30
let nivel = "Radiante";
let resultado = 148-30

console.log (resultado)
switch(true){
    case(resultado < 10):
      nivel= "Ferro";
        break;
    case(resultado >= 11 && resultado <=20):
    nivel= "Bronze";
        break;
    case(resultado >= 21 && resultado <= 50):
    nivel= "Prata";
        break;
    case (resultado >= 51 && resultado<= 70):
        nivel= "Ouro";
        break;
    case (resultado >= 71 && resultado <= 80):
        nivel= "Platina";
        break;
    case (resultado >= 81 && resultado <= 90):
        nivel= "Ascendente";
        break;
    case (resultado >= 91 && resultado <= 100):
        nivel= "Imortal";
        break;
    case(resultado>=101):    
        nivel= "Radiante";
        break; 
    }       
        console.log("O Herói tem o saldo de " + (quantidadeDeVitorias - quantidadeDeDerrotas) + " e está no nivel " + nivel ); 
