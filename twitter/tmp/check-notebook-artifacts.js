JSON.stringify({
  creating: document.body.innerText.includes('wird erstellt'),
  lines: document.body.innerText.split('\n').map(x => x.trim()).filter(x => /Erklärvideo|wird erstellt|Videoübersicht/.test(x)).slice(-30),
  shortAvailable: /\bShort\b/.test(document.body.innerText)
})