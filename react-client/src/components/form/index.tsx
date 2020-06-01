import React, { useState } from 'react';
import { Input, Button, InputProps } from '../';

import './styles.scss'

export const Form = () => {

    const [inputs, setInputs] = useState([
        { name: "name", label: "Имя", placeholder: "Input_text", type: "text", errorMessage: "", value: "" },
        { name: "second_name", label: "Фамилия", placeholder: "Input_text", type: "text", errorMessage: "", value: "" },
        { name: "email", label: "Email", placeholder: "Email", type: "email", errorMessage: "", value: "" }
    ]);

    const [complete, setComplete] = useState<boolean>(false);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>, input: InputProps, index: number) => {
        inputs[index].errorMessage = "";
        inputs[index].value = event.target.value;
        if (input.type === 'email' && !event.target.validity.valid) {
            inputs[index].errorMessage = "Поле заполнено неверно";
        } else if (!event.target.value.length) {
            inputs[index].errorMessage = "Поле незаполнено вообще";
        }
        setInputs(inputs)
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let hasError = false;
        inputs.forEach((input) => {
            if (!input.value) {
                input.errorMessage = "Поле незаполнено вообще";
                hasError = true;
            };
            if (input.errorMessage) {
                hasError = true;
            }
        });
        setInputs(inputs)

        if (!hasError) {
            setComplete(true)
        }
    }

    return <form className={`form ${complete && "form_valid"}`} noValidate onSubmit={submitHandler}>
        <h2 className="h2">Форма регистрации</h2>
        {inputs && inputs.map((input, index) => {
            return <Input {...input} onInput={(event) => handleInput(event, input, index)} key={index} />
        })}
        <Button class="button" text="Йееееее" />
    </form>
}