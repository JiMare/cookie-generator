const getAlphabet = (capital) =>
  [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));

const getUuidPart = () => {
  const part =
    Math.floor(Math.random() * 10) +
    getAlphabet(Math.floor(Math.random() * 2) === 0)[
      Math.floor(Math.random() * 26)
    ] +
    getAlphabet(Math.floor(Math.random() * 2) === 0)[
      Math.floor(Math.random() * 26)
    ] +
    Math.floor(Math.random() * 10);
  return part;
};

export const getUuid = () => {
  let uuid = [];
  let i = 0;
  while (i < 4) {
    uuid.push(getUuidPart());
    i++;
  }
  return uuid.join("-");
};


