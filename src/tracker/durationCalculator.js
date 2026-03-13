export default function calculateDuration(startTime) {
  return Math.floor((Date.now() - startTime) / 1000);
}