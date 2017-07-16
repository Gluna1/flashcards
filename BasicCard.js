var inquirer = require('inquirer');

class flashcard{
	constructor(question, answer, location){
		this.question=question;
		this.answer=answer;
		this.print= function (){
			console.log("question: " + this.question + "\nanswer: " + this.answer);
		}
	}

}

{
	inquirer.prompt([
	{
		answer: "answer",
		message: "Who is the current President of the United States?"
	},
	{
		answer: "answer",
		message: "Who killed Abraham Lincoln?"
	},
]);
}	