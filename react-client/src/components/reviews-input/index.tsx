import React from 'react';

import './styles.scss'

type ReviewsInputProps = {
    name: string,
    label: string
}

export const ReviewsInput = (props: ReviewsInputProps) => {
    return (
        <label className="reviews-input">
            <textarea name={props.name} className="reviews-input__control"></textarea>
            <span className="reviews-input__label">{props.label}</span>
        </label>
    )
}