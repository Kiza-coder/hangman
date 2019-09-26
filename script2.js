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
	word = word.toUpperCase()
	let balLetter
	for(let i=0; i<word.length;i++)
	{
		balLetter = "l-"+i
		if(tabWord[i]==true)
		{
			document.getElementById(balLetter).innerHTML = word[i]; 
		}
		else
		{
			document.getElementById(balLetter).innerHTML = "--";
		}
		
	}
}




//Function who change a table of Boolean
function changeWord(tabWord,letter,word)
{
	word = word.toUpperCase()
	letter = letter.toUpperCase()
	for(let i=0;i<word.length;i++)
	{
		if(word.charAt(i)==letter)
		{
			tabWord[i] = true;
		}
	}
}




//Function who check if there is a letter in the word and a in tabGuessLetter the word;
function compareLetters(word,letter,tabGuessLetter)
{
	word = word.toUpperCase()
	letter = letter.toUpperCase();
	if(word.indexOf(letter)==-1)
	{
		tabGuessLetter.push(letter.toUpperCase());
		return false;
	}
	else
	{
		tabGuessLetter.push(letter.toUpperCase());
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
function recupLetter(tabGuessLetter)
{
	let letter = document.getElementById("letter").value;
	if(letter.length !=1)
	{
		letter = "$"
		alert("Veuillez rentrer une et une seule lettre");

	}
	else{
		for(let i=0; i<tabGuessLetter.length;i++)
		{
			if(tabGuessLetter[i].toUpperCase()==letter.toUpperCase())
			{
				
				i = tabGuessLetter.length-1;
			}
		}
	}
	return letter;
}

// retourne un booleen qui dit si oui on non il y un letter dans le tableau des letter des ja cite
function compareFalseLetter(letter,tabGuessLetter)
{
	let boolFalseLetter = true
	for(let i=0; i<tabGuessLetter.length;i++)
		{
			if(tabGuessLetter[i].toUpperCase()==letter.toUpperCase())
			{
			
				i = tabGuessLetter.length-1;
				boolFalseLetter = false;
			}
		}
	return boolFalseLetter;	
}













	let lives =6
	let tabGuessLetter = new Array();
	let guess
	let cptGuess =0
	let word="manger"
	let tabWordBoolean = newTabWord(word);
	console.log(tabWordBoolean)
	displayWord(word,tabWordBoolean);







document.getElementById("run").addEventListener("click",() =>{
	let letter = recupLetter(tabGuessLetter);
	if(!compareFalseLetter(letter,tabGuessLetter))
	{
		alert("Lettre deja cité");
	}

	else
	{
		
		if(compareLetters(word,letter,tabGuessLetter))
		{
			changeWord(tabWordBoolean,letter,word);
			console.log(recupLetter(tabGuessLetter))
			alert("Bonne lettre");
			displayWord(word,tabWordBoolean);
		}

		else
		{			
			guess = "g-"+ cptGuess
			alert("Mauvaise lettre")
			document.getElementById(guess).innerHTML = letter
			lives --;
			cptGuess++
			document.getElementById("lives").innerHTML = "LIVES : "+lives;
		}
	}
	console.log(tabGuessLetter)

});

