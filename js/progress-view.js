export function weightHistoryMarkup(checkins, formatDate) {
  if (!checkins.length) return '<p class="subtitle">Your first check-in will show up here.</p>';
  return [...checkins].reverse().slice(0, 8).map(checkin => `<div class="history-row"><span>${formatDate(checkin.date)} ${checkin.waist ? `<small>· ${checkin.waist} cm waist</small>` : ''}</span><b>${checkin.weight.toFixed(1)} kg</b></div>`).join('');
}

export function weightChartConfig(checkins, formatDate) {
  const values = checkins.slice(-12);
  return {
    type: 'line',
    data: {
      labels: values.map(value => formatDate(value.date)),
      datasets: [{ data: values.map(value => value.weight), borderColor: '#daf65a', backgroundColor: 'rgba(218,246,90,.15)', pointBackgroundColor: '#daf65a', pointRadius: 4, fill: true, tension: .35 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { displayColors: false } }, scales: { x: { grid: { display: false }, ticks: { color: '#a5b9b0', font: { size: 10 } } }, y: { grid: { color: 'rgba(235,247,238,.08)' }, ticks: { color: '#a5b9b0', font: { size: 10 } } } } }
  };
}

export function renderWeightChart({ existingChart, Chart, canvas, checkins, formatDate }) {
  if (!Chart || !canvas) return existingChart;
  existingChart?.destroy();
  return new Chart(canvas, weightChartConfig(checkins, formatDate));
}
