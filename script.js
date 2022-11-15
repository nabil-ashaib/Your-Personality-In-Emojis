let myEmojis = ["👨‍💻​","⚽​","☕​"]

let emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const pushBtn = document.getElementById("push-btn")
const shiftBtn = document.getElementById("shift-btn")
const popBtn = document.getElementById("pop-btn")

for(i = 0; i < myEmojis.length; i++) {
    emojiContainer.innerHTML += `
        <span>${myEmojis[i]}</span>
    `
}
function render() {
    emojiContainer.innerHTML = ""
    for(i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `
            <span>${myEmojis[i]}</span>
        `
    }
}

// ADD
pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        render()
    }
})
unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        render()
    }
})
// REMOVE
popBtn.addEventListener("click", function() {
    myEmojis.pop(emojiInput.value)
    render()
})
shiftBtn.addEventListener("click", function() {
    myEmojis.shift(emojiInput.value)
    render()
})