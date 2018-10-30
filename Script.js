//sketch of the quiz.
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Use a array to store all the questions.
const myQuestions = [
  {//For example.(Replace our questions' content here.)
    img: "midterm images/picture1.jpg",
    question: "What color isn’t in a circle?",
    answers: {
      a: "Magenta",
      b: "Green",
      c: "White",
      d: "Blue",
    },
    correctAnswer: "c"
  },
  {
    img: "midterm images/picture2.png",
    question: "How many navy squares are shown?",
    answers: {
      a: "16",
      b: "10",
      c: "13",
      d: "24",
    },
    correctAnswer: "b"
  },
  {
    img: "midterm images/picture3.png",
    question: "What color and shape would be next in the top line?",
    answers: {
      a: "Black square",
      b: "Yellow pentagon",
      c: "Blue triangle",
      d: "Red square",
    },
    correctAnswer: "d"
  },
  {
    img: "midterm images/picture4.jpg",
    question: "Is the color of this fish warm-toned or cool-toned?",
    answers: {
      a: "Warm-toned",
      b: "Cool-toned",
    },
    correctAnswer: "b"
  },
  {
    img: "midterm images/picture5.jpg",
    question: "What color group does this parrot’s feathers belong to?",
    answers: {
      a: "Primary colors",
      b: "Secondary colors",
      c: "Tertiary colors",
    },
    correctAnswer: "a"
  },
  {
    img: "midterm images/picture6.png",
    question: "What color is the bar in the middle of the picture?",
    answers: {
      a: "It fades from light gray to dark gray",
      b: "It fades from dark gray to light gray",
      c: "It is the same shade of gray",
    },
    correctAnswer: "c"
  }
];

//interactions of the quiz.
function buildQuiz(){
// Set a constant value to output.
  const output = [];

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
        `<img src = ${currentQuestion.question}><div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
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


buildQuiz();


submitButton.addEventListener('click', showResults);




//other interactions during answer the quiz.
function handleMouseMove(event){
    console. log(event.clientX, event.clientY;)
var background = document.createElement('Div')
background.style.height = '100vh';
document.body.appendChild(background);
background.addEventListener('mousemove', handleMouseMove)

      var x =event.clientX;
      var y =event.clientY;
      background.textContent = x + ', ' + y;
      background.style.backgroundColor = 'rgb('+ x +','+ y + ','100')'

}
