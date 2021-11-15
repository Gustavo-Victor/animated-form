const button_submit = window.document.querySelector("#submit");
const main_form = window.document.querySelector('#login-form');
const page_body = window.document.body

button_submit.addEventListener('click', (event) => {
    event.preventDefault();

    //validate form fields
    const form_fields = [...window.document.querySelectorAll('#login-form input')]; 
    form_fields.forEach(field => {
        if(field.value === ''){
            main_form.classList.add('validate-error');
        }
    });

    //remove error effect if already exists, else add hide effect
    const formError = window.document.querySelector('.validate-error');
    if(formError){
        formError.addEventListener('animationend', (event) => {
            if(event.animationName === 'nono'){
                main_form.classList.remove('validate-error');
            }
        });
    }else{
        //hide or down effect
        if(!main_form.classList.contains('down')){
            main_form.classList.add('down');
        }
    }
});

/*when the 'down' animation starts, the body will have hidden overflow*/
page_body.addEventListener('animationstart', (event) =>{
    if(event.animationName === 'down'){
        page_body.style.overflow = 'hidden'; 
    }
});

/*when the 'down' animation ends, the body will have none overflow and form will have display = 'none'*/
main_form.addEventListener('animationend', (event) => {
    if(event.animationName === 'down'){
        main_form.style.display = 'none';
        page_body.style.overflow = 'none';
    }
});

/*background squares*/
const ulSquares = window.document.querySelector('.squares');

/*loop repeat to make the animation 'up' dynamic*/ 
for (let i = 0; i < 21; i++) {
    const li = document.createElement('li');   
    
    //random function 
    const randomFunction = (min, max) => Math.random() * (max - min) + min;
    
    //dynamic settings
    let size = Math.floor(randomFunction(10, 120));
    let position = randomFunction(1, 99);
    let delay = randomFunction(5, 0.1);
    let duration = randomFunction(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}

