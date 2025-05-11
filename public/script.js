// --- Уровни ---
const LEVELS = [
  { name: "Зелебоба (Первые шаги)", min: 0, color: "#bdbdbd", img: "1-min.png" },
  { name: "Малыш-ученик", min: 20, color: "#aeea00", img: "2-min.png" },
  { name: "Джун великих познаний", min: 40, color: "#8bc34a", img: "3-min.png" },
  { name: "Новичок", min: 60, color: "#81c784", img: "4-min.png" },
  { name: "Уверенный новичок", min: 80, color: "#4caf50", img: "5-min.png" },
  { name: "Младший исследователь", min: 100, color: "#388e3c", img: "6-min.png" },
  { name: "Средний исследователь", min: 120, color: "#43a047", img: "7-min.png" },
  { name: "Старший исследователь", min: 140, color: "#689f38", img: "8-min.png" },
  { name: "Знаток слов", min: 160, color: "#558b2f", img: "9-min.png" },
  { name: "Мастер слов", min: 180, color: "#33691e", img: "10-min.png" },
  { name: "Ассистент переводчика", min: 200, color: "#cddc39", img: "11-min.png" },
  { name: "Переводчик-стажёр", min: 220, color: "#ffeb3b", img: "12-min.png" },
  { name: "Переводчик", min: 240, color: "#ffc107", img: "13-min.png" },
  { name: "Старший переводчик", min: 260, color: "#ffb300", img: "14-min.png" },
  { name: "Легенда перевода", min: 280, color: "#ffd600", img: "15-min.png" },
  { name: "Властелин языков", min: 300, color: "#ffd600", img: "16-min.png" }
];

