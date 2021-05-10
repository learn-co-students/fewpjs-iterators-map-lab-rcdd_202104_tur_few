const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let resultArray = [];

function titleCased() {

  // Split them first

  let words = tutorials.map(sentence => {
    return sentence.split(" ");
  })

  console.log(words)

  // Format each word as wanted

  let formattedSentences = [];

  words.forEach(currentDividedSentence => {

    let formattedWords = [];

    currentDividedSentence.forEach(currentWord => {
      formattedWords.push(currentWord.replace(currentWord[0], currentWord[0].toUpperCase()));
    })

    console.log(formattedWords)
    formattedSentences.push(formattedWords);
  })
  console.log(formattedSentences);


  // Transform formatted words into a sentence
  
  let i = 0;
  while (i < formattedSentences.length) {
    formattedSentences[i] = formattedSentences[i].join(" ");
    i++;
  }

  console.log(formattedSentences)

  return formattedSentences;



}

titleCased()

