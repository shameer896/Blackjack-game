let isAlive = false
let blackJack = false
let cards = []
let sum = 0
let message =""

let cardel=document.querySelector("#card-el")
let messageel=document.querySelector("#message-el")
let sumel=document.querySelector("#sum-el")

function randomNumber()
{
    let n = Math.floor(Math.random()*12) + 1
    if(n > 10)
    {
        return 10
    }
    else if(n === 1)
    {
        return 11
    }
    else
    {
        return n
    }
}

function renderGame()
{
    cardel.textContent="Cards: "
    for(let i=0;i<cards.length;i+=1)
    {
        cardel.textContent += cards[i] + " "
    }
    sumel.textContent="Sum: "+ sum
    if(sum < 21)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        message="You have got Blackjack!"
        blackJack=true
    }
    else
    {
        message="You're out of the game!"
        isAlive=false
    }
    messageel.textContent=message
}

function startgame()
{
    isAlive = true
    blackJack=false
    let card1=randomNumber()
    let card2=randomNumber()
    cards = [card1,card2]
    sum = card1 + card2
    renderGame()
}

function newCard()
{
    if(isAlive == true && blackJack == false)
    {
        let card=randomNumber()
        sum+=card
        cards.push(card)
        renderGame()
    }
    else
    {
        messageel.textContent="Start a new game!!"
    }

}