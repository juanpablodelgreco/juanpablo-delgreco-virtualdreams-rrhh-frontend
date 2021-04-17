const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');
const inputSubject = document.querySelector('#inputSubject');
const inputMessage = document.querySelector('#inputMessage');
const form = document.querySelector('#form');
let alerts = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkFields();
    if (alerts.length > 0) {
        setTimeout(() => { clearSpan() }, 3000);
        return;
    }
    $("#messageModal").modal("show");
});


// Función que verifica si todos los campos fueron completados
const checkFields = () => {
    if (inputName.value.trim() === '') {
        createMessage('#name');
        if (alerts.includes('#name') === false) {
            alerts.push('#name');
        }
    }

    if (inputEmail.value.trim() === '' || !verifyEmail()) {
        createMessage('#email');
        if (alerts.includes('#email') === false) {
            alerts.push('#email');
        }
    }

    if (inputSubject.value.trim() === '') {
        createMessage('#subject');
        if (alerts.includes('#subject') === false) {
            alerts.push('#subject');
        }
    }

    if (inputMessage.value.trim() === '') {
        createMessage('#message');
        if (alerts.includes('#message') === false) {
            alerts.push('#message');
        }
    }
};

// Función que crea el mensaje si el campo no fue completado
const createMessage = (name) => {
    if (!document.querySelector(`${name} span`)) {
        const span = document.createElement('span');
        span.textContent = 'Por favor, complete este campo.';
        span.classList.add('red');
        document.querySelector(name).appendChild(span);
    }
}

// Función que limpia los mensajes de error
const clearSpan = () => {
    alerts.forEach((alert) => {
        document.querySelector(alert).removeChild(document.querySelector(`${alert} span`));
    });
    alerts = [];
};

// Función que verifica el email
const verifyEmail = () => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(inputEmail.value);
};