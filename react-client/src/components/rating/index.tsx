import React, { useState } from 'react';
import { MouseEvent } from 'react';

import './styles.scss'

type RatingProps = {
    rating: number
}

export const Rating = ({ rating: propsRating }: RatingProps) => {
    const [rating, setRating] = useState<number>(propsRating);

    return (
        <div className="rating">
            {[0, 0, 0, 0, 0].map((_, index) => {
                return <div className={ index === rating ? "star active" : "star" } key={index} onClick={() => setRating(index)}></div>
            })}
        </div>
    )
}