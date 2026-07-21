export function renderWeekDays({ container, dates, selectedDate, currentDate, summaryFor, weekdayFor, dayNumberFor, iconFor, onSelect }) {
  container.innerHTML = dates.map(date => {
    const summary = summaryFor(date);
    const complete = summary.sessions.length || summary.score >= 4;
    const selected = date === selectedDate;
    const icon = complete ? '✓' : summary.planned === 'Recovery' ? '·' : iconFor(summary.planned);
    return `<button class="day-tile ${selected ? 'is-selected' : ''} ${date === currentDate ? 'is-today' : ''}" data-date="${date}" aria-pressed="${selected}"><small>${weekdayFor(date)}</small><b>${dayNumberFor(date)}</b><span>${icon}</span></button>`;
  }).join('');
  container.querySelectorAll('button').forEach(button => button.addEventListener('click', () => onSelect(button.dataset.date)));
}

export function renderProgrammeWeeks({ container, currentWeek, targetFor, sessionCountFor, onSelect }) {
  container.innerHTML = Array.from({ length: 12 }, (_, index) => {
    const week = index + 1;
    const sessions = sessionCountFor(week);
    const label = sessions ? `${sessions} sessions` : week < currentWeek ? 'Keep going' : week === currentWeek ? 'This week' : 'Ahead';
    return `<button class="week-card ${week === currentWeek ? 'is-current' : ''}" data-week="${week}" aria-pressed="${week === currentWeek}"><small>WEEK ${week}</small><b>${targetFor(week).toFixed(1)} kg</b><span>${label}</span></button>`;
  }).join('');
  container.querySelectorAll('button').forEach(button => button.addEventListener('click', () => onSelect(Number(button.dataset.week))));
}

export function selectedDayView({ date, currentDate, summary, formattedDate }) {
  const label = date === currentDate ? 'TODAY' : formattedDate.toUpperCase();
  const title = summary.planned === 'Recovery' ? 'Recovery or a gentle walk' : `${summary.planned} session`;
  const copy = summary.sessions.length ? `${summary.sessions.length} workout complete${summary.sessions.length === 1 ? '' : 's'} · ${summary.score}/6 habits completed.` : summary.planned === 'Recovery' ? 'Make recovery intentional: walk, stretch, or simply rest well.' : `${summary.score}/6 habits complete. Your 10-minute ${summary.planned} session is ready when you are.`;
  return { label, title, copy };
}

export function weeklyReviewView({ week, sessions, strongDays, energy }) {
  return { title: `${sessions} workout${sessions === 1 ? '' : 's'} in week ${week}`, copy: sessions >= 4 ? 'Excellent consistency. This is how a goal becomes a lifestyle.' : 'Every session you complete is a vote for the person you are becoming.', energy: energy ?? '—' };
}
