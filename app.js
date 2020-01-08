var diceDom = document.querySelector(".dice");
var activePlayer, roundScore, scores;
//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
initGame();
//Тоглоом шинээр эхлэхэд бэлтгэнэ
function initGame() {
  //Тоглоом эхлэх төлөв
  isNewGame = true;
  //Тоглогчын ээлжийг хадгалах хувьсагч, 1р тоглогчыг 0, 2р тоглогчыг 1 гэж тэмдэглэнэ.
  activePlayer = 0;
  //Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  //Тоглогчын одоогийн авсан оноог хадгалах хувьсагч
  roundScore = 0;
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

  //Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame) {
    //1-6 доторх санамсаргүй тоог авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зургийг вэб дээр гаргах
    diceDom.style.display = "block";
    //Буусан санамсаргүй тоонд харгалзах шооны зургийг вэбд харуулах
    diceDom.src = "dice-" + diceNumber + ".png";
    //Буусан тоо нь 1с ялгаатай бол идэвхтэй тоглогчын ээлжийн оноог нэмэгдүүлнэ
    if (diceNumber !== 1) {
      //1-с ялгаатай тоо бууна. Буусан тоог тоглогчын оноон дээр нэмнэ
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. Та New game товчыг дарна уу");
  }
});
// HOLD төвчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    //Уг тоглогчын цуглуулсан ээлжийн оноог глобал оноон дээр нь нэмнэ
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //Уг тоглогч хожсон эсэхийг шалгах (оноо нь 100с их эсэх)
    if (scores[activePlayer] >= 10) {
      //Тоглоомыг дууссан төлөвт оруулна
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. Та New game товчыг дарна уу");
  }
});

//Энэ функц нь тоглох ээлжийг дараагийн тоглогчруу шилжүүлнэ
function switchToNextPlayer() {
  //1 буусан тол тоглогчын ээлж солигдоно.
  //Энэ тоглогчын ээлжиндээ цуглуулсан оноог 0 болгоно
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  //Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчыг 1 болгох
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //Шоог түр алга болгох
  diceDom.style.display = "none";
  //alert("Таны хаясан шоо: " + diceNumber + " буулаа.");
}

//Шинэ тоглоом эхлүүлэх товчны эвент
document.querySelector(".btn-new").addEventListener("click", initGame);
