import React, { MouseEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Reviews as ReviewsPattern } from '../../components/reviews';
import { fetchReviews, setReviewsScroll } from '../../store/actions';
import { StateType as ReviewsRawProps } from '../../store';

import './styles.scss'

type onScroll = () => void;

export const Reviews = () => {

    const dispatch = useDispatch();
    const setReviewsScrollRaw = (payload: any): any => dispatch(setReviewsScroll(payload));
    const fetchReviewsRaw = (payload: any): any => fetchReviews(payload, dispatch);

    const reviews = useSelector((state: ReviewsRawProps) => state.reviews)

    const [currentScroll, setCurrentScroll] = useState<number>(0);

    useEffect(() => {
        if (!reviews.offset) {
            callAPI(15);
        }
    }, [])

    useEffect(() => () => {
        console.log(currentScroll);
        setReviewsScrollRaw({currentScroll});
    }, [currentScroll])

    const someFunction = () => {
        console.log("currentScroll", currentScroll);
    }

    const handleScroll = (event: any) => {
        console.log("scroll", event.target.scrollTop);
        setCurrentScroll(event.target.scrollTop)
        if (event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight) {
            callAPI(10);
        };
    }

    const callAPI = (limit: Number) => {
        const { offset, isLoading } = reviews;
        if (isLoading) return;
        fetchReviewsRaw({ limit, offset });
    }

    return <ReviewsPattern {...reviews} onScroll={handleScroll} />
}