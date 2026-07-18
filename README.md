# Project Under 100

A private, installable 12-week fitness companion designed around one sustainable objective: **107 kg → under 100 kg → 90 kg**.

This is a static Progressive Web App (PWA) built for GitHub Pages. It has no sign-in, tracking pixels or server. Your check-ins, habits and settings stay in the browser on the device you use.

## What it includes

- A premium, responsive daily dashboard with the programme week, weight journey, streak and habit scorecard.
- Four genuinely guided 10-minute workouts: HIIT, Strength, Core and Full Body.
- Automatic 12-week interval progression: **40/20**, **45/15**, then **50/10**.
- Voice coaching, circular countdown, pause/resume, skip and next-exercise preview.
- Weight and waist check-ins, BMI, weekly average, Chart.js weight graph and recent history.
- Private on-device progress photos and JSON backup import/export for the rest of your programme data.
- 12-week plan, weekly review, achievement milestones and motivational coaching messages.
- Theme, voice, reminder preference, export and reset controls.
- In-app daily reminder prompt, with optional browser alerts when the PWA is open and the device supports them.
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

## Enable private cloud sync

Cloud sync uses Supabase email authentication and a per-user row protected by Row Level Security. Progress photos deliberately remain only on the device where they were added.

1. In the Supabase project, open **SQL Editor → New query**.
2. Paste and run the complete contents of [`supabase-schema.sql`](supabase-schema.sql).
3. Open **Authentication → URL Configuration** and add the published app URL as an allowed redirect URL:
   `https://moomoo-ha.github.io/project-under-100/`
4. Push and deploy the current app, then open **Settings → Cloud backup**.
5. Enter your email address, use the sign-in link Supabase sends, then select **Back up now**.

The project’s publishable key is included in the client application by design; it is not a secret. The SQL policies are what enforce that an authenticated user can read and write only their own row. Never add a Supabase secret or `service_role` key to this repository. [Supabase security guidance](https://supabase.com/docs/guides/database/secure-data)

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

## Reminder behaviour

GitHub Pages provides no background server, so this app cannot guarantee a notification while fully closed on iPhone. It does show a daily check-in prompt at your selected time while open, and again when you next open the app after that time. Where supported, you can opt into a browser alert from **Settings**; it is an additional prompt while the app is active, not a replacement for native push notifications.

## Data and privacy

Programme data is stored with `localStorage`; progress photos are stored separately in the browser’s on-device media storage. Neither syncs across devices or uploads anywhere. Clearing Safari website data will erase both. Use **Settings → Export data** periodically; backups deliberately exclude photos, while imports restore programme data only. This app is a fitness companion and not medical advice.
