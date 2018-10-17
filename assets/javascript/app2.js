$("button.quizLauncher").on("click", function () {
    $("ul#quizLauncherList").hide();
    $("div#container").html("");
    getQuiz($(this).attr("id"));
});

function getQuiz(idOfQuizButton) {
    console.log("getQuiz was called. idOfQuizButton: " + idOfQuizButton);
    for (let i = 0; i < quizzes.length; i++) {
        if (quizzes[i].quizID === idOfQuizButton) {
            launchQuiz(i);
        }
    }
};

function launchQuiz(quizIndex) {
    console.log("I am using quizIndex: " + quizIndex);

    let container = $("div#container");
    let quizIndexDiv = $("<div>");
    quizIndexDiv.attr("hidden", true);
    quizIndexDiv.attr("id", "quizIndexDiv");
    quizIndexDiv.text(quizIndex);
    container.append(quizIndexDiv);
    let questionNumber = $("<h3>");
    questionNumber.attr("id", "questionNumberID");
    questionNumber.text("Question # " + quizzes[quizIndex].questions[0].questionNumber);
    container.append(questionNumber);
    let currentQuestion = $("<h4>");
    currentQuestion.attr("id", "currentQuestionID");
    currentQuestion.text(quizzes[quizIndex].questions[0].currentQuestion);
    container.append(currentQuestion);
    let radioButtonDiv = $("<div>");
    radioButtonDiv.attr("id", "radioButtonDivID");
    for (let i = 0; i <= 3; i++) {
        let values = ["0", "1", "2", "3"];
        let radioButton = $("<input>");
        radioButton.attr("type", "radio");
        // It is important to give each button the same 'name' attribute
        // The browser will then automatically check only one at a time
        radioButton.attr("name", "quizRadioButtons");
        radioButton.addClass("radioButton");
        radioButton.attr("value", values[i]);
        let span = $("<span>");
        span.attr("id", values[i]);
        span.addClass("choices");
        span.text(quizzes[quizIndex].questions[0].answerChoices[i]);
        radioButtonDiv.append(radioButton);
        radioButtonDiv.append(span);
        radioButtonDiv.append($("<br>"));
    }
    container.append(radioButtonDiv);
    let nextQuestionButton = $("<button>");
    nextQuestionButton.attr("type", "button");
    nextQuestionButton.attr("id", "nextQuestionButton");
    nextQuestionButton.attr("value", "NEXT QUESTION");
    nextQuestionButton.text("NEXT QUESTION");
    container.append(nextQuestionButton);
    let quitButton = $("<button>");
    quitButton.attr("type", "button");
    quitButton.attr("id", "quitButton");
    quitButton.text("QUIT");
    container.append("<br><br>");
    container.append(quitButton);
    let progressContainer = $("<div>");
    progressContainer.addClass("progressContainer");
    let progress = $("<div>");
    progress.addClass("progress");
    progressContainer.append(progress);
    container.append(progressContainer);

    startCountdown();
};

function startCountdown() {
    stop = setTimeout(function () {
        console.log("Start countdown called");
        loadNextQuestion(parseInt($("div#quizIndexDiv").text()));
    }, 5000);
};

function stopCountDown() {
    console.log("Stop countdown called");
    clearTimeout(stop);
}

function loadNextQuestion(quizIndex) {
    $("div.progress").remove();
    let progress = $("<div>");
    progress.addClass("progress");
    $("div.progressContainer").append(progress);
    console.log("userAnswers length: " + userAnswers.length);
    console.log("quizIndex answerArray length: " + quizzes[quizIndex].answerArray.length);
    let answerObject = {};
    answerObject.question = $("h4#currentQuestionID").text();
    answerObject.yourAnswer = "No answer given";
    answerObject.yourAnswerValue = undefined;
            for (let i = 0; i <= 3; i++) {
                if ($("input.radioButton:eq(" + i + ")").prop("checked") === true) {
                    console.log($("input.radioButton:eq(" + i + ")").attr("value"));
                    answerObject.yourAnswer = quizzes[quizIndex].questions[userAnswers.length].answerChoices[parseInt($("input.radioButton:eq(" + i + ")").attr("value"))];
                    answerObject.yourAnswerValue = $("input.radioButton:eq(" + i + ")").attr("value");
                    
                }
            }
            answerObject.correctAnswerValue = quizzes[quizIndex].answerArray[userAnswers.length];
            answerObject.correctAnswer = quizzes[quizIndex].questions[userAnswers.length].answerChoices[parseInt(answerObject.correctAnswerValue)];
            if (answerObject.yourAnswerValue !== answerObject.correctAnswerValue) {
                answerObject.isYourAnswerCorrect = false;
            } else if (answerObject.yourAnswerValue === answerObject.correctAnswerValue) {
                answerObject.isYourAnswerCorrect = true;
            }
            
            userAnswers.push(answerObject);
        for (let j = 0; j <= 3; j++) {
            $("input.radioButton:eq(" + j + ")").prop("checked", false);
            console.log("I'm working!");
        }
        if (userAnswers.length !== quizzes[quizIndex].answerArray.length) {
            $("ul.quizLauncherList").hide();
            $("h3#questionNumberID").text("Question # " + quizzes[quizIndex].questions[userAnswers.length].questionNumber + "/" + quizzes[quizIndex].answerArray.length);
            $("h4#currentQuestionID").text(quizzes[quizIndex].questions[userAnswers.length].currentQuestion);
            for (let i = 0; i <= 3; i++) {
                $("span.choices:eq(" + i + ")").text(quizzes[quizIndex].questions[userAnswers.length].answerChoices[i]);
            }
            startCountdown();
        } else if (userAnswers.length === quizzes[quizIndex].answerArray.length) {
                $("ul#quizLauncherList").show();
                elQuizIndex = parseInt($("div#quizIndexDiv").text());
                $("div#container").html("<p>The quiz is over.</p>");
                gradingFunction(elQuizIndex);
        }    
};

