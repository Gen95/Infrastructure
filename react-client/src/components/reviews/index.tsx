import React from 'react';
import { UIEvent } from 'react';
import { ReviewsInput, Button, Review, Preloader, ReviewProps } from '../';

import './styles.scss'

type ReviewsProps = {
    isLoading: Boolean,
    total: Number,
    list: Array<ReviewProps>,
    onScroll: (event: UIEvent) => void,
    currentScroll: Number
}

export const Reviews = ({ isLoading, total, list = [], onScroll, currentScroll }: ReviewsProps) => {
    const scrollElement = React.useRef<any>();
    React.useEffect(() => {
        scrollElement.current.scrollTop = currentScroll;
    }, []);

    const renderContainer = () => {
        return (
            <div className="reviews__container">
                <div ref={scrollElement} className="reviews__fixed" onScroll={onScroll}>
                    <div className="reviews__list">
                        {list.map((item, index) => <Review key={index} {...item} />)}
                    </div>
                    {isLoading && <Preloader />}
                </div>
            </div>
        )
    }

    const renderFooter = () => {
        return (
            <div className="reviews__footer">
                <div className="layout">
                    <form className="form_reviews" noValidate>
                        <ReviewsInput name="name" label="Остаивть отзыв"/>
                        <Button class="button_reviews" text="Йееееее" />
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="reviews">
            <div className="layout reviews__layout">
                <h1 className="h1">Отзывы
                    {Number(total) > 0 && <span className="reviews__count">{total}</span>}
                </h1>
                {renderContainer()}
            </div>
            {renderFooter()}
        </div>
    )
}