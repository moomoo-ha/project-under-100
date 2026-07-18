export const START_WEIGHT = 107;
export const HEIGHT_METRES = 1.76;
export const WEEKLY_TARGETS = [106.2, 105.5, 104.8, 104, 103.3, 102.6, 101.9, 101.2, 100.6, 100, 99.5, 99];
export const HABITS = [
  { id: 'calories', label: 'Stayed within calorie target' }, { id: 'protein', label: 'Hit 160g protein' },
  { id: 'workout', label: 'Completed workout' }, { id: 'steps', label: 'Walked 8,000+ steps' },
  { id: 'water', label: 'Drank 2.5L water' }, { id: 'sleep', label: 'Slept 7+ hours' }
];
export const WORKOUTS = {
  HIIT: { icon: '⚡', days: [1, 4], exercises: ['Squat + knee to elbow', 'Press-ups', 'Reverse lunge + knee drive', 'Mountain climbers', 'Squat thrusts'] },
  Strength: { icon: '💪', days: [2], exercises: ['Slow squats', 'Press-ups', 'Alternating reverse lunges', 'Plank shoulder taps', 'Glute bridges'] },
  Core: { icon: '◎', days: [5], exercises: ['Dead bugs', 'Bicycle crunches', 'Plank', 'Slow mountain climbers', 'Side plank'] },
  'Full Body': { icon: '🔥', days: [6], exercises: ['Fast squats', 'Press-ups', 'Alternating lunges', 'Mountain climbers', 'Squat thrusts'] }
};
export const EXERCISE_GUIDANCE = {
  'Squat + knee to elbow': { cue: 'Sit back through your heels, stand tall, then bring the knee across with control.', option: 'Keep the knee drive lower if balance is challenging.', icon: '↗' },
  'Press-ups': { cue: 'Hands under shoulders, ribs down, then lower as one strong line.', option: 'Use a bench, sofa or knees for a supported version.', icon: '↓' },
  'Reverse lunge + knee drive': { cue: 'Step back softly, keep the front knee tracking forward, then drive up.', option: 'Hold a wall or reduce the depth of the lunge.', icon: '↙' },
  'Mountain climbers': { cue: 'Keep shoulders over wrists and draw each knee in without lifting the hips.', option: 'Slow the pace, or use an elevated surface.', icon: '↔' },
  'Squat thrusts': { cue: 'Step or jump out to a plank, then return with a strong upright finish.', option: 'Step one foot back at a time; no jump is required.', icon: '⇵' },
  'Slow squats': { cue: 'Take three seconds down, pause, then drive through the whole foot.', option: 'Use a chair as a depth target.', icon: '↓' },
  'Alternating reverse lunges': { cue: 'Take a long step back and keep the front heel heavy.', option: 'Make it a shallow split squat if needed.', icon: '↙' },
  'Plank shoulder taps': { cue: 'Brace your middle and tap slowly without twisting your hips.', option: 'Perform from knees or an elevated surface.', icon: '⊕' },
  'Glute bridges': { cue: 'Press through heels and squeeze your glutes at the top.', option: 'Use a smaller range if your back feels it.', icon: '⌒' },
  'Dead bugs': { cue: 'Keep your lower back gently pressed down as opposite limbs extend.', option: 'Move only your legs or only your arms at first.', icon: '×' },
  'Bicycle crunches': { cue: 'Rotate from the ribs, not the neck, and keep the movement unhurried.', option: 'Keep both feet down and rotate only the upper body.', icon: '⟲' },
  'Plank': { cue: 'Push the floor away and make one long line from shoulders to heels.', option: 'Drop to your knees to hold quality form.', icon: '—' },
  'Slow mountain climbers': { cue: 'Bring each knee in slowly while keeping your hips as still as you can.', option: 'Use a bench or countertop for support.', icon: '↔' },
  'Side plank': { cue: 'Lift from the underside of your waist and keep the chest open.', option: 'Keep the bottom knee on the floor.', icon: '◐' },
  'Fast squats': { cue: 'Move briskly but stay in control: heels down, chest proud.', option: 'Choose a steady pace rather than rushing.', icon: '⇅' },
  'Alternating lunges': { cue: 'Land quietly and keep your front knee in line with your toes.', option: 'Use reverse lunges or reduce range.', icon: '↙' }
};
export const ACHIEVEMENTS = [
  { id: 'first-workout', icon: '✓', title: 'First workout', detail: 'Complete your first session.', unlocked: state => state.sessions.length >= 1 },
  { id: 'seven-streak', icon: '🔥', title: '7-day streak', detail: 'Move for seven consecutive days.', unlocked: (_, metrics) => metrics.streak >= 7 },
  { id: 'thirty-workouts', icon: '30', title: '30 workouts', detail: 'Thirty promises kept.', unlocked: state => state.sessions.length >= 30 },
  { id: 'under-105', icon: '105', title: 'Under 105 kg', detail: 'Your first weight milestone.', unlocked: (_, metrics) => metrics.weight && metrics.weight < 105 },
  { id: 'under-100', icon: '100', title: 'Under 100 kg', detail: 'Welcome to double digits.', unlocked: (_, metrics) => metrics.weight && metrics.weight < 100 },
  { id: 'goal', icon: '90', title: 'Goal achieved', detail: '90 kg — a lasting change.', unlocked: (_, metrics) => metrics.weight && metrics.weight <= 90 }
];
