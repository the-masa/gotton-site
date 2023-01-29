const text = document.getElementsByClassName("omikuji_result");
const omikujiList = [
    "Excellent luck!!!",
    "Very good luck!!",
    "Good luck!",
    "Slightly good luck",
    "Uncertain luck..",
    "Bad luck...",
];
function omikuji() {
    let randomNumber = Math.floor(Math.random() * 6);
    text[0].innerHTML = omikujiList[randomNumber];
}