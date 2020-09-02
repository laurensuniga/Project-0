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
        cssClass: "co3"
    },
    {
        suit: "clubs",
        rank: 4,
        cssClass:"c04"
    },
    {
        suit: "clubs",
        rank: 5,
        cssClass:"c05"
    },
    {
        suit: "clubs",
        rank: 6,
        cssClass:"c06"
    },
    {
        suit: "clubs",
        rank: 7,
        cssClass:"c07"
    },
    {
        suit: "clubs",
        rank: 8,
        cssClass:"c08"
    },
    {
        suit: "clubs",
        rank: 9,
        cssClass:"c09"
    },
    {
        suit: "clubs",
        rank: 10,
        cssClass:"c10"
    },
    {
        suit: "clubs",
        rank: "Jack",
        cssClass:"cJ"
    },
    {
        suit: "clubs",
        rank: "Queen",
        cssClass:"cQ"
    },
    {
        suit: "clubs",
        rank: "King",
        cssClass:"cK"
    },
    {
        suit: "clubs",
        rank: "Ace",
        cssClass:"cA"
    },
    {
        suit: "spades",
        rank: 2,
        cssClass:"s02"
    },
    {
        suit: "spades",
        rank: 3,
        cssClass:"s03"
    },
    {
        suit: "spades",
        rank: 4,
        cssClass:"s04"
    },
    {
        suit: "spades",
        rank: 5,
        cssClass:"s05"
    },
    {
        suit: "spades",
        rank: 6,
        cssClass:"s06"
    },
    {
        suit: "spades",
        rank: 7,
        cssClass:"s07"
    },
    {
        suit: "spades",
        rank: 8,
        cssClass:"s08"
    },
    {
        suit: "spades",
        rank: 9,
        cssClass:"s09"
    },
    {
        suit: "spades",
        rank: 10,
        cssClass:"s10"
    },
    {
        suit: "spades",
        rank: "Jack",
        cssClass:"sJ"
    },
    {
        suit: "spades",
        rank: "Queen",
        cssClass:"sQ"
    },
    {
        suit: "spades",
        rank: "King",
        cssClass:"sK"
    },
    {
        suit: "spades",
        rank: "Ace",
        cssClass:"sA"
    },
    {
        suit: "hearts",
        rank: 2,
        cssClass:"h02"
    },
    {
        suit: "hearts",
        rank: 3,
        cssClass:"h03"
    },
    {
        suit: "hearts",
        rank: 4,
        cssClass:"h04"
    },
    {
        suit: "hearts",
        rank: 5,
        cssClass:"h05"
    },
    {
        suit: "hearts",
        rank: 6,
        cssClass:"h06"
    },
    {
        suit: "hearts",
        rank: 7,
        cssClass:"h07"
    },
    {
        suit: "hearts",
        rank: 8,
        cssClass:"h08"
    },
    {
        suit: "hearts",
        rank: 9,
        cssClass:"h09"
    },
    {
        suit: "hearts",
        rank: 10,
        cssClass:"h10"
    },
    {
        suit: "hearts",
        rank: "Jack",
        cssClass:"hJ"
    },
    {
        suit: "hearts",
        rank: "Queen",
        cssClass:"hQ"
    },
    {
        suit: "hearts",
        rank: "King",
        cssClass:"hK"
    },
    {
        suit: "hearts",
        rank: "Ace",
        cssClass:"hA"
    },
    {
        suit: "diamonds",
        rank: 2,
        cssClass:"d02"
    },
    {
        suit: "diamonds",
        rank: 3,
        cssClass:"d03"
    },
    {
        suit: "diamonds",
        rank: 4,
        cssClass:"d04"
    },
    {
        suit: "diamonds",
        rank: 5,
        cssClass:"d05"
    },
    {
        suit: "diamonds",
        rank: 6,
        cssClass:"d06"
    },
    {
        suit: "diamonds",
        rank: 7,
        cssClass:"d07"
    },
    {
        suit: "diamonds",
        rank: 8,
        cssClass:"d08"
    },
    {
        suit: "diamonds",
        rank: 9,
        cssClass:"d09"
    },
    {
        suit: "diamonds",
        rank: 10,
        cssClass:"d10"
    },
    {
        suit: "diamonds",
        rank: "Jack",
        cssClass:"dJ"
    },
    {
        suit: "diamonds",
        rank: "Queen",
        cssClass:"dQ"
    },
    {
        suit: "diamonds",
        rank: "King",
        cssClass:"dK"
    },
    {
        suit: "diamonds",
        rank: "Ace",
        cssClass:"dA"
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
          const playerOneCard = player1.splice(0, 1)
          console.log(playerOneCard)
          const playerOneCardPlayed = document.querySelector(".card2")
          playerOneCardPlayed.classList.add("card", playerOneCard[0].cssClass)
      }

    }
    const deck = new Deck()
    

    /**
     * Randomizes the internal cards array using the shuffle fisher yates shuffle
     *  @author  Mike Bostock  https://bost.ocks.org/mike/shuffle/
     */

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




class player {

}

class computer {

}

$("#start").on("click",() => dealCards(oldCards))