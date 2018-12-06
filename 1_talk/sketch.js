/*
Med henvisning til R. Luke DuBois som har skrevet p5.speech.js

Bygger på W3C Web speech Recognition: 
https://w3c.github.io/speech-api/speechapi.html

Koden nedenfor er modificeret mhp at introducere talegenkendelse i teknikfaget på A-niveau i gymnasiet. 

Reference: http://ability.nyu.edu/p5.js-speech/

...*/


	var myRec = new p5.SpeechRec("da"); // new P5.SpeechRec object
    var words;
    var igenKnap;
    var sentence = "";
    var leftDiv;
    var counter;
    var img;
    var dickbutt;
    var david;
    var emil;
    var sid;
    var idfk;
    var skat;


	function setup()
    {
		createCanvas(500, 500);
        dickbutt = loadImage("pictures/dickbutt.jpg");
        david = loadImage("pictures/david.png");
        emil = loadImage("pictures/emil.jpg");
        idfk = loadImage("pictures/idfk.png");
        sid = loadImage("pictures/sid.png");
        skat = loadImage("pictures/skat.jpg");
        

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
               stroke(173,216,230);
               ellipse(width/2,height/2,200,200);
           
           }
       if(sentence.includes("hey")||sentence.includes("hej")||sentence.includes("hi"))
            {
          image(dickbutt, 0, height/10, dickbutt.width/10, dickbutt.height/10);
            }
        if(sentence.includes("og")||sentence.includes("han")||sentence.includes("at"))
            {
          image(sid, 250, height/3, sid.width/3, sid.height/3);
            }
        if(sentence.includes("det")||sentence.includes("er")||sentence.includes("en"))
            {
          image(idfk, 0, 200, idfk.width/4, idfk.height/4);
            }
        if(sentence.includes("på")||sentence.includes("til")||sentence.includes("med"))
            {
            image(emil, 250, 0, emil.width/7, emil.height/7);
            }
        if(sentence.includes("af")||sentence.includes("ikke")||sentence.includes("mig"))
            {
            image(david, 420, height/10, david.width/20, david.height/20);
            }
        if(sentence.includes("hemmeligheder"))
            {
            image(skat, 0, 0, skat.width/1, skat.height/1);
            }
            if(sentence.includes("gul"))
                document.body.style.backgroundColor = "yellow";
            if(sentence.includes("rød"))
                document.body.style.backgroundColor = "red";
            if(sentence.includes("orange"))
               document.body.style.backgroundColor = "orange";
            if(sentence.includes("grøn"))
               document.body.style.backgroundColor = "green";  
            //det sortner for mine øjne
            if(sentence.includes("sort"))
               document.body.style.backgroundColor = "black";  
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

