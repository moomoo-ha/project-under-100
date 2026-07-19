import { WORKOUTS } from '../data/programme.js';

export const isoDate = date => new Date(date).toISOString().slice(0, 10);
export const parseDate = value => new Date(`${value}T12:00:00`);
export function weekDates(startedAt, week) { const start = parseDate(startedAt); start.setDate(start.getDate() + (week - 1) * 7); return Array.from({ length: 7 }, (_, index) => { const date = new Date(start); date.setDate(start.getDate() + index); return isoDate(date); }); }
export function plannedWorkout(date, weeklySchedule) { const weekday = parseDate(date).getDay(); if (weeklySchedule?.[weekday]) return weeklySchedule[weekday]; const legacyWeekday = weekday || 7; return Object.entries(WORKOUTS).find(([, workout]) => workout.days.includes(legacyWeekday))?.[0] ?? 'Recovery'; }
export function daySummary(state, date) { const habits = state.habits[date] || {}; const log = state.dailyLogs[date] || {}; const sessions = state.sessions.filter(session => session.date === date); const score = Object.values(habits).filter(Boolean).length; return { habits, log, sessions, score, planned: plannedWorkout(date, state.profile?.weeklySchedule) }; }
export const reviewKey = week => `week-${week}`;
