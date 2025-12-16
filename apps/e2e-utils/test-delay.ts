export async function randomDelay(minDelay = 60000): Promise<void> {
  const delay = Math.floor((Math.random() * 20000)) + minDelay + 20000;

  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
