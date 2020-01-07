//Тоглогчын ээлжийг хадгалах хувьсагч, 1р тоглогчыг 0, 2р тоглогчыг 1 гэж тэмдэглэнэ.
var activePlayer = 1;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчын одоогийн авсан оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй олгоно
// var diceNumber = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes</em>";
//Програм эхлэхэд бэлтгэх
// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document
  .querySelector(".btn-roll")
  .addEventListener("click", function rollDice() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    //alert("Шоо буулаа : " + diceNumber);
  });

console.log("Шоо :" + diceNumber);
