import React from 'react';

import './styles.scss'

type ButtonProps = {
    class: string,
    text: string
}

export const Button = (props: ButtonProps) => {
    return(
        <>
            <button type="submit" className={`button ${props.class}`}>{props.text}</button>
            <span className="button__hint"></span>
        </>
    )
}