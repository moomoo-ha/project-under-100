const KEY = 'project-under-100-v4';
const today = () => new Date().toISOString().slice(0, 10);
const initialState = () => ({ version: 6, startedAt: today(), habits: {}, dailyLogs: {}, reviews: {}, photos: [], sessions: [], checkins: [], settings: { voice: true, dark: true, reminder: '07:00' } });
export function hydrateState(saved) { if (!saved || typeof saved !== 'object' || Array.isArray(saved)) throw new Error('That backup is not a Project Under 100 data file.'); return { ...initialState(), ...saved, settings: { ...initialState().settings, ...saved.settings }, dailyLogs: saved.dailyLogs || {}, reviews: saved.reviews || {}, photos: saved.photos || [] }; }
export function loadState() { try { return hydrateState(JSON.parse(localStorage.getItem(KEY))); } catch { return initialState(); } }
export function saveState(state) { localStorage.setItem(KEY, JSON.stringify(state)); }
export function exportState(state) { const backup = { ...state, photos: [] }; const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = Object.assign(document.createElement('a'), { href: url, download: `project-under-100-${today()}.json` }); link.click(); URL.revokeObjectURL(url); }
export function resetState() { localStorage.removeItem(KEY); return initialState(); }
export { today };
