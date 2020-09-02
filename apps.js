// create and array for all the cards
// 52 different cards


// Deck
// create a deck of cards- generates deck from the array of cards
// shuffle
// draws a card from the draw pile
// discard - removes a card and puts it in the card played pile


// Player
// draws a card


// Game
// start function
// compairs card to choose winner
// a war/battle funtion
// a deal cards function

let cards = []
let player1 = []
let player2 = []

const oldCards = [
    {
        suit: "clubs",
        rank: 2,
        cssClass: "c02"
    },
    {
        suit: "clubs",
        rank: 3,
    },
    {
        suit: "clubs",
        rank: 4,
    },
    {
        suit: "clubs",
        rank: 5,
    },
    {
        suit: "clubs",
        rank: 6,
    },
    {
        suit: "clubs",
        rank: 7,
    },
    {
        suit: "clubs",
        rank: 8,
    },
    {
        suit: "clubs",
        rank: 9,
    },
    {
        suit: "clubs",
        rank: 10,
    },
    {
        suit: "clubs",
        rank: "Jack",
    },
    {
        suit: "clubs",
        rank: "Queen",
    },
    {
        suit: "clubs",
        rank: "King",
    },
    {
        suit: "clubs",
        rank: "Ace",
    },
    {
        suit: "spades",
        rank: 2,
    },
    {
        suit: "spades",
        rank: 3,
    },
    {
        suit: "spades",
        rank: 4,
    },
    {
        suit: "spades",
        rank: 5,
    },
    {
        suit: "spades",
        rank: 6,
    },
    {
        suit: "spades",
        rank: 7,
    },
    {
        suit: "spades",
        rank: 8,
    },
    {
        suit: "spades",
        rank: 9,
    },
    {
        suit: "spades",
        rank: 10,
    },
    {
        suit: "spades",
        rank: "Jack",
    },
    {
        suit: "spades",
        rank: "Queen",
    },
    {
        suit: "spades",
        rank: "King",
    },
    {
        suit: "spades",
        rank: "Ace",
    },
    {
        suit: "hearts",
        rank: 2,
    },
    {
        suit: "hearts",
        rank: 3,
    },
    {
        suit: "hearts",
        rank: 4,
    },
    {
        suit: "hearts",
        rank: 5,
    },
    {
        suit: "hearts",
        rank: 6,
    },
    {
        suit: "hearts",
        rank: 7,
    },
    {
        suit: "hearts",
        rank: 8,
    },
    {
        suit: "hearts",
        rank: 9,
    },
    {
        suit: "hearts",
        rank: 10,
    },
    {
        suit: "hearts",
        rank: "Jack",
    },
    {
        suit: "hearts",
        rank: "Queen",
    },
    {
        suit: "hearts",
        rank: "King",
    },
    {
        suit: "hearts",
        rank: "Ace",
    },
    {
        suit: "diamonds",
        rank: 2,
    },
    {
        suit: "diamonds",
        rank: 3,
    },
    {
        suit: "diamonds",
        rank: 4,
    },
    {
        suit: "diamonds",
        rank: 5,
    },
    {
        suit: "diamonds",
        rank: 6,
    },
    {
        suit: "diamonds",
        rank: 7,
    },
    {
        suit: "diamonds",
        rank: 8,
    },
    {
        suit: "diamonds",
        rank: 9,
    },
    {
        suit: "diamonds",
        rank: 10,
    },
    {
        suit: "diamonds",
        rank: "Jack",
    },
    {
        suit: "diamonds",
        rank: "Queen",
    },
    {
        suit: "diamonds",
        rank: "King",
    },
    {
        suit: "diamonds",
        rank: "Ace",
    },
]


class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}


class Deck {
    constructor() {
        this.cards = [];
        this.discardPile = [];
    }

    generateDeck(cardArr) {
        cards = []
        const suits = ["clubs", "spades", "hearts", "diamonds"]
        suits.forEach((suit) => {
          for (let i = 2; i <= 14; i++){
              let cssClass = ""
            if(i<=9){
            cssClass = `${suit.charAt(0)}0${i}`
            }else if (i===10){
                cssClass = `${suit.charAt(0)}${i}`
            }else if (i===11){
                  cssClass = `${suit.charAt(0)}J`
              }else if (i===12){
                cssClass = `${suit.charAt(0)}Q`
            }else if (i===13){
                cssClass = `${suit.charAt(0)}K`
            }else if (i===14){
                cssClass = `${suit.charAt(0)}A`
            }
            const card = {
                suit: suit,
                rank: i,
                cssClass: cssClass,
            }
            cards.push(card)
          }
        });
      }
      flipCards(){
          const playerOneCard = cards.splice(0, 1)
          console.log(playerOneCard)
          const playerOneCardPlayed = document.querySelector(".card2")
          playerOneCardPlayed.classList.add("card", playerOneCard[0].cssClass)
      }

    }
    const deck = new Deck()
    
    const shuffle = function(arr) {
        let length = arr.length;
        let element;
        let index;

        while (length) {
          index = Math.floor(Math.random() * length--);
          element = arr[length];
          arr[length] = arr[index];
          arr[index] = element;
        }
      }

      const dealCards = function(arr) {
          shuffle(arr)
          const middle = Math.floor( arr.length / 2 );
          const left = arr.slice( 0, middle );
          const right = arr.slice( middle );
          player1.push(left)
          player2.push(right)
          console.log("player1", player1)
          console.log("player2", player2)
      }



/**
     * Randomizes the internal cards array using the shuffle fisher yates shuffle
     *  @author  Mike Bostock  https://bost.ocks.org/mike/shuffle/
     */

class player {

}

class computer {

}

$("#start").on("click",() => dealCards(oldCards))