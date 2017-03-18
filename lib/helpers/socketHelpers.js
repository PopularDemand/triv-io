const FILLER_WORDS = [ 'a', 'an', 'the', 'at', 'by',
  'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as',
  'but', 'or', 'nor', 'not', 'this', 'is'];

// Public
var importantWords = (sentence) =>  {
  return sentence.split(' ').filter(_notFillerWord);
}

var closeMatch = (answers, guess) => {
  var matches = 0;
  guess = importantWords(guess);
  if (!guess.length) return;
  guess.forEach( (word) =>  {
    if (answers.includes(word)) matches += 1;
  });
  if (matches >= answers.length / 2) return true;
}

// Private
var _notFillerWord = (word) =>  {
  return !FILLER_WORDS.includes(word);
}

module.exports = {
  importantWords,
  closeMatch
}