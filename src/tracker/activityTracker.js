import getActiveWindow from "./activeWindow.js";
import calculateDuration from "./durationCalculator.js";
import { saveActivity } from "../services/activityService.js";

let lastApp = null;
let startTime = Date.now();

export function startTracker() {
  setInterval(async () => {
    const activeApp = await getActiveWindow();

    if (lastApp !== activeApp) {
      const duration = calculateDuration(startTime);

      if (lastApp) {
        await saveActivity(lastApp, duration);
      }

      lastApp = activeApp;
      startTime = Date.now();
    }
  }, 2000);
}