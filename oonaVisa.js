const questions = [
    {
        question: "Minä vuonna Suomi itsenäistyi?",
        optionA: "1957",
        optionB: "1917",
        optionC: "1907",
        optionD: "2003",
        correctOption: "optionB"
    },

    {
        question: "Kuka kirjoitti Harry Potter kirjat?",
        optionA: "J. R. R. Tolkien",
        optionB: "Sinikka Nopola",
        optionC: "J. K. Rowling",
        optionD: "Tove Jansson",
        correctOption: "optionC"
    },

    {
        question: "Minkä lajin kala Nemo on?",
        optionA: "Vuokkokala",
        optionB: "Meribassi",
        optionC: "Ankerias",
        optionD: "Säyne",
        correctOption: "optionA"
    },

    {
        question: "Mikä on veden kemiallinen kaava?",
        optionA: "N2",
        optionB: "C6H12O6",
        optionC: "NaCl",
        optionD: "H20",
        correctOption: "optionD"
    },

    {
        question: "Kuka on Suomen presidentti?",
        optionA: "Tarja Halonen",
        optionB: "Sauli Niinistö",
        optionC: "Joe Biden",
        optionD: "Paavo Väyrynen",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
   
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {

            correctOption = option.labels[0].id
        }
    })
   

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
           
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
 
    setTimeout(() => {
        if (indexNumber <= 4) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 1) {
        remark = "Heikko tulos, jatka harjoittelua."
        remarkColor = "red"
    }
    else if (playerScore >= 2 && playerScore < 3) {
        remark = "Keskiverto tulos, pystyt parempaan!"
        remarkColor = "orange"
    }
    else if (playerScore >= 4) {
        remark = "Mahtavaa, jatka samaan malliin!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100

    
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}