function gradingFunction(quizIndex) {
    console.log(quizIndex);
    console.log("The grading function has been called.");
    console.log("userAnswers: " + userAnswers);
    let wrongAnswerArray = [];
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i].isYourAnswerCorrect === false) {
            wrongAnswerArray.push(userAnswers[i]);
        }
    }
    $("div#container").html("");
    let yourPercentage = $("<p>");
    yourPercentage.text("You got " + (quizzes[quizIndex].answerArray.length - wrongAnswerArray.length) + 
    " questions correct, or " + ((((quizzes[quizIndex].answerArray.length - wrongAnswerArray.length) / quizzes[quizIndex].answerArray.length))
    * 100).toFixed(2) + 
    "% of questions.");
    $("div#container").append(yourPercentage);
    console.log(wrongAnswerArray);
    let wrongAnswersDiv = $("<div>");
    let questionsYouGotWrong = $("<p>");
    if (wrongAnswerArray.length === 0) {
        questionsYouGotWrong.text("Congratulations!");
    } else if (wrongAnswerArray.length === 1) {
        questionsYouGotWrong.text("Here's the question you got wrong: ");
    } else if (wrongAnswerArray.length > 1) {
        questionsYouGotWrong.text("Here's the questions you got wrong: ");
    }
    wrongAnswersDiv.append(questionsYouGotWrong);
    let wrongAnswerList = $("<ul>");
    for (let i = 0; i < wrongAnswerArray.length; i++) {
        let wrongAnswerListItem = $("<li>");
        wrongAnswerListItem.html("<h4>" + wrongAnswerArray[i].question + "</h4>");
        let wrongAndCorrectAnswerList = $("<ul>");
        let wrongAndCorrectAnswerListYourAnswer = $("<li>");
        wrongAndCorrectAnswerListYourAnswer.addClass("wrongAnswer");
        wrongAndCorrectAnswerListYourAnswer.text("Your Answer: " + wrongAnswerArray[i].yourAnswer);
        wrongAndCorrectAnswerList.append(wrongAndCorrectAnswerListYourAnswer);
        let wrongAndCorrectAnswerListCorrectAnswer = $("<li>");
        wrongAndCorrectAnswerListCorrectAnswer.addClass("correctAnswer");
        wrongAndCorrectAnswerListCorrectAnswer.text("Correct Answer: " + wrongAnswerArray[i].correctAnswer);
        wrongAndCorrectAnswerList.append(wrongAndCorrectAnswerListCorrectAnswer);
        wrongAnswerListItem.append(wrongAndCorrectAnswerList);
        wrongAnswerList.append(wrongAnswerListItem);
    }
    wrongAnswersDiv.append(wrongAnswerList);
    $("div#container").append(wrongAnswersDiv);
    resetQuizzes();
}

function resetQuizzes() {
    userAnswers = [];
}

$("div#container").on("click", "#nextQuestionButton", function () {
    console.log("Hello, world!");
    stopCountDown();
    loadNextQuestion(parseInt($("div#quizIndexDiv").text()));
});

$("div#container").on("click", "button#quitButton", function () {
    console.log("quit button was clicked");
    resetQuizzes();
    stopCountDown();
    $("div#container").html(" ");
    $("ul#quizLauncherList").show();
});

