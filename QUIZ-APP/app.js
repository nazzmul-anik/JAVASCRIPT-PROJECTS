const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'Html',
        'b': 'Css',
        'c': 'JavaScript',
        'd': 'Php',
        'correct': 'a'
    },
    {
        'que': 'Which year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of above',
        'correct': 'b'
    },
    {
        'que': 'What does Css stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Nation',
        'd': 'Nothing',
        'correct': 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 1}. ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans + ", " + data.correct);
    if (ans === data.correct) right++;
    else wrong++;
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center;">
        <h2>Thank you for playing the quiz.</h2>
        <h1>Result : ${right}/${total} are correct.</h1>
    </div>
    `
}

loadQuestion();