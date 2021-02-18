/* VARIABLES */
let difficulty;
let word;
let clue;
let fails = 0;
let playerWins = false;
let correctLetters = [];
let incorrectLetters = [];
const library = [
  // EASY
  [
    {
      word: 'BANANA',
      clue:
        'an elongated usually tapering tropical fruit with soft pulpy flesh enclosed in a soft usually yellow rind',
    },
    {
      word: 'CAT',
      clue:
        'a carnivorous mammal long domesticated as a pet and for catching rats and mice',
    },
    {
      word: 'POLARBEAR',
      clue: 'a large white carnivorous mammal that inhabits arctic regions',
    },
    {
      word: 'PIZZA',
      clue:
        'a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings',
    },
    {
      word: 'NOODLE',
      clue:
        'a food paste made usually with egg and shaped typically in ribbon form',
    },
    {
      word: 'SALSA',
      clue:
        'popular music of Latin American origin that has absorbed characteristics of rhythm and blues, jazz, and rock',
    },
    {
      word: 'CHOCOLATE',
      clue: 'a food prepared from ground roasted cacao beans',
    },
    {
      word: 'ROBOT',
      clue:
        'a machine that resembles a living creature in being capable of moving independently and performing complex actions',
    },
    {
      word: 'SOAP',
      clue:
        'a cleansing and emulsifying agent made usually by action of alkali on fat or fatty acids and consisting essentially of sodium or potassium salts of such acids',
    },
    {
      word: 'POET',
      clue:
        'a mythological or legendary figure often of divine descent endowed with great strength or ability',
    },
    {
      word: 'IGLOO',
      clue:
        'a usually dome-shaped dwelling of arctic regions that is usually made of blocks of snow or ice',
    },
    {
      word: 'BASEBALL',
      clue:
        'a game played with a bat and ball between two teams of nine players each on a large field having four bases',
    },
    {
      word: 'TOMATO',
      clue:
        'the usually large, rounded, edible, pulpy berry of an herb of the nightshade family',
    },
    {
      word: 'BOAT',
      clue: 'a small vessel for travel on water',
    },
    {
      word: 'SUN',
      clue:
        'the luminous celestial body around which the earth and other planets revolve',
    },
    {
      word: 'DESERT',
      clue: 'arid land with usually sparse vegetation',
    },
    {
      word: 'GOLD',
      clue:
        'a yellow metallic element that occurs naturally in pure form and is used especially in coins, jewelry, and electronics',
    },
    {
      word: 'EGG',
      clue: 'the hard-shelled reproductive body produced by a bird',
    },
    {
      word: 'DANCE',
      clue: "to move one's body rhythmically",
    },
  ],
  // MEDIUM
  [
    {
      word: 'GALAXY',
      clue:
        'any of the very large groups of stars and associated matter that are found throughout the universe',
    },
    {
      word: 'TELESCOPE',
      clue: 'a usually tubular optical instrument for viewing distant objects',
    },
    {
      word: 'MOUNTAIN',
      clue:
        'a landmass that projects conspicuously above its surroundings and is higher than a hill',
    },
    {
      word: 'EDUCATION',
      clue:
        'the field of study that deals mainly with methods of teaching and learning in schools',
    },
    {
      word: 'ENIGMA',
      clue: 'something hard to understand or explain',
    },
    {
      word: 'OPERA',
      clue:
        'a drama set to music and made up of vocal pieces with orchestral accompaniment and orchestral overtures and interludes',
    },
    {
      word: 'JUPITER',
      clue: 'the largest of the planets and fifth in order from the sun',
    },
    {
      word: 'POET',
      clue: 'a maker of verses',
    },
    {
      word: 'VILLAIN',
      clue: 'a deliberate scoundrel or criminal',
    },
    {
      word: 'CRUSADE',
      clue: 'a remedial enterprise undertaken with zeal and enthusiasm',
    },
    {
      word: 'COSMOS',
      clue: 'a complex orderly self-inclusive system',
    },
    {
      word: 'ZODIAC',
      clue:
        'an imaginary band in the heavens divided into 12 constellations or signs each taken for astrological purposes',
    },
    {
      word: 'PHOTOGRAPHY',
      clue:
        'the art or process of producing images by the action of radiant energy and especially light on a sensitive surface',
    },
    {
      word: 'HORIZON',
      clue: 'the apparent junction of earth and sky',
    },
    {
      word: 'CONCAVE',
      clue: 'hollowed or rounded inward like the inside of a bowl',
    },
    {
      word: 'MICROSCOPE',
      clue:
        'an optical instrument consisting of a lens or combination of lenses for making enlarged images of minute objects',
    },
    {
      word: 'SUPERFLUOUS',
      clue: 'exceeding what is sufficient or necessary',
    },
  ],
  // HARD
  [
    {
      word: 'PALEONTOLOGIST',
      clue:
        'a scientist dealing with the life of past geologic periods as known from fossil remains',
    },
    {
      word: 'SYMPTOM',
      clue: 'subjective evidence of disease or physical disturbance',
    },
    {
      word: 'ILLUSION',
      clue: 'something that deceives or misleads intellectually',
    },
    {
      word: 'CHIMERA',
      clue:
        "a fire-breathing she-monster in Greek mythology having a lion's head, a goat's body, and a serpent's tail",
    },
    {
      word: 'CYBERSPACE',
      clue: 'the online world of computer networks and especially the Internet',
    },
    {
      word: 'SOPHISTICATED',
      clue:
        'having a refined knowledge of the ways of the world cultivated especially through wide experience',
    },
    {
      word: 'MEDITATION',
      clue:
        "a discourse intended to express its author's reflections or to guide others in contemplation",
    },
    {
      word: 'MILIEU',
      clue:
        'the physical or social setting in which something occurs or develops',
    },
    {
      word: 'RAPTURE',
      clue:
        'a state or experience of being carried away by overwhelming emotion',
    },
    {
      word: 'NIRVANA',
      clue: 'a place or state of oblivion to care, pain, or external reality',
    },
    {
      word: 'SYNCHRONIZE',
      clue: 'to happen at the same time',
    },
    {
      word: 'ZENITH',
      clue: 'the highest point reached in the heavens by a celestial body',
    },
    {
      word: 'PYRAMID',
      clue:
        'an ancient massive structure having typically a square ground plan, outside walls in the form of four triangles that meet in a point at the top',
    },
    {
      word: 'ALTRUISM',
      clue: 'unselfish regard for or devotion to the welfare of others',
    },
    {
      word: 'CATHARSIS',
      clue:
        'a purification or purgation that brings about spiritual renewal or release from tension',
    },
  ],
];

