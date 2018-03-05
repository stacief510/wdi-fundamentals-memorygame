console.log ("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage:"../images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "../images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "../images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "../images/king-of-diamonds.png"
},
];

var cardsInPlay = [];

var userScore = 0;
console.log(userScore);

var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			//userScore += 1;
			//var score = getElementById('score').innerHTML(userScore);
		} else {
			alert("Sorry, try again.");
		}
	}
	};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("Player flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	this.setAttribute('src', cards[cardId].cardImage);
		checkForMatch();
 };

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "../images/back.png");
		cardElement.setAttribute('data-id', i);

		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);
}
};

var resetBoard = function(){
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', '../images/back.png');
	cardElement.setAttribute('data-id', i);

	var resetButton = document.getElementsByTagName('button');
	resetButton.addEventListener('click', resetBoard);
}
};


createBoard();
