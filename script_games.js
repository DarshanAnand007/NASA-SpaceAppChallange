const video = document.getElementById('video');
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question-text');

// Define an array of questions and answers
const questions = [
    {
        question: 'Distance from SUN And MOON to the EARTH',
        timestamp: 1.3,
        correctAnswer: 'A',
        answers: [
            'A SUN : 93 million miles, MOON : 23,900 miles',
            'B SUN : 293 million miles, MOON : 24,900 miles',
            'C SUN : 73 million miles, MOON : 25,960 miles',
            'D SUN : 193 million miles, MOON : 26,800 miles',
        ],
    },
    {
        question: 'What is a lunar eclipse?',
        timestamp: 4,
        correctAnswer: 'B',
        answers: [
            'A A lunar eclipse is when the Moon passes between the Earth and the Sun, blocking the Sun\'s light.',
            'B A lunar eclipse is when the Earth passes between the Sun and the Moon, casting a shadow on the Moon.',
            'C A lunar eclipse is when the Moon turns blue in color.',
            'D A lunar eclipse is when the Moon disappears for a few seconds.',
        ],
    },
    {
        question: 'What is a solar eclipse?',
        timestamp: 10,
        correctAnswer: 'A',
        answers: [
            'A A solar eclipse is when the Moon passes between the Earth and the Sun, blocking the Sun\'s light.',
            'B A solar eclipse is when the Earth passes between the Sun and the Moon, casting a shadow on the Earth.',
            'C A solar eclipse is when the Moon turns blue in color.',
            'D A solar eclipse is when the Sun disappears for a few seconds.',
        ],
    },
];

// Rest of your code...


    


let currentQuestionIndex = 0;

// Function to display the next question
function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        const answersList = document.getElementById('answers-list');
        answersList.innerHTML = ''; // Clear the previous answer choices
        currentQuestion.answers.forEach((answer, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = answer;
            button.setAttribute('onclick', `checkAnswer(this, '${String.fromCharCode(65 + index)}')`);
            li.appendChild(button);
            answersList.appendChild(li);
        });
        currentQuestionIndex++;
        questionBox.classList.add('active');
    } else {
        // No more questions, hide the question box
        questionBox.classList.remove('active');
    }
}


// Function to hide the question box
function hideQuestionBox() {
    questionBox.classList.remove('active');
}

// Function to check the selected answer
function checkAnswer(button, selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex - 1];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Correct answer, hide question box and resume video
        hideQuestionBox();
        video.play();
    } else {
        // Wrong answer, add animation or feedback here
        alert('Incorrect answer. Try again.');
    }
}

// Listen for the video's time update event
video.addEventListener('timeupdate', function () {
    const currentTime = video.currentTime;
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion && currentTime >= currentQuestion.timestamp) {
        displayNextQuestion();
    }
});
