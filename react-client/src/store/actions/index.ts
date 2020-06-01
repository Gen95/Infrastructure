import { getReviews } from '../../api';

export const setReviewsLoading = () => {
    return {
        type: 'SET_REVIEWS_LOADING'
    }
}

export const setReviewsSuccess = (payload: any) => { //FIXME
    return {
        type: 'SET_REVIEWS_SUCCESS',
        payload
    }
}

export const fetchReviews = (payload: any, dispatcher: any) => { //FIXME
    dispatcher(setReviewsLoading());
    getReviews(payload.limit, payload.offset).then(({ data: res }) => {
        dispatcher(setReviewsSuccess({
            total: res.total,
            list: res.reviews,
            offset: payload.offset + payload.limit
        }));
    });
}

export const setReviewsScroll = (payload: any) => { //FIXME
    return {
        type: 'SET_REVIEWS_SCROLL',
        payload
    }
}