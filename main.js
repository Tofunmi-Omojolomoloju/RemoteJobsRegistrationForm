const signUp = document.querySelectorAll('.signUp');
const exit = document.querySelectorAll('.exit');
const back = document.querySelectorAll('.back');
const step = document.querySelectorAll('.box');

let currentStep = 0;

signUp.forEach(button => {
    button.addEventListener('click', (event) =>{
        event.preventDefault();

        step[currentStep].classList.remove('active');

        currentStep++

        if (currentStep < step.length) {
            step[currentStep].classList.add('active');
        }
    });
});


exit.forEach(button => {
    button.addEventListener('click', (event) =>{
        event.preventDefault();

        step[currentStep].classList.remove('active');

        currentStep = 0;
        step[currentStep].classList.add('active');

        alert('You have exited the form.');
    });
});


back.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (currentStep > 0) {
            step[currentStep].classList.remove('active');
            currentStep--;
            step[currentStep].classList.add('active');
        }
    });
});