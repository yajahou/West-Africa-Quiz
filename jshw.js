const quizContainer = document.querySelector('#quiz');
const submitButton = document.querySelector('#submit');
const storeResults = document.querySelector('#results');

const questions = [
    {
        question: "What is the national dish of Senegal that is recognized all around the world?",
        options:["Okra stew", "Peanut stew", "Thieboudienne (Jollof Rice)", "Millet Porridge"],
        answer: "Thieboudienne (Jollof Rice)"
    },
    {
        question: "What is the population of Nigeria",
        options:["10 million", "5 million", "170 million", "230 million"],
        answer: "230 million"
    },
    {
        question: "What West African country is the gold mining powerhouse of Africa?",
        options:["Ghana", "Ivory Coast", "Guinea", "Guinea-Bissau"],
        answer: "Ghana"
    },
    {
        question: "What is the capital of Cape Verde",
        options:["Nouakchott", "Dakar","Praia","Bamako","Niamey"],
        answer: "Praia"
    },
    {
        question: "How many countries are part of ECOWAS?",
        options:["13", "10","26","15"],
        answer: "15"
    },
    {
        question: "Which of these countries has Portuguese as their official language?",
        options:["Guinea-Bissau", "Senegal","Mauritania","Niger"],
        answer: "Guinea-Bissau"
    },
]

function buildQuiz () {
    for(let index = 0; index<questions.length; index++) {
        const divQuestions = document.createElement('div');
        divQuestions.classList.add('question');

        divQuestions.innerHTML= `<h1>Question ${index+1}:${questions[index].question}</h1>`

        for(let j=0; j<questions[index].options.length; j++) {

            const option = questions[index].options[j];
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="questions${index}" value="${option}"> ${option}`;

            divQuestions.appendChild(label);

        }
        quizContainer.appendChild(divQuestions);
    }
    
}

buildQuiz();

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;

    for (let i=0; i<questions.length; i++) {
        const answerContainer = answerContainers[i];
        const selector = `input[name=questions${i}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector)||{}).value;
        answerContainer.classList.remove('results-correct', 'results-incorrect');

        if(userAnswer === questions[i].answer) {
            answerContainer.classList.add('results-correct');
            score= score +1;
        }
        else{
            answerContainer.classList.add('results-incorrect');
        }
        
    }
    storeResults.innerHTML = `you have scored ${score} out of ${questions.length}`;
}

submitButton.addEventListener('click',showResults);

