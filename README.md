# Project Under 100

A private, installable 12-week fitness companion designed around one sustainable objective: **107 kg → under 100 kg → 90 kg**.

This is a static Progressive Web App (PWA) built for GitHub Pages. It has no sign-in, tracking pixels or server. Your check-ins, habits and settings stay in the browser on the device you use.

## What it includes

- A premium, responsive daily dashboard with the programme week, weight journey, streak and habit scorecard.
- Four genuinely guided 10-minute workouts: HIIT, Strength, Core and Full Body.
- Automatic 12-week interval progression: **40/20**, **45/15**, then **50/10**.
- Voice coaching, circular countdown, pause/resume, skip and next-exercise preview.
- Weight and waist check-ins, BMI, weekly average, Chart.js weight graph and recent history.
- 12-week plan, weekly review, achievement milestones and motivational coaching messages.
- Theme, voice, reminder preference, export and reset controls.
- Bluetooth-friendly voice testing: connect a speaker in your phone’s system settings and coaching prompts use that active audio route.
- Manifest, app icon, service worker and offline application shell.

## Project structure

```text
├── assets/             # Reserved for future imagery/audio
├── css/app.css         # Mobile-first visual system
├── data/programme.js   # Programme, habits and achievements
├── icons/              # PWA and Apple Home Screen icons
├── js/
│   ├── app.js          # UI state and feature orchestration
│   ├── storage.js      # Local data persistence/export
│   └── workout-player.js
├── index.html
├── manifest.json
└── sw.js
```

## Deploy to GitHub Pages

The site is ready for the repository root. In GitHub:

1. Open **Settings → Pages** in `moomoo-ha/project-under-100`.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select the `main` branch and **/(root)** folder, then save.
4. GitHub will publish to `https://moomoo-ha.github.io/project-under-100/` within a minute or two.

After a deployment, open the link once while online. This allows the service worker to cache the application for later offline use.

## Install on iPhone

1. Open the published URL in **Safari**.
2. Tap **Share**.
3. Select **Add to Home Screen** and tap **Add**.

Safari will launch it as a standalone app from your Home Screen. iOS does not show the browser install button; this is the normal PWA install route.

## Use with a Bluetooth speaker

1. Connect the speaker in **iPhone Settings → Bluetooth** (or your Android device’s Bluetooth settings).
2. Start any other audio briefly to confirm the phone is routing sound to that speaker.
3. In Project Under 100, open **Settings → Test voice on speaker**.

Browsers are not allowed to pair or select Bluetooth audio devices themselves. The app uses the phone’s active audio route, so once the speaker is selected at system level, spoken workout prompts follow it automatically.

## Data and privacy

Data is stored with `localStorage` only. It does not sync across devices and clearing Safari website data will erase it. Use **Settings → Export data** periodically if you want a personal backup. This app is a fitness companion and not medical advice.
