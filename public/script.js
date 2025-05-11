// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

tg.expand(); // Развернуть приложение на весь экран
tg.MainButton.setText("Готово").hide();

// Переменные для хранения данных
let words = [];
let stats = { total: 0, correct: 0, wrong: 0, streak: 0 };

// Обработчики вкладок
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  });
});

// Добавление слова
document.getElementById('wordForm').addEventListener('submit', e => {
  e.preventDefault();
  const english = document.getElementById('englishWord').value.trim();
  const translations = Array.from(document.querySelectorAll('#translations input')).map(i => i.value.trim()).filter(Boolean);
  const association = document.getElementById('association').value.trim();

  if (!english || !translations.length) {
    alert('Заполните все поля!');
    return;
  }

  words.push({ english, translations, association });
  renderWordList();
  document.getElementById('wordForm').reset();
  renderTranslationFields();
});

// Отображение списка слов
function renderWordList() {
  const ul = document.getElementById('wordList');
  ul.innerHTML = '';
  words.forEach((w, i) => {
    const li = document.createElement('li');
    li.textContent = `${w.english} - ${w.translations.join(', ')}`;
    ul.appendChild(li);
  });
  document.getElementById('wordCount').textContent = words.length;
}

// Генерация вопроса
function generateQuestion() {
  if (!words.length) {
    alert('Добавьте слова для начала!');
    return;
  }

  const word = words[Math.floor(Math.random() * words.length)];
  const type = Math.random() < 0.5 ? 'en' : 'ru';

  let questionText, correctAnswer;
  if (type === 'en') {
    questionText = `Переведите на английский: ${word.translations[0]}`;
    correctAnswer = word.english;
  } else {
    questionText = `Переведите на русский: ${word.english}`;
    correctAnswer = word.translations[0];
  }

  document.getElementById('questionText').textContent = questionText;
  const answerButtons = document.getElementById('answerButtons');
  answerButtons.innerHTML = '';

  const options = shuffle([correctAnswer, ...getRandomOptions(correctAnswer)]);
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => handleAnswer(option === correctAnswer, correctAnswer);
    answerButtons.appendChild(btn);
  });
}

// Обработка ответа
function handleAnswer(isCorrect, correctAnswer) {
  if (isCorrect) {
    stats.correct++;
  } else {
    stats.wrong++;
  }
  stats.total++;
  updateStats();
  alert(isCorrect ? 'Правильно!' : `Неправильно! Правильный ответ: ${correctAnswer}`);
  generateQuestion();
}

// Обновление статистики
function updateStats() {
  document.getElementById('statCorrect').textContent = stats.correct;
  document.getElementById('statWrong').textContent = stats.wrong;
}

// Утилиты
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomOptions(correctAnswer) {
  return words
    .filter(w => w.english !== correctAnswer)
    .map(w => w.translations[0])
    .slice(0, 3);
}

// Инициализация
function init() {
  renderTranslationFields();
}

init();
