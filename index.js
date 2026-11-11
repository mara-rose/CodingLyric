const chorus = [
  { text: "So what if I call", gap: 0 },
  { text: "And you pick up the phone ?", gap: 4000 },
  { text: "And I use this holiday", gap: 9000 },
  { text: "To make my way to your ghost", gap: 11500 },
  { text: `Or what if you\'re lonely`, gap: 18000 },
  { text: "And you know I am too", gap: 23000 },
  { text: "And i get the chance to say", gap: 27000 },
  { text: '" Merry Christmas, I miss you " ', gap: 2800 },
  { text: "I miss you", gap: 36000 },
  { text: `You know it\'s true`, gap: 41000 },
  { text: "That I miss you", gap: 45000 },
  { text: `You know it\'s true...`, gap: 50000 },
];

const lineEl = document.querySelector(".line");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function play() {
  const begin = Date.now(); // start the lyric

  for (const line of chorus) {
    // 1. wait until this line's moment in the song
    const waitTime = line.gap - (Date.now() - begin);
    await sleep(Math.max(0, waitTime));

    // each caracter take 90ms (to go next interation loop)
    // type the text line caracter by caracter
    lineEl.textContent = "";
    for (let i = 0; i < line.text.length; i++) {
      lineEl.textContent += line.text[i];
      await sleep(90);
    }
  }
}

play();
