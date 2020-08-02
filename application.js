//L'application checkword vérifie si le bon mot est tapé
var wordToTranslate = document.getElementById("wordToTranslate");
var answer = document.getElementById("response");
var goodAnswer = document.getElementById("goodAnswer");
var wrongAnswer = document.getElementById("wrongAnswer");
var areYouReverse = 0;
var change = 0;
var valeur = 0;
valeur2 = 0;

function checkWord(){

    //vérifie l'ordre de traduction
    if (areYouReverse == 1)
    {
        valeur2 = 1;
        change = 0;
    }else {
        valeur2 = 0;
        change = 1;
    }

    //vérifie si la réponse est correcte
    
    if (hiraganaVerso[valeur][change] == wordToGuess.value)
    {
        answer.innerText = "Bonne réponse, la traduction de : " +  hiraganaVerso[valeur][valeur2] + " était bien " + hiraganaVerso[valeur][change];
        goodAnswer.innerText = parseInt(goodAnswer.innerText) + 1;
    }else {
        answer.innerText = "Faux ! La bonne réponse de : " + hiraganaVerso[valeur][valeur2] + " était " + hiraganaVerso[valeur][change];
        wrongAnswer.innerText = parseInt(wrongAnswer.innerText) + 1;
    }

    valeur = Math.floor(Math.random() * Math.floor(45));
    wordToTranslate.innerText = hiraganaVerso[valeur][valeur2];
    
    wordToGuess.value = "";
}

// change la traduction 

function reverse()
{
    if (areYouReverse == 0)
    {
        areYouReverse = 1;
        wordToTranslate.innerText = hiraganaVerso[valeur][1];
    }else {
        areYouReverse = 0;
        wordToTranslate.innerText = hiraganaVerso[valeur][0];
    }

    clavierVirtuelFunction();
}

// Function qui permet de valider en appuyant sur la touche entrer et qui lance la function du boutton valider
var wordToGuess = document.getElementById("wordToGuess");
wordToGuess.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("check").click();
    }else if (areYouReverse == 1){clickClavier(event)}

});

//Alphabet Hiragana en tableau multidimensionel

var hiraganaVerso = [ // 0 = hiragana, 1 = alphabet latin, 2 = touche du clavier, 3 = ordre de la touche du clavier, 4 = indice
    ["あ","a",51, 2,[
            ["-rigato","arigato","ありがと", "-りがと"],
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["い","i",69, 14,[
            ["ha-","hai","はい", "は-"]
        ]
    ],  
    ["お","o",54, 5,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["う","u",52, 3,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["え","e",53, 4,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["か","ka",84, 16,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["き","ki",71, 27,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["こ","ko",66, 40,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["く","ku",72, 28,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["け","ke",192, 33,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["さ","sa",88, 37,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["し","shi",68, 25,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["そ","so",67, 38,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["す","su",82,15,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["せ","se",80, 21,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["た","ta",65, 12,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ち","chi",81, 23,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["と","to",83, 24,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["つ","tsu",87, 36,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["て","te",90, 13,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["な","na",85, 18,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["に","ni",73, 19,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["の","no",75, 30,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ぬ","nu",49, 0,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ね","ne",190, 43,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["は","ha",70, 26,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ひ","hi",86, 39,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ほ","ho",219, 10,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ふ","fu",50,1,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["へ","he",187, 11,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["ま","ma",74, 29,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["み","mi",78, 41,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["も","mo",188, 42,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["む","mu",220, 34,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["め","me",223,45,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["や","ya",55, 6,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],   
    ["よ","yo",57, 8,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ゆ","yu",56, 7,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["ら","ra",79, 20,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["り","ri",76, 31,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ろ","ro",226, 35,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["る","ru",191, 44,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["れ","re",77,32,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ], 
    ["わ","wa",48, 9,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["を","wo",221, 22,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ],  
    ["ん","n",89, 17,[
            ["-rigato","arigato","ありがと", "-りがと"]
        ]
    ]
];  


//Clavier virtuel

var clavierVirtuel = document.getElementById("clavierVirtuel");

function clavierVirtuelFunction(){
    if (areYouReverse == 1)
    {
        for (i = 0; i < hiraganaVerso.length; i++)
        {
            let clavier = function(nbButton){
                for (a = 0; a < hiraganaVerso.length; a++)
                {
                    if (nbButton == hiraganaVerso[a][3]) // permet de mettre chaque touche dans l'ordre, si c'est la bonne touche alors on lui créer son bouton
                    {
                        clavierVirtuel.innerHTML = clavierVirtuel.innerHTML + '<button onclick="clickClavier(event)" keyCode ="' + hiraganaVerso[a][2]+'"> ' + hiraganaVerso[a][0] + '</button>';

                        if (nbButton == 11 || nbButton == 22 || nbButton == 33)
                        {
                            clavierVirtuel.innerHTML = clavierVirtuel.innerHTML + "<br>";
                        }
                    }
                }
    
            }

            var nbButtons = document.querySelectorAll('#clavierVirtuel button'); 

            clavier(nbButtons.length); //lance la fonction tant qu'il ne contient pas un bouton pour chaque hiragana
        }
    } else {
        clavierVirtuel.innerHTML = "";
    }
   
}

// En fonction du click ou touche appuyer sur clavier alors sa affiche la lettre Hiragana

function clickClavier(event)
{
    if (event.type == "click")
    {
        wordToGuess.value = event.toElement.innerText;
    }else if (event.type == "keyup") 
    
    {
        for (var i = 0; i < hiraganaVerso.length; i++)
        {
            if (hiraganaVerso[i][2] == event.keyCode)
            {
                wordToGuess.value = hiraganaVerso[i][0];
            }
        }
    }
}

//Function de l'indice 

var theIndice = document.getElementById("indice");

function indiceByWord(){

    console.log(hiraganaVerso[valeur][4][0][0]);
    theIndice.innerText = hiraganaVerso[valeur][4][0][0];

}

window.onload = function(){

    $.get("data.json", function(data){
        return data;
    });
    
}
