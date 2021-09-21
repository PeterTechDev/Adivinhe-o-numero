const submit = document.getElementById('submitBtn');
const numberBtn = document.querySelectorAll('.numberBtn')
const mainImg = document.getElementById('main-img')
const missBoard = document.getElementsByClassName('miss')
const tip = document.getElementById('tip')

const benderNumber = parseInt(Math.random() * 11)
console.log('O numero do Bender é: ' + benderNumber)

let benderScore = 0;


const userWon =()=>{
    document.querySelector(".center").remove()
    const final = document.createElement('div')
    final.id = "final"
    final.style.backgroundImage = "url('assets/sad-bender.png')";
    document.querySelector("main").appendChild(final)
    document.querySelector("body > main > h1").innerHTML = 'Parabéns!'
    document.querySelector("body > main > p").innerHTML = 'Você VENCEU o Bender!!!'
    submit.classList.remove('hide')
}

const benderWon =()=>{
    document.querySelector(".center").remove()
    const final = document.createElement('div')
    final.id = "final"
    final.style.backgroundImage = "url('assets/ok-bender.png')";
    document.querySelector("main").appendChild(final)
    document.querySelector("body > main > h1").innerHTML = 'Bite my shiny metal ass!'
    document.querySelector("body > main > p").innerHTML = `O número era ${benderNumber}. O Bender te VENCEU!`
    submit.classList.remove('hide')
}
const benderWonRound =()=>{
    console.log('Bender ganhou o round ' + benderNumber)
    benderScore += 1;
    document.querySelector(".score").remove()
    
    if(benderScore == 2){
        mainImg.src = 'assets/happy-bender.png'
    } else if (benderScore >= 3) {
        mainImg.src = 'assets/ok-bender.png';
    benderWon()
    }
    

}
numberBtn.forEach(el => el.addEventListener('click', ()=> {
    if(el.value == benderNumber){
        userWon()
    } else {
        benderWonRound()
        el.style.backgroundColor = 'red'
    }
}))
numberBtn.forEach(el => el.addEventListener('click', ()=> {
    if(el.value < benderNumber){
    tip.innerHTML = 'Mais'
setTimeout(()=> tip.innerHTML = '', 2000)  
    } else {
        tip.innerHTML = 'Menos'
setTimeout(()=> tip.innerHTML = '', 2000)  
    }
}))