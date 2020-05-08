var form = {
    text: document.querySelector('#newQuestion'),
    addButton: document.querySelector('#addQuestionButton')
};

var questions = document.querySelector('#kysymykset');

function addQuestion() {
    const text = form.text.value;
    const question = document.createElement('div');

    question.classList.add('question');
    question.innerHTML = `<div class='questionText'>${text}</div>`;

    questions.appendChild(question);

    form.text.value = '';
    form.text.focus();
}

form.addButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("click");
    if (form.text.value != '') {
        addQuestion();
    }
})