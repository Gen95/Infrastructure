import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Reviews as ReviewsPattern } from '../../components/reviews';
import { fetchReviews, setReviewsScroll } from '../../store/actions';
import { StateType as ReviewsRawProps } from '../../store';

import './styles.scss'

export const Reviews = () => {

    const dispatch = useDispatch();
    const setReviewsScrollRaw = (payload: {currentScroll: string | number}) => dispatch(setReviewsScroll(payload));
    const fetchReviewsRaw = (payload: { limit: number, offset: number }) => fetchReviews(payload, dispatch);

    const reviews = useSelector((state: ReviewsRawProps) => state.reviews)

    const [currentScroll, setCurrentScroll] = useState<number>(0);

    useEffect(() => {
        if (!reviews.offset) {
            callAPI(15);
        }
    }, [])

    useEffect(() => () => {
        setReviewsScrollRaw({currentScroll});
    }, [currentScroll])

    const handleScroll = (event: React.UIEvent<Element, UIEvent>) => {
        const target = event.target as HTMLElement;
        setCurrentScroll(target.scrollTop)
        if (target.offsetHeight + target.scrollTop === target.scrollHeight) {
            callAPI(10);
        };
    }

    const callAPI = (limit: number) => {
        const { offset, isLoading } = reviews;
        if (isLoading) return;
        fetchReviewsRaw({ limit, offset });
    }

    return <ReviewsPattern {...reviews} onScroll={handleScroll} />
}