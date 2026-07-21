import { EXERCISE_GUIDANCE, WORKOUTS } from '../data/programme.js';

export class WorkoutPlayer {
  constructor({ onUpdate, onComplete, speak }) {
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
    this.speak = speak;
    this.timerId = null;
    this.state = null;
  }

  start(name, intervals, exercises = WORKOUTS[name].exercises) {
    const [work, rest] = intervals;
    const totalRounds = WORKOUTS[name].rounds || 2;
    this.state = { name, exercises: [...exercises], work, rest, countdown: 3, phase: 'countdown', round: 1, totalRounds, index: 0, remaining: 3, paused: false, finalRecovery: false };
    const exercise = this.state.exercises[0];
    this.speak(`Welcome to Project Under 100. ${name}. ${totalRounds === 1 ? 'One gentle round.' : 'Round one.'} First exercise: ${exercise}. ${EXERCISE_GUIDANCE[exercise]?.cue || 'Move with control.'} Three.`);
    this.render();
    this.timerId = window.setInterval(() => this.tick(), 1000);
  }

  tick() {
    if (!this.state || this.state.paused) return;
    this.state.remaining -= 1;
    const guide = EXERCISE_GUIDANCE[this.state.exercises[this.state.index]];
    if (this.state.phase === 'countdown' && this.state.remaining > 0) this.speak(String(this.state.remaining));
    if (this.state.phase === 'work' && this.state.remaining === Math.round(this.state.work / 2)) this.speak(guide?.midpoint || 'Halfway.');
    if (this.state.phase === 'work' && this.state.remaining === 10) this.speak('Ten seconds remaining.');
    if (this.state.remaining <= 0) this.advance();
    this.render();
  }

  advance() {
    const s = this.state;
    if (s.phase === 'countdown') {
      s.phase = 'work';
      s.remaining = s.work;
      this.speak('Go.');
      return;
    }
    if (s.phase === 'work') {
      s.phase = 'rest';
      s.remaining = s.rest;
      s.finalRecovery = s.round === s.totalRounds && s.index === s.exercises.length - 1;
      this.speak(s.finalRecovery ? 'Final recovery. Breathe and finish strong.' : `Recover. Next: ${s.exercises[s.index + 1]}.`);
      return;
    }
    if (s.finalRecovery) return this.complete();
    if (s.index === s.exercises.length - 1) {
      s.round += 1;
      s.index = 0;
      this.speak(`Round ${s.round}. ${s.exercises[0]}. ${EXERCISE_GUIDANCE[s.exercises[0]]?.cue || 'Go.'}`);
    } else {
      s.index += 1;
      const exercise = s.exercises[s.index];
      this.speak(`${exercise}. ${EXERCISE_GUIDANCE[exercise]?.cue || 'Move with control.'}`);
    }
    s.phase = 'work';
    s.remaining = s.work;
  }

  skip() {
    if (!this.state) return;
    this.advance();
    this.render();
  }

  replaceCurrentExercise(exercise) {
    if (!this.state || !exercise) return;
    this.state.exercises[this.state.index] = exercise;
    this.render();
  }

  togglePause() {
    if (!this.state) return;
    this.state.paused = !this.state.paused;
    this.render();
  }

  render() {
    const s = this.state;
    if (!s) return;
    const phaseDuration = s.phase === 'countdown' ? s.countdown : s.phase === 'work' ? s.work : s.rest;
    const completedMoves = (s.round - 1) * s.exercises.length + s.index + (s.phase === 'rest' ? 1 : 0);
    const completed = s.phase === 'countdown' ? 0 : completedMoves / (s.exercises.length * s.totalRounds);
    this.onUpdate({ ...s, angle: Math.max(0, (s.remaining / phaseDuration) * 360), progress: completed });
  }

  complete() {
    this.stop();
    this.onComplete();
  }

  stop() {
    if (this.timerId) window.clearInterval(this.timerId);
    this.timerId = null;
    this.state = null;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }
}
