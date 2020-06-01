import axios, { AxiosResponse } from 'axios';
import { ReviewType } from '../store';

export const getReviews = function (limit: number | string, offset: number | string): Promise<AxiosResponse<{reviews: Array<ReviewType>, total: number}>> {
    return axios.get(`http://localhost:3002/reviews?limit=${limit}&offset=${offset}`);
}