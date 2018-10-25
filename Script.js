//sketch of the quiz.
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Use a array to store all the questions.
const myQuestions = [
  {//For example.(Repalce our questions' content here.)
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "...?",
    answers: {
      a: "...",
      b: "...",
      c: "...",
      d: "..."
    },
    correctAnswer: "d"
  }
];

buildQuiz();
//interactions of the quiz.
function buildQuiz(){
// Set a constent value to output.
  const output = [];
console.log(myQuestions)
  //Store all the answers in a loop.
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
// output = Question + Answers.
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML=output.join('');
}

// interactions of the Result after submitted the quiz.
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');

  //set a counter.
  let numCorrect = 0;


  myQuestions.forEach( (currentQuestion, questionNumber) => {

    //check currentQuestion;
    const answerContainer = answerContainers[questionNumber];
    //check the selected radio button;
    const selector = 'input[name=question'+questionNumber+']:checked';
    //Get a reference to our selected answer element OR,
    //if that doesn’t exist,
    // use an empty object.
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;


    if(userAnswer===currentQuestion.correctAnswer){

      numCorrect++;


      answerContainers[questionNumber].style.color = 'lightgreen';
    }

    else{

      answerContainers[questionNumber].style.color = 'red';
    }
  });


  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}





submitButton.addEventListener('click', showResults);




//other interactions during answer the quiz.
//function handleMouseMove(event){
    //console. log(event.clientX, event.clientY;)
//var background = document.createElement('Div')
//background.style.height = '100vh';
//document.body.appendChild(background);
//background.addEventListener('mousemove', handleMouseMove)

    //  var x =event.clientX;
    //  var y =event.clientY;
    //  background.textContent = x + ', ' + y;
    //  background.style.backgroundColor = 'rgb('+ x +','+ y + ','100')'

//}
