'use strict';
const beerCount = 99;
const bottleText = (n) => `bottle${n === 1 ? '' : 's'}`;
const beersonthewall = (n) => `${n} ${bottleText(n)} of beer on the wall, ${n} ${bottleText(n)} of beer.\n`;
const nomorebeers = (n) => `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ${n} bottles of beer on the wall.`;
const passitaround = (n) => `Take one down and pass it around, ` + (n === 0 ? 'no more bottles' : `${n} ${bottleText(n)}`) + ` of beer on the wall.\n\n`;
const buildSong = () => {
    let count = beerCount, song = ``;
    while (count > 0) {
        song += beersonthewall(count);
        count--;
        song += passitaround(count);
    }
    song += nomorebeers(beerCount);
    return song;
};
window.onload = () => document.querySelector('#div-song').textContent = buildSong();
