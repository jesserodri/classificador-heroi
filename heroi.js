let nome_heroi = "Jett"
let qtd_exp= 10050
let status_heroi = ""


while(true){
    if(qtd_exp<=1000){
        status_heroi = "ferro";  
         
    }else if(qtd_exp>=1001 && qtd_exp<=2000){
        status_heroi="Bronze";   
    }else if(qtd_exp>=2001 && qtd_exp<=5000){
        status_heroi="Prata";
    }else if(qtd_exp>=5001 && qtd_exp<=6000){
        status_heroi="Ouro";
    }else if(qtd_exp>=6001 && qtd_exp<=8000){
        status_heroi="Platina Diamante";
    }else if(qtd_exp>=8001 && qtd_exp<=9000){
        status_heroi="Ascendente";
    }else if(qtd_exp>=9001 && qtd_exp<=10000){
        status_heroi="Imortal";
    }else if(qtd_exp>=10001){
        status_heroi="Radiante";}
    break;
}
