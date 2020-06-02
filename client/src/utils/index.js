export const findCurrentClassNode = function (target, className) {
    let elem = target;
    while (elem.parentNode) {
      if (elem.classList && elem.classList.contains(className)) {
        return elem;
      };
      elem = elem.parentNode;
    }
}

export const delegateClick = (className, callback) => {
  document.addEventListener("click", (event) => {
    let targetIsCurrent = findCurrentClassNode(event.target, className);
    if (targetIsCurrent) {
      callback(targetIsCurrent);
    }
  })
}