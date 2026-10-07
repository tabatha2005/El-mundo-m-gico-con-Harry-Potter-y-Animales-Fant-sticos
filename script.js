/* ==========================================================================
   WIZARDING WORLD CHRONOLOGY & INTERACTIVE HUB - SCRIPT PRINCIPAL
   ========================================================================== */

// --- 1. MOTOR DE AUDIO MÁGICO (Web Audio API: 100% offline & sin dependencias) ---
class MagicAudioEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.initAudio();
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio API no soportada en este entorno");
    }
  }

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  // Sonido de campana celestial / chimes mágicos
  playChime(freq = 880, duration = 0.5) {
    if (!this.soundEnabled || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Hechizo / lanzamiento de varita
  playSpellCast() {
    if (!this.soundEnabled || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  // Daño o error en duelo
  playImpactSound() {
    if (!this.soundEnabled || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  // Burbujeo de poción
  playBubbleSound() {
    if (!this.soundEnabled || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const randFreq = 400 + Math.random() * 300;
    osc.frequency.setValueAtTime(randFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(randFreq + 200, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  // Fanfarria de victoria
  playFanfare() {
    if (!this.soundEnabled || !this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playChime(freq, 0.4), i * 140);
    });
  }
}

const magicAudio = new MagicAudioEngine();

// --- 2. FONDO DE ESTRELLAS Y PARTÍCULAS MÁGICAS ---
function initMagicCanvas() {
  const canvas = document.getElementById('magic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = 80;

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
      pulse: Math.random() * Math.PI,
      color: Math.random() > 0.3 ? '#e2b755' : '#88a0ff'
    });
  }

  function renderStars() {
    ctx.clearRect(0, 0, width, height);

    for (let star of stars) {
      star.pulse += star.speed;
      const alpha = Math.abs(Math.sin(star.pulse)) * 0.8 + 0.2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = star.radius * 6;
      ctx.shadowColor = star.color;
      ctx.fill();
      ctx.restore();

      // Movimiento muy sutil hacia arriba
      star.y -= 0.15;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }
    }

    requestAnimationFrame(renderStars);
  }

  renderStars();
}

// --- 3. GESTOR DE CRONOLOGÍA DE PELÍCULAS ---
let currentOrderMode = 'chronological'; // 'chronological' o 'release'
let currentSagaFilter = 'all'; // 'all', 'harry-potter', 'fantastic-beasts'
let currentSearchQuery = '';

function getSortedAndFilteredMovies() {
  let list = [...WIZARDING_DATA.movies];

  // Filtro por saga
  if (currentSagaFilter !== 'all') {
    list = list.filter(m => m.saga === currentSagaFilter);
  }

  // Filtro por búsqueda
  if (currentSearchQuery.trim()) {
    const q = currentSearchQuery.toLowerCase();
    list = list.filter(m => 
      m.title.toLowerCase().includes(q) ||
      m.originalTitle.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.timelineYear.toLowerCase().includes(q) ||
      m.mainCast.some(c => c.actor.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)) ||
      m.creatures.some(c => c.toLowerCase().includes(q))
    );
  }

  // Ordenamiento
  if (currentOrderMode === 'chronological') {
    // El orden base de WIZARDING_DATA.movies ya está rigurosamente en orden cronológico in-universe (1926 -> 1998)
    return list;
  } else {
    // Orden por año de estreno cinematográfico
    return list.sort((a, b) => a.releaseYear - b.releaseYear);
  }
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const movies = getSortedAndFilteredMovies();

  if (movies.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">📜</p>
        <h3 style="font-family: var(--font-serif); margin-bottom: 0.5rem;">No se encontraron películas mágicas</h3>
        <p>Intenta ajustar el término de búsqueda o cambia los filtros de saga.</p>
      </div>
    `;
    return;
  }

  let html = '<div class="timeline-track">';

  movies.forEach((movie, index) => {
    const isEven = index % 2 === 0;
    const badgeNumber = currentOrderMode === 'chronological' ? (index + 1) : movie.releaseYear;

    html += `
      <div class="timeline-item" style="--badge-color: ${movie.badgeColor};">
        <div class="timeline-node" title="${currentOrderMode === 'chronological' ? 'Orden Cronológico' : 'Año de Estreno'}">
          ${badgeNumber}
        </div>
        <div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-header">
            <span class="timeline-badge">
              <span>⏳</span> Año ${movie.timelineYear}
            </span>
            <span class="saga-tag">
              ${movie.saga === 'fantastic-beasts' ? 'Animales Fantásticos' : 'Harry Potter'}
            </span>
          </div>

          <h3 class="movie-title">${movie.title}</h3>
          <div class="movie-original-title">${movie.originalTitle} (${movie.releaseYear})</div>

          <div class="movie-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Director</span>
              <span class="meta-value">${movie.director}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Duración</span>
              <span class="meta-value">${movie.duration}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Estreno en Cines</span>
              <span class="meta-value">${movie.releaseYear}</span>
            </div>
          </div>

          <p class="movie-synopsis">${movie.synopsis}</p>

          <div class="movie-quote">
            "${movie.iconicQuote}"
          </div>

          <div class="movie-creatures-preview">
            ${movie.creatures.slice(0, 3).map(c => `<span class="creature-pill">🐾 ${c}</span>`).join('')}
            ${movie.creatures.length > 3 ? `<span class="creature-pill">+${movie.creatures.length - 3} más</span>` : ''}
          </div>

          <div class="movie-card-footer">
            <span style="font-size: 0.8rem; color: var(--text-muted);">
              ✨ ${movie.facts.length} Datos Curiosos
            </span>
            <button class="btn-details" onclick="openMovieModal('${movie.id}')">
              <span>Ver Detalles y Secretos</span> ⚡
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

// Modal de Detalles de Película
function openMovieModal(movieId) {
  const movie = WIZARDING_DATA.movies.find(m => m.id === movieId);
  if (!movie) return;

  const modalBackdrop = document.getElementById('movie-modal');
  const modalBody = document.getElementById('modal-body-content');

  magicAudio.playSpellCast();

  modalBody.innerHTML = `
    <div style="border-bottom: 1px solid rgba(226, 183, 85, 0.2); padding-bottom: 1.2rem; margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 0.6rem; align-items: center; margin-bottom: 0.5rem;">
        <span class="timeline-badge" style="border-color: ${movie.badgeColor}; color: ${movie.badgeColor};">
          ⏳ Cronología: ${movie.timelineYear}
        </span>
        <span class="filter-chip" style="font-size: 0.75rem;">Estreno: ${movie.releaseYear}</span>
        <span class="filter-chip" style="font-size: 0.75rem;">${movie.duration}</span>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.3rem;">${movie.title}</h2>
      <div style="color: var(--text-muted); font-style: italic;">${movie.originalTitle} | Dirigida por ${movie.director}</div>
      <p style="color: var(--primary-gold); font-size: 0.95rem; margin-top: 0.5rem; font-weight: 500;">
        "${movie.tagline}"
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-serif); color: var(--primary-gold); margin-bottom: 0.5rem;">📖 Sinopsis Completa</h4>
      <p style="color: #e5e7eb; font-size: 0.95rem; line-height: 1.6;">${movie.synopsis}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-serif); color: var(--primary-gold); margin-bottom: 0.5rem;">🎭 Reparto Principal y Personajes</h4>
      <div class="modal-cast-list">
        ${movie.mainCast.map(c => `
          <div class="cast-item">
            <div class="cast-actor">${c.actor}</div>
            <div class="cast-role">${c.role}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-serif); color: var(--primary-gold); margin-bottom: 0.5rem;">🐉 Criaturas y Entidades Mágicas</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
        ${movie.creatures.map(cr => `<span class="creature-pill" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">✨ ${cr}</span>`).join('')}
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-serif); color: var(--primary-gold); margin-bottom: 0.5rem;">🎬 Secretos de Rodaje y Datos Curiosos</h4>
      <ul class="modal-facts-list">
        ${movie.facts.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div style="background: rgba(0,0,0,0.4); border-radius: 12px; padding: 1rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; font-size: 0.88rem;">
      <div>
        <span style="color: var(--text-muted); display: block;">💰 Taquilla Mundial</span>
        <strong style="color: #fff;">${movie.boxOffice}</strong>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">🎵 Tema Principal</span>
        <strong style="color: #fff;">${movie.soundtrackTheme}</strong>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">✍️ Guion</span>
        <strong style="color: #fff;">${movie.screenplay}</strong>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
  const modalBackdrop = document.getElementById('movie-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// --- 4. SECCIÓN DE DATOS INTERESANTES Y TRIVIA ---
function renderTriviaSection(category = 'all') {
  const container = document.getElementById('trivia-grid-container');
  if (!container) return;

  let facts = WIZARDING_DATA.generalTrivia;
  if (category !== 'all') {
    facts = facts.filter(f => f.category.toLowerCase().includes(category.toLowerCase()));
  }

  container.innerHTML = facts.map(f => `
    <div class="trivia-card">
      <div>
        <div class="trivia-card-top">
          <span style="font-size: 1.3rem;">${f.icon}</span>
          <span class="trivia-category-badge">${f.category}</span>
        </div>
        <h4 class="trivia-title">${f.title}</h4>
        <p class="trivia-fact">${f.fact}</p>
      </div>
    </div>
  `).join('');
}

function showRandomFact() {
  magicAudio.playChime(660, 0.4);

  // Mezclar curiosidades de películas y curiosidades generales
  const allFacts = [];
  WIZARDING_DATA.movies.forEach(m => {
    m.facts.forEach(fact => {
      allFacts.push({
        source: m.title,
        text: fact
      });
    });
  });
  WIZARDING_DATA.generalTrivia.forEach(g => {
    allFacts.push({
      source: g.title,
      text: g.fact
    });
  });

  const random = allFacts[Math.floor(Math.random() * allFacts.length)];
  const factBanner = document.getElementById('random-fact-text');
  const factSource = document.getElementById('random-fact-source');

  if (factBanner && factSource) {
    factBanner.style.opacity = '0';
    setTimeout(() => {
      factBanner.textContent = `"${random.text}"`;
      factSource.textContent = `⚡ Origen: ${random.source}`;
      factBanner.style.opacity = '1';
    }, 200);
  }

  // Toast flotante
  showToast("¡Nuevo dato mágico revelado!");
}

// --- 5. JUEGOS INTERACTIVOS ---

// Switcher de pestañas de juegos
function switchGameTab(gameId) {
  magicAudio.playChime(500, 0.2);

  document.querySelectorAll('.game-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.game === gameId);
  });

  document.querySelectorAll('.game-container').forEach(panel => {
    panel.classList.toggle('active', panel.id === `game-panel-${gameId}`);
  });
}

/* ==========================================
   JUEGO 1: EL SOMBRERO SELECCIONADOR
   ========================================== */
let sortingState = {
  currentQuestionIndex: 0,
  scores: { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 }
};

function initSortingHatGame() {
  sortingState = {
    currentQuestionIndex: 0,
    scores: { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 }
  };

  const container = document.getElementById('sorting-game-content');
  if (!container) return;

  renderSortingQuestion();
}

function renderSortingQuestion() {
  const container = document.getElementById('sorting-game-content');
  const qIndex = sortingState.currentQuestionIndex;
  const questions = WIZARDING_DATA.sortingQuestions;

  if (qIndex >= questions.length) {
    revealHouseResult();
    return;
  }

  const q = questions[qIndex];
  const progressPercent = ((qIndex + 1) / questions.length) * 100;

  container.innerHTML = `
    <div class="sorting-progress-bar">
      <div class="sorting-progress-fill" style="width: ${progressPercent}%;"></div>
    </div>

    <div class="question-box">
      <div class="question-number">Pregunta ${qIndex + 1} de ${questions.length}</div>
      <h3 class="question-title">"${q.question}"</h3>
    </div>

    <div class="answers-grid">
      ${q.answers.map((ans, i) => `
        <button class="answer-card" onclick="selectSortingAnswer('${ans.house}', ${ans.points})">
          <span style="font-size: 1.2rem;">✨</span>
          <span>${ans.text}</span>
        </button>
      `).join('')}
    </div>
  `;
}

function selectSortingAnswer(house, points) {
  sortingState.scores[house] = (sortingState.scores[house] || 0) + points;
  magicAudio.playSpellCast();
  sortingState.currentQuestionIndex++;
  renderSortingQuestion();
}

function revealHouseResult() {
  magicAudio.playFanfare();
  const container = document.getElementById('sorting-game-content');

  // Determinar la casa ganadora
  let winningHouse = 'Gryffindor';
  let highestScore = -1;

  for (const [house, score] of Object.entries(sortingState.scores)) {
    if (score > highestScore) {
      highestScore = score;
      winningHouse = house;
    }
  }

  const houseData = WIZARDING_DATA.housesInfo[winningHouse];

  container.innerHTML = `
    <div class="sorting-result-screen">
      <div class="house-result-crest">
        ${winningHouse === 'Gryffindor' ? '🦁' : winningHouse === 'Slytherin' ? '🐍' : winningHouse === 'Ravenclaw' ? '🦅' : '🦡'}
      </div>
      <div style="text-transform: uppercase; color: var(--primary-gold); letter-spacing: 0.2em; font-size: 0.9rem;">
        ¡El Sombrero ha tomado su decisión!
      </div>
      <h2 class="house-result-name" style="color: ${houseData.accentColor}; font-family: var(--font-decorative);">
        ¡${houseData.name.toUpperCase()}!
      </h2>
      <p class="house-result-desc">${houseData.description}</p>

      <div class="house-details-box">
        <div>
          <span style="color: var(--text-muted); display: block;">Fundador</span>
          <strong>${houseData.founder}</strong>
        </div>
        <div>
          <span style="color: var(--text-muted); display: block;">Colores</span>
          <strong>${houseData.colors}</strong>
        </div>
        <div>
          <span style="color: var(--text-muted); display: block;">Elemento</span>
          <strong>${houseData.element}</strong>
        </div>
        <div>
          <span style="color: var(--text-muted); display: block;">Rasgos</span>
          <strong>${houseData.traits}</strong>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn-magic btn-magic-primary" onclick="applyHouseTheme('${winningHouse.toLowerCase()}')">
          🪄 Adoptar Tema de ${winningHouse}
        </button>
        <button class="btn-magic btn-magic-secondary" onclick="initSortingHatGame()">
          🔄 Probar de nuevo
        </button>
      </div>
    </div>
  `;
}

/* ==========================================
   JUEGO 2: DUELO DE HECHIZOS & TRIVIA
   ========================================== */
let duelState = {
  playerHP: 100,
  enemyHP: 100,
  currentRound: 0,
  isFinished: false
};

function initDuelGame() {
  duelState = {
    playerHP: 100,
    enemyHP: 100,
    currentRound: 0,
    isFinished: false
  };
  renderDuelRound();
}

function renderDuelRound() {
  const container = document.getElementById('duel-game-content');
  if (!container) return;

  if (duelState.isFinished) return;

  const spells = WIZARDING_DATA.duelSpells;
  const spellIndex = duelState.currentRound % spells.length;
  const item = spells[spellIndex];

  container.innerHTML = `
    <div class="duel-arena">
      <div class="duel-header">
        <div class="combatant player">
          <div class="combatant-avatar">🧙‍♂️</div>
          <div class="combatant-info">
            <div class="combatant-name">Tú (Mago Defensor)</div>
            <div class="hp-bar">
              <div class="hp-fill" style="width: ${duelState.playerHP}%;"></div>
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${duelState.playerHP} / 100 HP</div>
          </div>
        </div>

        <div class="duel-center-vs">VS</div>

        <div class="combatant enemy">
          <div class="combatant-avatar">🦹‍♂️</div>
          <div class="combatant-info">
            <div class="combatant-name">Mortífago Tenebroso</div>
            <div class="hp-bar">
              <div class="hp-fill" style="width: ${duelState.enemyHP}%;"></div>
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${duelState.enemyHP} / 100 HP</div>
          </div>
        </div>
      </div>

      <div class="duel-question-card">
        <div class="duel-spell-tag">Hechizo en Duelo: ${item.spell} (${item.category})</div>
        <div class="duel-question-text">${item.question}</div>

        <div class="duel-options-grid">
          ${item.options.map((opt, i) => `
            <button class="duel-opt-btn" onclick="handleDuelAnswer(${i}, ${item.correct}, '${item.spell}')">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="duel-round-feedback" class="duel-feedback"></div>
      </div>
    </div>
  `;
}

function handleDuelAnswer(selectedIdx, correctIdx, spellName) {
  const feedback = document.getElementById('duel-round-feedback');
  const buttons = document.querySelectorAll('.duel-opt-btn');

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIdx === correctIdx) {
    magicAudio.playSpellCast();
    buttons[selectedIdx].classList.add('correct');
    duelState.enemyHP = Math.max(0, duelState.enemyHP - 35);

    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = 'rgba(16, 185, 129, 0.2)';
      feedback.style.border = '1px solid #10b981';
      feedback.innerHTML = `<strong>¡Encantamiento Perfecto!</strong> Has conjurado <em>${spellName}</em> acertadamente y acertaste al mortífago. (-35 HP al rival)`;
    }
  } else {
    magicAudio.playImpactSound();
    buttons[selectedIdx].classList.add('wrong');
    buttons[correctIdx].classList.add('correct');
    duelState.playerHP = Math.max(0, duelState.playerHP - 30);

    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = 'rgba(239, 68, 68, 0.2)';
      feedback.style.border = '1px solid #ef4444';
      feedback.innerHTML = `<strong>¡El hechizo falló!</strong> El contrahechizo oscuro te alcanzó. (-30 HP a tu escudo)`;
    }
  }

  setTimeout(() => {
    if (duelState.enemyHP <= 0) {
      duelState.isFinished = true;
      magicAudio.playFanfare();
      renderDuelVictory();
    } else if (duelState.playerHP <= 0) {
      duelState.isFinished = true;
      renderDuelDefeat();
    } else {
      duelState.currentRound++;
      renderDuelRound();
    }
  }, 1600);
}

function renderDuelVictory() {
  const container = document.getElementById('duel-game-content');
  container.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1rem;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">🏆 ⚡</div>
      <h2 style="font-family: var(--font-decorative); color: var(--primary-gold); margin-bottom: 0.8rem;">
        ¡Victoria en el Duelo Mágico!
      </h2>
      <p style="color: #e5e7eb; max-width: 600px; margin: 0 auto 1.5rem auto;">
        Tus conocimientos y dominio de los encantamientos han desarmado y derrotado a las fuerzas tenebrosas. El Ministerio y Hogwarts reconocen tu valentía.
      </p>
      <button class="btn-magic btn-magic-primary" onclick="initDuelGame()">
        ⚔️ Retar a otro Oponente
      </button>
    </div>
  `;
}

function renderDuelDefeat() {
  const container = document.getElementById('duel-game-content');
  container.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1rem;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">💀</div>
      <h2 style="font-family: var(--font-decorative); color: #ef4444; margin-bottom: 0.8rem;">
        Has caído en el Duelo
      </h2>
      <p style="color: #e5e7eb; max-width: 600px; margin: 0 auto 1.5rem auto;">
        Tu concentración flaqueó y la magia oscura superó tus defensas. Pero en Hogwarts siempre hay segundas oportunidades para aprender de los errores.
      </p>
      <button class="btn-magic btn-magic-primary" onclick="initDuelGame()">
        ⚡ Reintentar Duelo
      </button>
    </div>
  `;
}

/* ==========================================
   JUEGO 3: DESCUBRE TU PATRONUS
   ========================================== */
function invokePatronus() {
  const btn = document.getElementById('patronus-cast-btn');
  const resultCard = document.getElementById('patronus-result');
  const orb = document.getElementById('patronus-orb');

  if (!btn || !resultCard) return;

  btn.disabled = true;
  btn.innerHTML = "✨ Conjurando Expecto Patronum...";

  magicAudio.playSpellCast();

  // Animación del orbe
  if (orb) {
    orb.style.transform = "scale(1.3)";
    orb.style.boxShadow = "0 0 100px #fff, 0 0 140px rgba(56, 189, 248, 1)";
  }

  setTimeout(() => {
    magicAudio.playChime(1046, 0.6);

    const patronuses = WIZARDING_DATA.patronusOptions;
    const selected = patronuses[Math.floor(Math.random() * patronuses.length)];

    resultCard.innerHTML = `
      <div style="font-size: 4rem; margin-bottom: 0.5rem;">${selected.symbol}</div>
      <div style="color: #7dd3fc; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.15em;">Tu Guardián Corpóreo</div>
      <h3 style="font-family: var(--font-serif); font-size: 2rem; color: #fff; margin-bottom: 0.5rem;">${selected.name}</h3>
      <div style="color: var(--primary-gold); font-size: 0.95rem; font-weight: 600; margin-bottom: 1rem;">
        🌟 Esencia: ${selected.meaning}
      </div>
      <p style="color: #e0f2fe; line-height: 1.6; max-width: 600px; margin: 0 auto 1.5rem auto;">
        ${selected.description}
      </p>
      <button class="btn-magic btn-magic-secondary" onclick="invokePatronus()">
        🔄 Evocar otro Recuerdo Feliz
      </button>
    `;

    resultCard.style.display = 'block';
    btn.disabled = false;
    btn.innerHTML = "🪄 Expecto Patronum";

    if (orb) {
      orb.style.transform = "scale(1)";
      orb.style.boxShadow = "0 0 50px rgba(56, 189, 248, 0.6)";
    }
  }, 1200);
}

/* ==========================================
   JUEGO 4: LABORATORIO DE POCIONES
   ========================================== */
let potionState = {
  currentRecipe: null,
  currentStepIndex: 0,
  liquidColor: '#3b82f6'
};

function selectPotionRecipe(recipeId) {
  const recipe = WIZARDING_DATA.potionsRecipes.find(r => r.id === recipeId);
  if (!recipe) return;

  potionState.currentRecipe = recipe;
  potionState.currentStepIndex = 0;
  potionState.liquidColor = '#3b82f6';

  updateCauldronUI();
}

function updateCauldronUI() {
  const liquid = document.getElementById('cauldron-liquid');
  const stepText = document.getElementById('potion-step-text');
  const recipeTitle = document.getElementById('potion-recipe-name');
  const recipe = potionState.currentRecipe;

  if (liquid) {
    liquid.style.background = potionState.liquidColor;
  }

  if (recipeTitle && recipe) {
    recipeTitle.textContent = `${recipe.name} (${recipe.difficulty})`;
  }

  if (stepText && recipe) {
    if (potionState.currentStepIndex < recipe.steps.length) {
      const step = recipe.steps[potionState.currentStepIndex];
      stepText.innerHTML = `<strong>Paso ${potionState.currentStepIndex + 1} de ${recipe.steps.length}:</strong> ${step.instruction}`;
    } else {
      stepText.innerHTML = `<strong>¡Poción Completada con Éxito!</strong> Brillando con aroma perfecto.`;
    }
  }
}

function performPotionAction(actionType, param) {
  const recipe = potionState.currentRecipe;
  if (!recipe) return;

  magicAudio.playBubbleSound();

  if (potionState.currentStepIndex >= recipe.steps.length) {
    showToast("¡Esta poción ya está perfecta y lista para embotellar!");
    return;
  }

  const currentRequiredStep = recipe.steps[potionState.currentStepIndex];

  let isMatch = false;
  if (actionType === 'ingredient' && currentRequiredStep.ingredient === param) {
    isMatch = true;
  } else if (actionType === 'action' && currentRequiredStep.action === param) {
    isMatch = true;
  }

  if (isMatch) {
    potionState.currentStepIndex++;
    
    // Cambiar gradualmente hacia el color final de la poción
    if (potionState.currentStepIndex === recipe.steps.length) {
      potionState.liquidColor = recipe.color;
      magicAudio.playFanfare();
      showToast(`¡Excelente trabajo! Has destilado ${recipe.name}.`);
    } else {
      potionState.liquidColor = '#8b5cf6'; // Color intermedio reactivo
    }

    updateCauldronUI();
  } else {
    magicAudio.playImpactSound();
    const liquid = document.getElementById('cauldron-liquid');
    if (liquid) {
      liquid.style.background = '#1f2937'; // Humo gris de error
      setTimeout(() => {
        liquid.style.background = potionState.liquidColor;
      }, 700);
    }
    showToast("¡Cuidado! El caldero chisporrotea. Revisa con atención las notas de Snape.");
  }
}

// --- 6. UTILIDADES Y PERSONALIZACIÓN ---

function applyHouseTheme(house) {
  document.body.setAttribute('data-house', house);
  magicAudio.playChime(750, 0.3);

  // Actualizar botones del selector de la cabecera
  document.querySelectorAll('.house-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.houseTheme === house);
  });

  const houseNameCapital = house.charAt(0).toUpperCase() + house.slice(1);
  showToast(`¡Has activado el aura de la casa ${houseNameCapital}!`);
}

function showToast(message) {
  const toast = document.getElementById('magic-toast');
  if (!toast) return;

  toast.innerHTML = `<span>⚡</span> ${message}`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Chispas al hacer click
function createClickSpark(e) {
  const count = 5;
  for (let i = 0; i < count; i++) {
    const spark = document.createElement('div');
    spark.className = 'spell-spark';
    document.body.appendChild(spark);

    const tx = (Math.random() - 0.5) * 60;
    const ty = (Math.random() - 0.5) * 60;

    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    spark.style.setProperty('--tx', `${tx}px`);
    spark.style.setProperty('--ty', `${ty}px`);

    setTimeout(() => spark.remove(), 800);
  }
}

// --- 7. INICIALIZACIÓN GENERAL ---
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar canvas de partículas
  initMagicCanvas();

  // Renderizar cronología
  renderTimeline();

  // Renderizar trivia
  renderTriviaSection();

  // Inicializar minijuegos
  initSortingHatGame();
  initDuelGame();
  selectPotionRecipe('felix-felicis');

  // Chispas al clickear
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, .answer-card, .trivia-card')) {
      createClickSpark(e);
    }
  });

  // Selector de orden cronológico vs estreno
  document.querySelectorAll('.toggle-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.toggle-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentOrderMode = pill.dataset.order;
      magicAudio.playChime(600, 0.2);
      renderTimeline();
    });
  });

  // Selector de saga en el filtro
  document.querySelectorAll('.filter-chip[data-saga]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-saga]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSagaFilter = chip.dataset.saga;
      magicAudio.playChime(600, 0.2);
      renderTimeline();
    });
  });

  // Búsqueda en tiempo real
  const searchInput = document.getElementById('search-movie-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderTimeline();
    });
  }

  // Toggle de sonido
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isEnabled = magicAudio.toggleSound();
      soundBtn.innerHTML = isEnabled ? '🔊' : '🔇';
      showToast(isEnabled ? "Efectos de sonido activados" : "Sonido silenciado");
    });
  }

  // --- Control de Música de Fondo de Harry Potter ---
  const bgMusic = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle-btn');
  if (musicBtn && bgMusic) {
    bgMusic.volume = 0.4; // Volumen agradable de fondo al 40%

    musicBtn.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play().then(() => {
          musicBtn.innerHTML = '⏸️';
          musicBtn.style.borderColor = 'var(--primary-gold)';
          musicBtn.style.boxShadow = '0 0 12px var(--accent-glow)';
          showToast('🎶 Reproduciendo música de Harry Potter');
        }).catch(err => {
          console.warn('Audio no disponible o bloqueado:', err);
          showToast('⚠️ Coloca el archivo "musica.mp3" en la carpeta para escuchar la música');
        });
      } else {
        bgMusic.pause();
        musicBtn.innerHTML = '🎵';
        musicBtn.style.borderColor = '';
        musicBtn.style.boxShadow = '';
        showToast('Música pausada');
      }
    });
  }

  // Cerrar modal con tecla Escape o click fuera
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMovieModal();
  });

  const modalBackdrop = document.getElementById('movie-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeMovieModal();
    });
  }
});
