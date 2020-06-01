import { createStore } from 'redux';
import { reducer } from './reducer';

export type ReviewType = {
    avatar?: string,
    name: string,
    message: string,
    rating: number,
    isUser: boolean
}

export type StateType = {
    reviews: {
        list: Array<ReviewType>,
        total: Number,
        isLoading: Boolean,
        offset: Number,
        currentScroll: number
    }
}

export const initialState = {
    reviews: {
        list: [],
        total: 0,
        isLoading: false,
        offset: 0,
        currentScroll: 0
    }
}

export const store = createStore(reducer, initialState)