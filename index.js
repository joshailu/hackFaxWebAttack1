let hintViewable = 0;

document.getElementById("hintBtn").addEventListener("click", () => {
    const hint = document.getElementById("hint");
    if (hintViewable === 0) {
        hint.style.display="flex";
        hintViewable = 1;
    } else {
        hint.style.display="none";
        hintViewable = 0;
    }

})