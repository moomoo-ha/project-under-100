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
  'Full Body': { icon: '🔥', days: [6], exercises: ['Fast squats', 'Press-ups', 'Alternating lunges', 'Mountain climbers', 'Squat thrusts'] },
  'Mobility Reset': { icon: '◌', days: [], rounds: 1, intervals: [75, 45], recovery: true, summary: '10 min · gentle mobility and breathing', exercises: ['Breathing + shoulder rolls', 'Cat-cow', 'Half-kneeling hip flexor stretch', 'Open-book thoracic rotation', 'Seated hamstring hinge'] }
};
export const LOW_IMPACT_SWAPS = {
  'Press-ups': 'Incline press-ups', 'Reverse lunge + knee drive': 'Supported reverse lunges', 'Mountain climbers': 'Slow mountain climbers', 'Squat thrusts': 'Step-back squat thrusts',
  'Alternating reverse lunges': 'Supported reverse lunges', 'Plank shoulder taps': 'Elevated plank shoulder taps', 'Fast squats': 'Steady squats', 'Alternating lunges': 'Supported reverse lunges'
};
export const EXERCISE_ALTERNATIVES = {
  'Squat + knee to elbow': ['Squat + knee to elbow', 'Supported squat + knee drive', 'Fast marching knee drives'],
  'Press-ups': ['Press-ups', 'Incline press-ups', 'Wall press-ups'], 'Incline press-ups': ['Press-ups', 'Incline press-ups', 'Wall press-ups'], 'Wall press-ups': ['Press-ups', 'Incline press-ups', 'Wall press-ups'],
  'Reverse lunge + knee drive': ['Reverse lunge + knee drive', 'Supported reverse lunges', 'Fast marching knee drives'], 'Alternating reverse lunges': ['Alternating reverse lunges', 'Supported reverse lunges', 'Sit-to-stand squats'], 'Supported reverse lunges': ['Reverse lunge + knee drive', 'Supported reverse lunges', 'Sit-to-stand squats'],
  'Mountain climbers': ['Mountain climbers', 'Slow mountain climbers', 'Fast marching knee drives'], 'Slow mountain climbers': ['Mountain climbers', 'Slow mountain climbers', 'Fast marching knee drives'],
  'Squat thrusts': ['Squat thrusts', 'Step-back squat thrusts', 'Fast marching knee drives'], 'Step-back squat thrusts': ['Squat thrusts', 'Step-back squat thrusts', 'Fast marching knee drives'],
  'Slow squats': ['Slow squats', 'Sit-to-stand squats', 'Supported squat + knee drive'], 'Fast squats': ['Fast squats', 'Steady squats', 'Sit-to-stand squats'], 'Steady squats': ['Fast squats', 'Steady squats', 'Sit-to-stand squats'], 'Sit-to-stand squats': ['Slow squats', 'Sit-to-stand squats', 'Supported squat + knee drive'], 'Alternating lunges': ['Alternating lunges', 'Supported reverse lunges', 'Sit-to-stand squats'],
  'Plank shoulder taps': ['Plank shoulder taps', 'Elevated plank shoulder taps', 'Wall press-ups'], 'Elevated plank shoulder taps': ['Plank shoulder taps', 'Elevated plank shoulder taps', 'Wall press-ups'],
  'Glute bridges': ['Glute bridges'], 'Dead bugs': ['Dead bugs'], 'Bicycle crunches': ['Bicycle crunches', 'Dead bugs'], 'Plank': ['Plank', 'Elevated plank shoulder taps'], 'Side plank': ['Side plank', 'Plank'],
  'Breathing + shoulder rolls': ['Breathing + shoulder rolls'], 'Cat-cow': ['Cat-cow', 'Seated cat-cow'], 'Seated cat-cow': ['Cat-cow', 'Seated cat-cow'], 'Half-kneeling hip flexor stretch': ['Half-kneeling hip flexor stretch', 'Supported standing hip flexor stretch'], 'Supported standing hip flexor stretch': ['Half-kneeling hip flexor stretch', 'Supported standing hip flexor stretch'], 'Open-book thoracic rotation': ['Open-book thoracic rotation', 'Seated thoracic rotation'], 'Seated thoracic rotation': ['Open-book thoracic rotation', 'Seated thoracic rotation'], 'Seated hamstring hinge': ['Seated hamstring hinge', 'Standing hamstring hinge'], 'Standing hamstring hinge': ['Seated hamstring hinge', 'Standing hamstring hinge']
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
  'Alternating lunges': { cue: 'Land quietly and keep your front knee in line with your toes.', option: 'Use reverse lunges or reduce range.', icon: '↙' },
  'Incline press-ups': { cue: 'Use a stable bench, sofa or countertop and keep your body in one strong line.', option: 'Raise the surface higher to make the movement easier.', icon: '↘' },
  'Wall press-ups': { cue: 'Stand tall, hands on the wall, and press away with your ribs gently down.', option: 'Step closer to the wall to reduce the load.', icon: '→' },
  'Supported reverse lunges': { cue: 'Use a wall or chair for balance, then step back softly and stay tall.', option: 'Make the step shorter and reduce your depth.', icon: '↙' },
  'Step-back squat thrusts': { cue: 'Place your hands down, step one foot back at a time, then return to standing.', option: 'Use a raised surface instead of the floor.', icon: '⇵' },
  'Elevated plank shoulder taps': { cue: 'Use a bench or countertop and tap slowly without twisting your hips.', option: 'Choose a higher surface for more support.', icon: '⊕' },
  'Steady squats': { cue: 'Move at a comfortable pace with your heels down and chest proud.', option: 'Use a chair as a depth target.', icon: '⇅' },
  'Sit-to-stand squats': { cue: 'Use a sturdy chair, stand with control, then sit back slowly.', option: 'Use your hands lightly for support if needed.', icon: '↑' },
  'Supported squat + knee drive': { cue: 'Hold a stable support, sit back gently, then drive one knee up with control.', option: 'Keep the knee lift low and steady.', icon: '↗' },
  'Fast marching knee drives': { cue: 'March with purpose, drive the knees comfortably and keep your posture tall.', option: 'Slow the pace and keep the knee lift lower.', icon: '⇅' },
  'Breathing + shoulder rolls': { cue: 'Stand or sit tall. Take a slow breath in through the nose, then make relaxed shoulder circles as you breathe out.', option: 'Stay seated and make the shoulder circles smaller.', icon: '◌', midpoint: 'Reverse the shoulder circles and keep your breath slow.' },
  'Cat-cow': { cue: 'On hands and knees, gently round through your back, then lengthen your chest forward. Keep it easy and unforced.', option: 'Use a chair: round and lengthen through your spine while seated.', icon: '⌁' },
  'Seated cat-cow': { cue: 'Sit tall with both feet grounded. Gently round through your back, then lift your chest without forcing your neck.', option: 'Make the movement smaller and keep both hands on your thighs.', icon: '⌁' },
  'Half-kneeling hip flexor stretch': { cue: 'From a supported half-kneel, tuck your tail slightly and glide your hips forward until the front of the back hip feels open.', option: 'Use a wall or chair for balance, or take the stretch standing.', icon: '↔', midpoint: 'Switch sides slowly and set your balance before you continue.' },
  'Supported standing hip flexor stretch': { cue: 'Hold a wall or chair, step one foot back and gently tuck your tail until the front of that hip feels open.', option: 'Shorten the stance and use more support.', icon: '↔', midpoint: 'Switch sides slowly and stay tall.' },
  'Open-book thoracic rotation': { cue: 'Lie on your side with knees comfortably bent. Reach the top arm across your body, then open your chest as far as feels easy.', option: 'Sit tall and rotate gently through your ribs instead.', icon: '⟲', midpoint: 'Roll to the other side and continue with the same slow breath.' },
  'Seated thoracic rotation': { cue: 'Sit tall with feet grounded. Turn gently from your ribs, keeping your hips facing forward.', option: 'Make the movement smaller and keep your hands on your thighs.', icon: '⟲', midpoint: 'Change direction and keep the movement smooth.' },
  'Seated hamstring hinge': { cue: 'Sit toward the front of a chair, extend one heel lightly and hinge forward from the hips with a long spine.', option: 'Keep the knee bent more and reduce the reach.', icon: '↘', midpoint: 'Switch legs, then continue with the same easy hinge.' },
  'Standing hamstring hinge': { cue: 'Keep one heel lightly forward, bend the standing knee and hinge from the hips with a long spine.', option: 'Keep both feet closer together and reduce the range.', icon: '↘', midpoint: 'Switch legs and stay balanced.' }
};
export const ACHIEVEMENTS = [
  { id: 'first-workout', icon: '✓', title: 'First workout', detail: 'Complete your first session.', unlocked: state => state.sessions.length >= 1 },
  { id: 'seven-streak', icon: '🔥', title: '7-day streak', detail: 'Move for seven consecutive days.', unlocked: (_, metrics) => metrics.streak >= 7 },
  { id: 'thirty-workouts', icon: '30', title: '30 workouts', detail: 'Thirty promises kept.', unlocked: state => state.sessions.length >= 30 },
  { id: 'under-105', icon: '105', title: 'Under 105 kg', detail: 'Your first weight milestone.', unlocked: (_, metrics) => metrics.weight && metrics.weight < 105 },
  { id: 'under-100', icon: '100', title: 'Under 100 kg', detail: 'Welcome to double digits.', unlocked: (_, metrics) => metrics.weight && metrics.weight < 100 },
  { id: 'goal', icon: '90', title: 'Goal achieved', detail: '90 kg — a lasting change.', unlocked: (_, metrics) => metrics.weight && metrics.weight <= 90 }
];
