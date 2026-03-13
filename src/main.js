import { trackActivity } from "./tracker/activityTracker.js";
import { captureScreenshot } from "./tracker/screenshotTracker.js";

console.log("AI Activity Monitor Started");

// activity tracking
setInterval(() => {
  trackActivity();
}, 5000);

// screenshot capture
setInterval(() => {
  captureScreenshot();
}, 10000);
