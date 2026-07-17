# Project Under 100

A private, installable 12-week fitness companion for the programme: **107 kg → under 100 kg → 90 kg**. It has no account, no analytics, and no server: progress is saved locally on the device.

## Included

- Responsive dashboard, scorecard, weight check-ins, weight chart, streaks, and workout history.
- Four guided sessions: HIIT, Strength, Core & Mobility, and Full Body.
- Automatic 12-week timing progression: 40/20, 45/15, then 50/10.
- Spoken browser coaching, pause, skip, and workout completion tracking.
- PWA manifest, service worker caching, and app icons for offline use/installing.

## Publish free with GitHub Pages

1. Create a GitHub repository named `project-under-100` (public is simplest).
2. Upload the **contents** of this folder to the repository root — `index.html` must be at the top level, not inside another folder.
3. In the repository open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and **/(root)**. Save.
5. After GitHub finishes publishing, open the URL it shows, usually `https://YOUR-USERNAME.github.io/project-under-100/`.

## Add to iPhone Home Screen

1. Open the published URL in **Safari** (not Chrome).
2. Tap **Share**.
3. Choose **Add to Home Screen**, then **Add**.

The first visit needs an internet connection so Safari can cache the app. After that it works offline. Safari does not show the browser install button; **Add to Home Screen** is the normal install route on iPhone.

## Important privacy note

All check-ins and workout records are stored only in the browser's local storage. They do not sync between devices and can be lost if Safari website data is cleared. There is no medical advice or health-data integration in this version.

## Local testing

Opening `index.html` directly will show the UI, but service workers need a web server. GitHub Pages provides this automatically; any simple local static server works for testing offline behaviour.
