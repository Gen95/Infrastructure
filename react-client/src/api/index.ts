import axios from 'axios';

export const getReviews = function (limit: number | string, offset: number | string): Promise<any> { //FIXME not any

    return axios.get(`http://localhost:3002/reviews?limit=${limit}&offset=${offset}`)
}