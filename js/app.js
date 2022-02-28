// buttons, message, etc. in DOM

const header = document.querySelector("#header")
const message = document.querySelector("#message")
const buttonDiv = document.querySelector("#button-div")
const containerDiv = document.querySelector("#container")
const buttons = document.querySelector("btn btn-secondary")
const button1 = document.querySelector("#button1")
const button3 = document.createElement("button")
const button4 = document.createElement("button")
const button5 = document.createElement("button")
const button6 = document.createElement("button")
const button7 = document.createElement("button")
const button8 = document.createElement("button")
const button9 = document.createElement("button")
const button10 = document.createElement("button")
const button11 = document.createElement("button")
const button12 = document.createElement("button")
const button13 = document.createElement("button")
const button14 = document.createElement("button")
const button15 = document.createElement("button")
const button16 = document.createElement("button")
const button17 = document.createElement("button")
const button18 = document.createElement("button")
const button19 = document.createElement("button")
const button20 = document.createElement("button")
const button21 = document.createElement("button")

// quests

const beginQuest = () => {
    message.innerText = "Choose your Path!"
    button1.addEventListener("click", goToQuest1)

}

const goToQuest1 = () => {
    message.innerText = "You arrive at a tavern, a person approaches you and challenges you to a tavern brawl, what do you do?"
    buttonDiv.removeChild(button1)
    buttonDiv.appendChild(button3)
    buttonDiv.appendChild(button4)
    button3.innerText = "Accept"
    button4.innerText = "Deny"
    button3.className = "btn btn-secondary"
    button4.className = "btn btn-secondary"
    button3.addEventListener("click", goToQuest2)
    button4.addEventListener("click", goToQuest15)

}

const goToQuest2 = () => {
    message.innerText = "You accepted the fight, how do you fight?"
    buttonDiv.removeChild(button3)
    buttonDiv.appendChild(button5)
    buttonDiv.removeChild(button4)
    buttonDiv.appendChild(button6)
    button5.innerText = "Fists"
    button6.innerText = "Sword"
    button5.className = "btn btn-secondary"
    button6.className = "btn btn-secondary"
    button5.addEventListener("click", goToQuest3)
    button6.addEventListener("click", goToQuest12)

}

const goToQuest3 = () => {
    message.innerText = "The fight begins, how do you approach the fight?"
    buttonDiv.removeChild(button5)
    buttonDiv.removeChild(button6)
    buttonDiv.appendChild(button7)
    buttonDiv.appendChild(button8)
    button7.innerText = "Tactical"
    button8.innerText = "Spontaneous"
    button7.className = "btn btn-secondary"
    button8.className = "btn btn-secondary"
    button7.addEventListener("click", goToQuest4)
    button8.addEventListener("click", goToQuest7)

}

const goToQuest4 = () => {
    message.innerText = "You are tactical, you get the upper hand and dodge the first attack, do you:"
    buttonDiv.removeChild(button7)
    buttonDiv.removeChild(button8)
    buttonDiv.appendChild(button9)
    buttonDiv.appendChild(button10)
    button9.innerText = "Attack Again"
    button10.innerText = "Stay Back"
    button9.className = "btn btn-secondary"
    button10.className = "btn btn-secondary"
    button9.addEventListener("click", goToQuest5)
    button10.addEventListener("click", goToQuest6)

}

