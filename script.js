const messages = [
    "Are you sure?",
    "Really sure??",
    "ALYSSA PLEASSEEE 😭",
    "GIRL IM GONNA CRY😭",
    "IM BEGGING YOUU!!",
    "JUST CLICK YES",
    "OH MY GODD IM DONE",
    "THATS WHAT U WANT HUH?",
    "OKAY FINE",
    "DONT TALK TO ME."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    const mainContainer = document.getElementById('main-container');
    const yesContainer = document.getElementById('yes-container');
    mainContainer.style.display = 'none';
    yesContainer.style.display = 'flex';
}

function funfactClick() {
    window.location.href = "ffpage.html";
}