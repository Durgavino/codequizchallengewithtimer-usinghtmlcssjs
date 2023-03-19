
var nextbtn = document.getElementById("next");
var result = document.getElementById("result");
var fscore = document.getElementById("score");
var finalscore = document.getElementById("finalscore");


var options = document.querySelector(".optionscreen");

var questionsarr = [
    {
        numb: 1,
        quest: "What does HTML stand for?",

        choice1: "Hyper Tool Multi Language",
        choice2: "Hyper Text Preprocessor",
        choice3: "Hyper Text Markup Language",
        choice4: "Hyper Text Multiple Language",

        answer: "Hyper Text Markup Language"
    },
    {

        numb: 2,
        quest: "What does CSS stand for?",

        choice1: "Computer Style Sheet",
        choice2: "Common Style Sheet",
        choice3: "Colorful Style Sheet",
        choice4: "Cascading Style Sheet",

        answer: "Cascading Style Sheet"
    },
    {
        numb: 3,
        quest: "What does PHP stand for?",

        choice1: "Hometext Preprocessor",
        choice2: "Hypertext Preprocessor",
        choice3: "Hypertext Programming",
        choice4: "Hypertext Preprogramming",

        answer: "Hypertext Preprocessor"
    },
    {
        numb: 4,
        quest: "What does SQL stand for?",

        choice1: "Structured Query Language",
        choice2: "Stylish Question Language",
        choice3: "Stylesheet Query Language",
        choice4: "Statement Question Language",

        answer: "Structured Query Language"
    },
    {
        numb: 5,
        quest: "What does XML stand for?",

        choice1: "eXamine Multiple Language",
        choice2: "eXtensible Markup Language",
        choice3: "eXecutable Multiple Language",
        choice4: "eXTra Multi-Program Language",

        answer: "eXtensible Markup Language"

    },

];


var fscore = 0;
var timeleft = 25;

var timerinterval;



function displayscreen() {

    document.getElementById("questionscreen").hidden = false;
    let timerbox = document.getElementById("timerbox");

    timerinterval = setInterval(function () {
        timeleft -= 1;

        timerbox.innerHTML = "Time Left:" + timeleft;
        if (timeleft == 0) {
            clearInterval(timerinterval);
        }
    }, 1000)

    displayquestion();
}

var questionindex = 0;
var display = document.querySelector('p');

var choices = document.querySelector("#choices");


function displayquestion() {
    document.getElementById('choices').value = "";

    options.innerHTML = "";

    for (var i = 1; i < 5; i++) {

        question.textContent = questionsarr[questionindex].quest;
        var newbtn = document.createElement("button");
        newbtn.textContent = questionsarr[questionindex]["choice" + i];
        choices.appendChild(newbtn);
    }
    choices.addEventListener("click", function (event) {
        if (event.target.textContent == questionsarr[questionindex].answer) {
            fscore = fscore + 10;
            document.getElementById("score").innerHTML = fscore;
            result.innerHTML = "Correct Answer";
        }
        else {
            result.innerHTML = "InCorrect Answer";
           
        }

        if (questionindex < 4) {
            questionindex++;
            displayquestion();
            return fscore;
            //console.log(fscore);
        }
        
    });
}

// document.getElementById("finalscore").innerHTML= "Your Score is :" + finalscore;

// finalscore.textContent="Your score is: " + score;


function save() {


    var storedvalue = localStorage.getItem('text');
    var textfield = document.getElementById('textfield').value;



    //var namelist=[textfield];


    if (storedvalue) {
        storedvalue = JSON.parse(storedvalue);

        storedvalue.push(textfield);
    } else {
        storedvalue = [textfield];
    }
    localStorage.setItem('text', JSON.stringify(storedvalue));
}


function get() {
    var storedvalue = localStorage.getItem('text');
    //  scoredetail.textContent="your Final score is :" + fscore;
    if (storedvalue) {
        document.getElementById('textfield').value = storedvalue;
    }
    document.getElementById('textfield').value = '';
   
}

var highscore = document.getElementById('highscore');
console.log(highscore);

function displayhighscore(event) {
    var resultscore = JSON.parse(window.localStorage.getItem("text"));
    console.log(resultscore);
    var olEl = document.getElementById('olist');
    for (let i = 0; i < resultscore.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = resultscore[i];
        olEl.appendChild(liEl);
    }

}

highscore.addEventListener("click", displayhighscore);
