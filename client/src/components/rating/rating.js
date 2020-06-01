import { delegateClick } from '../../utils'

const ratingHandler = function (star) {
  const rating = star.parentNode;
  const stars = rating.querySelectorAll(".star");
  for (const starItem of stars) {
    starItem.classList.remove('active');
  };
  star.classList.add('active');
}

delegateClick("star", ratingHandler);