// --- Достижения ---
const ACHIEVEMENTS = [
  { id: "first_word", text: "🎉 Первое добавленное слово", check: (stats, words, wordStats) => words.length >= 1 },
  { id: "five_words", text: "📝 5 слов в словаре", check: (stats, words, wordStats) => words.length >= 5 },
  { id: "ten_words", text: "📚 10 слов в словаре", check: (stats, words, wordStats) => words.length >= 10 },
  { id: "fifty_words", text: "🏆 50 слов в словаре", check: (stats, words, wordStats) => words.length >= 50 },
  { id: "first_answer", text: "🚀 Первый ответ на вопрос", check: (stats, words, wordStats) => stats.total >= 1 },
  { id: "ten_answers", text: "🔟 10 вопросов отвечено", check: (stats, words, wordStats) => stats.total >= 10 },
  { id: "fifty_answers", text: "💯 50 вопросов отвечено", check: (stats, words, wordStats) => stats.total >= 50 },
  { id: "hundred_answers", text: "💯 100 вопросов отвечено", check: (stats, words, wordStats) => stats.total >= 100 },
  { id: "first_correct", text: "✅ Первый правильный ответ", check: (stats, words, wordStats) => stats.correct >= 1 },
  { id: "ten_correct", text: "🎯 10 правильных ответов", check: (stats, words, wordStats) => stats.correct >= 10 },
  { id: "fifty_correct", text: "🏅 50 правильных ответов", check: (stats, words, wordStats) => stats.correct >= 50 },
  { id: "hundred_correct", text: "🥇 100 правильных ответов", check: (stats, words, wordStats) => stats.correct >= 100 },
  { id: "first_wrong", text: "❌ Первый неправильный ответ", check: (stats, words, wordStats) => stats.wrong >= 1, negative: true },
  { id: "ten_wrong", text: "😬 10 ошибок", check: (stats, words, wordStats) => stats.wrong >= 10, negative: true },
  { id: "fifty_wrong", text: "😱 50 ошибок", check: (stats, words, wordStats) => stats.wrong >= 50, negative: true },
  { id: "hundred_wrong", text: "🤦 100 ошибок", check: (stats, words, wordStats) => stats.wrong >= 100, negative: true },
  { id: "no_mistakes_10", text: "🦸 10 подряд без ошибок", check: (stats, words, wordStats) => stats.streak >= 10 },
  { id: "no_mistakes_25", text: "🦸‍♂️ 25 подряд без ошибок", check: (stats, words, wordStats) => stats.streak >= 25 },
  { id: "fast_answer", text: "⚡ Быстрый ответ (<3 сек)", check: (stats, words, wordStats) => stats.fastAnswer },
  { id: "slow_answer", text: "🐢 Медленный ответ (>30 сек)", check: (stats, words, wordStats) => stats.slowAnswer, negative: true },
  { id: "night_owl", text: "🌙 Ответил ночью", check: (stats, words, wordStats) => stats.nightAnswer },
  { id: "morning_bird", text: "🌅 Ответил утром", check: (stats, words, wordStats) => stats.morningAnswer },
  { id: "association_master", text: "🔗 20 вопросов с ассоциациями", check: (stats, words, wordStats) => stats.assocQuestions >= 20 },
  { id: "association_fail", text: "💤 5 ошибок в ассоциациях", check: (stats, words, wordStats) => stats.assocWrong >= 5, negative: true },
  { id: "edit_word", text: "✏️ Отредактировал слово", check: (stats, words, wordStats) => stats.editedWord },
  { id: "delete_word", text: "🗑️ Удалил слово", check: (stats, words, wordStats) => stats.deletedWord, negative: true },
  { id: "add_association", text: "💡 Добавил ассоциацию", check: (stats, words, wordStats) => stats.addedAssociation },
  { id: "no_association", text: "🤔 Нет ассоциации у слова", check: (stats, words, wordStats) => stats.noAssociation, negative: true },
  { id: "full_dictionary", text: "📖 Заполнил словарь до 100 слов", check: (stats, words, wordStats) => words.length >= 100 },
  { id: "empty_dictionary", text: "🕳️ Пустой словарь", check: (stats, words, wordStats) => words.length === 0, negative: true },
  { id: "first_association", text: "🔗 Первый вопрос с ассоциацией", check: (stats, words, wordStats) => stats.assocQuestions >= 1 },
  { id: "first_edit", text: "✏️ Первое редактирование", check: (stats, words, wordStats) => stats.editedWord },
  { id: "first_delete", text: "🗑️ Первое удаление", check: (stats, words, wordStats) => stats.deletedWord, negative: true },
  { id: "first_add_association", text: "💡 Первая ассоциация", check: (stats, words, wordStats) => stats.addedAssociation },
  { id: "first_no_association", text: "🤔 Первое слово без ассоциации", check: (stats, words, wordStats) => stats.noAssociation, negative: true },
];

// --- Telegram WebApp Integration ---
let tgWebApp;

function initTelegram() {
  if (window.Telegram && Telegram.WebApp) {
    tgWebApp = Telegram.WebApp;
    
    // Развернуть приложение на весь экран
    tgWebApp.expand();
    
    // Настройка цветовой схемы
    setupTheme();
    
    // Инициализация кнопки "Назад"
    setupBackButton();
    
    // Показать данные пользователя (для отладки)
    const user = getUserData();
    if (user) {
      console.log('User data:', user);
    }
  }
}

function setupTheme() {
  if (!tgWebApp) return;
  
  const theme = tgWebApp.colorScheme;
  document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  
  tgWebApp.onEvent('themeChanged', () => {
    const newTheme = tgWebApp.colorScheme;
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
  });
}

function setupBackButton() {
  if (!tgWebApp) return;
  
  tgWebApp.BackButton.onClick(() => {
    const activeTab = document.querySelector('.tab-content.active').id;
    if (activeTab !== 'addWordTab') {
      switchTab('addWordTab');
    }
  });
}

function getUserData() {
  if (tgWebApp) {
    const user = tgWebApp.initDataUnsafe.user;
    if (user) {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        photoUrl: user.photo_url
      };
    }
  }
  return null;
}

