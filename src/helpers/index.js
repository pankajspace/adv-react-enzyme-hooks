export const getMatchedLettersCount = (guessedWord, secretWord) => {
  const guessedLetters = new Set(guessedWord.split(""));
  const secretLetters = new Set(secretWord.split(""));
  return [...secretLetters].filter((letter) => guessedLetters.has(letter))
    .length;
};
