// --- DOM REFERENCE ---------------------------------------------------------------------------------------------------------------------------------------

const header = document.querySelector("#header")
const message = document.querySelector("#message")
const buttonDiv = document.querySelector("#button-div")
const containerDiv = document.querySelector("#container")
const messageDiv = document.querySelector("#messagediv")
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
const questBackground0 = url("/images/tavern.jpeg")
const questBackground1 = url("/images/tavernbarrel.jpeg")

// change background on click

const changeBackground = (questBackground) => {
    document.body.style.backgroundImage = questBackground
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

}

// --- TAVERN BRAWL QUEST CHOICES ----------------------------------------------------------------------------------------------------------------------------

// --- BEGIN QUEST - the beginning of the game to display text and a button prompt to begin ------------------------------------------------------------------

const beginQuest = () => {
    // a message is displayed prompting the user to begin
    message.innerText = "Choose your Path!"
<<<<<<< HEAD
    button1.addEventListener("click", goToQuest1, changeBackground(questBackground1))
=======
    // when button1 is clicked, the game goes to option 1 of the quest
    button1.addEventListener("click", goToQuest1)

>>>>>>> 9dc688b98993ad05eb47d141a9f549f8cdc904be
}

/// --- QUEST OPTION 1 - the first choice of the "quest", prompting the user to accept or deny the tavern brawl fight -----------------------------------------

const goToQuest1 = () => {
    // display a message that prompts the user
    message.innerText = "You arrive at a tavern, a person approaches you and challenges you to a tavern brawl, what do you do?"
    // removes button 1 from beginQuest
    buttonDiv.removeChild(button1)
    // adds buttons 3
    buttonDiv.appendChild(button3)
    // adds button 4
    buttonDiv.appendChild(button4)
    // button text of buttons 3 and 4
    button3.innerText = "Accept"
    button4.innerText = "Deny"
    // assigns the class to the newly created buttons for cohesive styling
    button3.className = "btn btn-secondary"
    button4.className = "btn btn-secondary"
    // if button 3 is pressed, the user goes to option 2 of the quest
    button3.addEventListener("click", goToQuest2)
    // if button 4 is pressed, the user goes to option 15 of the  quest
    button4.addEventListener("click", goToQuest15)

}

// --- QUEST OPTION 2 - possible choice of the quest, asking the user whether they use their fists or their sword to fight --------------------------------------

const goToQuest2 = () => {
    // display a message that prompts the user
    message.innerText = "You accepted the fight, how do you fight?"
    // removes button3 from goToQuest1
    buttonDiv.removeChild(button3)
    // adds button5 
    buttonDiv.appendChild(button5)
    // removes button4 from goToQuest1
    buttonDiv.removeChild(button4)
    // adds button6
    buttonDiv.appendChild(button6)
    // button text of button5 and button6
    button5.innerText = "Fists"
    button6.innerText = "Sword"
    // assigns the class to the newly created buttons for cohesive styling
    button5.className = "btn btn-secondary"
    button6.className = "btn btn-secondary"
    // if the user clicks on button5, the user goes to option 3 of the quest
    button5.addEventListener("click", goToQuest3)
    // if the user clicks on button6, the user goes to option 12 of the quest
    button6.addEventListener("click", goToQuest12)

}

// --- QUEST OPTION 3 - possible choice of the quest, asking the user whether they are tactical or spontaneous in the fight -------------------------------------

const goToQuest3 = () => {
    // display a message that prompts the user
    message.innerText = "The fight begins, how do you approach the fight?"
    // removes button5 from goToQuest2
    buttonDiv.removeChild(button5)
    // removes button6 from goToQuest2
    buttonDiv.removeChild(button6)
    // adds button7
    buttonDiv.appendChild(button7)
    // adds button8
    buttonDiv.appendChild(button8)
    // button text of button7 and button8
    button7.innerText = "Tactical"
    button8.innerText = "Spontaneous"
    // assigns the class to the newly created buttons for cohesive styling
    button7.className = "btn btn-secondary"
    button8.className = "btn btn-secondary"
    // if the user clicks on button7, the user goes to option 4 of the quest
    button7.addEventListener("click", goToQuest4)
    // if the user clicks on button8, the user goes option 7 of the quest
    button8.addEventListener("click", goToQuest7)

}

