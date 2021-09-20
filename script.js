const submit = document.getElementById('submitBtn');
const numberBtn = document.querySelectorAll('.numberBtn')

const benderNumber = parseInt(Math.random() * 11)

const userWon =()=>{
    console.log('usuario ganhou ' + benderNumber)
}
const benderWonRound =()=>{
    console.log('Bender ganhou o round ' + benderNumber)
}
numberBtn.forEach(el => el.addEventListener('click', ()=> {
    if(el.value == benderNumber){
        userWon()
    } else {
        benderWonRound()
    }
}))