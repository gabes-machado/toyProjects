const tileList = document.querySelectorAll('.key');

function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);
    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('element is not an audio');
    }
}

function tilePLay() {
    for (let i = 0; i < tileList.length; i++) {
        const tile = tileList[i];
        const instrument = tile.classList[1];
        const idAudio = `#sound_${instrument}`;
        tile.onclick = function() {
            playSound(idAudio);
        };
    }
}

tilePLay();
