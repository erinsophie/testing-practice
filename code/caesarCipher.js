function caesarCipher(str, key) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let indexLower = lowerAlphabet.indexOf(char);
    let indexUpper = upperAlphabet.indexOf(char);

    if (indexLower !== -1) {
      indexLower = (indexLower + key) % 26;
      result += lowerAlphabet[indexLower];
    } else if (indexUpper !== -1) {
      indexUpper = (indexUpper + key) % 26;
      result += upperAlphabet[indexUpper];
    } else {
      result += char;
    }
  }
  return result;
}

export default caesarCipher;
