var questionsArray = [{
        question: "Who Was The Founder Of Apple ?",
        answer: "Steve Jobs",
        options: [
            "Steve Jobs",
            "Elon Musk",
            "Mark Zuker Burg",
            "none of the above",
        ]
    },
    {
        question: "Who Was The Founder Of Tesla ?",
        answer: "Elon Musk",
        options: [
            "Elon Musk",
            "Mark Zuker Burg",
            "Bill Gates",
            "none of the above",
        ]
    },
    {
        question: "Who Was The Founder OF Jio Company ?",
        answer: "Mukesh Ambani",
        options: [
            "Ratan Tata",
            "Mukesh Ambani",
            "Jack ma",
            "none of the above",
        ]
    },
    {
        question: "Who Is The Founder Of Facebook ?",
        answer: "Mark Zuker Burg",
        options: [
            "Warren Buffet",
            "Larry Page",
            "Mark Zuker Burg",
            "none of the above",
        ]
    },
    {
        question: "Who Was The Founder Of Berkshare Hath Way ?",
        answer: "Warren Buffet",
        options: [
            "Bill Gates",
            "Mark Zuker Burg",
            "Warren Buffet",
            "none of the above",
        ]
    },
];

function start() {
    sessionStorage.clear();
    var input = document.getElementById('username');
    if (input.value == "" || input.value == " ") {
        alert("User Name Required")
    } else {
        sessionStorage.setItem("name", input.value);
        startWork();
    }

}

var questionCount = 0;
var score = 0


function showQuestion(e) {
    // show questions
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML = questionsArray[e].question



    // show options
    var optionElement = document.getElementsByClassName('optionElement');
    for (let i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionsArray[e].options[i]
    }
}


function putActiveClass(e) {
    removeActiveClass()
    e.classList.add("active")
}

function removeActiveClass() {
    var active = document.getElementsByClassName('active')
    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove('active')

    }
}

function validate(e) {
    var active = document.getElementsByClassName('active');
    if (active[0].innerHTML == questionsArray[e].answer) {
        score += 10
    }
}


function nextQuestion(e) {
    validate(questionCount);
    questionCount++;
    if (questionCount <= questionsArray.length - 1) {
        showQuestion(questionCount)
    }
    removeActiveClass();
    setResult();

}


function showResult() {
    document.getElementById("result") = sessionStorage.getItem("useransscore");
}

function startWork() {
    window.location.href = "quiz.html"
}

function setResult() {
    if (questionCount == questionsArray.length) {
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("useransscore", score);
}

function renderResult() {
    var cs = sessionStorage.getItem("useransscore");
    result.innerHTML = "You Scored " + cs + " out of 50"
}

function retry() {
    window.location.href = "index.html"
}