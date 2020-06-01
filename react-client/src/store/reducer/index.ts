import { initialState } from '..';

export function reducer(state = initialState, action: any) { //FIXME
    console.log('action', action);
    switch (action.type) {
        case 'SET_REVIEWS_LOADING':
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    isLoading: true
                }
            }
        case 'SET_REVIEWS_SUCCESS':
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    total: action.payload.total,
                    list: state.reviews.list.concat(action.payload.list),
                    isLoading: false,
                    offset: action.payload.offset
                }
            }
        case 'SET_REVIEWS_SCROLL':
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    currentScroll: action.payload.currentScroll
                }
            }
        default:
            return state
    }
}