//Script JS
//Console Hangout
//Function who create my tab of boolean
function newTabWord(word)
{
	let tabWord = new Array();
	for(let i =0; i< word.length; i++)
	{
		tabWord[i] = false;
	}
	tabWord[0] = true
	tabWord[word.length-1] = true
	return tabWord;
}



//Function who display the word
function displayWord(word,tabWord)
{
	word = word.toUpperCase();
	let newWord="";
	for(let i=0; i<word.length;i++)
	{
		if(tabWord[i]==true)
		{
			newWord = newWord + word[i] + " ";
		}
		else
		{
			newWord = newWord + "-- ";
		}
		
	}
	console.log(newWord)
}




//Function who change a table of Boolean
function changeWord(tabWord,letter,word)
{
	for(let i=0;i<word.length;i++)
	{
		if(word.charAt(i)==letter)
		{
			tabWord[i] = true;
		}
	}
}




//Function who check if there is a letter in the word
function compareLetters(word,letter)
{
	let bool;
	if(word.indexOf(letter)==-1)
	{
		return false;
	}
	else
	{
		return true;
	}
}





//Function who check if there is no more letter to find and return a bool
function checkEnd(tabWord)
{
	let cpt =0
	for(let i =0; i < tabWord.length;i++)
	{
		if(tabWord[i]==true)
		{
			cpt++ ;
		}
	}
	return (tabWord.length==cpt);
}




//function who recup the letter
async function recupLetter(tabGuessLetter,text)
{
	let letter = await prompt(text);
	if(letter.length !=1)
	{
		await recupLetter(tabGuessLetter,"Attention, veuillez entrez UNE SEULE lettre !!")
	}
	else{
		for(let i=0; i<tabGuessLetter.length;i++)
		{
			if(tabGuessLetter[i]==letter)
			{
				await recupLetter(tabGuessLetter,"Attention, veuillez entrez une lettre que vous n'avez pas encore cité :");
				i = tabGuessLetter.length-1;
			}
		}
	}
	return letter;
}





async function main(){
	let tabWords = new Array();
	tabWords = ["manger","concombre","noisette","bateau","constellation"]
	let tabGuessWord = new Array();
	let nbTry = 6;
	let win=false;
	let word="manger"
	let tabWord = newTabWord(word);
	while(!win && nbTry>0)
	{
		displayWord(word,tabWord);
		let currentLetter = await recupLetter(tabGuessWord,"Veuillez entrez une lettre :  , Vie :"+ (nbTry));
		tabGuessWord.push(currentLetter);
		if(compareLetters(word,currentLetter)==true)
		{
			changeWord(tabWord,currentLetter,word);
			
			if(checkEnd(tabWord))
			{
				win = true;
				displayWord(word,tabWord);
				console.log("***********");
				console.log("WIN !!")
			}
		}
		else
		{
			nbTry--
		}
		
			
	}

	if(nbTry<=0)
	{
			console.log("Vous avez perdu !!! ");
	}
}


//test canvas
function displayHangover(x){
	let canvas = document.getElementById('tutoriel');
 	if (canvas.getContext) 
 	{
 		
  		let ctx = canvas.getContext('2d');
  		ctx.beginPath();
	    ctx.moveTo(60, 60);
	    ctx.lineTo(70, 60);
	    ctx.lineTo(50,60)
	    ctx.moveTo(60, 60);
	    ctx.lineTo(60,20)
	    ctx.lineTo(30,20)
	    ctx.lineTo(30,40)
	    ctx.moveTo(60,20)
	    ctx.lineTo(40,20)
	    ctx.lineTo(60,35)
	    ctx.stroke()

	} 
	else 
	{

	}
}



