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

// Function qui permet de valider en appuyant sur la touche entrer et qui lance la function du boutton valider // version class
var wordToGuess2 = document.getElementById("wordToGuess2");
wordToGuess2.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("check2").click();
    }else if (areYouReverse == 1){clickClavier(event)}

});

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

//objectif du jour, changer toute l'application en objet

class AppHiragana {
    wordToTranslate = document.getElementById("wordToTranslate2");
    answer = document.getElementById("response2");
    goodAnswer = document.getElementById("goodAnswer2");
    wrongAnswer = document.getElementById("wrongAnswer2");
    areYouReverse = 0;
    change = 0;
    valeur = 0;
    valeur2 = 0;

    clavierVirtuel = document.getElementById("clavierVirtuel2");

    

    checkWord(){
        //vérifie l'ordre de traduction
        if (this.areYouReverse == 1)
        {
            this.valeur2 = 1;
            this.change = 0;
        }else {
            this.valeur2 = 0;
            this.change = 1;
        }

        //vérifie si la réponse est correcte
        
        if (hiraganaVerso[this.valeur][this.change] == wordToGuess2.value)
        {
            this.answer.innerText = "Bonne réponse, la traduction de : " +  hiraganaVerso[this.valeur][this.valeur2] + " était bien " + hiraganaVerso[this.valeur][this.change];
            this.goodAnswer.innerText = parseInt(this.goodAnswer.innerText) + 1;
        }else {
            this.answer.innerText = "Faux ! La bonne réponse de : " + hiraganaVerso[this.valeur][this.valeur2] + " était " + hiraganaVerso[this.valeur][this.change];
            this.wrongAnswer.innerText = parseInt(this.wrongAnswer.innerText) + 1;
        }

        this.valeur = Math.floor(Math.random() * Math.floor(45));
        this.wordToTranslate.innerText = hiraganaVerso[this.valeur][this.valeur2];
        
        wordToGuess2.value = "";
        
    }

    reverse(){

    }

    clavierVirtuelFunction(){

    }

    clickClavier(event){

    }

    indiceByWord(){
        
    }
}

var AppHira = new AppHiragana();


//AppHira.varTest;

console.log(AppHira);

