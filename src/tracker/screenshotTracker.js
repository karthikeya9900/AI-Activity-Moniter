import screenshot from "screenshot-desktop";
import fs from "fs";
import path from "path";

const screenshotFolder = "./screenshots";

export async function captureScreenshot() {
  try {
    if (!fs.existsSync(screenshotFolder)) {
      fs.mkdirSync(screenshotFolder);
    }

    const timestamp = new Date()
      .toISOString()
      .replace(/:/g, "-")
      .replace(/\..+/, "");

    const filePath = path.join(screenshotFolder, `${timestamp}.png`);

    await screenshot({ filename: filePath });

    console.log("Screenshot saved:", filePath);

  } catch (error) {
    console.error("Screenshot error:", error);
  }
}