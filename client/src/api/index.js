export const getReviews = function (limit, offset) {
    return fetch(`http://localhost:3002/reviews?limit=${limit}&offset=${offset}`, {
        method: "GET"
    }).then(response => {
        return response.json()
    })
}