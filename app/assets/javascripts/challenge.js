let scores, roundScore, activePlayer, gamePlaying;


var lastDice;

init();
// // dice = Math.floor(Math.random() * 6 ) + 1;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
//
// const x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6 ) + 1;
    const diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if (dice === 6 && lastDice === 6 ) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = 0;
      nextPlayer();
    } else if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    if (scores[activePlayer] >= 10) {
      document.querySelector("#name-" + activePlayer).textContent = "winner!"
      document.querySelector('.dice').style.display = "none";
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = "none";
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById("name-0").textContent = "Player 1"
  document.getElementById("name-1").textContent = "Player 2"
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}