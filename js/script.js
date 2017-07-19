
var censure = {

	badWords:['fuck', 'bullshit', 'nigger', 'whore', 'cunt', 'bitch', 'faggot', 'cocksucker', 'shit'],
	goodWords:['fudge', 'bullshrimp', 'afroamerican', 'prostitute', 'beaver', 'female dog', 'homosexual', 'homo', 'poop'],
	originalText:[],
	filteredText:[],

	//Method number one
	filter: function(inputElement, outputElement) {
		//split the string into an array of sub-strings
		//call the swapWord function
		//join the elements of an array into a string, and return the string
		//call the printOut function
		this.originalText = inputElement.value.split(' ');
		this.filteredText = this.originalText;
		this.swapWord();
		var filteredString = this.filteredText.join(" ");
		this.printOut(outputElement,filteredString);
	},
	//Method number two
	swapWord: function() {
		//run through the originalText
		//for every badWord we find, split them into an array
		//swap badWords with goodWords
		//join the goodWords into a string
		for(var i = 0; i < this.originalText.length; i++) {
			for(var j = 0; j < this.badWords.length; j++) {
				var badWordArray = this.filteredText[i].toLowerCase().split(this.badWords[j]);
				var noOfBadWordsInArray = badWordArray.length;
				console.log(noOfBadWordsInArray);

				for (var x = (noOfBadWordsInArray-1); x >= 0; x--){
					if (badWordArray[x].length == 0) {
						if (x < (noOfBadWordsInArray-1))
							badWordArray[x] = this.goodWords[j];
						else if (badWordArray[x-1].length > 0)
							badWordArray[x] = this.goodWords[j];
					}
				}

				var strGoodWord = badWordArray.join('');

				if (this.filteredText[i][0] === this.filteredText[i][0].toUpperCase()) {
					this.filteredText[i] = strGoodWord.charAt(0).toUpperCase() + strGoodWord.slice(1);
				}
				else{
					this.filteredText[i] = strGoodWord;
				}
			}
		}
	},

	//Method number three
	//print out the filtered string
	printOut: function(outputElement,filteredString){
		outputElement.value = filteredString;
	}
}

var input = document.getElementById("input"),
	output = document.getElementById("output");

//Add a event-listener to the button
document.querySelector('button').addEventListener('click', function() {
	censure.filter(input, output);
});
