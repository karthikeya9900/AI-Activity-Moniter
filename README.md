# 📋 AI Activity Monitor — Development TODO

This document tracks all tasks required to build the AI Activity Monitor.

---

# 🚀 Phase 1 — Project Setup

Goal: Prepare the development environment.

Tasks:

* [x] Initialize Node.js project
* [x] Create project folder structure
* [x] Add README.md
* [x] Add .gitignore
* [x] Create main entry file
* [x] Setup basic logging system

Files created:

src/main.js
src/tracker/activityTracker.js
src/database/activityLogs.json

---

# 🖥 Phase 2 — Activity Tracking

Goal: Detect user activity on the computer.

Tasks:

* [x] Detect active application
* [x] Capture window title
* [x] Record activity timestamp
* [x] Save activity logs to JSON
* [x] Prevent duplicate logging

Example log:

10:00 – Chrome
10:15 – VS Code
10:30 – Spotify

Files:

src/tracker/activityTracker.js

---

# ⏱ Phase 3 — Activity Duration Tracking

Goal: Measure how long a user spends on each application.

Tasks:

* [ ] Track start time of application usage
* [ ] Track end time when app changes
* [ ] Calculate time spent per app
* [ ] Store duration in logs

Example:

10:00 – Chrome (15 minutes)
10:15 – VS Code (45 minutes)

Files:

src/tracker/activityTracker.js

---

# 💤 Phase 4 — Idle Detection

Goal: Detect when the user is inactive.

Tasks:

* [ ] Detect keyboard inactivity
* [ ] Detect mouse inactivity
* [ ] Log idle periods
* [ ] Add idle threshold configuration

Example:

10:30 – Idle (5 minutes)

Files:

src/tracker/idleDetector.js

---

# 💾 Phase 5 — Data Storage

Goal: Improve activity storage system.

Tasks:

* [x] Save logs to JSON
* [ ] Create database helper module
* [ ] Add log retrieval functions
* [ ] Optimize large log storage

Files:

src/database/db.js

---

# 🌐 Phase 6 — Backend API

Goal: Provide activity data to other applications.

Tasks:

* [ ] Setup Express server
* [ ] Create API endpoint for logs
* [ ] Create API endpoint for summaries
* [ ] Add API error handling

Example endpoints:

GET /logs
GET /summary

Files:

src/server/api.js

---

# 📊 Phase 7 — Dashboard

Goal: Visualize user activity.

Tasks:

* [ ] Create dashboard layout
* [ ] Display activity logs
* [ ] Add activity charts
* [ ] Add daily summary section

Files:

dashboard/index.html
dashboard/style.css
dashboard/script.js

---

# 🧠 Phase 8 — AI Integration

Goal: Generate AI productivity summaries.

Tasks:

* [ ] Send activity data to AI
* [ ] Generate daily summary
* [ ] Generate productivity insights
* [ ] Display AI insights in dashboard

Example AI Output:

You spent **3 hours coding today**.
Your most productive time was **10:00–12:00**.

Files:

src/ai/summaryGenerator.js

---

# 🔮 Phase 9 — Advanced Features (Future)

Tasks:

* [ ] Weekly reports
* [ ] Productivity score
* [ ] Distraction alerts
* [ ] Camera activity detection
* [ ] Cloud sync

---

# 📌 Current Progress

✔ Activity tracking system is working
✔ Activity logs are being recorded

Next task:

Implement **Activity Duration Tracking**
