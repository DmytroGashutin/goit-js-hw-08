
import throttle from 'lodash.throttle';


const FORM_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

inLocalStorage();

function onFormInput(event) {
    localStorage.setItem(FORM_KEY, JSON.stringify(createStatusObject()));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(createStatusObject());
    formRef.reset();
    localStorage.removeItem(FORM_KEY);
    
}

function createStatusObject() {
    return {
        email: formRef.elements.email.value,
        message: formRef.elements.message.value,
    };
    
}

function inLocalStorage() {
    let currentFieldStatus;
    try {
        currentFieldStatus = JSON.parse(localStorage.getItem(FORM_KEY));
        formRef.elements.email.value = currentFieldStatus.email;
        formRef.elements.message.value = currentFieldStatus.message;
    } catch (error) {

    };
}