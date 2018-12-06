/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

var oscX;
var oscY;

function setup() {
    createCanvas(600, 600);
    setupOsc(6448,13000);
}

function draw() {
    background(0);
    tegnCirkel(oscX, 300, 300);
}

function tegnCirkel(x, y, d){
    x = x - mouseX * .9;
    stroke(255);
    noFill();
    ellipse(x, y, d);   
    if(d > 2){
        tegnCirkel(x + d * .5, y, d * random(.5));
        tegnCirkel(x - d * .5, y, d * .4);
        tegnCirkel(x, y + d *.5, d * .4);
        tegnCirkel(x, y - d *.5, d * .3);
    }
}


function receiveOsc(address, value) {
    console.log("received OSC: " + address + ", " + value);
    
    if (address == '/wek/outputs') {
        oscX = value[0];
        oscY = value[1];
    }
}



function setupOsc(oscPortIn, oscPortOut) {
    var socket = io.connect('http://127.0.0.1:8081', { port: 8081, rememberTransport: false });
    socket.on('connect', function() {
        socket.emit('config', { 
            server: { port: oscPortIn,  host: '127.0.0.1'},
            client: { port: oscPortOut, host: '127.0.0.1'}
        });
    });
    socket.on('message', function(msg) {
        if (msg[0] == '#bundle') {
            for (var i=2; i<msg.length; i++) {
                receiveOsc(msg[i][0], msg[i].splice(1));
            }
        } else {
            receiveOsc(msg[0], msg.splice(1));
        }
    });
}


/*
OPGAVER

--Lav en funktion - drawCircle - som tegner ellipsen i stedet for draw

--Giv funktionen drawCircle parametrene x, y og diameter (dvs send dem med i parentesen)

--Kald så funktionen drawCircle som den sidste linje i draw. Hvad sker? Det samme som før!

--Prøv engang - for eksperimentets skyld - at udvide funktionen drawCircle, så den efter at have tegnet ellipsen, kalder sig selv med parametrene: x+20, y diam

--Det her ser fint nok ud. Men det lugter lidt af et uendeligt loop! Vi har brug for noget ligesom i et for eller while loop - der ligesom stopper koden før den løber løbsk. Du kan i øvrigt også kigge i konsollen og se at den ellers flotte form giver en fejl..

--Prøv at lav en betingelse (if) som spørger om x er større end width - og kun udfører funktionskaldet til drawCircle HVIS x er mindre end width

Lad os nu sige at vi både vil bevæge os på x-aksen og blive mindre. Hvordan sætter vi cirklen til at blive halvt så stor hver gang?

Prøv så at gøre x-aksen afhængig af diameteren - gang x med d*0.5 hver gangi stedet for at sætte den til +20..

Fint nok - men upS!! Der var fejlen i konsollen igen - udfør også kun funktionskaldet, hvis d også er > 2..

Så lad os prøve at tænke. Her er en cirkel som tegnes til højre for sig selv igen og igen. 

Hvad hvis vi også gerne vil have den til at tegnes til venstre?

Og ja.. hvad hvis vi i det hele taget vil lave selve definitionen af en cirkel om: så en cirkel er en cirkel med en cirkel til højre og venstre for midten af sig selv?

Så vil vi skabe en fraktal. En figur der når vi zoomer ind på dens mindste bestanddel, udfolder præcis det samme mønster som alle andre dele...

Mange organismer i naturen har fraktale egenskab - lyn, planter, træer...

lad os prøve at bede funktionen om - ikke bare at tgne en cirkel til højre - men også en til venstre. Indsæt et ellipse statement lige efter det første (og træk den halve diameter fra i stedet)..


Prøv at tenge en enkelt ellipse på y aksen også...

Det her er en sierpinski triangle - en trekant lavet af næsten uendelige cirkelformer

Så - nu tegner vi en masse frktaler - men gør ingenting for at animere det. 

Prøv fx..

At give den oprindelige størrelse til mouseX

Prøv så at udvide setup med funktionen noLoop();



























*/
