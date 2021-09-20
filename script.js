const submit = document.getElementById('submitBtn');
const numberBtn = document.querySelectorAll('.numberBtn')

const benderNumber = parseInt(Math.random() * 11)

numberBtn.forEach(el => el.addEventListener('click', ()=> {
    console.log(el.value)
}))