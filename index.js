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

const  titleCased = () => {  
  const output = tutorials.map(tutorial => {
    const words = tutorial.split(" "); // words is an array
    const titleCase = words.map(word => {
      const letters = word.split(""); //letters is an array
			const titled = [letters[0].toUpperCase(), ...letters.slice(1)];
// 			console.log(titled)
      const titledWord = titled.join("");
// 			console.log(titledWord)
			return titledWord
    })  
// 	console.log(titleCase.join(" "))	
	return titleCase.join(" ")
  }) 
	return output 
}
