// buttons, message, etc. in DOM

const message = document.querySelector("#message")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const buttons = document.querySelector("btn btn-secondary")
const buttonDiv = document.querySelector("#button-div")

// reference quests with a function

// doire's advice

    // Looks like you would need a parameter here since you call it later with an argument. 
    // Also you're going to need to access the text within the individual quest object.

// const goToQuest = () => {
//     questText0 = message.innerText = quests.text 
//     questButtonTextA = button1.innerText = quests.buttons
//     questButtonTextB = button1.innerText = quests.buttons
// }

const goToQuest1 = () => {
    // get text value from quests object ???
    questText = message.innerText = "You arrive at a tavern, a person approaches you and challenges you to a tavern brawl, what do you do?"
    // get buttons value from quests object ???
    const button3 = document.createElement("button")
    const button4 = document.createElement("button")
    buttonDiv.appendChild(button3)
    buttonDiv.appendChild(button4)
    buttonDiv.removeChild(button1)
    buttonDiv.removeChild(button2)
    button3.innerText = "Accept"
    button4.innerText = "Deny"
    button3.addEventListener("click", goToQuest2)
    button4.addEventListener("click", goToQuest15)
}

const goToQuest2 = () => {
    questText2 = message.innerText = "You accepted the fight, how do you fight?"
    questButton1 = button1.innerText = "Fists"
    questButton2 = button2.innerText = "Sword"
}

const goToQuest15 = () => {
    questText15 = message.innerText = "You have denied to fight, but the challenger attempts to convince you. Do you:"
    questButton1 = button1.innerText = "Give In"
    questButton2 = button2.innerText = "Still Refuse"
}

// create a new buttons on each click and remove the previous one

// event listeners 

button1.addEventListener("click", goToQuest1)
button2.addEventListener("click", goToQuest1)

// object to hold all the quests
// make into branching path ???

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

// DOM content

document.addEventListener("DOMContentLoaded", () => {  
})