export function settingsViewModel({ settings, notification, cloud }) {
  const notificationStatus = notification.permission === 'granted' ? 'Browser alerts enabled while the app is open' : notification.permission === 'denied' ? 'Browser alerts are blocked in this browser' : 'In-app prompt is enabled';
  const notificationButton = notification.permission === 'granted' ? 'BROWSER ALERTS ENABLED' : notification.supported ? 'ENABLE BROWSER ALERTS' : 'BROWSER ALERTS NOT SUPPORTED';
  const connected = Boolean(cloud.available && cloud.user);
  const cloudStatus = connected ? `Signed in as ${cloud.user.email}. ${settings.cloudAutoBackup ? 'Automatic backup is on.' : 'Automatic backup is off.'} Photos stay on this device.` : cloud.available ? 'Sign in with email to back up and restore your programme data across devices. Photos stay private on this device.' : 'Cloud backup is loading. Please refresh if it remains unavailable.';
  const cloudLastBackup = connected ? settings.lastCloudBackupError === 'conflict' ? 'A newer cloud backup exists from another device. Restore it before automatic backup can continue.' : settings.lastCloudBackupError ? 'The last backup attempt needs attention. Your data is still safe on this device.' : cloud.lastBackup ? `Last cloud backup: ${cloud.lastBackup}.` : 'No cloud backup yet. Back up this device when you are ready.' : 'Cloud backup is optional. Photos are never uploaded.';
  return { connected, notificationStatus, notificationButton, notificationDisabled: !notification.supported || notification.permission === 'denied', cloudStatus, cloudLastBackup };
}

export function renderSettingsView({ select, settings, notification, cloud }) {
  const model = settingsViewModel({ settings, notification, cloud });
  [['#setting-voice', settings.voice], ['#setting-dark', settings.dark], ['#setting-low-impact', settings.lowImpact], ['#setting-warmup', settings.showWarmup], ['#setting-cooldown', settings.showCooldown], ['#setting-reminders-enabled', settings.remindersEnabled], ['#cloud-auto-backup', settings.cloudAutoBackup]].forEach(([selector, value]) => { select(selector).checked = value; });
  select('#setting-reminder').value = settings.reminder;
  select('#notification-status').textContent = model.notificationStatus;
  select('#enable-notifications').textContent = model.notificationButton;
  select('#enable-notifications').disabled = model.notificationDisabled;
  select('#cloud-status').textContent = model.cloudStatus;
  select('#cloud-last-backup').textContent = model.cloudLastBackup;
  select('#cloud-signin-form').classList.toggle('is-hidden', model.connected);
  select('#cloud-actions').classList.toggle('is-hidden', !model.connected);
  select('#bluetooth-status').textContent = 'Connect your speaker in your phone’s Bluetooth settings, then use this test. Voice coaching follows your phone’s active audio route.';
}