/* DOM OBJECTS */
const app = document.querySelector('.app');

/* FUNCTIONS */
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * library[difficulty].length);
  word = library[difficulty][randomIndex].word;
  clue = library[difficulty][randomIndex].clue;
};

const renderGameUI = () => {
  app.innerHTML = `
  <div class="stats">
    <span class="stats-difficulty"></span>
    <span class="stats-chances"></span>
  </div>
    <div class="word-clue-container">
      <span class="display-word">WORD</span>
      <span class="display-clue">CLUE</span>
    </div>
    <div class="alphabet-container">
        <button class="letter-button" value="A">A</button>
        <button class="letter-button" value="B">B</button>
        <button class="letter-button" value="C">C</button>
        <button class="letter-button" value="D">D</button>
        <button class="letter-button" value="E">E</button>
        <button class="letter-button" value="F">F</button>
        <button class="letter-button" value="G">G</button>
        <button class="letter-button" value="H">H</button>

        <button class="letter-button" value="I">I</button>
        <button class="letter-button" value="J">J</button>
        <button class="letter-button" value="K">K</button>
        <button class="letter-button" value="L">L</button>
        <button class="letter-button" value="M">M</button>
        <button class="letter-button" value="N">N</button>
        <button class="letter-button" value="O">O</button>
        <button class="letter-button" value="P">P</button>
        <button class="letter-button" value="Q">Q</button>

        <button class="letter-button" value="R">R</button>
        <button class="letter-button" value="S">S</button>
        <button class="letter-button" value="T">T</button>
        <button class="letter-button" value="U">U</button>
        <button class="letter-button" value="V">V</button>
        <button class="letter-button" value="W">W</button>
        <button class="letter-button" value="X">X</button>
        <button class="letter-button" value="Y">Y</button>
        <button class="letter-button" value="Z">Z</button>
    </div>
  `;
};

const displayDifficulty = () => {
  return difficulty == 0
    ? 'Difficulty: EASY'
    : difficulty == 1
    ? 'Difficulty: MEDIUM'
    : 'Difficulty: HARD';
};

