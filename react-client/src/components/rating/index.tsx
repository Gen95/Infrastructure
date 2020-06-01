import React from 'react';

import './styles.scss'

type RatingProps = {
    rating: number
}

function setRating(event: any) { //FIXME
    const stars = event.target.parentNode.childNodes;
    for (const star of stars) {
        star.className = "star"; //FIXME
    }
    event.target.className = "star active";
}

export const Rating = ({ rating }: RatingProps) => {
    return (
        <div className="rating" onClick={setRating}>
            {[0, 0, 0, 0, 0].map((_, index) => {
                if ((index + 1) === rating) {
                    return <div className="star active" key={index}></div>
                } else {
                    return <div className="star" key={index}></div>
                }
            })}
        </div>
    )
}