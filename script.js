const numberBtn = document.querySelectorAll('.numberBtn')
const mainImg   = document.getElementById('main-img')
const tip       = document.getElementById('tip')
const title     = document.querySelector("body > main > h1");
const subTitle  = document.querySelector("body > main > p");

// Número aleatório do Bender - é definido toda vez que a página carrega
const benderNumber = parseInt(Math.random() * 11)
console.log('O numero do Bender é: ' + benderNumber)

// Armazena as chances do user
let benderScore = 0;

// Muda a tela de acordo com o vencedor do jogo
const gameWinner =param=>{
    // Limpa o área central
    document.querySelector(".center").remove()

    // Cria novo elemento e suas atribuições
    const final = document.createElement('div')
    document.querySelector("main").appendChild(final)
    final.id = "final"
    document.getElementById('submitBtn').classList.remove('hide')

    const benderOrUser =  param == 'user';
    benderOrUser ? final.style.backgroundImage = "url('assets/sad-bender.png')" : final.style.backgroundImage = "url('assets/ok-bender.png')"
    benderOrUser ? title.innerHTML = 'Parabéns!' : title.innerHTML = 'Bite my shiny metal ass!'
    benderOrUser ? subTitle.innerText = 'Você VENCEU o Bender!!!' : subTitle.innerText = `O número era ${benderNumber}. O Bender te VENCEU!`
}

// Contador das chances
const benderWonRound =()=>{
    benderScore += 1;
    document.querySelector(".score").remove()
    
    if(benderScore == 2){
        mainImg.src = 'assets/happy-bender.png'
    } else if (benderScore >= 3) {
        mainImg.src = 'assets/ok-bender.png';
    gameWinner('bender')
    }
}

// Add eventlistener em todos os botões
numberBtn.forEach(el => el.addEventListener('click', ()=> {
    if(el.value == benderNumber){
        gameWinner('user')
    } else {
        benderWonRound()
        el.style.backgroundColor = 'red'
    }
}))

// Fornece a dica
numberBtn.forEach(el => el.addEventListener('click', ()=> {
    if(el.value < benderNumber){
    tip.innerText = 'Mais'
setTimeout(()=> tip.innerHTML = '', 1000)  
    } else {
        tip.innerText = 'Menos'
setTimeout(()=> tip.innerHTML = '', 1000)  
    }
}))