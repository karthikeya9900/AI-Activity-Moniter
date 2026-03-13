# AI Activity Monitor

## 📌 Overview

**AI Activity Monitor** is a Node.js-based desktop activity tracking tool that monitors the applications running on a user's system and records how long each application is actively used.

The goal of this project is to build a **lightweight productivity tracker** that runs locally and logs activity data for later analysis. This project is designed to be modular and extensible so that additional features like dashboards, AI analysis, and productivity insights can be added in the future.

---

## 🚀 Features

* Detects the **currently active application**
* Tracks **how long each application is used**
* Logs activity changes automatically
* Modular architecture for easy extension
* Runs continuously in the background while the script is active

---

## 🛠️ Tech Stack

* **Node.js (v20+)**
* **JavaScript (ES Modules)**
* **active-win** – used to detect the currently active window/application

---

## 📂 Project Structure

```
ai-activity-monitor
│
├── src
│   │
│   ├── tracker
│   │   ├── activityTracker.js
│   │   ├── activeWindow.js
│   │   └── durationCalculator.js
│   │
│   ├── services
│   │   └── activityService.js
│   │
│   ├── database
│   │   └── activityRepository.js
│   │
│   └── main.js
│
├── package.json
└── README.md
```

---

## ⚙️ How It Works

1. The tracker checks the **active window every 2 seconds**.
2. When the active application changes:

   * The previous application's usage time is calculated.
3. The activity data is sent to the **service layer**.
4. The service layer stores it using the **repository layer**.

Flow:

```
Active Window Detection
        ↓
Activity Tracker
        ↓
Activity Service
        ↓
Activity Repository (Database Layer)
```

---

## ▶️ Installation

### 1️⃣ Clone the repository

```
git clone <repository-url>
cd ai-activity-monitor
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Install required package

```
npm install active-win
```

---

## ▶️ Running the Application

Start the activity monitor:

```
node src/main.js
```

Expected output:

```
Starting AI Activity Monitor...
Saving activity: { app: 'Chrome', duration: 5 }
```

The tracker will monitor the active window every **2 seconds**.

---

## 📊 Example Activity Log

Example of a tracked activity:

```
{
  app: "Chrome",
  duration: 15,
  timestamp: "2026-03-13T10:30:00.000Z"
}
```

---

## 🔮 Future Improvements

Planned enhancements for this project:

* Idle detection
* Screenshot capture
* Local database storage (SQLite / PostgreSQL)
* Productivity dashboard
* AI-based activity insights
* System tray background service
* Desktop application using Electron

---

## 📖 Learning Purpose

This project is also intended as a **learning project** to practice:

* Node.js backend architecture
* Modular code structure
* System-level application tracking
* Clean project organization
* Real-world project development workflow

---

## 👨‍💻 Author

Developed by **Karthikeya** as part of a hands-on project to build a real-world activity tracking application using Node.js.

---

## 📜 License

This project is open-source and available under the **MIT License**.
