import { getReviews } from '../../api';
import { ReviewType } from '../';
import { Dispatch } from 'redux';

export const setReviewsLoading = () => {
    return {
        type: 'SET_REVIEWS_LOADING'
    }
}

const setReviewsSuccess = (payload: {total: number, list: Array<ReviewType>, offset: number}) => {
    return {
        type: 'SET_REVIEWS_SUCCESS',
        payload
    }
}

export const fetchReviews = (payload: { limit: number, offset: number }, dispatcher: Dispatch) => {
    dispatcher(setReviewsLoading());
    getReviews(payload.limit, payload.offset).then(({ data: res }) => {
        dispatcher(setReviewsSuccess({
            total: res.total,
            list: res.reviews,
            offset: payload.offset + payload.limit
        }));
    });
}

export const setReviewsScroll = (payload: {currentScroll: string | number}) => {
    return {
        type: 'SET_REVIEWS_SCROLL',
        payload
    }
}