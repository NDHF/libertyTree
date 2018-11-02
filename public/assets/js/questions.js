console.log("Hello from questions.js");

var userAnswers = [];

var quizzes = [

    {
        quizID: "quiz1",
        questions: [
            {
                questionNumber: 1,
                currentQuestion: "Is there anything you remember?",
                answerChoices: [
                    "The Alamo",
                    "The Eskimo",
                    "The Pro Bowl",
                    "Kokomo"
                ]
            },  
            {
                questionNumber: 2,
                currentQuestion: "What was the purpose of the Federalist Papers?",
                answerChoices: [
                    "To argue for ratifying the Constitution",
                    "To argue against ratifying the Constitution",
                    "To argue for seceding from the Union",
                    "To argue for the location of the US capital"
                ]
            },
            {
                questionNumber: 3,
                currentQuestion: "What was the Underground Railroad?",
                answerChoices: [
                    "A route that allowed slaves to escape to freedom",
                    "Another, secret transcontinental railroad",
                    "A model train set in Neil Young's basement",
                    "A route for transporting prisoners in the Revolutionary War"
                ]
            }   
        ],
        answerArray: ["0", "0", "0"]
    },
    {
        quizID: "quiz2",
        questions: [
            {
                questionNumber: 1,
                currentQuestion: "Who proclaimed 'Give me liberty or give me death'?",
                answerChoices: [
                    "George Washington",
                    "Patrick Henry",
                    "The Marquis de Lafayette",
                    "Benedict Arnold"
                ]
            },  
            {
                questionNumber: 2,
                currentQuestion: "Which patriotic song was inspired by the vistas of Colorado?",
                answerChoices: [
                    "My Country Tis of Thee",
                    "The Star-Spangled Banner",
                    "America the Beautiful",
                    "God Bless America"
                ]
            },
            {
                questionNumber: 3,
                currentQuestion: "Which Amendment to the Constitution affirms the right to a jury trial in civil cases?",
                answerChoices: [
                    "The Tenth Amendment",
                    "The Eighth Amendment",
                    "The Sixth Amendment",
                    "The Fourt Amendment"
                ]
            }   
        ],
        answerArray: ["1", "2", "2"]
    }

];