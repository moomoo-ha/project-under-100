import { daySummary, parseDate, weekDates } from './tracking.js';

const daysBetween = (from, to) => Math.max(0, Math.floor((parseDate(to) - parseDate(from)) / 86400000));
const latestCheckinBefore = (checkins, currentDate) => [...checkins].filter(checkin => checkin.date <= currentDate).sort((a, b) => a.date.localeCompare(b.date)).at(-1) || null;

export function buildWeeklyInsight(state, { week, currentDate, targetWeight }) {
  const dates = weekDates(state.startedAt, week).filter(date => date <= currentDate);
  const plannedDays = dates.filter(date => daySummary(state, date).planned !== 'Recovery').length;
  const completedDays = new Set(state.sessions.filter(session => dates.includes(session.date)).map(session => session.date)).size;
  const strongDays = dates.filter(date => daySummary(state, date).score >= 4).length;
  const latest = latestCheckinBefore(state.checkins, currentDate);
  const checkinCurrent = latest && daysBetween(latest.date, currentDate) <= 10;
  const sessionRatio = plannedDays ? Math.min(1, completedDays / plannedDays) : 1;
  const habitRatio = dates.length ? strongDays / dates.length : 0;
  const weightGap = checkinCurrent ? latest.weight - targetWeight : null;
  const effortResponses = state.sessions.filter(session => dates.includes(session.date) && session.effort).map(session => session.effort);
  const toughSessions = effortResponses.filter(effort => effort === 'tough').length;
  let status = 'BUILDING'; let title = 'Build the week.'; let focus = 'Your next best action is to complete the next session in your plan.';

  if (!checkinCurrent) { status = 'CHECK-IN DUE'; title = 'Give yourself a clear signal.'; focus = 'Log a weight check-in this week so your plan can compare your real progress with the target.'; }
  else if (effortResponses.length >= 2 && toughSessions >= 2) { status = 'RECOVER WELL'; title = 'Your effort deserves recovery.'; focus = 'Your last couple of sessions felt tough. Keep the next one low-impact or choose Mobility Reset, and protect sleep and protein today.'; }
  else if (weightGap <= 0 && sessionRatio >= .75) { status = 'ON TRACK'; title = 'Your habits are carrying you.'; focus = `You are ${Math.abs(weightGap).toFixed(1)} kg ${weightGap < 0 ? 'ahead of' : 'at'} this week’s target. Keep the next planned session simple and consistent.`; }
  else if (sessionRatio < .75) { status = 'NEXT: SESSION'; title = 'The plan needs one more vote.'; focus = plannedDays ? `You have completed ${completedDays} of ${plannedDays} planned sessions so far. The best move now is one focused 10-minute workout.` : 'You have made this a recovery week. Choose a gentle walk or an optional 10-minute session when it feels right.'; }
  else if (habitRatio < .6) { status = 'FOCUS: BASICS'; title = 'The basics will move this forward.'; focus = `You have ${strongDays} strong days so far. Aim for protein, water and sleep today before trying to add more intensity.`; }
  else { status = 'KEEP GOING'; title = 'Consistency is doing its job.'; focus = `${weightGap.toFixed(1)} kg from this week’s target. Keep the next session and today’s basics in place; trends matter more than a single day.`; }

  return { status, title, focus, sessions: `${completedDays} / ${plannedDays}`, strongDays: `${strongDays} / ${dates.length}`, weight: checkinCurrent ? `${latest.weight.toFixed(1)} kg` : 'Log check-in', needsCheckin: !checkinCurrent };
}