const updateChances = () => {
  return 'Chances: ' + (5 - fails);
};

const checkCorrectness = (e) => {
  if (word.includes(e.target.value)) {
    correctLetters.push(e.target.value);
  } else if (!word.includes(e.target.value)) {
    incorrectLetters.push(e.target.value);
    fails++;
  }
};

const updateButtonState = (button) => {
  if (correctLetters.includes(button.value)) {
    button.classList.toggle('correct');
    button.disabled = 'true';
  } else if (incorrectLetters.includes(button.value)) {
    button.classList.toggle('incorrect');
    button.disabled = 'true';
  }
};

const UpdateDisplayWord = () => {
  const arr = [];
  let hiddenWord = '';

  for (i = 0; i < word.length; i++) {
    if (correctLetters.includes(word[i])) {
      arr.push(word[i]);
    } else {
      arr.push('_');
    }
  }

  return (hiddenWord = arr.join(''));
};

const checkWin = (displayWord) => {
  if (displayWord.innerHTML === word) {
    playerWins = true;
  } else {
    playerWins = false;
  }

  return playerWins;
};

const renderVictoryScreen = () => {
  app.innerHTML = `
  <h1 class="victory">VICTORY!</h1>
  <div class="reveal-word-container">
    <span>The word was:</span>
    <h3 class="reveal-word"></h3>
  </div>
  <button class="reset-btn">PLAY AGAIN</button>
  `;

  const revealWord = document.querySelector('.reveal-word');
  const resetBtn = document.querySelector('.reset-btn');

  revealWord.textContent = word;

  resetBtn.addEventListener('click', () => {
    resetAll();
    selectDifficulty();
  });
};

const renderLosingScreen = () => {
  app.innerHTML = `
  <h1 class="game-over">GAME OVER!</h1>
  <div class="reveal-word-container">
    <span>The word was:</span>
    <h3 class="reveal-word"></h3>
  </div>
  <button class="reset-btn">PLAY AGAIN</button>
  `;

  const revealWord = document.querySelector('.reveal-word');
  const resetBtn = document.querySelector('.reset-btn');

  revealWord.textContent = word;

  resetBtn.addEventListener('click', () => {
    resetAll();
    selectDifficulty();
  });
};

const resetAll = () => {
  difficulty = null;
  word = null;
  clue = null;
  fails = 0;
  playerWins = false;
  correctLetters = [];
  incorrectLetters = [];
};

const runGame = () => {
  getRandomWord();
  renderGameUI();

  // DOM OBJECTS
  const letterBtn = document.querySelectorAll('.letter-button');
  const displayWord = document.querySelector('.display-word');
  const displayClue = document.querySelector('.display-clue');
  const statsDifficulty = document.querySelector('.stats-difficulty');
  const statsChances = document.querySelector('.stats-chances');

  displayWord.innerHTML = UpdateDisplayWord();
  displayClue.innerHTML = clue;
  statsDifficulty.innerHTML = displayDifficulty();
  statsChances.innerHTML = updateChances();

  // EVENT LISTENERS
  letterBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      checkCorrectness(e);
      updateButtonState(button);
      displayWord.innerHTML = UpdateDisplayWord();
      statsChances.innerHTML = updateChances();
      checkWin(displayWord);
      if (playerWins === true) {
        renderVictoryScreen();
      } else if (fails === 5) {
        renderLosingScreen();
      }
    });
  });
};

const renderSelectDifficulty = () => {
  app.innerHTML = `
  <div class="difficulty-screen">
    <h1 class="word-guess">Word Guess!</h1>
    <p class="difficulty-title">Select difficulty</p>
    <div class="difficulty-btn-container">
      <button class="difficulty-btn" value="0">EASY</button>
      <button class="difficulty-btn" value="1">MEDIUM</button>
      <button class="difficulty-btn" value="2">HARD</button>
    </div>
  </div>
  `;
};

const selectDifficulty = () => {
  renderSelectDifficulty();

  // VARIABLES
  const difficultyBtn = document.querySelectorAll('.difficulty-btn');

  // EVENT LISTENERS
  difficultyBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      setDifficulty(e);
      runGame();
    });
  });
};

const setDifficulty = (e) => {
  return (difficulty = e.target.value);
};

// Initialize Game
selectDifficulty();
