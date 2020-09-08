
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

function shuffle1(){
  do{
    if(deck=1){
                newShuffle.push(firstHalf[0])
                firstHalf.shift()
                deck=2
               }else if(deck=2){
                                newShuffle.push(secondHalf[0])
                                secondHalf.shift()
                                deck=1
                }
    }while(newShuffle.length != cards.length)
   
  cards = newShuffle
  
}
}

function position(choosen){
  for(i=0;i>cards.length;i++){
    if(choosen===cards[i])
  console.log(choosen + "position" + i)
  }
}
function bottomCard(desired){
    if(desired === cards[-1]){
        console.log(desired + "is bottom card")
        bottom = false
    }
    bottom = true
}

function togther(one,two){
    if(cards.indexOf(one)-cards.indexOf(two)=== 1 || cards.indexOf(one)-cards.indexOf(two)=== -1){
        console.log("next to each other")
        sideByside = false
    }
        sideByside = true
}

function inShuffle(){
    split()
    shuffle1()
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
    bottomCard
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
    togther()

}while(sideByside)