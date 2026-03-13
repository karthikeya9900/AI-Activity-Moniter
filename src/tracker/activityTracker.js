import activeWin from "active-win";
import fs from "fs";

const logFile = "./src/database/activityLogs.json";

let currentApp = null;
let currentTitle = null;
let startTime = null;

export async function trackActivity() {
  try {
    const window = await activeWin();
    if (!window) return;

    const app = window.owner.name;
    const title = window.title;

    // first app detection
    if (!currentApp) {
      currentApp = app;
      currentTitle = title;
      startTime = Date.now();
      return;
    }

    // if app changes
    if (app !== currentApp || title !== currentTitle) {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime) / 1000);

      const activity = {
        app: currentApp,
        title: currentTitle,
        start: new Date(startTime).toLocaleTimeString(),
        end: new Date(endTime).toLocaleTimeString(),
        duration: duration,
      };

      console.log("Activity Saved:", activity);

      // ensure file exists
      if (!fs.existsSync(logFile)) {
        fs.writeFileSync(logFile, "[]");
      }

      const logs = JSON.parse(fs.readFileSync(logFile));

      logs.push(activity);

      fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));

      // reset tracking
      currentApp = app;
      currentTitle = title;
      startTime = Date.now();
    }
  } catch (error) {
    console.error("Tracking error:", error);
  }
}
