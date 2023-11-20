let personName = document.querySelector('[data-person]')
let birthdateInput = document.getElementById('birthdate').value



function Birthday(){
    let personName = document.querySelector('[data-person]')
    let birthdateInput = document.getElementById('birthdate').value
    const calculate = document.getElementById('calculate')   
    let result = document.querySelector('[data-output]')

    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();

    birthdate.setFullYear(currentDate.getFullYear());
    if(birthdate < currentDate){
        birthdate.setFullYear(currentDate.getFullYear()+1)
    }
    const timeDifference = birthdate.getTime() - currentDate.getTime();
    const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}
calculate.addEventListener('click',Birthday)
document.querySelector('[data-output]').textContent = `Hello ${personName}, There are ${daysUntilBirthday} days until your birthday !!`

//const numbOfDays = difference / (1000 * 3600 * 24)