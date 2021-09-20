const submit = document.getElementById('submitBtn');
const numberBtn = document.querySelectorAll('.numberBtn')
const mainImg = document.getElementById('main-img')

const benderNumber = parseInt(Math.random() * 11)
console.log('O numero do Bender é: ' + benderNumber)

let benderScore = 0;


const userWon =()=>{
    console.log('usuario ganhou ' + benderNumber);
}
const benderWonRound =()=>{
    console.log('Bender ganhou o round ' + benderNumber)
    benderScore += 1;
    if(benderScore == 2){
        mainImg.src = 'assets/happy-bender.png'
    } else if (benderScore >= 3) {
        alert('O Bender ganhou')
        location.reload()
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