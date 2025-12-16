export async function randomDelay(minDelay = 60000): Promise<void> {
  const delay = Math.floor((Math.random() * minDelay) / 3) + minDelay;

  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
