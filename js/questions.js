console.log("Hello from questions.js");

var userAnswers = [];

var quizzes = [

    {
        quizID: "quiz1",
        questions: [
            {
                questionNumber: 1,
                currentQuestion: "What was the war between the north and the south?",
                answerChoices: [
                    "The Revolutionary War",
                    "The Civil War",
                    "World War I",
                    "The War of 1812"
                ]
            },  
            {
                questionNumber: 2,
                currentQuestion: "We elect a US representative for how many years?",
                answerChoices: [
                    "Eight",
                    "Four",
                    "Two",
                    "Six"
                ]
            },
            {
                questionNumber: 3,
                currentQuestion: "How many justices are on the Supreme Court?",
                answerChoices: [
                    "Eleven",
                    "Twelve",
                    "Ten",
                    "Nine"
                ]
            },
            {
                questionNumber: 4,
                currentQuestion: "Who has the power to veto bills?",
                answerChoices: [
                    "The Vice President",
                    "The Speaker of the House",
                    "The President Pro Tempore",
                    "The President"
                ]
            },
            {
                questionNumber: 5,
                currentQuestion: "The idea of self-government is in the first three words of the Constitution. What are these words?",
                answerChoices: [
                    "Congress shall make",
                    "We the British",
                    "We the people",
                    "We the Colonists"
                ]
            },
            {
                questionNumber: 6,
                currentQuestion: "What are two rights of all people living in the United States?",
                answerChoices: [
                    "Freedom to petition the government, and freedom to disobey traffic laws",
                    "Freedom of speech and freedom to run for president",
                    "Freedom of religion and freedom to make treaties with other countries",
                    "Freedom of speech and freedom of religion"
                ]
            },
            {
                questionNumber: 7,
                currentQuestion: "What do we show loyalty to when we say the Pledge of Allegiance?",
                answerChoices: [
                    "The United States",
                    "Congress",
                    "Your home state",
                    "The President"
                ]
            }, 
            {
                questionNumber: 8,
                currentQuestion: "Who is the current President of the United States?",
                answerChoices: [
                    "Mike Pence",
                    "Barack Obama",
                    "George W. Bush",
                    "Donald J. Trump"
                ]
            },
            {
                questionNumber: 9,
                currentQuestion: "What is the economic system of the US?",
                answerChoices: [
                    "Communism",
                    "Socialism",
                    "Capitalism",
                    "None of the above"
                ]
            }, 
            {
                questionNumber: 10,
                currentQuestion: "Who is the current Speaker of the House of Representatives?",
                answerChoices: [
                    "Barack Obama",
                    "Hillary Clinton",
                    "Paul Ryan",
                    "Joe Biden"
                ]
            },
            {
                questionNumber: 11,
                currentQuestion: "Name one war fought by the US in the 1800s?",
                answerChoices: [
                    "World War II",
                    "The Mexican-American War",
                    "World War I",
                    "Korean War"
                ]
            },
            {
                questionNumber: 12,
                currentQuestion: "When was the Declaration of Independence Adopted?",
                answerChoices: [
                    "July 4, 1789",
                    "July 4, 1776",
                    "December 7, 1787",
                    "March 4th, 1789"
                ]
            },
            {
                questionNumber: 13,
                currentQuestion: "If the President can no longer serve, who becomes President?",
                answerChoices: [
                    "The President Pro Tempore",
                    "The Secretary of State",
                    "The Speaker of the House",
                    "The Vice President"
                ]
            },
            {
                questionNumber: 14,
                currentQuestion: "Name one of the two longest rivers in the United States.",
                answerChoices: [
                    "The Rio Grande River",
                    "The Ohio River",
                    "The Colorado River",
                    "The Mississippi"
                ]
            },
            {
                questionNumber: 15,
                currentQuestion: "Name the ocean on the EAST coast of the United States",
                answerChoices: [
                    "The Arctic Ocean",
                    "The Atlantic Ocean",
                    "The Indian Ocean",
                    "The Pacific Ocean"
                ]
            },
            {
                questionNumber: 16,
                currentQuestion: "How many amendments does the US Constitution currently have?",
                answerChoices: [
                    "21",
                    "23",
                    "10",
                    "27"
                ]
            },
            {
                questionNumber: 17,
                currentQuestion: "Name two national holidays",
                answerChoices: [
                    "Valentine's Day and President's Day",
                    "April Fool's Day and Labor Day",
                    "Citizenship Day and Columbus Day",
                    "Labor Day and Thanksgiving"
                ]
            },
            {
                questionNumber: 18,
                currentQuestion: "We elect a US Senator for how many years?",
                answerChoices: [
                    "10",
                    "2",
                    "4",
                    "6"
                ]
            },
            {
                questionNumber: 19,
                currentQuestion: "What do we call the first ten amendments to the US constitution?",
                answerChoices: [
                    "The inalienable rights",
                    "The Declaration of Independence",
                    "The Bill of Rights",
                    "The Articles of Confederation"
                ]
            },
            {
                questionNumber: 20,
                currentQuestion: "When do we celebrate Independence Day?",
                answerChoices: [
                    "June 30",
                    "March 4",
                    "January 1",
                    "July 4"
                ]
            }
        ],
        answerArray: [
            "1", "2", "3", "3",
            "2", "3", "0", "3",
            "2", "2", "1", "1",
            "3", "3", "1", "3",
            "3", "3", "2", "3"
        ]
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
                    "The Fourth Amendment"
                ]
            }   
        ],
        answerArray: ["1", "2", "2"]
    }

];