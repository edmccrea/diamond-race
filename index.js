//Grab elements
const diamonds = document.querySelectorAll('.diamond');
const scores = document.querySelectorAll('.score-value');
const resetBtn = document.querySelector('.reset-btn');

//Initialize starting values
let diamondValues = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0,
};

let isGameOver = false;

//Check if any diamond has reached a value of 10
const checkGameOver = () => {
  if (Object.values(diamondValues).indexOf(10) > -1) {
    isGameOver = true;

    diamonds.forEach((diamond) => {
      diamond.classList.remove('active');
    });

    if (Object.values(diamondValues).indexOf(10) === 0) {
      scores[0].classList.add('winner');
    }
    if (Object.values(diamondValues).indexOf(10) === 1) {
      scores[1].classList.add('winner');
    }
    if (Object.values(diamondValues).indexOf(10) === 2) {
      scores[2].classList.add('winner');
    }
    if (Object.values(diamondValues).indexOf(10) === 3) {
      scores[3].classList.add('winner');
    }
  }
};

//
const diamondClicked = (color) => {
  if (!isGameOver) {
    diamondValues[color] += 1;

    if (color === 'red') {
      diamonds[0].style.left = `${diamondValues[color] - 1}5.25%`;
      scores[0].innerHTML = diamondValues[color];
    }
    if (color === 'blue') {
      diamonds[1].style.left = `${diamondValues[color] - 1}5.25%`;
      scores[1].innerHTML = diamondValues[color];
    }
    if (color === 'green') {
      diamonds[2].style.left = `${diamondValues[color] - 1}5.25%`;
      scores[2].innerHTML = diamondValues[color];
    }
    if (color === 'yellow') {
      diamonds[3].style.left = `${diamondValues[color] - 1}5.25%`;
      scores[3].innerHTML = diamondValues[color];
    }
    checkGameOver();
  }
};

//Reset game
const resetGame = () => {
  Object.keys(diamondValues).forEach((key) => {
    diamondValues[key] = 0;
    return diamondValues;
  });

  diamonds.forEach((diamond) => {
    diamond.style.left = 0;
    diamond.classList.add('active');
  });

  scores.forEach((score) => {
    score.innerHTML = 0;
    score.classList.remove('winner');
  });

  isGameOver = false;
};

//Add event listeners to DOM
diamonds[0].addEventListener('click', () => {
  diamondClicked('red');
});
diamonds[1].addEventListener('click', () => {
  diamondClicked('blue');
});
diamonds[2].addEventListener('click', () => {
  diamondClicked('green');
});
diamonds[3].addEventListener('click', () => {
  diamondClicked('yellow');
});

resetBtn.addEventListener('click', resetGame);
