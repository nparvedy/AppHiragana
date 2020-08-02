<!DOCTYPE html>
<html lang="en">
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

    
    
    <script src="data.js"></script>
    <script src="application.js"></script>
</body>
</html>