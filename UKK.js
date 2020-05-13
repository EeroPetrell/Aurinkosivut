//luodaan muuttujat html-tiedostosta poimittaville kysymyksille,
//tiedoston sisäiseen käyttöön luotavien kysymys-olioiden tallentamiseen
//(mikäli palvelu toteutettaisiin oikeasti, tämä tallennettaisiin johonkin
//pysyvään tietokantaan) ja indeksin käsittelemiseksi.
var questions = document.querySelector('#kysymykset');
var kysymyslista = [];
var mones = 0;

//funktio jota kutsutaan klikattaessa kysymyssivun "lähetä"-painiketta
function addQuestion() {

    const form = {} //yhden kysymyksen tekstin ja tykkäykset tallentava olio
    form.text = document.getElementById("newQuestion").value;
    form.liket = 0;
    form.mones = mones;
    kysymyslista.push(form); //tallennetaan olio listaan

    //luodaan uusi div lisättäväksi html:lään
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

//funktio jota kutsutaan klikattaessa tykkää-painiketta kysymyskessä
//(saa parametrikseen tykätyn kysymyksen järjestysnumeron kysymyslistassa)
function like(i) {

    //poimitaan oikea kysymysolio talteen muuttujaan ja lisätään liket-kentän arvoa yhdellä
    var kysymys = kysymyslista[i];
    kysymys.liket += 1;

    //poimitaan elementti html-tiedostosta ja vaihdetaan sen html-koodi uuden tykkäysmäärän mukaiseksi
    const htmlKysymyselementti = questions.childNodes[i];
    htmlKysymyselementti.innerHTML =
    `   <div class="kysymys">
            <p>${kysymyslista[i].text}</p>
            <button onclick = "like(${kysymyslista[i].mones})" id="likenappi">${kysymyslista[i].liket}<img src="kuvat/like.svg" id="likelogo"></button>
        </div>
        <div class="vastaus"><p>Asiantuntija vastaa kysymykseen pian!</p></div>`;
}
