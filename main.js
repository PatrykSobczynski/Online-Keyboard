// TODO 
// capslock + shift. Doesn't work
// weird behavior of textArea. If you typed something with your keyboard, 
//                             you cannot write with the online keyboard
// responsive

let isCapsLock = false;
let words = 0;

// All keyboard chars
const keyboardChars = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BACKSPACE",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
    "CAPS", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "ENTER",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?",
    "SHIFT", "SPACE", "DELETE"
];

// console.log(isCapsLock);

// Create keyboard and add ".keyboard" class
const div = document.createElement("div");
div.classList.add("keyboard")

// Add keyboard to wrapper.
const wrapperDiv = document.querySelector(".wrapper");
wrapperDiv.appendChild(div);

// Query Selectors
const keyboardDiv = document.querySelector(".keyboard");
let textArea = document.querySelector(".textArea textarea");
let counter = document.querySelector(".counter");

// Create and display all keyboard chars
keyboardChars.map((char) => {
    let character = document.createElement("button");

    // Break lines on this char
    const breakLinePoints = ["BACKSPACE", "]", "ENTER", "?"].indexOf(char) !== -1;

    function checkCaps() {
        if (isCapsLock) {
            character.textContent = char.toUpperCase();
            console.log(char);
        }
        else {
            character.textContent = char;
            console.log(char);
        }
    }

    // Add chars to keyboard
    checkCaps();
    keyboardDiv.appendChild(character);


    // breakpoints
    if (breakLinePoints) {
        keyboardDiv.appendChild(document.createElement("br"));
    }

    // Chars event
    character.addEventListener("click", () => {
        if (char == "CAPS") {
            capslock();
        }
        else if (char == "BACKSPACE") {
            backspace();
        }
        else if (char == "SHIFT") {
            shift();
        }
        else if (char == "SPACE") {
            space();
        }
        else if (char == "ENTER") {
            enter();
        }
        else if (char == "DELETE") {
            deleteText();
        }
        else
            addCharToTextArea(char)

        countWords();
        checkCaps();
    });
})

function addCharToTextArea(char) {
    textArea.textContent += char;
}

// backspace char
function backspace() {
    console.log("Backspace");
    textArea.textContent = textArea.textContent.slice(0, -1);
    if (words > 1) {
        words += -2;
    } else
        words = 0;
}

// delete all char
function deleteText() {
    console.log("Delete");
    words = 0;
    textArea.textContent = "";
}

// capslock char
function capslock() {
    console.log("Capslock");
    isCapsLock = !isCapsLock;
    words += -1;
}


// shift char
function shift() {
    console.log("Shift");
    words += -1;
}

// space char
function space() {
    console.log("Space");
    textArea.textContent += " ";
}

// enter char
function enter() {
    console.log("Enter");
    textArea.textContent += "\n";
    words += -1;
}

// counting words on textArea
function countWords() {
    counter.textContent = `Words: ${words}`;
    ++words;
}

countWords();