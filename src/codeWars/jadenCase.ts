const ALPHABET_MAP: { [k: string]: string } = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  v: "V",
  w: "W",
  x: "X",
  y: "Y",
  z: "Z",
};

export const toJadenCase = (str: string) => {
  if (!str || !str.length) return str;

  const words = str.split(" ");
  const jadenWords: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const first = words[i][0];
    const capitalFirst = ALPHABET_MAP[first] || first;
    jadenWords.push(`${capitalFirst}${words[i].slice(1)}`);
  }

  return jadenWords.join(" ");
};
