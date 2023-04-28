var myQuestions = [
  {
    question: "Qual é o país que produz o vinho do Porto?",
    answers: {
      a: 'Brasil',
      b: 'Portugal',
      c: 'Espanha'
    },
    correctAnswer: 'b'
  },
  {
    question: "Qual é a temperatura recomendada para servir um vinho tinto?",
    answers: {
      a: 'Entre 10 e 15 graus Celsius',
      b: 'Entre 20 e 30 graus Celsius',
      c: 'Entre 16 e 18 graus Celsius'
    },
    correctAnswer: 'c'
  },
  {
    question: "Qual é o país que produz o vinho Chianti?",
    answers: {
      a: 'França',
      b: 'Itália',
      c: 'Chile'
    },
    correctAnswer: 'b'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        
        answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}