// --- QUEST OPTION 4 - possible choice of the quest, asking the user how they fight further -------------------------------------------------------------------

const goToQuest4 = () => {
    // display a message that prompts the user
    message.innerText = "You are tactical, you get the upper hand and dodge the first attack, do you:"
    // removes button7 from goToQuest3
    buttonDiv.removeChild(button7)
    // removes button8 from goToQuest3
    buttonDiv.removeChild(button8)
    // adds button 9 
    buttonDiv.appendChild(button9)
    // adds button 10 
    buttonDiv.appendChild(button10)
    // button text of button 9 and button 10
    button9.innerText = "Attack Again"
    button10.innerText = "Stay Back"
    // assigns the class to the newly created buttons for cohesive styling
    button9.className = "btn btn-secondary"
    button10.className = "btn btn-secondary"
    // if the user clicks on button9, the user goes to option 5 of the quest
    button9.addEventListener("click", goToQuest5)
    // if the user clicks on button10, the user goes option 6 of the quest
    button10.addEventListener("click", goToQuest6)

}

// --- QUEST OPTION 5 - possible outcome of the quest in which the user loses ------------------------------------------------------------------------------------

const goToQuest5 = () => {
    // changes the header to signify to the user that they have lost
    header.innerHTML = "You Lost"
    // displays a message telling the user how and why they lost
    message.innerText = "You have gotten injured:"
    // removes button9 from goToQuest4
    buttonDiv.removeChild(button9)
    // removes buttton10 from goToQuest4
    buttonDiv.removeChild(button10)
    // adds button11
    buttonDiv.appendChild(button11)
    // text of button11 
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 6 - possible outcome of the quest in which the user wins -------------------------------------------------------------------------------------

const goToQuest6 = () => {
    // changes the header to signify to the user that they have won
    header.innerHTML = "You Won"
    // displays a message telling the user how and why they won
    message.innerText = "You stayed back and waited for your moment to strike:"
    // removes button9 from goToQuest4
    buttonDiv.removeChild(button9)
    // removes button10 from goToQuest4
    buttonDiv.removeChild(button10)
    // adds button11
    buttonDiv.appendChild(button11)
    // text of button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 7 - possible choice of the quest if the user chooses to act spontaneously during the fight ---------------------------------------------------

const goToQuest7 = () => {
    // display a message that prompts the user
    message.innerText = "You rush in, using your instincts and get hit. Do you:"
    // removes button7 from goToQuest3
    buttonDiv.removeChild(button7)
    // removes button8 from goToQuest3
    buttonDiv.removeChild(button8)
    // adds button12
    buttonDiv.appendChild(button12)
    // adds button13
    buttonDiv.appendChild(button13)
    // text of button12 and button13
    button12.innerText = "Attack"
    button13.innerText = "Stay Back"
    // assigns the class to the newly created buttons for cohesive styling
    button12.className = "btn btn-secondary"
    button13.className = "btn btn-secondary"
    // if button12 is clicked, the user goes to quest option 8
    button12.addEventListener("click", goToQuest8)
    // if button13 is clicked, the user goes to quest option 9 
    button13.addEventListener("click", goToQuest9)

}

// --- QUEST OPTION 8 - possible outcome of the quest in which the user loses -----------------------------------------------------------------------------------

const goToQuest8 = () => {
    // changes the header to signify to the user that they have lost
    header.innerHTML = "You Lost"
    // displays a message telling the user how and why they lost
    message.innerText = "You have gotten injured:"
    // removes button12 from goToQuest7
    buttonDiv.removeChild(button12)
    // removes button13 from goToQuest7
    buttonDiv.removeChild(button13)
    // adds button11
    buttonDiv.appendChild(button11)
    // text of button 11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 9 - possible choice if the user chooses stay back during the fight ---------------------------------------------------------------------------

const goToQuest9 = () => {
    // display a message that prompts the user
    message.innerText = "You stay back and get your bearings. Do you:"
    // removes button12 from goToQuest7
    buttonDiv.removeChild(button12)
    // removes button13 from goToQuest7
    buttonDiv.removeChild(button13)
    // adds button14
    buttonDiv.appendChild(button14)
    // adds button15
    buttonDiv.appendChild(button15)
    // text of button14 and button15 
    button14.innerText = "Attack"
    button15.innerText = "Stay Back Again"
    // assigns the class to the newly created buttons for cohesive styling
    button14.className = "btn btn-secondary"
    button15.className = "btn btn-secondary"
    // if button14 is clicked, the user goes to quest option 10
    button14.addEventListener("click", goToQuest10)
    // if button15 is clicked, the user goes to quest option 11
    button15.addEventListener("click", goToQuest11)

}

// --- QUEST OPTION 10 - possible outcome in which the user wins -------------------------------------------------------------------------------------------------

const goToQuest10 = () => {
    // changes the header to signify to the user that they have won
    header.innerHTML = "You Won"
    // displays a message telling the user how and why they won
    message.innerText = "You attacked and defeated the challenger:"
    // removes button14 from goToQuest9
    buttonDiv.removeChild(button14)
    // removes button15 from goToQuest9
    buttonDiv.removeChild(button15)
    // adds button11
    buttonDiv.appendChild(button11)
    // text of button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created buttons for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 11 - possible outcome in which the user loses ------------------------------------------------------------------------------------------------- 

const goToQuest11 = () => {
    // changes the header to signify to the user that they have lost
    header.innerHTML = "You Lost"
    // displays a message telling the user how and why they lost
    message.innerText = "You waited too long and got injured:"
    // removes button14 from goToQuest9
    buttonDiv.removeChild(button14)
    // removes button15 from goToQuest9
    buttonDiv.removeChild(button15)
    // adds button11
    buttonDiv.appendChild(button11)
    // text of button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 12 - possible choice if the user chooses to take out their sword during the fight --------------------------------------------------------------

const goToQuest12 = () => {
    // display a message that prompts the user
    message.innerText = "You take out your sword, and the bartender steps in. Do you:"
    // removes button5 from goToQuest2
    buttonDiv.removeChild(button5)
    // removes button6 from goToQuest2
    buttonDiv.removeChild(button6)
    // adds button16
    buttonDiv.appendChild(button16)
    // adds button17
    buttonDiv.appendChild(button17)
    // text for button16 and button17
    button16.innerText = "Continue the Fight"
    button17.innerText = "Stop"
    // assigns the class to the newly created buttons for cohesive styling
    button16.className = "btn btn-secondary"
    button17.className = "btn btn-secondary"
    // if button16 is pressed, the user goes to quest option 13 
    button16.addEventListener("click", goToQuest13)
    // if button17 is pressed, the user goes to quest option 14 
    button17.addEventListener("click", goToQuest14)

}

// --- QUEST OPTION 13 - possible outcome in which the user loses ---------------------------------------------------------------------------------------------------

const goToQuest13 = () => {
    // changes the header to signify to the user that they have lost
    header.innerHTML = "You Lost"
    // displays a message telling the user how and why they lost
    message.innerText = "You have chosen to continue the fight - You injure yourself and get kicked out of the tavern:"
    // removes button16 from goToQuest12
    buttonDiv.removeChild(button16)
    // removes button17 from goToQuest12
    buttonDiv.removeChild(button17)
    // adds button11
    buttonDiv.appendChild(button11)
    // text for button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 14 - possible outcome in which the user wins -------------------------------------------------------------------------------------------------

const goToQuest14 = () => {
    // changes the header to signify to the user that they have won
    header.innerHTML = "You Won?"
    // displays a message telling the user how and why they won
    message.innerText = "You have chosen to stop the fightand don't get injured:",
    // removes button16 from goToQuest12
    buttonDiv.removeChild(button16)
    // removes button17 from goToQuest12
    buttonDiv.removeChild(button17)
    // adds button11
    buttonDiv.appendChild(button11)
    // text for button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 15 - possible choice if the user chooses to deny the fight -------------------------------------------------------------------------------------

const goToQuest15 = () => {
    // display a message that prompts the user
    message.innerText = "You have denied to fight, but the challenger attempts to convince you. Do you:"
    // adds button18
    buttonDiv.appendChild(button18)
    // removes button3 from goToQuest1
    buttonDiv.removeChild(button3)
    // adds button19
    buttonDiv.appendChild(button19)
    // removes button4 from goToQuest1
    buttonDiv.removeChild(button4)
    // text for button18 and button19 
    button18.innerText = "Give In"
    button19.innerText = "Still Refuse"
    // assigns the class to the newly created buttons for cohesive styling
    button18.className = "btn btn-secondary"
    button19.className = "btn btn-secondary"
    // if button18 is clicked, the user goes to restartGame
    button18.addEventListener("click", restartGame)
    // if button19 is clicked, the user goes to quest option 16 
    button19.addEventListener("click", goToQuest16)
}

// --- QUEST OPTION 16 - possible choice if the user still chooses to refuse the fight -------------------------------------------------------------------------------

const goToQuest16 = () => {
    // display a message that prompts the user
    message.innerText = "You still refuse, but the challenger attempts to heckle you. Do you:"
    // adds button20
    buttonDiv.appendChild(button20)
    // removes button18 from goToQuest15
    buttonDiv.removeChild(button18)
    // adds button 21
    buttonDiv.appendChild(button21)
    // removes button19 from goToQuest15
    buttonDiv.removeChild(button19)
    // text for button20 and button21
    button20.innerText = "Ignore"
    button21.innerText = "Defend Yourself"
    // assigns the class to the newly created buttons for cohesive styling
    button20.className = "btn btn-secondary"
    button21.className = "btn btn-secondary"
    // if button20 is clicked, the user goes to quest option 17 
    button20.addEventListener("click", goToQuest17)
    // if button21 is clicked, the user goes to quest option 18
    button21.addEventListener("click", goToQuest18)

}

// --- QUEST OPTION 17 - possible outcome in which the user neither wins or loses ---------------------------------------------------------------------------------

const goToQuest17 = () => {
    // changes the header to signify to the user that they didn't win or lose
    header.innerHTML = "You didn't Lose or Win"
    // displays a message telling the user how and why they didn't win or lose
    message.innerText = "You ignored the challenger and you leave the tavern:"
    // removes button20 from goToQuest16
    buttonDiv.removeChild(button20)
    // removes button21 from goToQuest16
    buttonDiv.removeChild(button21)
    // adds button11
    buttonDiv.appendChild(button11)
    // text for button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- QUEST OPTION 18 - - possible outcome in which the user loses --------------------------------------------------------------------------------------------------

const goToQuest18 = () => {
    // changes the header to signify to the user that they lost
    header.innerHTML = "You Lost"
    // displays a message telling the user how and why they lost
    message.innerText = "You defend yourself, you both get kicked out and you get injured:"
    // removes button20 from goToQuest16
    buttonDiv.removeChild(button20)
    // removes button21 from goToQuest16
    buttonDiv.removeChild(button21)
    // adds button11
    buttonDiv.appendChild(button11)
    // text for button11
    button11.innerText = "Try Again!"
    // assigns the class to the newly created button for cohesive styling
    button11.className = "btn btn-secondary"
    // when button11 is clicked, the user goes to resetGame
    button11.addEventListener("click", resetGame)

}

// --- RESET GAME - goes back to the beginning of the game from button11 (Try Again!) once a user has reached an end of the game and won or lost 

const resetGame = () => {
    // displays header text as presented at beginning of game
    header.innerHTML = "<br>Tavern</br>Brawl"
    // displays message as presented at beginning of game 
    message.innerText = "Choose your Path!"
    // removes button11
    buttonDiv.removeChild(button11)
    // adds button1
    buttonDiv.appendChild(button1)
    // when button1 is clicked, the user goes to quest option 1
    button1.addEventListener("click", goToQuest1)

}

// --- RESTART GAME - in Quest Option 15, the user may choose to accept to fight after denying it, which brings them back to the beginning

const restartGame = () => {
    // display a message that prompts the user, slightly similar to goToQuest2, but modified to reflect player choice
    message.innerText = "You have accepted the fight reluctantly, how do you fight?"
    // removes button18
    buttonDiv.removeChild(button18)
    // adds button5
    buttonDiv.appendChild(button5)
    // removes button19
    buttonDiv.removeChild(button19)
    // adds button6
    buttonDiv.appendChild(button6)
    // text of button5 and button6
    button5.innerText = "Fists"
    button6.innerText = "Sword"
    // assigns the class to the newly created buttons for cohesive styling
    button5.className = "btn btn-secondary"
    button6.className = "btn btn-secondary"
    // if button5 is clicked, the user goes to quest option 3 
    button5.addEventListener("click", goToQuest3)
    // if button6 is clicked, the user goes to quest option 12 
    button6.addEventListener("click", goToQuest12)

}

// --- DOM EVENT LISTENER - called when page loads ----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {  
    // when the page loads, the beginQuest function is initiated 
    beginQuest()
})

// --- OLD CODE (TO SAVE) -----------------------------------------------------------------------------------------------------

// quests in an object, want to access values in objects to be referenced

// const quests = {
//     one: {
//         text: "You arrive at a tavern, a person approaches you and challenges you to a tavern brawl, what do you do?",
//         buttons: [["Accept", goToQuest(quests.two)],["Deny", goToQuest(quests.fifteen)]]
//     },
//     two: {
//         text: "You accepted the fight, how do you fight?",
//         buttons: [["Fists", goToQuest(quests.three)],["Sword", goToQuest(quests.twelve)]]
//     },
//     three: {
//         text: "The fight begins, how do you approach the fight?",
//         buttons: [["Tactical", goToQuest(quests.four)],["Spontaenous", goToQuest(quests.seven)]]
//     },
//     four: { 
//         text: "You are Tactical, you get the upper hand and dodge the first atack, do you:",
//         buttons: [["Attack Again", goToQuest(quests.five)],["Stay Back", goToQuest(quests.six)]]
//     },
//     five: {
//         text: "You have gotten injured - You have lost the fight!",
//     },
//     six: {
//         text: "You stayed back and waiting for your moment to strike - You have won the fight!",
//     }, 
//     seven: {
//         text: "You rush in, using your instincts and get hit. Do you:",
//         buttons: [["Attack", goToQuest(quests.eight)],["Stay Back", goToQuest(quests.nine)]],
//     },
//     eight: {
//         text: "You have gotten injured - You have lost the fight!",
//     },
//     nine: {
//         text: "You stay back and get your bearings. Do you:",
//         buttons: [["Attack", goToQuest(quests.ten)],["Stay Back Again", goToQuest(quests.eleven)]],
//     },
//     ten: {
//         text: "You attacked - You have and won the fight!",
//     },
//     eleven: {
//         text: "You waited too long and got injured - You have lost the fight!",
//     },
//     twelve: {
//         text: "You take out your sword, and the bartender steps in. Do you:",
//         buttons: [["Continue the Fight", goToQuest(quests.thirteen)],["Stop", goToQuest(quests.fourteen)]],
//     },
//     thirteen: {
//         text: "You have chosen to continue the fight - You injure yourself and get kicked out of the tavern - You have lost the fight!"
//     },
//     fourteen: {
//         text: "You have chosen to stop the fight - You don't get injured!",
//     },
//     fifteen: {
//         text: "You have denied to fight, but the challenger attempts to convince you. Do you:",
//         buttons: [["Give In", goToQuest(quests.two)],["Still Refuse", goToQuest(quest.sixteen)]]
//     },
//     sixteen: {
//         text: "You still refuse, but the challenger attempts to heckle you. Do you:",
//         buttons: [["Ignore", goToQuest(quests.seventeen)],["Defend Yourself", goToQuest(quests.eighteen)]], 
//     },
//     seventeen: {
//         text: "You ignored the challenger and you leave the tavern!",
//     },
//     eighteen: {
//         text: "You defend yourself, you both get kicked out - You get injured!"
//     }

// }