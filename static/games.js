let player = document.getElementById('player');
let emote = document.getElementById('emote');
let posX = 280;
let posY = 180;
const moveSpeed = 10;

document.addEventListener('keydown', function(e) {
    switch (e.key.toLowerCase()) {
        case 'w':
            posY = Math.max(0, posY - moveSpeed);
            break;
        case 's':
            posY = Math.min(360, posY + moveSpeed);
            break;
        case 'a':
            posX = Math.max(0, posX - moveSpeed);
            break;
        case 'd':
            posX = Math.min(560, posX + moveSpeed);
            break;
        case 'e':
            triggerEmote('dab'); // Example: dab
            break;
    }

    player.style.left = posX + 'px';
    player.style.top = posY + 'px';
});

function triggerEmote(name) {
    let emoteUrl = `/static/emotes/${name}.gif`; // Place your emotes in static/emotes/
    emote.style.left = (posX - 10) + 'px';
    emote.style.top = (posY - 60) + 'px';
    emote.style.backgroundImage = `url('${emoteUrl}')`;

    setTimeout(() => {
        emote.style.left = '-9999px';
        emote.style.backgroundImage = 'none';
    }, 2000);
}