// --- Storage helpers (используем localStorage и Telegram Cloud Storage) ---
async function getWords(cb) {
  try {
    // Сначала пробуем получить из облака Telegram
    if (tgWebApp) {
      const cloudData = await tgWebApp.CloudStorage.getItem('lingua_words');
      if (cloudData) {
        cb(JSON.parse(cloudData));
        return;
      }
    }
    
    // Если нет, берем из localStorage
    const words = JSON.parse(localStorage.getItem('words') || [];
    cb(words);
  } catch (e) {
    console.error('Error getting words:', e);
    cb([]);
  }
}

async function setWords(words, cb) {
  try {
    localStorage.setItem('words', JSON.stringify(words));
    
    // Пробуем сохранить в облако Telegram
    if (tgWebApp) {
      await tgWebApp.CloudStorage.setItem('lingua_words', JSON.stringify(words));
    }
    
    if (cb) cb();
  } catch (e) {
    console.error('Error saving words:', e);
    if (cb) cb();
  }
}

async function getStats(cb) {
  try {
    if (tgWebApp) {
      const cloudData = await tgWebApp.CloudStorage.getItem('lingua_stats');
      if (cloudData) {
        cb(JSON.parse(cloudData));
        return;
      }
    }
    
    const stats = JSON.parse(localStorage.getItem('stats')) || {total:0, correct:0, wrong:0, streak:0};
    cb(stats);
  } catch (e) {
    console.error('Error getting stats:', e);
    cb({total:0, correct:0, wrong:0, streak:0});
  }
}

async function setStats(stats, cb) {
  try {
    localStorage.setItem('stats', JSON.stringify(stats));
    
    if (tgWebApp) {
      await tgWebApp.CloudStorage.setItem('lingua_stats', JSON.stringify(stats));
    }
    
    if (cb) cb();
  } catch (e) {
    console.error('Error saving stats:', e);
    if (cb) cb();
  }
}

async function getWordStats(cb) {
  try {
    if (tgWebApp) {
      const cloudData = await tgWebApp.CloudStorage.getItem('lingua_word_stats');
      if (cloudData) {
        cb(JSON.parse(cloudData));
        return;
      }
    }
    
    const wordStats = JSON.parse(localStorage.getItem('wordStats')) || {};
    cb(wordStats);
  } catch (e) {
    console.error('Error getting word stats:', e);
    cb({});
  }
}

async function setWordStats(wordStats, cb) {
  try {
    localStorage.setItem('wordStats', JSON.stringify(wordStats));
    
    if (tgWebApp) {
      await tgWebApp.CloudStorage.setItem('lingua_word_stats', JSON.stringify(wordStats));
    }
    
    if (cb) cb();
  } catch (e) {
    console.error('Error saving word stats:', e);
    if (cb) cb();
  }
}

// --- UI helpers ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
  
  // Управление кнопкой "Назад"
  if (tgWebApp) {
    if (tabId === 'addWordTab') {
      tgWebApp.BackButton.hide();
    } else {
      tgWebApp.BackButton.show();
    }
  }
}

// --- Translation fields logic ---
function renderTranslationFields(values = ['']) {
  const translationsDiv = document.getElementById('translations');
  translationsDiv.innerHTML = '';
  values.forEach((val, idx) => {
    const group = document.createElement('div');
    group.className = 'translation-group';
    group.innerHTML = `
      <input type="text" value="${val || ''}" placeholder="Translation (Russian)">
      <button type="button" class="remove-translation" ${values.length === 1 ? 'style="display:none"' : ''}>-</button>
      ${idx === values.length - 1 ? '<button type="button" class="add-translation">+</button>' : ''}
    `;
    translationsDiv.appendChild(group);
  });
}

