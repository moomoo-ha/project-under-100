import { WORKOUTS } from '../data/programme.js';

export class WorkoutPlayer {
  constructor({ onUpdate, onComplete, speak }) { this.onUpdate = onUpdate; this.onComplete = onComplete; this.speak = speak; this.timerId = null; this.state = null; }
  start(name, intervals) { const [work, rest] = intervals; this.state = { name, exercises: WORKOUTS[name].exercises, work, rest, phase: 'work', round: 1, index: 0, remaining: work, paused: false }; this.speak(`Welcome to Project Under 100. ${name}. Round one. ${this.state.exercises[0]}. Three, two, one, go.`); this.render(); this.timerId = window.setInterval(() => this.tick(), 1000); }
  tick() { if (!this.state || this.state.paused) return; this.state.remaining -= 1; if (this.state.phase === 'work' && this.state.remaining === Math.round(this.state.work / 2)) this.speak('Halfway.'); if (this.state.phase === 'work' && this.state.remaining === 10) this.speak('Ten seconds remaining.'); if (this.state.remaining <= 0) this.advance(); this.render(); }
  advance() { const s = this.state; if (s.phase === 'work') { s.phase = 'rest'; s.remaining = s.rest; this.speak(`Recover. Next: ${s.exercises[(s.index + 1) % s.exercises.length]}.`); return; } if (s.index === s.exercises.length - 1) { if (s.round === 2) return this.complete(); s.round += 1; s.index = 0; this.speak(`Round two. ${s.exercises[0]}. Go.`); } else { s.index += 1; this.speak(`${s.exercises[s.index]}. Go.`); } s.phase = 'work'; s.remaining = s.work; }
  skip() { if (!this.state) return; this.advance(); this.render(); }
  togglePause() { if (!this.state) return; this.state.paused = !this.state.paused; this.render(); }
  render() { const s = this.state; if (!s) return; const phaseDuration = s.phase === 'work' ? s.work : s.rest; const completed = ((s.round - 1) * s.exercises.length + s.index + (s.phase === 'rest' ? 1 : 0)) / (s.exercises.length * 2); this.onUpdate({ ...s, angle: Math.max(0, (s.remaining / phaseDuration) * 360), progress: completed }); }
  complete() { this.stop(); this.onComplete(); }
  stop() { if (this.timerId) window.clearInterval(this.timerId); this.timerId = null; this.state = null; if ('speechSynthesis' in window) speechSynthesis.cancel(); }
}
