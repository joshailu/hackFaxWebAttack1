let hintViewable = 0;


document.getElementById("hintBtn").addEventListener("click", () => {
    const thought = document.getElementById("thoughtBubble");
    const text = document.getElementById("textBubble");
    if (hintViewable === 0) {
        thought.style.display="flex";
        text.style.display="none";
        hintViewable = 1;
    } else {
        thought.style.display="none";
        text.style.display="flex";
        hintViewable = 0;
    }

})

function showButton() {
    document.getElementById("cloud").src = "assets/cloudText.png";
}

function hideButton() {
    if (hintViewable === 0) {
        document.getElementById("cloud").src = "assets/cloud.png";
    }
}