// --- Add/Edit word logic ---
let editIndex = null;
document.getElementById('wordForm').onsubmit = function(e) {
  e.preventDefault();
  const english = document.getElementById('englishWord').value.trim();
  const translations = Array.from(document.querySelectorAll('#translations input')).map(i => i.value.trim()).filter(Boolean);
  const association = document.getElementById('association').value.trim();
  
  if (!english || !translations.length) {
    showAlert('Заполните все поля!');
    return;
  }
  
  getWords(words => {
    if (editIndex !== null) {
      words[editIndex] = { english, translations, association };
      editIndex = null;
    } else {
      words.push({ english, translations, association });
      
      // Уведомление о новом слове
      if (tgWebApp) {
        tgWebApp.HapticFeedback.notificationOccurred('success');
        showAlert(`Слово "${english}" добавлено!`);
      }
    }
    
    setWords(words, () => {
      renderWordList();
      renderTranslationFields();
      document.getElementById('englishWord').value = '';
      document.getElementById('association').value = '';
      getStats(stats => {
        stats.addedAssociation = association ? true : stats.addedAssociation;
        setStats(stats, updateStatsBlock);
      });
    });
  });
};

// --- Word list logic ---
function renderWordList() {
  getWords(words => {
    getWordStats(wordStats => {
      const ul = document.getElementById('wordList');
      ul.innerHTML = '';
      words.forEach((w, i) => {
        const stats = wordStats[w.english] || { correct: 0, wrong: 0 };
        const total = stats.correct + stats.wrong;
        const percent = total ? Math.round((stats.correct / total) * 100) : 0;
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="word-item-row">
            <span class="word-main">${w.english} - ${w.translations.join(', ')}</span>
            <span class="word-stats">
              <span title="Всего вопросов">❓${total}</span>
              <span title="Процент правильных">✅${percent}%</span>
            </span>
            <span class="word-actions">
              <button class="edit-word" data-i="${i}">✏️</button>
              <button class="delete-word" data-i="${i}">🗑️</button>
            </span>
          </div>
        `;
        ul.appendChild(li);
      });
      document.getElementById('wordCount').textContent = words.length;
    });
  });
}

// --- Question logic ---
let questionTimer = null, timeLeft = 60;
let questionActive = false;
let questionInformer = document.getElementById('questionInformer');

function setQuestionInformer(active) {
  questionInformer.classList.toggle('active', !!active);
}

function startQuestionTimer() {
  timeLeft = 60;
  document.getElementById('timer').textContent = `Осталось: ${timeLeft} сек.`;
  if (questionTimer) clearInterval(questionTimer);
  questionTimer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Осталось: ${timeLeft} сек.`;
    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      document.getElementById('timer').textContent = 'Время вышло!';
      showAnswerAnimation(false);
      setTimeout(() => {
        questionActive = false;
        setQuestionInformer(false);
        switchTab('addWordTab');
      }, 1200);
      updateStats(false, null, "timeout");
      startNextQuestionTimer();
    }
  }, 1000);
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function generateQuestion() {
  getWords(words => {
    if (!words.length) {
      showAlert('Добавьте слова в словарь для начала тренировки!');
      return;
    }
    
    getWordStats(wordStats => {
      // Выбор слова для спец. вопроса (если есть)
      let eligible = Object.entries(wordStats).filter(([k, v]) => (v.correct + v.wrong) >= 5);
      let useInputType = false, inputWord = null, inputType = null;
      if (eligible.length && Math.random() < 0.5) {
        // 50% шанс на спец. вопрос
        let [word, stats] = eligible[Math.floor(Math.random() * eligible.length)];
        inputWord = word;
        inputType = Math.random() < 0.5 ? 'en' : 'ru';
        useInputType = true;
      }
      
      let type = useInputType ? 'input' : shuffle(['ru', 'en', 'assoc'])[0];
      let word = words[Math.floor(Math.random() * words.length)];
      let correct, options, assocWord, assoc;
      let questionText = '';
      
      if (type === 'input') {
        let w = words.find(w => w.english === inputWord);
        if (inputType === 'en') {
          questionText = `Напишите по-английски: <b>${w.translations[0]}</b>`;
          correct = w.english.toLowerCase();
        } else {
          questionText = `Напишите перевод: <b>${w.english}</b>`;
          correct = w.translations[0].toLowerCase();
        }
        document.getElementById('questionText').innerHTML = questionText;
        document.getElementById('answerButtons').innerHTML = `
          <input type="text" id="inputAnswer" placeholder="Ваш ответ">
          <button id="submitInputAnswer">OK</button>
        `;
        let answered = false;
        document.getElementById('submitInputAnswer').onclick = () => {
          if (answered) return;
          answered = true;
          clearInterval(questionTimer);
          let val = document.getElementById('inputAnswer').value.trim().toLowerCase();
          let isCorrect = val === correct;
          showAnswerAnimation(isCorrect);
          setTimeout(() => {
            questionActive = false;
            setQuestionInformer(false);
            switchTab('addWordTab');
          }, 1200);
          updateStats(isCorrect, inputWord, inputType);
          startNextQuestionTimer();
        };
        document.getElementById('inputAnswer').onkeydown = e => {
          if (e.key === 'Enter') document.getElementById('submitInputAnswer').click();
        };
      } else {
        if (type === 'ru') {
          questionText = `Переведите на русский: <b>${word.english}</b>`;
          correct = word.translations[0];
          options = [correct, ...shuffle(words.flatMap(w => w.translations).filter(t => t !== correct)).slice(0, 3)];
        } else if (type === 'en') {
          questionText = `Переведите на английский: <b>${word.translations[0]}</b>`;
          correct = word.english;
          options = [correct, ...shuffle(words.map(w => w.english).filter(e => e !== correct)).slice(0, 3)];
        } else {
          // Ассоциация: даётся ассоциация, варианты — слова
          let assocWords = words.filter(w => w.association);
          if (!assocWords.length) { 
            type = 'ru'; 
            questionText = `Переведите на русский: <b>${word.english}</b>`; 
            correct = word.translations[0]; 
            options = [correct, ...shuffle(words.flatMap(w => w.translations).filter(t => t !== correct)).slice(0, 3)]; 
          } else {
            assocWord = assocWords[Math.floor(Math.random() * assocWords.length)];
            assoc = assocWord.association;
            questionText = `Какое слово связано с ассоциацией <b>${assoc}</b>?`;
            correct = assocWord.english;
            options = [correct, ...shuffle(words.map(w => w.english).filter(e => e !== correct)).slice(0, 3)];
          }
        }
        
        options = shuffle(options);
        const ab = document.getElementById('answerButtons');
        ab.innerHTML = '';
        document.getElementById('questionText').innerHTML = questionText;
        let answered = false;
        options.forEach(opt => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          btn.onclick = () => {
            if (answered) return;
            answered = true;
            clearInterval(questionTimer);
            ab.innerHTML = '';
            let isCorrect = opt === correct;
            showAnswerAnimation(isCorrect);
            setTimeout(() => {
              questionActive = false;
              setQuestionInformer(false);
              switchTab('addWordTab');
            }, 1200);
            updateStats(isCorrect, type === 'assoc' ? assocWord.english : word.english, type);
            startNextQuestionTimer();
          };
          ab.appendChild(btn);
        });
      }
      startQuestionTimer();
      questionActive = true;
      setQuestionInformer(true);
    });
  });
}

function showAnswerAnimation(isCorrect) {
  document.getElementById('answerButtons').innerHTML = '';
  document.getElementById('questionText').innerHTML = isCorrect
    ? '<span style="font-size:2em;">✅</span> <span>Правильно!</span>'
    : '<span style="font-size:2em;">❌</span> <span>Неправильно!</span>';
  
  // Тактильная обратная связь
  if (tgWebApp) {
    tgWebApp.HapticFeedback.impactOccurred(isCorrect ? 'light' : 'heavy');
  }
}

// --- Прогресс и достижения ---
function updateProgress() {
  getStats(stats => {
    let score = stats.correct - Math.floor(stats.wrong / 2);
    if (score < 0) score = 0;
    let level = LEVELS[0];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (score >= LEVELS[i].min) { level = LEVELS[i]; break; }
    }
    document.getElementById('character').style.borderColor = level.color;
    document.getElementById('levelName').textContent = level.name;
    document.getElementById('levelName').style.color = level.color;
    document.getElementById('character').src = "img/" + level.img;
    
    // Уведомление о новом уровне (если достигнут)
    if (stats.lastLevel !== level.name) {
      stats.lastLevel = level.name;
      setStats(stats);
      
      if (tgWebApp) {
        showAlert(`Поздравляем! Новый уровень: ${level.name}`);
      }
    }
  });
}

function getAllAchievements(stats, words, wordStats) {
  let ach = [];
  for (const a of ACHIEVEMENTS) {
    if (a.check(stats, words, wordStats)) {
      const achieved = stats.achievedAt?.[a.id] || Date.now();
      ach.push({ id: a.id, text: a.text, time: achieved, negative: a.negative });
      
      // Уведомление о новом достижении
      if (!stats.achievedAt?.[a.id]) {
        stats.achievedAt = stats.achievedAt || {};
        stats.achievedAt[a.id] = achieved;
        setStats(stats);
        
        if (tgWebApp) {
          showAlert(`Новое достижение: ${a.text}`);
        }
      }
    }
  }
  
  // Достижения по словам
  for (const word in wordStats) {
    if (wordStats[word].correct >= 10) {
      const id = `know_${word}`;
      if (!stats.achievedAt?.[id]) {
        const time = Date.now();
        ach.push({ id, text: `🌟 Знает слово "${word}"`, time });
        stats.achievedAt = stats.achievedAt || {};
        stats.achievedAt[id] = time;
        setStats(stats);
        
        if (tgWebApp) {
          showAlert(`Вы хорошо знаете слово "${word}"!`);
        }
      }
    }
    if (wordStats[word].wrong >= 5) {
      const id = `bad_${word}`;
      if (!stats.achievedAt?.[id]) {
        const time = Date.now();
        ach.push({ id, text: `😵 Плохо знает слово "${word}"`, time, negative: true });
        stats.achievedAt = stats.achievedAt || {};
        stats.achievedAt[id] = time;
        setStats(stats);
      }
    }
  }
  
  ach.sort((a, b) => b.time - a.time);
  return ach;
}

function updateAchievements() {
  getStats(stats => {
    getWords(words => {
      getWordStats(wordStats => {
        const unlocked = getAllAchievements(stats, words, wordStats);
        let html = unlocked.slice(0,5).map(a => `<span class="achievement${a.negative ? ' negative' : ''}">${a.text}</span>`).join('');
        if (unlocked.length > 5) html += `<button id="showAllAch">Показать все (${unlocked.length})</button>`;
        document.getElementById('achievementsList').innerHTML = html;
        document.getElementById('showAllAch')?.addEventListener('click', () => {
          document.getElementById('achievementsList').innerHTML = unlocked.map(a => `<span class="achievement${a.negative ? ' negative' : ''}">${a.text}</span>`).join('');
        });
        if (!unlocked.length) document.getElementById('achievementsList').innerHTML = '<span style="color:#bbb;">Пока нет достижений</span>';
      });
    });
  });
}

function updateStatsBlock() {
  getStats(stats => {
    document.getElementById('statCorrect').textContent = stats.correct || 0;
    document.getElementById('statWrong').textContent = stats.wrong || 0;
    updateProgress();
    updateAchievements();
  });
}

function updateStats(isCorrect, word, type) {
  getStats(stats => {
    stats.total = (stats.total || 0) + 1;
    if (isCorrect) {
      stats.correct = (stats.correct || 0) + 1;
      stats.streak = (stats.streak || 0) + 1;
    } else {
      stats.wrong = (stats.wrong || 0) + 1;
      stats.streak = 0;
    }
    
    if (type === "assoc") {
      stats.assocQuestions = (stats.assocQuestions || 0) + 1;
      if (!isCorrect) stats.assocWrong = (stats.assocWrong || 0) + 1;
    }
    
    // Время ответа
    if (typeof timeLeft !== "undefined") {
      if (timeLeft >= 57) stats.fastAnswer = true;
      if (timeLeft <= 30) stats.slowAnswer = true;
    }
    
    // Время суток
    let hour = new Date().getHours();
    if (hour >= 0 && hour < 6) stats.nightAnswer = true;
    if (hour >= 6 && hour < 10) stats.morningAnswer = true;
    
    setStats(stats, updateStatsBlock);
  });
  
  if (word) {
    getWordStats(wordStats => {
      wordStats[word] = wordStats[word] || { correct: 0, wrong: 0 };
      if (isCorrect) wordStats[word].correct++;
      else wordStats[word].wrong++;
      setWordStats(wordStats, updateAchievements);
    });
  }
}

// --- Таймер до следующего вопроса ---
function updateNextQuestionTimer() {
  const last = parseInt(localStorage.getItem('lastQuestionTime') || Date.now());
  const now = Date.now();
  let left = 600 - Math.floor((now - last) / 1000);
  if (left < 0) left = 0;
  const min = Math.floor(left / 60).toString().padStart(2, '0');
  const sec = (left % 60).toString().padStart(2, '0');
  document.getElementById('nextQuestionTimer').textContent = `${min}:${sec}`;
}

function startNextQuestionTimer() {
  localStorage.setItem('lastQuestionTime', Date.now());
  setTimeout(() => {
    questionActive = true;
    setQuestionInformer(true);
    switchTab('questionsTab');
    generateQuestion();
  }, 600000); // 10 минут
}

// --- Уведомления ---
function showAlert(message) {
  if (tgWebApp) {
    tgWebApp.showAlert(message);
  } else {
    alert(message);
  }
}

// --- Инициализация ---
function init() {
  initTelegram();
  
  // Обработчики событий
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-translation')) {
      const inputs = Array.from(document.querySelectorAll('#translations input')).map(i => i.value);
      renderTranslationFields([...inputs, '']);
    }
    if (e.target.classList.contains('remove-translation')) {
      const inputs = Array.from(document.querySelectorAll('#translations input')).map(i => i.value);
      const idx = Array.from(document.querySelectorAll('.remove-translation')).indexOf(e.target);
      inputs.splice(idx, 1);
      renderTranslationFields(inputs.length ? inputs : ['']);
    }
  });
  
  document.getElementById('wordList').onclick = function(e) {
    if (e.target.classList.contains('delete-word')) {
      const idx = +e.target.dataset.i;
      getWords(words => {
        const word = words[idx].english;
        words.splice(idx, 1);
        setWords(words, renderWordList);
        getStats(stats => { 
          stats.deletedWord = true; 
          setStats(stats, updateStatsBlock);
          
          if (tgWebApp) {
            showAlert(`Слово "${word}" удалено`);
          }
        });
      });
    }
    if (e.target.classList.contains('edit-word')) {
      const idx = +e.target.dataset.i;
      getWords(words => {
        const w = words[idx];
        document.getElementById('englishWord').value = w.english;
        renderTranslationFields(w.translations);
        document.getElementById('association').value = w.association;
        editIndex = idx;
        switchTab('addWordTab');
        getStats(stats => { 
          stats.editedWord = true; 
          setStats(stats, updateStatsBlock);
        });
      });
    }
  };
  
  document.querySelectorAll('.tab').forEach(tab => {
    tab.onclick = () => {
      if (tab.dataset.tab === 'questionsTab' && !questionActive) return;
      switchTab(tab.dataset.tab);
    };
  });
  
  // Первоначальная загрузка данных
  renderTranslationFields();
  renderWordList();
  updateStatsBlock();
  updateNextQuestionTimer();
  
  // Проверка, нужно ли сразу показать вопрос
  const showQuestion = localStorage.getItem('showQuestion');
  if (showQuestion) {
    questionActive = true;
    setQuestionInformer(true);
    switchTab('questionsTab');
    generateQuestion();
    localStorage.removeItem('showQuestion');
    localStorage.setItem('lastQuestionTime', Date.now());
  }
  
  // Обновление таймера каждую секунду
  setInterval(updateNextQuestionTimer, 1000);
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);