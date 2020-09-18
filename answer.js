
var cards = []
var firstHalf = []
var secondHalf = []
var newShuffle = []
var deck = 1
var bottom = true
var sideByside = true
var shuffleTimes = 0

//creating the deck all 52
for(var i=1;i<=52;i+=1){
  cards.push(i)
}
console.log(cards)

//spliting the deck into halfs
function split(){
  
  for(var i=0;i<(cards.length/2);i+= 1){
                                  if(cards[i] != undefined){
                                    firstHalf.push(cards[i])
                                  }
                                    console.log(firstHalf)
                                  }
  for(var i=(cards.length/2);i<cards.length;i+=1){
    if(cards[i] != undefined){
      secondHalf.push(cards[i])
      console.log(secondHalf)
    }
    
  }
}
//shuffling the halfs into a interleaving pattern
function shuffle(){
  
  do{
    console.log("test inside shuffle do")
    if(deck===1){
      console.log(firstHalf)
                if(firstHalf.length!= 0){
                  firstHalf.pop()
                  console.log(firstHalf)
                  console.log(newshuffle)
                  console.log("inside undefined")
                  deck=1
                }else{
                  console.log("inside first Half")
                  newShuffle.unshift(firstHalf.pop())
                  deck = 2
                  
                }
               }else if(deck===2){
                 console.log("inside deck 2")
                                if(secondHalf[secondHalf.length-1] === undefined){
                                  secondHalf.pop()
                                  deck=2
                                }else{
                                  newShuffle.unshift(secondHalf.pop())
                                  deck=1
                                }
                                
                                
                }
                
    }while(newShuffle.length < 53)
  cards = newShuffle
  firstHalf = []
  secondHalf = []
  
  console.log(cards)
  
  }

// finding the position of a choosen card
function position(choosen){
    console.log(choosen + "position" + cards.indexOf(choosen))
  }

  // finding if the desired card is on the bottom
function bottomCard(desired){
    if(desired === cards[51]){
        console.log(desired + "is bottom card")
        console.log(shuffleTimes + "shuffles")
    }
}
// seeing if two cards are next to each other
function togther(firstCard,secondCard){
    if(cards.indexOf(firstCard)-cards.indexOf(secondCard)=== 1 || cards.indexOf(firstCard)-cards.indexOf(secondCard)=== -1){
        console.log(`${firstCard}next to ${secondCard}`)
        
        
    }

}

//the inShuffle consisting one deck being split and shuffled once 
function inShuffle(){
 split()
 shuffle()
    
}

//answers to the questions
console.log("answers")

console.log("WHAT IS THE POSITION OF THE FIRST CARD AFTER SEVEN SHUFFLES")

do{
    inShuffle()
    shuffleTimes++
}while(shuffleTimes <=7)
position(1)

console.log("HOW MANY SHUFFLES TILL THE TOP CARD BECOMES THE BOTTOM CARD")

cards = []
firstHalf = []
secondHalf = []
newShuffle = []
deck = 1
shuffleTimes = 0

for(var i=1;i<=52;i+= 1){
  cards.push(i)
}

do{
    inShuffle()
    shuffleTimes++
    bottomCard(1)
    if(1 === cards[53]){
      bottom = false
    }
   
}while(bottom)




console.log("WHEN DO THE FIRST AND LAST CARDS TOUCH")

cards = []
firstHalf = []
secondHalf = []
newShuffle = []
deck = 1
shuffleTimes = 0

for(var i=1;i<=52;i+=1){
  cards.push(i)
}
console.log(cards)





