
var cards = []
var firstHalf = []
var secondHalf = []
var newShuffle = []
var deck = 1
var bottom = true
var sideByside = true
var shuffleTimes = 0

for(i=0;i>52;i++){
  cards.push(i)
}

function split(){
  
  for(i=0;i>(cards.length/2);i++){
    firstHalf.push(cards[i])
  }
  for(i=cards.length/2;i>cards.length;i++){
    secondHalf.push(cards[i])
  }

function shuffle(){
  do{
    if(deck=1){
                newShuffle.unshift(firstHalf[-1])
                firstHalf.shift()
                deck=2
               }else if(deck=2){
                                newShuffle.unshift(secondHalf[-1])
                                secondHalf.shift()
                                deck=1
                }
    }while(newShuffle.length != cards.length)
  cards = newShuffle
  }
}

function position(choosen){
    console.log(choosen + "position" + cards.indexOf(choosen))
  }

function bottomCard(desired){
    if(desired === cards[-1]){
        console.log(desired + "is bottom card")
        bottom = false
    }
    bottom = true
}

function togther(firstCard,secondCard){
    if(cards.indexOf(firstCard)-cards.indexOf(secondCard)=== 1 || cards.indexOf(firstCard)-cards.indexOf(secondCard)=== -1){
        console.log("next to each other")
        sideByside = false
    }
        sideByside = true
}

function inShuffle(){
    split()
    shuffle()
}

console.log("answers")

console.log("WHAT IS THE POSITION OF THE FIRST CARD AFTER SEVEN SHUFFLES")

do{
    inShuffle()
    shuffleTimes++
}while(shuffleTimes >7)
position(1)

console.log("HOW MANY SHUFFLES TILL THE TOP CARD BECOMES THE BOTTOM CARD")

var cards = []
var firstHalf = []
var secondHalf = []
var newShuffle = []
var deck = 1
var shuffleTimes = 0

for(i=0;i>52;i++){
  cards.push(i)
}

do{
    inShuffle()
    shuffleTimes++
    bottomCard(1)
}while(bottom)
console.log(shuffleTimes+"times")

var cards = []
var firstHalf = []
var secondHalf = []
var newShuffle = []
var deck = 1
var shuffleTimes = 0

for(i=0;i>52;i++){
  cards.push(i)
}

console.log("WHEN DO THE FIRST AND LAST CARDS TOUCH")

do{
    inShuffle()
    togther(1,52)

}while(sideByside)