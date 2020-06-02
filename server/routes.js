const Chance = require('chance');
const chance = new Chance();
var faker = require('faker/locale/ru');


const getAvatar = () => faker.image.avatar();
const getGender = () => chance.gender();
const getName = () => chance.name({ middle: chance.bool(), prefix: chance.bool(), suffix: chance.bool() });
const getMessage = () => chance.paragraph({ sentences: chance.integer({ min: 1, max: 15 }) });
const getRating = () =>  chance.integer({ min: 1, max: 5 });
const isCurrentUser = () => chance.bool({ likelihood: 15 });
const avatar = getAvatar();
const name = getName();
const rating = getRating();
const getUser = () => { return {
        id: 4,
        isUser: true,
        avatar,
        name,
        gender: getGender(),
        message: getMessage(),
        rating,
    }
};

const reviewsLength = chance.integer({ min: 100, max: 500 });
const reviews = [...Array(reviewsLength)].map((_, id) => Math.random() > 0.75 ? getUser() : ({
    id,
    avatar: Math.random() > 0.9 ? null : getAvatar(),
    name: getName(),
    gender: getGender(),
    message: getMessage(),
    rating: getRating(),
    isUser: false,
}));



const router = app => {
    app.get('/', (request, response) => {
        response.res.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/reviews', (request, response) => {
        setTimeout(( ) => {
            const { offset = 0, limit } = request.query;
            const sliceReviews = limit ? reviews.slice(+offset, +offset + +limit) : reviews.slice(+offset);    

            response.send({reviews: sliceReviews, total: reviewsLength});
        }, chance.integer({ min: 500, max: 2500 }));
    });
}

module.exports = router;