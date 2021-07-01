


/* dynamic typing TextDecoderStream


1: when user pressed start button then only actobe the textarea else disable it or vice versa
2: Every time new set of lines on the top whena start button pressed not on the Done button.
3: get the time and change the button text to done.
4: get the end time when user press done and then calculate the time.
5: find the total words on the set of words.
6: find the speed of the user and show on the top when the user press done.
7: Then call the compare words and Chcek it how many words are matched and how many not.

*/



const setofWords = ["hii, this is umashankar mishra and i'm a webdeveloper and a feeelancer.",
    "Hope! all of you are a good in this panic situation in the erra",
    "Guys! Hopefully you and all your family members are good to go for further situation."];

const msg = document.getElementById('msg');
const typeWord = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setofWords.length)
    msg.innerText = setofWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';

}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalString = typeWord.value;
    let wordCount = wordCounter(totalString);
    let speed = Math.round((wordCount / totalTime) * 60);

    let message = "Your speed is " + speed + " words per minute ";
    message += compareWord(msg.innerText, totalString)
    msg.innerText = message;

}

const compareWord = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            cnt++;
        }
    })
    let errorWord = word1.length - cnt;
    return (cnt + " correct out of " + word1.length + " words and the total number of error are " + errorWord + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWord.disabled = false;
        playGame();
    } else if (this.innerText == 'Done') {
        typeWord.disabled = true;
        btn.innerText = 'Start';
        endGame();
    }
})