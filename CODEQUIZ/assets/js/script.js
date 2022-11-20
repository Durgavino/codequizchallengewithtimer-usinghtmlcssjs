
var nextbtn=document.getElementById("next");
var result=document.getElementById("result");


var questionsarr = [
    {
        numb: 1,
        quest: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        choice1: "Hyper Tool Multi Language",
        choice2: "Hyper Text Preprocessor",
        choice3: "Hyper Text Markup Language",
        choice4: "Hyper Text Multiple Language",


    },
    {

        numb: 2,
        quest: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        choice1: "Cascading Style Sheet",
        choice2: "Common Style Sheet",
        choice3: "Colorful Style Sheet",
        choice4: "Computer Style Sheet",


    },
    {
        numb: 3,
        quest: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        choice1: "Hometext Preprocessor",
        choice2: "Hypertext Preprocessor",
        choice3: "Hypertext Programming",
        choice4: "Hypertext Preprogramming",


    },
    {
        numb: 4,
        quest: "What does SQL stand for?",
        answer: "Structured Query Language",
        choice1: "Structured Query Language",
        choice2: "Stylish Question Language",
        choice3: "Stylesheet Query Language",
        choice4: "Statement Question Language",


    },
    {
        numb: 5,
        quest: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        choice1: "eXamine Multiple Language",
        choice2: "eXtensible Markup Language",
        choice3: "eXecutable Multiple Language",
        choice4: "eXTra Multi-Program Language",


    },

];


var score=0;
var timeleft = 10;

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
var choices=document.querySelector("#choices");

function displayquestion() 
{
    document.getElementById('choices').value="";


    for (var i = 1; i < 5; i++) {

               question.textContent = questionsarr[questionindex].quest;
   
           

               var newbtn = document.createElement("button");

     newbtn.textContent = questionsarr[questionindex]["choice" + i];


    choices.appendChild(newbtn);



    }


    choices.addEventListener("click", function (event)
     {
       
          if (event.target.textContent == questionsarr[questionindex].answer) {
          
         result.innerHTML="Correct Answer";
       
        }
  
        else {
           
            result.innerHTML="InCorrect Answer";
        }
        
       if(questionindex<5){

     

        questionindex++;

      

        displayquestion();
       }
  
    });
    }

    
   
  
 

