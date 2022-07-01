// TODO 
// shift
// better responsive

// All keyboard chars
const keyboardChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BACKSPACE",
    "`", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
    "CAPS", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "ENTER",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?",
    "SHIFT", "SPACE", "CLEAR"
];

let isCapsLock = false;
let isShift = false;
let words = 0;

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
let buttons;
let caps;

// Create and display all keyboard chars
keyboardChars.map((char) => {

    let character = document.createElement("button");
    character.classList.add(`${char}-char`);

    // Break lines on this char
    const breakLinePoints = ["BACKSPACE", "]", "ENTER", "?"].indexOf(char) !== -1;

    createChars(character, char);

    caps = document.querySelector(".keyboard .CAPS-char");
    buttons = document.querySelectorAll(".keyboard button");

    // breakpoints
    if (breakLinePoints) {
        keyboardDiv.appendChild(document.createElement("br"));
    }

    // Chars event
    // może spróbuj tu switch case:
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
        else if (char == "CLEAR") {
            clearText();
        }
        else
            if (isCapsLock) {
                addCharToTextArea(char.toUpperCase());
            }
            else if (!isCapsLock) {
                addCharToTextArea(char);
            }

        countWords();
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

// clear text area
function clearText() {
    console.log("Clear");
    words = 0;
    textArea.textContent = "";
}

// capslock char
function capslock() {
    console.log("Capslock");
    caps.classList.toggle("active");

    buttons.forEach((btn) => {
        btn.classList.toggle("upper")
    })

    isCapsLock = !isCapsLock;
    words += -1;
}

// shift char
function shift() {
    console.log("Shift");
    isShift = !isShift;
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

// create chars on keyboard
function createChars(element, c) {

    element.textContent = c;
    keyboardDiv.appendChild(element);
}

// counting words on textArea
function countWords() {
    counter.textContent = `Words: ${words}`;
    ++words;
}

clearText();
countWords();