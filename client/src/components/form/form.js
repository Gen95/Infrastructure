const correctInput = function (input, error) {
    input.addEventListener("input", function (event) {
        if (input.validity.valid) {
            input.classList.remove("input__control_invalid");
            error.innerHTML = "";
            error.classList.remove("input__error_active");
        }
    });
}

const validate = function (inputs) {
    let result = [];

    inputs.forEach(input => {
        
        if (!["email", "text"].includes(inputControl.type)) {
            return
        }

        const inputControl = input.querySelector(".input__control");
        const inputError = input.querySelector(".input__error");

        const field = {
            "name": inputControl.name,
            "value": inputControl.value
        }

        const incorrectInput = function (message) {
            inputControl.classList.add("input__control_invalid");
            inputError.innerHTML = message;
            inputError.classList.add("input__error_active");
            field.error = message;
        }

        if (inputControl.type === "email" && !inputControl.validity.valid) {
            incorrectInput("Поле заполнено неверно");
        }

        if (!inputControl.value.length) {
            incorrectInput("Поле пустое");
        }

        result.push(field);
    });

    return result;
}

const forms = document.querySelectorAll('.form');

forms.forEach(form => {
    const inputs = form.querySelectorAll('.input');

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const validateResult = validate(inputs);
        const buttonHint = form.querySelector(".button__hint");

        const formWithError = validateResult.some((field) => field.error);

        if (!formWithError) {
            form.classList.add("form_valid");
            buttonHint.classList.add("button__hint_active");
            console.log(validateResult);
        } else {
            form.classList.remove("form_valid");
            buttonHint.classList.remove("button__hint_active");
        }
    });

    inputs.forEach(input => {

        const inputControl = input.querySelector(".input__control");
        const inputError = input.querySelector(".input__error");

        if(inputControl.type === 'text') {
            correctInput(inputControl, inputError);
        }
            
        if(inputControl.type === 'email') {
            correctInput(inputControl, inputError);
        }
    });

});