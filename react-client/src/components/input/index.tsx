import React, { useState } from 'react';

import './styles.scss'

export type InputProps = {
    name: string,
    label: React.ReactNode,
    placeholder: string,
    type: string,
    errorMessage: string,
    value: string,
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: InputProps) => {

    const [inFocus, setInFocus] = useState<boolean>(false);

    const handleFocus = () => {
        setInFocus(true);
    };

    const handleBlur = () => {
        setInFocus(false);
    };

    const { type, name, placeholder, label, errorMessage, onInput } = props;
    const classList: Array<string> = ['input'];
    if (inFocus) {
        classList.push('input_focus')
    };
    if (errorMessage) {
        classList.push('input_invalid');
    }
    return <label className={classList.join(" ")} onFocus={handleFocus} onBlur={handleBlur} >
        <input type={type} name={name} className="input__control" placeholder={placeholder} required onInput={onInput} />
        {errorMessage && <span className="input__error">{errorMessage}</span>}
        <span className="input__label">{label}</span>
    </label>
}