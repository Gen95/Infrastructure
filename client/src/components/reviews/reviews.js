import basicAvatar from './../../img/avatar.png';
import { getReviews } from '../../api';

class ReviewsHandler {
    constructor (block) {
        this.block = block;
        this.list = block.querySelector('.reviews__list');
        this.container = block.querySelector('.reviews__fixed');
        this.count = block.querySelector('.reviews__count');
        this.loading = false;
        this.reviewsLength = 0;

        this.initListener();

        this.fetch(15);
    }

    show() {
       this.block.classList.add("reviews_progress");
    }

    hide() {
        this.block.classList.remove("reviews_progress");
    }

    fetch(limit, offset = this.reviewsLength) {
        if (this.loading) return;
        this.show();
        this.loading = true;
        getReviews(limit, offset).then(result => {
            this.showCount(result.total); 
            this.showReviews(result.reviews);
            this.hide();
            this.loading = false;
            this.reviewsLength += result.reviews.length;
        });
    };

    showCount(text) {
        this.count.innerText = text;
    }

    showReviews(reviews) {
        const fragment = document.createDocumentFragment();
        for (const review of reviews) {
            const reviewElem = document.createElement('div');
            reviewElem.classList.add('review');
            reviewElem.innerHTML = `<div class='review__avatar' ${review.avatar && `style='background-image: url(${review.avatar}); background-size: cover'`}></div>
                <div class='review__content ${review.rating}'>
                    <div class='review__header'>
                        <p class='review__name'>${review.name}</p>
                        <div class="rating">
                        ${[...Array(5)].map((_, index) => {
                            return `<div class="star ${index + 1 === review.rating && 'active'}"></div>`
                        }).join('')}
                        </div>
                    </div>
                    <p class='review__message'>${review.message}</p>
                </div>`;
            if (review.rating === 5) {
                reviewElem.classList.add("review_luxury");
            };
            if (review.isUser) {
                reviewElem.classList.add("review_mine");
            }
            fragment.append(reviewElem);
        };
        this.list.append(fragment);
    }

    initListener() {
        this.container.addEventListener("scroll", this.scrollHandler.bind(this))
    }

    scrollHandler() {

        let listHeight = this.container.scrollHeight;
        let listScrollTop = this.container.scrollTop;
        let listVisibleHeight = this.container.clientHeight;

        if (listHeight - listScrollTop < 100 + listVisibleHeight) {
            this.fetch(10);
        }
    }
};

document.querySelectorAll(".reviews").forEach((elem) => {
    window.testClass = new ReviewsHandler(elem)
})
