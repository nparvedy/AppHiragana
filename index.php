<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <h1>Application pour apprendre votre langue</h1>

    <section id="translate">
        <div id="left">
            <span>Mot à traduire : </span> <span id="wordToTranslate">あ</span><br>

            <input type="text" id="wordToGuess">

            <button onclick="checkWord()" id="check" >Valider</button> <button onclick="reverse()" id="reverse">Reverse</button> <br>
            <p>Résultat : <span id="response"></span></p>

            <span>Bonne réponse : </span> <span id="goodAnswer">0</span> | <span>Mauvaise réponse : </span> <span id="wrongAnswer">0</span><br>

            <div id="clavierVirtuel"></div>
        </div>

        <div id="right">
            <button onclick="indiceByWord()">Indice</button>
            <p id="indice"></p>
        </div>
    </section>

    
    <h1>Application fait avec une class JS</h1>

    <section id="translate2">

        <div id="left2">
            <span>Mot à traduire : </span> <span id="wordToTranslate2">あ</span><br>

            <input type="text" id="wordToGuess2">

            <button onclick="AppHira.checkWord()" id="check2" >Valider</button> <button onclick="AppHira.reverse()" id="reverse2">Reverse</button> <br>
            <p>Résultat : <span id="response2"></span></p>

            <span>Bonne réponse : </span> <span id="goodAnswer2">0</span> | <span>Mauvaise réponse : </span> <span id="wrongAnswer2">0</span><br>

            <div id="clavierVirtuel2"></div>
        </div>

        <div id="right2">
            <button onclick="AppHira.indiceByWord()">Indice</button>
            <p id="indice2"></p>
        </div>
    </section>

    
    
    <script src="data.js"></script>
    <script src="application.js"></script>
</body>
</html>