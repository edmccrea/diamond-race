//Grab elements
const diamonds = document.querySelectorAll('.diamond');
const scores = document.querySelectorAll('.score-value');
const resetBtn = document.querySelector('.reset-btn');

let diamondProps = [
  {
    color: 'red',
    value: 0,
  },
  {
    color: 'blue',
    value: 0,
  },
  {
    color: 'green',
    value: 0,
  },
  {
    color: 'yellow',
    value: 0,
  },
];

let isGameOver = false;

//Check if any diamond has reached a value of 10
const checkGameOver = () => {
  diamondProps.forEach((d, i) => {
    if (d.value === 10) {
      isGameOver = true;
      scores[i].classList.add('winner');

      diamonds.forEach((diamond) => {
        diamond.classList.remove('active');
      });
    }
  });
};

//Check for game over, if false change value and position of diamond when clicked
const diamondClicked = (color) => {
  if (!isGameOver) {
    diamondProps.forEach((diamond, i) => {
      if (color === diamond.color) {
        diamond.value += 1;
        diamonds[i].style.left = `${diamond.value - 1}5.25%`;
        scores[i].innerHTML = diamond.value;
      }
    });

    checkGameOver();
  }
};

//Reset game
const resetGame = () => {
  diamondProps.forEach((diamond, i) => {
    diamond.value = 0;
    diamonds[i].style.left = 0;
    diamonds[i].classList.add('active');
    scores[i].innerHTML = 0;
    scores[i].classList.remove('winner');
  });

  isGameOver = false;
};

//Add event listeners to DOM
diamonds.forEach((diamond, i) => {
  diamond.addEventListener('click', () => {
    diamondClicked(diamondProps[i].color);
  });
});

resetBtn.addEventListener('click', resetGame);
