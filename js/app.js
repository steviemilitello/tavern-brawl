// buttons, message, etc. in DOM

const message = document.querySelector("#message")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")

// reference quests with a function

const goToQuest = () => {
    newText = (quests.text)
    newButtonPrompt = (quests.buttons)
}

// event listeners 

button1.addEventListener("click", goToQuest)
button2.addEventListener("click", goToQuest)

// array to hold all the quests

const quests = {
    one: {
        text: "You arrive at a tavern, a person approaches you and challenges you to a tavern brawl, what do you do?",
        buttons: [["Accept", goToQuest(quests.two)],["Deny", goToQuest(quests.fifteen)]]
    },
    two: {
        text: "You accepted the fight, how do you fight?",
        buttons: [["Fists", goToQuest(quests.three)],["Sword", goToQuest(quests.twelve)]]
    },
    three: {
        text: "The fight begins, how do you approach the fight?",
        buttons: [["Tactical", goToQuest(quests.four)],["Spontaenous", goToQuest(quests.seven)]]
    },
    four: { 
        text: "You are Tactical, you get the upper hand and dodge the first atack, do you:",
        buttons: [["Attack Again", goToQuest(quests.five)],["Stay Back", goToQuest(quests.six)]]
    },
    five: {
        text: "You have gotten injured - You have lost the fight!",
    },
    six: {
        text: "You stayed back and waiting for your moment to strike - You have won the fight!",
    }, 
    seven: {
        text: "You rush in, using your instincts and get hit. Do you:",
        buttons: [["Attack", goToQuest(quests.eight)],["Stay Back", goToQuest(quests.nine)]],
    },
    eight: {
        text: "You have gotten injured - You have lost the fight!",
    },
    nine: {
        text: "You stay back and get your bearings. Do you:",
        buttons: [["Attack", goToQuest(quests.ten)],["Stay Back Again", goToQuest(quests.eleven)]],
    },
    ten: {
        text: "You attacked - You have and won the fight!",
    },
    eleven: {
        text: "You waited too long and got injured - You have lost the fight!",
    },
    twelve: {
        text: "You take out your sword, and the bartender steps in. Do you:",
        buttons: [["Continue the Fight", goToQuest(quests.thirteen)],["Stop", goToQuest(quests.fourteen)]],
    },
    thirteen: {
        text: "You have chosen to continue the fight - You injure yourself and get kicked out of the tavern - You have lost the fight!"
    },
    fourteen: {
        text: "You have chosen to stop the fight - You don't get injured!",
    },
    fifteen: {
        text: "You have denied to fight, but the challenger attempts to convince you. Do you:",
        buttons: [["Give In", goToQuest(quests.two)],["Still Refuse", goToQuest(quest.sixteen)]]
    },
    sixteen: {
        text: "You still refuse, but the challenger attempts to heckle you. Do you:",
        buttons: [["Ignore", goToQuest(quests.seventeen)],["Defend Yourself", goToQuest(quests.eighteen)]], 
    },
    seventeen: {
        text: "You ignored the challenger and you leave the tavern!",
    },
    eighteen: {
        text: "You defend yourself, you both get kicked out - You get injured!"
    }
    
}

// DOM content

document.addEventListener("DOMContentLoaded", () => {  
    goToQuest(quests.one)
})