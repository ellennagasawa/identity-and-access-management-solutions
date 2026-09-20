/* Static, dependency-free study app. No network calls or user accounts. */
(() => {
  'use strict';
  const DATA = window.NETWORK_DECK;
  if (!DATA || !Array.isArray(DATA.terms) || !DATA.terms.length) return;
  const $ = id => document.getElementById(id);
  const TERMS = DATA.terms;
  const TOPICS = DATA.topics;
  const BY_ID = new Map(TERMS.map(term => [term.id, term]));
  // The path keeps progress separate from any other site on the same GitHub Pages origin.
  const KEY = 'networking-vocabulary-v1:' + location.pathname.replace(/index\.html$/, '');
  let ratings = {};
  let storageAvailable = true;
  let mode = 'flashcards';
  let deck = [];
  let cardIndex = 0;
  let revealed = false;
  let round = null;
  let lastActivity = 'match';

  const shuffle = array => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const normalize = text => String(text).normalize('NFKC').toLowerCase()
    .replace(/\+/g, ' plus ').replace(/([a-z])(\d)/g, '$1 $2')
    .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const topicName = id => TOPICS.find(t => t.id === id)?.title || 'All topics';
  const selectedTerms = () => TERMS.filter(t => $('topic').value === 'all' || t.topic === $('topic').value);
  const announce = text => { $('announcement').textContent = text; };
  const make = (tag, text, cls = '') => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (cls) element.className = cls;
    return element;
  };
  const show = (id, visible) => { $(id).hidden = !visible; };

  function storageWarning() {
    $('storage-note').textContent = 'This browser cannot save ratings right now. You can still study, but ratings may be lost when you close or reload the page.';
  }
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      for (const [id, rating] of Object.entries(saved)) {
        if (BY_ID.has(id) && ['known', 'review'].includes(rating)) ratings[id] = rating;
      }
    }
  } catch (_) {
    storageAvailable = false;
    storageWarning();
  }
  function saveRatings() {
    try {
      localStorage.setItem(KEY, JSON.stringify(ratings));
      storageAvailable = true;
      $('storage-note').textContent = 'Your card ratings stay in this browser. They do not update the master roadmap.';
    } catch (_) {
      storageAvailable = false;
      storageWarning();
    }
  }

  for (const topic of TOPICS) {
    const option = make('option', topic.title);
    option.value = topic.id;
    $('topic').append(option);
  }

  function matchesScope(term) {
    const scope = $('scope').value;
    if (scope === 'all') return true;
    if (scope === 'new') return !ratings[term.id];
    return ratings[term.id] === scope;
  }
  function updateStats() {
    const pool = selectedTerms();
    const known = pool.filter(t => ratings[t.id] === 'known').length;
    const review = pool.filter(t => ratings[t.id] === 'review').length;
    $('known-count').textContent = known;
    $('review-count').textContent = review;
    $('new-count').textContent = pool.length - known - review;
    $('reset-topic').disabled = known + review === 0;
    $('reset-topic').textContent = $('topic').value === 'all' ? 'Reset all card ratings' : 'Reset topic ratings';
    $('topic-total').textContent = pool.length + ' terms in this selection';
    for (const activity of document.querySelectorAll('[data-activity="choice"], [data-activity="recall"]')) {
      activity.querySelector('.activity-link').textContent = `Start ${Math.min(10, pool.length)} questions →`;
    }
  }
  function rebuildDeck() {
    deck = selectedTerms().filter(matchesScope);
    cardIndex = 0;
    revealed = false;
    renderCard();
    updateStats();
  }
  function renderCard() {
    const term = deck[cardIndex];
    $('deck-title').textContent = topicName($('topic').value);
    $('deck-count').textContent = deck.length + (deck.length === 1 ? ' card' : ' cards');
    show('empty-deck', !term);
    show('card-area', !!term);
    $('deck-progress').style.width = term ? ((cardIndex + 1) / deck.length * 100) + '%' : '0%';
    $('card-position').textContent = term ? `${cardIndex + 1} / ${deck.length}` : '0 cards';
    $('card-topic').textContent = term ? topicName(term.topic) : '';
    if (!term) {
      $('empty-copy').textContent = $('scope').value === 'review' ? 'No terms are marked Review again in this topic. Rate cards as you study to build a review deck.' : 'No terms match the selected card filter. Choose All cards to keep studying.';
      return;
    }
    const reverse = $('direction').value === 'meaning';
    const card = $('flashcard');
    card.classList.toggle('answer', revealed);
    card.classList.toggle('meaning-front', reverse && !revealed);
    $('card-label').textContent = revealed ? 'ANSWER' : reverse ? 'WHICH TERM?' : 'TERM';
    $('card-term').textContent = reverse && !revealed ? term.definition : term.term;
    $('card-expansion').textContent = term.expansion;
    $('card-definition').textContent = term.definition;
    $('card-note').textContent = term.note;
    show('card-expansion', revealed && !!term.expansion);
    show('card-definition', revealed && !reverse);
    show('card-note', revealed && !!term.note);
    $('flip-hint').textContent = revealed ? 'Tap to return to the question' : reverse ? 'Recall the term, then tap to reveal' : 'Think of the meaning, then tap to reveal';
    card.setAttribute('aria-label', revealed ? `Show question again for ${term.term}` : reverse ? 'Reveal the term for this meaning' : `Reveal meaning for ${term.term}`);
    $('rate-known').disabled = !revealed;
    $('rate-review').disabled = !revealed;
    const label = ratings[term.id] === 'known' ? 'I know this' : ratings[term.id] === 'review' ? 'Review again' : 'Not rated';
    $('rating-hint').textContent = revealed ? `Current rating: ${label}. Choose a rating to move to the next card.` : 'Reveal the answer before rating this card.';
  }
  function flipCard() {
    if (!deck.length) return;
    revealed = !revealed;
    renderCard();
  }
  function moveCard(amount) {
    if (!deck.length) return;
    cardIndex = (cardIndex + amount + deck.length) % deck.length;
    revealed = false;
    renderCard();
    announce(`Card ${cardIndex + 1} of ${deck.length}. ${$('direction').value === 'term' ? deck[cardIndex].term : 'Recall the term.'}`);
  }
  function rateCard(rating) {
    if (!revealed || !deck[cardIndex]) return;
    const term = deck[cardIndex];
    ratings[term.id] = rating;
    saveRatings();
    // Keep the next card in place if the current card leaves a filtered deck.
    const remains = matchesScope(term);
    if (!remains) deck.splice(cardIndex, 1);
    else cardIndex++;
    cardIndex = deck.length ? cardIndex % deck.length : 0;
    revealed = false;
    renderCard();
    updateStats();
    announce(`${term.term} marked ${rating === 'known' ? 'I know this' : 'Review again'}.`);
    if (deck.length) $('flashcard').focus();
    else $('show-all').focus();
  }

  function practiceHome() {
    round = null;
    show('practice-home', true);
    show('practice-round', false);
    show('practice-result', false);
    $('practice-topic').textContent = topicName($('topic').value).toUpperCase();
  }
  function setMode(nextMode) {
    if (!['flashcards', 'practice', 'glossary'].includes(nextMode)) throw new Error('Unknown study mode');
    mode = nextMode;
    for (const button of document.querySelectorAll('[data-mode]')) {
      const active = button.dataset.mode === mode;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      show('panel-' + button.dataset.mode, active);
    }
    show('scope-field', mode === 'flashcards');
    show('direction-field', mode === 'flashcards');
    show('topic-total', mode !== 'flashcards');
    if (mode === 'glossary') renderGlossary();
    updateStats();
  }
  function topicChanged() {
    rebuildDeck();
    practiceHome();
    renderGlossary();
    announce(topicName($('topic').value) + ' selected.');
  }

  function startRound(kind) {
    if (!['match', 'choice', 'recall'].includes(kind)) return;
    lastActivity = kind;
    const pool = selectedTerms();
    const questions = shuffle(pool).slice(0, kind === 'match' ? 5 : 10);
    round = { kind, pool, questions, index: 0, score: 0, answered: false, missed: [], matched: new Set(), selectedTerm: null, selectedDefinition: null, mismatches: 0 };
    show('practice-home', false);
    show('practice-result', false);
    show('practice-round', true);
    show('matching-area', kind === 'match');
    show('question-area', kind !== 'match');
    if (kind === 'match') renderMatching();
    else renderQuestion();
  }
  function renderQuestion() {
    if (!round) return;
    const current = round.questions[round.index];
    round.answered = false;
    $('round-position').textContent = `${round.index + 1} / ${round.questions.length}`;
    $('question-kind').textContent = round.kind === 'choice' ? 'CHOOSE THE MEANING' : 'RECALL THE TERM';
    $('question-prompt').textContent = round.kind === 'choice' ? current.term : current.definition;
    $('choice-options').replaceChildren();
    show('choice-options', round.kind === 'choice');
    show('recall-form', round.kind === 'recall');
    show('next-question', false);
    show('show-answer', true);
    $('recall-answer').value = '';
    $('recall-answer').disabled = false;
    $('check-answer').disabled = false;
    $('answer-feedback').className = 'feedback';
    $('answer-feedback').textContent = '';
    if (round.kind === 'choice') {
      const distractors = shuffle(round.pool.filter(t => t.id !== current.id)).slice(0, 3);
      for (const option of shuffle([current, ...distractors])) {
        const button = make('button', option.definition);
        button.type = 'button';
        button.dataset.answerId = option.id;
        button.addEventListener('click', () => answerQuestion(option.id === current.id, button));
        $('choice-options').append(button);
      }
      $('question-prompt').focus();
    } else $('recall-answer').focus();
  }
  function answerQuestion(correct, clicked = null, shown = false) {
    if (!round || round.answered || round.kind === 'match') return;
    round.answered = true;
    const current = round.questions[round.index];
    if (correct) round.score++;
    else round.missed.push(current);
    for (const button of $('choice-options').querySelectorAll('button')) {
      button.disabled = true;
      if (button.dataset.answerId === current.id) button.classList.add('correct');
      else if (button === clicked) button.classList.add('wrong');
    }
    $('recall-answer').disabled = true;
    $('check-answer').disabled = true;
    const answer = current.term + (current.expansion ? ' — ' + current.expansion : '');
    $('answer-feedback').className = 'feedback ' + (correct ? 'good' : 'bad');
    $('answer-feedback').textContent = (correct ? 'Correct. ' : shown ? 'Answer revealed. ' : 'Not quite. ') + answer + '. ' + current.definition;
    show('show-answer', false);
    show('next-question', true);
    $('next-question').textContent = round.index === round.questions.length - 1 ? 'See results →' : 'Next question →';
    $('next-question').focus();
  }
  function finishRound() {
    if (!round) return;
    show('practice-round', false);
    show('practice-result', true);
    if (round.kind === 'match') {
      $('result-title').textContent = `${round.questions.length} pairs matched`;
      $('result-detail').textContent = `${round.mismatches} mismatched ${round.mismatches === 1 ? 'attempt' : 'attempts'}. Try a new round to keep recalling the meanings.`;
    } else {
      $('result-title').textContent = `${round.score} / ${round.questions.length} correct`;
      $('result-detail').textContent = round.missed.length ? 'Review these terms, then try another round.' : 'You recalled every answer in this round. Try another topic or a different activity.';
    }
    $('result-review').replaceChildren();
    for (const term of round.missed) $('result-review').append(make('li', term.term + ' — ' + term.definition));
    $('result-title').focus();
  }
  function renderMatching() {
    $('match-terms').replaceChildren();
    $('match-definitions').replaceChildren();
    $('match-feedback').className = 'feedback';
    $('match-feedback').textContent = 'Choose any term to begin.';
    $('round-position').textContent = `0 / ${round.questions.length} pairs`;
    for (const term of round.questions) {
      const button = make('button', term.term);
      button.type = 'button';
      button.dataset.id = term.id;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => selectMatch('term', term.id));
      $('match-terms').append(button);
    }
    for (const term of shuffle(round.questions)) {
      const button = make('button', term.definition);
      button.type = 'button';
      button.dataset.id = term.id;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => selectMatch('definition', term.id));
      $('match-definitions').append(button);
    }
    $('match-terms').querySelector('button')?.focus();
  }
  function selectMatch(side, id) {
    if (!round || round.kind !== 'match' || round.matched.has(id)) return;
    if (side === 'term') round.selectedTerm = round.selectedTerm === id ? null : id;
    else round.selectedDefinition = round.selectedDefinition === id ? null : id;
    if (round.selectedTerm && round.selectedDefinition) {
      if (round.selectedTerm === round.selectedDefinition) {
        round.matched.add(id);
        $('match-feedback').textContent = 'Matched: ' + BY_ID.get(id).term + '.';
        $('match-feedback').className = 'feedback good';
      } else {
        round.mismatches++;
        $('match-feedback').textContent = 'Those do not match. Try the pair again.';
        $('match-feedback').className = 'feedback bad';
      }
      round.selectedTerm = null;
      round.selectedDefinition = null;
    } else {
      $('match-feedback').className = 'feedback';
      $('match-feedback').textContent = round.selectedTerm ? 'Now select its meaning.' : round.selectedDefinition ? 'Now select its term.' : 'Choose a term or meaning.';
    }
    for (const [container, selected] of [['match-terms', round.selectedTerm], ['match-definitions', round.selectedDefinition]]) {
      for (const button of $(container).querySelectorAll('button')) {
        const matched = round.matched.has(button.dataset.id);
        const active = button.dataset.id === selected;
        button.disabled = matched;
        button.classList.toggle('matched', matched);
        button.classList.toggle('selected', active);
        button.setAttribute('aria-pressed', String(active));
        const term = BY_ID.get(button.dataset.id);
        button.textContent = (matched ? '✓ ' : '') + (container === 'match-terms' ? term.term : term.definition);
      }
    }
    $('round-position').textContent = `${round.matched.size} / ${round.questions.length} pairs`;
    if (round.matched.size === round.questions.length) finishRound();
    else if (document.activeElement?.disabled) $('match-terms').querySelector('button:not(:disabled)')?.focus();
  }

  function renderGlossary() {
    const query = normalize($('search').value);
    const list = selectedTerms().filter(term => normalize([term.term, term.expansion, term.definition, term.note, ...term.aliases].join(' ')).includes(query));
    $('glossary-count').textContent = list.length + (list.length === 1 ? ' term' : ' terms');
    $('glossary-list').replaceChildren();
    show('glossary-empty', list.length === 0);
    for (const term of list) {
      const article = document.createElement('article');
      article.className = 'glossary-entry';
      article.append(make('span', topicName(term.topic), 'topic'), make('h3', term.term));
      if (term.expansion) article.append(make('p', term.expansion, 'exp'));
      article.append(make('p', term.definition, 'meaning'));
      if (term.note) article.append(make('p', term.note, 'note'));
      $('glossary-list').append(article);
    }
  }

  $('flashcard').addEventListener('click', flipCard);
  $('previous').addEventListener('click', () => moveCard(-1));
  $('next').addEventListener('click', () => moveCard(1));
  $('shuffle').addEventListener('click', () => { deck = shuffle(deck); cardIndex = 0; revealed = false; renderCard(); announce('Cards shuffled.'); });
  $('rate-known').addEventListener('click', () => rateCard('known'));
  $('rate-review').addEventListener('click', () => rateCard('review'));
  $('topic').addEventListener('change', topicChanged);
  $('scope').addEventListener('change', rebuildDeck);
  $('direction').addEventListener('change', () => { revealed = false; renderCard(); });
  $('show-all').addEventListener('click', () => { $('scope').value = 'all'; rebuildDeck(); $('flashcard').focus(); });
  $('reset-topic').addEventListener('click', () => {
    const label = $('topic').value === 'all' ? 'all topics' : topicName($('topic').value);
    if (!window.confirm(`Reset card ratings for ${label}? This only clears this site's ratings in this browser.`)) return;
    for (const term of selectedTerms()) delete ratings[term.id];
    saveRatings(); rebuildDeck(); announce('Card ratings reset.');
  });
  for (const tab of document.querySelectorAll('[data-mode]')) {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
    tab.addEventListener('keydown', event => {
      const tabs = [...document.querySelectorAll('[data-mode]')];
      let index = tabs.indexOf(tab);
      if (event.key === 'ArrowRight') index = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') index = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') index = 0;
      else if (event.key === 'End') index = tabs.length - 1;
      else return;
      event.preventDefault(); event.stopPropagation();
      setMode(tabs[index].dataset.mode); tabs[index].focus();
    });
  }
  document.addEventListener('keydown', event => {
    const tag = event.target.tagName;
    if (mode !== 'flashcards' || ['INPUT','TEXTAREA','SELECT'].includes(tag) || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); moveCard(event.key === 'ArrowRight' ? 1 : -1); }
  });
  for (const button of document.querySelectorAll('[data-activity]')) button.addEventListener('click', () => startRound(button.dataset.activity));
  $('leave-round').addEventListener('click', () => { practiceHome(); document.querySelector('[data-activity]')?.focus(); });
  $('back-to-activities').addEventListener('click', () => { practiceHome(); document.querySelector('[data-activity]')?.focus(); });
  $('retry-round').addEventListener('click', () => startRound(lastActivity));
  $('show-answer').addEventListener('click', () => answerQuestion(false, null, true));
  $('next-question').addEventListener('click', () => {
    if (!round || !round.answered) return;
    round.index++;
    if (round.index === round.questions.length) finishRound(); else renderQuestion();
  });
  $('recall-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!round || round.answered) return;
    const value = normalize($('recall-answer').value);
    if (!value) { $('answer-feedback').textContent = 'Enter a term, or choose Show answer.'; return; }
    const current = round.questions[round.index];
    const accepted = [current.term, current.expansion, ...current.aliases].filter(Boolean).map(normalize);
    answerQuestion(accepted.includes(value));
  });
  $('search').addEventListener('input', renderGlossary);

  rebuildDeck();
  practiceHome();
  renderGlossary();
  if (!storageAvailable) storageWarning();

  // Optional page tools use exactly the same study views as the visible controls.
  if (document.modelContext?.registerTool) {
    const lifecycle = new AbortController();
    const state = () => ({ mode, topic: $('topic').value, cardCount: deck.length, totalTerms: TERMS.length, ratings: { known: selectedTerms().filter(t => ratings[t.id] === 'known').length, review: selectedTerms().filter(t => ratings[t.id] === 'review').length }, activeActivity: round?.kind || null });
    const register = tool => { try { Promise.resolve(document.modelContext.registerTool(tool, {signal:lifecycle.signal})).catch(() => {}); } catch (_) {} };
    register({ name:'get_study_state', description:'Read the current networking vocabulary view and local card-rating counts.', inputSchema:{type:'object',properties:{},additionalProperties:false}, annotations:{readOnlyHint:true}, execute:state });
    register({ name:'open_study_view', description:'Open an existing flashcard, practice, or vocabulary view for a topic. Changing topic ends the current practice round; this does not rate cards or update roadmap mastery.', inputSchema:{type:'object',properties:{mode:{type:'string',enum:['flashcards','practice','glossary']},topic:{type:'string',enum:['all',...TOPICS.map(t=>t.id)]}},required:['mode','topic'],additionalProperties:false}, annotations:{readOnlyHint:false}, execute:input=>{if(!input||!['flashcards','practice','glossary'].includes(input.mode)||!['all',...TOPICS.map(t=>t.id)].includes(input.topic))throw new Error('Invalid study view');$('topic').value=input.topic;topicChanged();setMode(input.mode);return state();} });
    window.addEventListener('pagehide', () => lifecycle.abort(), {once:true});
  }
})();
