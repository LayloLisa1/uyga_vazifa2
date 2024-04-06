const sanabHarflar = (satr) => {
    let harfSanab = {};
    for (let harf of satr) {
      harfSanab[harf] = (harfSanab[harf] || 0) + 1;
    }
    let natija = [];
    for (let [harf, sanab] of Object.entries(harfSanab)) {
      natija.push(`${harf}${'*'.repeat(sanab)}`);
    }
    console.log(natija);
  }
  sanabHarflar("NAJOT TA'LIM");
  