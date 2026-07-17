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
export const ACHIEVEMENTS = [
  { id: 'first-workout', icon: '✓', title: 'First workout', detail: 'Complete your first session.', unlocked: state => state.sessions.length >= 1 },
  { id: 'seven-streak', icon: '🔥', title: '7-day streak', detail: 'Move for seven consecutive days.', unlocked: (_, metrics) => metrics.streak >= 7 },
  { id: 'thirty-workouts', icon: '30', title: '30 workouts', detail: 'Thirty promises kept.', unlocked: state => state.sessions.length >= 30 },
  { id: 'under-105', icon: '105', title: 'Under 105 kg', detail: 'Your first weight milestone.', unlocked: (_, metrics) => metrics.weight && metrics.weight < 105 },
  { id: 'under-100', icon: '100', title: 'Under 100 kg', detail: 'Welcome to double digits.', unlocked: (_, metrics) => metrics.weight && metrics.weight < 100 },
  { id: 'goal', icon: '90', title: 'Goal achieved', detail: '90 kg — a lasting change.', unlocked: (_, metrics) => metrics.weight && metrics.weight <= 90 }
];