const goToQuest5 = () => {
    header.innerHTML = "You Lost"
    message.innerText = "You have gotten injured:"
    buttonDiv.removeChild(button9)
    buttonDiv.removeChild(button10)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest6 = () => {
    header.innerHTML = "You Won"
    message.innerText = "You stayed back and waited for your moment to strike:"
    buttonDiv.removeChild(button9)
    buttonDiv.removeChild(button10)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest7 = () => {
    message.innerText = "You rush in, using your instincts and get hit. Do you:"
    buttonDiv.removeChild(button7)
    buttonDiv.removeChild(button8)
    buttonDiv.appendChild(button12)
    buttonDiv.appendChild(button13)
    button12.innerText = "Attack"
    button13.innerText = "Stay Back"
    button12.className = "btn btn-secondary"
    button13.className = "btn btn-secondary"
    button12.addEventListener("click", goToQuest8)
    button13.addEventListener("click", goToQuest9)

}

const goToQuest8 = () => {
    header.innerHTML = "You Lost"
    message.innerText = "You have gotten injured:"
    buttonDiv.removeChild(button12)
    buttonDiv.removeChild(button13)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest9 = () => {
    message.innerText = "You stay back and get your bearings. Do you:"
    buttonDiv.removeChild(button12)
    buttonDiv.removeChild(button13)
    buttonDiv.appendChild(button14)
    buttonDiv.appendChild(button15)
    button14.innerText = "Attack"
    button15.innerText = "Stay Back Again"
    button14.className = "btn btn-secondary"
    button15.className = "btn btn-secondary"
    button14.addEventListener("click", goToQuest10)
    button15.addEventListener("click", goToQuest11)

}

const goToQuest10 = () => {
    header.innerHTML = "You Won"
    message.innerText = "You attacked and defeated the challenger:"
    buttonDiv.removeChild(button14)
    buttonDiv.removeChild(button15)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest11 = () => {
    header.innerHTML = "You Lost"
    message.innerText = "You waited too long and got injured:"
    buttonDiv.removeChild(button14)
    buttonDiv.removeChild(button15)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest12 = () => {
    message.innerText = "You take out your sword, and the bartender steps in. Do you:"
    buttonDiv.removeChild(button5)
    buttonDiv.removeChild(button6)
    buttonDiv.appendChild(button16)
    buttonDiv.appendChild(button17)
    button16.innerText = "Continue the Fight"
    button17.innerText = "Stop"
    button16.className = "btn btn-secondary"
    button17.className = "btn btn-secondary"
    button16.addEventListener("click", goToQuest13)
    button17.addEventListener("click", goToQuest14)

}

const goToQuest13 = () => {
    header.innerHTML = "You Lost"
    message.innerText = "You have chosen to continue the fight - You injure yourself and get kicked out of the tavern:"
    buttonDiv.removeChild(button16)
    buttonDiv.removeChild(button17)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest14 = () => {
    header.innerHTML = "You Won?"
    message.innerText = "You have chosen to stop the fightand don't get injured:",
    buttonDiv.removeChild(button16)
    buttonDiv.removeChild(button17)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest15 = () => {
    message.innerText = "You have denied to fight, but the challenger attempts to convince you. Do you:"
    buttonDiv.appendChild(button18)
    buttonDiv.removeChild(button3)
    buttonDiv.appendChild(button19)
    buttonDiv.removeChild(button4)
    button18.innerText = "Give In"
    button19.innerText = "Still Refuse"
    button18.className = "btn btn-secondary"
    button19.className = "btn btn-secondary"
    button18.addEventListener("click", restartGame)
    button19.addEventListener("click", goToQuest16)
}

const goToQuest16 = () => {
    message.innerText = "You still refuse, but the challenger attempts to heckle you. Do you:"
    buttonDiv.appendChild(button20)
    buttonDiv.removeChild(button18)
    buttonDiv.appendChild(button21)
    buttonDiv.removeChild(button19)
    button20.innerText = "Ignore"
    button21.innerText = "Defend Yourself"
    button20.className = "btn btn-secondary"
    button21.className = "btn btn-secondary"
    button20.addEventListener("click", goToQuest17)
    button21.addEventListener("click", goToQuest18)

}

const goToQuest17 = () => {
    header.innerHTML = "You didn't Lose or Win"
    message.innerText = "You ignored the challenger and you leave the tavern:"
    buttonDiv.removeChild(button20)
    buttonDiv.removeChild(button21)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const goToQuest18 = () => {
    header.innerHTML = "You Lost"
    message.innerText = "You defend yourself, you both get kicked out and you get injured:"
    buttonDiv.removeChild(button20)
    buttonDiv.removeChild(button21)
    buttonDiv.appendChild(button11)
    button11.innerText = "Try Again!"
    button11.className = "btn btn-secondary"
    button11.addEventListener("click", resetGame)

}

const resetGame = () => {
    header.innerHTML = "<br>Tavern</br>Brawl"
    message.innerText = "Choose your Path!"
    buttonDiv.removeChild(button11)
    buttonDiv.appendChild(button1)
    button1.addEventListener("click", goToQuest1)

}

const restartGame = () => {
    message.innerText = "You have accepted the fight reluctantly, how do you fight?"
    buttonDiv.removeChild(button18)
    buttonDiv.appendChild(button5)
    buttonDiv.removeChild(button19)
    buttonDiv.appendChild(button6)
    button5.innerText = "Fists"
    button6.innerText = "Sword"
    button5.className = "btn btn-secondary"
    button6.className = "btn btn-secondary"
    button5.addEventListener("click", goToQuest3)
    button6.addEventListener("click", goToQuest12)

}

// DOM content

document.addEventListener("DOMContentLoaded", () => {  
    beginQuest()

})