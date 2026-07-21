export const EFFORT_LABELS = { easy: 'Easy', right: 'Just right', tough: 'Tough' };

export function renderWorkoutCards({ container, workouts, selectedWorkout, lowImpact, exercisesFor, intervalsFor, onSelect }) {
  container.innerHTML = Object.entries(workouts).map(([name, workout]) => {
    const [work, rest] = intervalsFor(name);
    const detail = workout.recovery ? workout.summary : `${lowImpact ? 'Low impact · ' : ''}${exercisesFor(name)[0]} · ${work}/${rest}`;
    return `<button class="workout-type ${workout.recovery ? 'is-recovery' : ''} ${selectedWorkout === name ? 'is-selected' : ''}" data-workout="${name}" aria-pressed="${selectedWorkout === name}"><span class="type-icon">${workout.icon}</span><span><strong>${name}</strong><small>${detail}</small></span></button>`;
  }).join('');
  container.querySelectorAll('button').forEach(button => button.addEventListener('click', () => onSelect(button.dataset.workout)));
}

export function renderSessionHistory({ container, sessions, workouts, formatDate, onRepeat }) {
  container.innerHTML = sessions.length ? sessions.map(session => {
    const workout = workouts[session.type] || { icon: '✓', exercises: [] };
    const personalised = Array.isArray(session.exercises) && session.exercises.some((exercise, index) => exercise !== workout.exercises[index]);
    const detail = [personalised ? 'Personalised plan' : 'Completed session', EFFORT_LABELS[session.effort]].filter(Boolean).join(' · ');
    return `<article class="session-row"><span class="session-icon">${workout.icon}</span><span><strong>${session.type}</strong><small>${formatDate(session.date)} · ${detail}</small></span><button class="repeat-session" data-repeat-workout="${session.type}" aria-label="Repeat ${session.type} session">REPEAT</button></article>`;
  }).join('') : '<p class="session-empty">Your completed sessions will appear here. The first one is the hardest to start.</p>';
  container.querySelectorAll('button').forEach(button => button.addEventListener('click', () => onRepeat(button.dataset.repeatWorkout)));
}
