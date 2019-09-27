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


function compareWord(word,newWord)
{
	return (word.toUpperCase() == newWord.toUpperCase());
}

//funnction separate in parts for display the hangover
function displayHangover()
{
	let canvas = document.getElementById('canvas');
 	if (canvas.getContext) 
 	{
  		let ctx = canvas.getContext('2d');
  		ctx.beginPath();
	    ctx.moveTo(60,150)
	    ctx.lineTo(240,150)
	    ctx.moveTo(220,150)
	    ctx.lineTo(220,30)
	    ctx.lineTo(120,30)
	    ctx.lineTo(120,60)
	    ctx.moveTo(220,60)
	    ctx.lineTo(160,30)	
	    ctx.stroke()
	} 
}


function displayHead()
{
	let canvas = document.getElementById('canvas');
 	if (canvas.getContext) 
 	{
  		let ctx = canvas.getContext('2d');
  		ctx.beginPath()
  		ctx.moveTo(120,60)
  		ctx.arc(120, 60, 10, 50, 0, 2 * Math.PI);
  		ctx.fill()
	} 
}


function displayBody()
{
	let canvas = document.getElementById('canvas');
 	if (canvas.getContext) 
 	{
  		let ctx = canvas.getContext('2d');
  		ctx.beginPath()
  		ctx.moveTo(120,60)
  		ctx.lineTo(120,100);
  		ctx.stroke()
	} 
}


function displayArm(num)
{
let canvas = document.getElementById('canvas');
 	if (canvas.getContext) 
 	{
  		let ctx = canvas.getContext('2d');
  		ctx.beginPath()
  		ctx.moveTo(120,80)
  		ctx.lineTo(num,85);
  		ctx.stroke()
	} 

}

function displayLeg(num)
{
let canvas = document.getElementById('canvas');

 	if (canvas.getContext) 
 	{
  		let ctx = canvas.getContext('2d');
  		ctx.beginPath()
  		ctx.moveTo(120,100)
  		ctx.lineTo(num,105);
  		ctx.stroke()
	} 

}



// function principale
function main()
{
	
	setInterval(function(){
		switch (lives) {
  		case 6:displayHangover()

    	break;
    	case 5:displayHangover()
				displayHead()
    	break;
    	case 4:displayHangover()
				displayHead()
				displayBody()
    	break;
    	case 3:displayHangover()
				displayHead()
				displayBody()
				displayArm(100)
    	break;
    	case 2:displayHangover()
				displayHead()
				displayBody()
				displayArm(100)
				displayArm(140)
    	break;
    	case 1:displayHangover()
				displayHead()
				displayBody()
				displayArm(100)
				displayArm(140)
				displayLeg(135)
    	break;
 	 	default:displayHangover()
				displayHead()
				displayBody()
				displayArm(100)
				displayArm(140)
				displayLeg(135)
				displayLeg(105)
				console.log("Perdu")
		}
    },100);
}

document.getElementById("run-letter").addEventListener("click",() =>{
	let letter = recupLetter(tabGuessLetter); 

	if(!compareFalseLetter(letter,tabGuessLetter) || letter == "")
	{
		if(letter == "")
		{
			alert("Lettre inexistante")
		}
		else
		{ 
			alert("Lettre deja cité");
		}
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
			document.getElementById(guess).innerHTML = letter.toUpperCase()
			lives --;
			cptGuess++;
			document.getElementById("lives").innerHTML = "LIVES : "+lives;
		}
	}
	document.getElementById("letter").value ="";
	document.getElementById("letter").focus();
});

document.getElementById("run-word").addEventListener("click",() =>{
	if(compareWord(word,document.getElementById("word").value)){
	console.log("win")
	
}
	document.getElementById("word").value ="";
	document.getElementById("word").focus();
});


    let lives =6
	let tabGuessLetter = new Array();
	let guess
	let cptGuess =0
	let word="manger" 
	let tabWordBoolean = newTabWord(word);
	console.log(tabWordBoolean)
	displayWord(word,tabWordBoolean);
	main();	