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


function titleCased(){
  return tutorials.map(function(arr, index){
    let wordsbutArray = arr.split(" ")
    for(let i = 0; i < wordsbutArray.length; i++){
      wordsbutArray[i] = wordsbutArray[i][0].toUpperCase() + wordsbutArray[i].slice(1)
    }
    return wordsbutArray.join(" ")
  })

}
titleCased(tutorials)