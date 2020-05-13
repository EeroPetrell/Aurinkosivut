var questions = document.querySelector('#kysymykset');
var kysymyslista = [];
var mones = 0;

function addQuestion() {
    //console.log(questions);
    const form = {}
    form.text = document.getElementById("newQuestion").value;
    form.liket = 0;
    form.mones = mones;
    kysymyslista.push(form);
    //console.log(kysymyslista);
    const question = document.createElement('div');
    question.classList.add('question');
    question.innerHTML =
        `<div class="kysymys">
            <p>${form.text}</p>
            <button onclick = "like(${form.mones})" id="likenappi">${form.liket}<img src="kuvat/like.svg" id="likelogo"></button>
        </div>
        <div class="vastaus"><p>Asiantuntija vastaa kysymykseen pian!</p></div>`;
    questions.appendChild(question);
    mones += 1;
    form.text.value = '';
}

function like(i) {
    //console.log(i);
    var kymysys = kysymyslista[i];
    //console.log(kymysys);
    kymysys.liket += 1;
    const lapset = questions.childNodes;
    const moi = lapset[i];
    console.log(moi);
    moi.innerHTML = 
    `   <div class="kysymys">
            <p>${kysymyslista[i].text}</p>
            <button onclick = "like(${kysymyslista[i].mones})" id="likenappi">${kysymyslista[i].liket}<img src="kuvat/like.svg" id="likelogo"></button>
        </div>
        <div class="vastaus"><p>Asiantuntija vastaa kysymykseen pian!</p></div>`;
}
