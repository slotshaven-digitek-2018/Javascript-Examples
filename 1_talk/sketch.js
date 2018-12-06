/*
Med henvisning til R. Luke DuBois som har skrevet p5.speech.js

Bygger på W3C Web speech Recognition: 
https://w3c.github.io/speech-api/speechapi.html

Koden nedenfor er modificeret mhp at introducere talegenkendelse i teknikfaget på A-niveau i gymnasiet. 

Reference: http://ability.nyu.edu/p5.js-speech/

...*/


	var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    var words;
    var igenKnap;
    var sentence = "";
    var leftDiv;
    var counter;
	var R;
	var G;
	var B;


	function setup()
    {
		createCanvas(400, 300);

        igenKnap = createElement('button', 'Prøv igen');
        igenKnap.addClass("hidden");
        igenKnap.mousePressed(doItAgain);

        
        words = createElement('div', "<h2>Sig noget</h2>");
        words.addClass("words");
        words.attribute('id', 'words');

        myRec.onResult = showResult;
		myRec.start();
	}  

	function draw()
	{
		// why draw when you can talk || why talk when you can draw??
        if(sentence.includes("cirkel")||sentence.includes("cirkler"))
           {
               stroke(R,G,B);
               ellipse(width/2,height/2,200,200);
           
           }
            if(sentence.includes("gul"))
                document.body.style.backgroundColor = "yellow";
			    R=255;
				G=55;
				B=255;
            if(sentence.includes("rød"))
                document.body.style.backgroundColor = "red";
				R=0;
				G=0;
				B=255;
            if(sentence.includes("orange"))
               document.body.style.backgroundColor = "orange";
				R=0;
				G=255;
				B=0;
            if(sentence.includes("grøn"))
               document.body.style.backgroundColor = "green";
				R=255;
				G=0;
				B=0;		   
            //det sortner for mine øjne
            if(sentence.includes("sort"))
               document.body.style.backgroundColor = "black";
				R=255;
				G=0;
				B=0;		   
	}

	function showResult()
	{
		if(myRec.resultValue==true) {
            $("#words").fadeOut(10000);
            sentence = myRec.resultString;
			words.html("<p>" + sentence + "</p>", true);
            igenKnap.addClass("shown");
            setTimeout(function(){ location.reload(); }, 3000);
		}
	}

    function doItAgain(){
        location.reload();
    }

