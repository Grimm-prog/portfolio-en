function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const phrases = [
    "Front-end Developer", "UX/UI Designer"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i <= curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeLoop();

const bckBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
}
);

window.addEventListener("scroll", function () {
    let posY = window.scrollY;

    if (posY > 0) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
}
);