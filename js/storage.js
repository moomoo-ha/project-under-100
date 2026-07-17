const KEY = 'project-under-100-v4';
const today = () => new Date().toISOString().slice(0, 10);
const initialState = () => ({ version: 4, startedAt: today(), habits: {}, sessions: [], checkins: [], settings: { voice: true, dark: true, reminder: '07:00' } });
export function loadState() { try { return { ...initialState(), ...JSON.parse(localStorage.getItem(KEY)), settings: { ...initialState().settings, ...JSON.parse(localStorage.getItem(KEY))?.settings } }; } catch { return initialState(); } }
export function saveState(state) { localStorage.setItem(KEY, JSON.stringify(state)); }
export function exportState(state) { const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = Object.assign(document.createElement('a'), { href: url, download: `project-under-100-${today()}.json` }); link.click(); URL.revokeObjectURL(url); }
export function resetState() { localStorage.removeItem(KEY); return initialState(); }
export { today };
