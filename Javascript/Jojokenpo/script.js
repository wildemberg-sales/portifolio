var elementos = document.querySelectorAll(".player-options div > img");
var playerOpt= "";
var inimigoOpt = "";


function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "paper"){
        if(inimigoOpt == "paper"){
            //empate
            vencedor.innerHTML = "O Jogo Foi Empatado";
        }else if(inimigoOpt == "rock"){
            //vitoria
            vencedor.innerHTML = "Você Ganhou!!";
        }else if(inimigoOpt == "scisor"){
            //inimigo ganhou
            vencedor.innerHTML = "Você Perdeu";
        }
    }

    if(playerOpt == "rock"){
        if(inimigoOpt == "paper"){
            
            vencedor.innerHTML = "Você Perdeu";
        }else if(inimigoOpt == "rock"){
            
            vencedor.innerHTML = "O Jogo Foi Empatado";
        }else if(inimigoOpt == "scisor"){
            
            vencedor.innerHTML =  "Você Ganhou!!" ;
        }
    }

    if(playerOpt == "scisor"){
        if(inimigoOpt == "paper"){
            
            vencedor.innerHTML = "Você Ganhou!!";
        }else if(inimigoOpt == "rock"){
            
            vencedor.innerHTML = "Você Perdeu";
        }else if(inimigoOpt == "scisor"){
            
            vencedor.innerHTML =  "O Jogo Empatou" ;
        }
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');

    for(var i=0; i<enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}
//função para resetar a opacidade dos que nao foram selecionados
function resetOpacityPlayer(){
    for(var i=0; i<elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    
    resetInimigo();
    
    for(var i=0; i<enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    alert(playerOpt);
    alert(inimigoOpt);
}

for(var i=0; i<elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacityPlayer();

        //pegando a imagem selecionada e alterando a opacidade
        t.target.style.opacity = 1;

        //descobrindo oq esta sendo selecionado atraves do atributo
        playerOpt = t.target.getAttribute('opt');
        
        inimigoJogar();
        validarVitoria();
    });
}