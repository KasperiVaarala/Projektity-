// tehdään random numero generaattori
var min = 1;
var max = 10;
var nro1 = Math.floor(Math.random() * (max - min + 1)) + min;
var nro2 = Math.floor(Math.random() * (max - min + 1)) + min;
var nro3 = Math.floor(Math.random() * (max - min + 1)) + min;
var nro4 = Math.floor(Math.random() * (max - min + 1)) + min;
var nro5 = Math.floor(Math.random() * (max - min + 1)) + min;
var nro6 = Math.floor(Math.random() * (max - min + 1)) + min;
//tehtävän luvut 1 laskut
document.getElementById('question1').innerHTML = nro1 + " " + "+" + " " + nro2;
var answer1 = nro1 + nro2;
// tehtävä 2
document.getElementById('question2').innerHTML = nro3 + " " + "+" + " " + nro4;
var answer2 = nro3 + nro4;
//tehtävä 3
document.getElementById("question3").innerHTML = nro5 + " " + "-" + " " + nro6;
var answer3 = nro5 - nro6;
//tehtävä 4
document.getElementById("question4").innerHTML = nro4 + " " + "*" + " " + nro1;
var answer4 = nro4 * nro1;
//tehtävä 5
document.getElementById("question5").innerHTML = nro5 + " " + "*" + " " + nro6;
var answer5 = nro5 * nro6;

function calc(){
    let rightAnswer1 = document.getElementById("answer1").value;
    if (rightAnswer1 == answer1) {
        document.getElementById("aOne").innerHTML = "KOMEE JA HYVÄ LASKEEN"
    } else {
        document.getElementById("aOne").innerHTML = "oot tyhmä oikee vastaus oli " + answer1;   
    }
    return
    
    let rightAnswer2 = document.getElementById("answer2").value;
    if (rightAnswer2 == answer2){
        document.getElementById("aTwo").innerHTML =  "KOMEE JA HYVÄ LASKEEN"
    } else {
        document.getElementById("aTwo").innerHTML =  "oot tyhmä oikee vastaus oli " + answer2;
        
    }
 }

