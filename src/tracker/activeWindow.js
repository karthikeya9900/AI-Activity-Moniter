import activeWin from "active-win";

export default async function getActiveWindow() {
  const result = await activeWin();

  if (!result) return "Unknown";

  return result.owner.name;
}
