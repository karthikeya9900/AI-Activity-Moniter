import { insertActivity } from "../database/activityRepository.js";

export async function saveActivity(app, duration) {
  await insertActivity({
    app,
    duration,
    timestamp: new Date()
  });
}