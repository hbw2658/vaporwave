let anArrayOfNonbeing = [
    "game over doesn't mean\nyou can't try again\n",
    "social media dramas",
    "botanical garden\nof dreams\n",
    "okay but no; thanks\nfor the polyhedron\n",
    "the infinite concept\nof cosmic creation\n",
    "download the future",
    "the stars know\neverything\n",
    "do you wish to continue?",
    "the central bank of\nmale attention issues worthless currency\n",
    "the sun watches \neverything i do\n",
    "the moon knows \nall my secrets\n",
    "how will this end?",
    "i think they're\nhere for me\n",
    "you soared, yet\nyou stayed in bed\n",
    "starlight is pollen",
    "a world filled with fear,\na flower still blooms\n",
    "bask in moonlight\nand sacred waters\n",
    "hail yourself",
    "the catastrophe of your\npersonality is beautiful\n",
    "there can be no\nethical consumption\nunder capitalism",
    "what's past\nis prologue\n",
    "the sky is our soul",
    "draw your lines\nin a circle\n around your self",
    "what is your end?",
    "the void doesn't\nthink about you\n",
    "your void detectors\nare leaking\n",
    "your worth is\nnot inherent\n",
    "static is not warm,\nit's just noise\n",
    "speak the language\nof the trees\n",
    "have you whispered\npeace to yourself\nrecently?",
    "happiness is\njust a construct\n",
    "everything has\nshifted five degrees\nto the left",
    "on a scale of 1-10,\nhow would you rate\nyour existence?",
    "their endgame is\nassimilation\n",
    "leave a drawer empty",
    "the parthenon was\nbuilt on a rock\nof failure",
    "does taylor swift\npass the bechdel test?\n",
    "have a no fat, skinny,\ndouble tall dose\nof cosmic insufferability",
    "we bathe in a\nriver of light\n",
    "touch the despair,\ninvite it in,\nmake it a cup of tea",
    "it's dangerous\nto live in daydreams\n",
    "we were promised\nhoverboards and we're\nhere to collect",
    "what is seen\nmust be unseen\n",
    "the difference between\ngenius and insanity\nis success",
    "the audience is\na poor spectator\n",
    "declare a national\nemergency until\nwe ban capers",
    "giant death robots\nare a dissapointing\nreality",
    "it feels like the\nsame party every weekend\n",
    "she\nheals\neverything"
];

let randString = anArrayOfNonbeing[Math.floor(Math.random() * anArrayOfNonbeing.length)];
document.getElementById('heading').innerHTML = randString;

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
    tempTypeSpeed = 0;

    var type = function() {
    
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();