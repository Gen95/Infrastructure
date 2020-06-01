import React from 'react';
import { Rating } from '../';

import './styles.scss'

export type ReviewProps = {
    avatar?: string,
    name: string,
    message: string,
    rating: number,
    isUser: boolean
}

export const Review = ({avatar, name, message, rating, isUser}: ReviewProps) => {
    
    const className = ['review'];
    if (String(rating) === '5') {
        className.push('review_luxury')
    };
    if (isUser) className.push('review_mine');

    return (
        <div className={className.join(" ")}>
            <div className="review__avatar" style={avatar ? {backgroundImage: `url(${avatar})`, backgroundSize: 'cover'} : {}}></div>
            <div className="review__content">
                <div className="review__header">
                    <p className="review__name">{name}</p>
                    <Rating rating={rating}/>
                </div>
                <p className="review__message">{message}</p>
            </div>
        </div>
    )
}