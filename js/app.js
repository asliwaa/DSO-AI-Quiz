// LOGIKA APLIKACJI QUIZOWEJ

// Formatuje tekst wewnątrz backticków ` ` na znacznik <code>
function formatText(text) {
    return text.replace(/`([^`]+)`/g, '<code>$1</code>');
}

const UI = {
    select: document.getElementById('categorySelect'),
    emptyState: document.getElementById('emptyState'),
    quizArea: document.getElementById('quizArea'),
    qCounter: document.getElementById('questionCounter'),
    qText: document.getElementById('questionText'),
    optionsList: document.getElementById('optionsList'),
    scoreText: document.getElementById('scoreText'),
    btnCheck: document.getElementById('btnCheck'),
    btnNext: document.getElementById('btnNext'),
    btnReset: document.getElementById('btnReset'),
    correctBox: document.getElementById('correctAnswersBox'),
    correctList: document.getElementById('correctAnswersList')
};

let state = {
    currentCategoryIndex: -1,
    unaskedQuestions: [],
    currentQuestion: null,
    currentOptions: [],
    score: 0,
    askedCount: 0
};

// Tasowanie tablicy odpowiedzi
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Inicjalizacja menu
function init() {
    db.categories.forEach((cat, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = cat.name + ` (${cat.questions.length} pytań)`;
        UI.select.appendChild(option);
    });

    // Jeśli jest tylko jedna kategoria, wybierz ją automatycznie
    if (db.categories.length === 1) {
        UI.select.value = "0";
        state.currentCategoryIndex = 0;
        UI.emptyState.style.display = 'none';
        UI.quizArea.style.display = 'block';
        resetProgress();
    }
}

// Zmiana kategorii
UI.select.addEventListener('change', (e) => {
    const index = parseInt(e.target.value);
    state.currentCategoryIndex = index;
    if (index === -1) {
        UI.emptyState.style.display = 'block';
        UI.quizArea.style.display = 'none';
    } else {
        UI.emptyState.style.display = 'none';
        UI.quizArea.style.display = 'block';
        resetProgress();
    }
});

// Resetowanie progresu
function resetProgress() {
    if(state.currentCategoryIndex === -1) return;
    state.unaskedQuestions = [...db.categories[state.currentCategoryIndex].questions];
    state.score = 0;
    state.askedCount = 0;
    updateScoreDisplay();
    nextQuestion();
}

UI.btnReset.addEventListener('click', resetProgress);

// Rysowanie nowego pytania
function nextQuestion() {
    UI.correctBox.style.display = 'none';
    UI.btnCheck.style.display = 'block';
    UI.btnNext.style.display = 'none';
    UI.optionsList.innerHTML = '';

    if (state.unaskedQuestions.length === 0) {
        UI.qText.innerHTML = "🎉 <b>Koniec pytań w tej kategorii!</b>";
        UI.btnCheck.style.display = 'none';
        return;
    }

    const rIndex = Math.floor(Math.random() * state.unaskedQuestions.length);
    state.currentQuestion = state.unaskedQuestions.splice(rIndex, 1)[0];
    state.askedCount++;

    // DYNAMICZNY LICZNIK: Pobiera łączną liczbę pytań bezpośrednio z obiektu kategorii
    const totalInCat = db.categories[state.currentCategoryIndex].questions.length;
    UI.qCounter.textContent = `Pytanie ${state.askedCount} z ${totalInCat}`;
    UI.qText.innerHTML = formatText(state.currentQuestion.question);

    let combinedOptions = state.currentQuestion.answers.map((ans, idx) => ({
        text: ans,
        isCorrect: state.currentQuestion.values[idx]
    }));
    
    state.currentOptions = shuffleArray(combinedOptions);

    state.currentOptions.forEach((opt, index) => {
        const label = document.createElement('label');
        label.className = 'option-item';
        
        label.innerHTML = `
            <input type="checkbox" value="${index}">
            <span class="option-text">${formatText(opt.text)}</span>
        `;
        UI.optionsList.appendChild(label);
    });
}

UI.btnNext.addEventListener('click', nextQuestion);

// Sprawdzanie odpowiedzi z pełną 4-stanową weryfikacją
UI.btnCheck.addEventListener('click', () => {
    const items = UI.optionsList.querySelectorAll('.option-item');
    let isPerfectlyCorrect = true;

    UI.correctList.innerHTML = '';

    items.forEach((item, index) => {
        const checkbox = item.querySelector('input');
        const isChecked = checkbox.checked;
        const isCorrectAnswer = state.currentOptions[index].isCorrect;

        // Blokujemy checkbox po sprawdzeniu
        checkbox.disabled = true;
        item.style.cursor = "default";

        if (isCorrectAnswer) {
            const li = document.createElement('li');
            li.innerHTML = formatText(state.currentOptions[index].text);
            UI.correctList.appendChild(li);
        }

        // Logika kolorowania 4 stanów
        if (isChecked && isCorrectAnswer) {
            item.classList.add('correct-hit');
        } 
        else if (!isChecked && !isCorrectAnswer) {
            item.classList.add('good-ignore');
        } 
        else if (isChecked && !isCorrectAnswer) {
            item.classList.add('wrong-hit');
            isPerfectlyCorrect = false;
        } 
        else if (!isChecked && isCorrectAnswer) {
            item.classList.add('missed-correct');
            isPerfectlyCorrect = false;
        }
    });

    if (isPerfectlyCorrect) {
        state.score++;
    } else {
        UI.correctBox.style.display = 'block';
    }

    updateScoreDisplay();
    UI.btnCheck.style.display = 'none';
    UI.btnNext.style.display = 'block';
});

// Aktualizacja wyniku
function updateScoreDisplay() {
    const percentage = state.askedCount === 0 ? 0 : Math.round((state.score / state.askedCount) * 100);
    UI.scoreText.textContent = `${state.score} / ${state.askedCount} (${percentage}%)`;
}

// Start
init();