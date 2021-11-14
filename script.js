const button_submit = window.document.querySelector("#submit");
const main_form = window.document.querySelector('#login-form');
const page_body = window.document.body

button_submit.addEventListener('click', (event) => {
    event.preventDefault();

    //validate fields
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

page_body.addEventListener('animationstart', (event) =>{
    if(event.animationName === 'down'){
        page_body.style.overflow = 'hidden'; 
    }
});

main_form.addEventListener('animationend', (event) => {
    if(event.animationName === 'down'){
        main_form.style.display = 'none';
        page_body.style.overflow = 'none';
    }
});