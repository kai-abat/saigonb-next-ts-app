export async function fetchLoadingTimeout(ms?: number) {
  if (!ms) ms = 5000;
  // Temporary add timeout to show loading indicator
  await new Promise(resolve => setTimeout(resolve, ms));
  return null;
}
