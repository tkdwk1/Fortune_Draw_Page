/* =========================================================
   오늘의 행운 뽑기 — 학생용 (js/script.js)
   ========================================================= */

/* ---------------------------------------------------------
   1. HTML 요소 찾기
   --------------------------------------------------------- */

// ★ STEP 1. HTML 의 요소를 찾아 변수에 담습니다.
//   document.querySelector('#아이디') 는 그 id 를 가진 요소를 찾아 줍니다.
//   (아이디는 index.html 에 입력한 id 와 똑같아야 합니다.)
const page = document.querySelector('#page');
const fortuneCard = document.querySelector('#fortuneCard');
const fortuneEmoji = document.querySelector('#fortuneEmoji');
const fortuneTitle = document.querySelector('#fortuneTitle');
const fortuneMessage = document.querySelector('#fortuneMessage');
const colorName = document.querySelector('#colorName');
const colorChip = document.querySelector('#colorChip');
const luckyNumber = document.querySelector('#luckyNumber');
const drawBtn = document.querySelector('#drawBtn');
const countText = document.querySelector('#countText');




/* ---------------------------------------------------------
   2. 변수
   --------------------------------------------------------- */

// ★ STEP 2. 뽑은 횟수를 세는 변수를 만듭니다. 
//   값이 계속 바뀌므로 let 으로 만듭니다. (바뀌지 않는 값은 const)
let drawCount = 0;



/* ---------------------------------------------------------
   3. 함수: 1 ~ max 사이 랜덤 숫자
   --------------------------------------------------------- */

// ★ STEP 3. getRandom 함수를 만듭니다.
//   · Math.random() 은 0 이상 1 미만의 소수를 만듭니다. (예: 0.37)
function getRandom(max) {
   return Math.floor(Math.random() * max) + 1;  // 1 ~ max 사이 정수
}




/* ---------------------------------------------------------
   4. 함수: 운세 뽑기
   --------------------------------------------------------- */

// ★ STEP 4-1.  
//   · 1 ~ 5 사이 숫자 luck 을 뽑습니다. (getRandom 을 부름)
//   · 값이 정해질 변수 7개를 let 으로 만듭니다. 
function drawFortune() {
   //1~5사이의 숫자를 뽑는다
   const luck = getRandom(5);

   //숫자에 따라 값이 정해지는 변수
   let emoji;       // 운세 이모지
   let title;       // 운세 제목
   let message;     // 운세 메시지
   let cardColor;   // 카드 배경색
   let pageColor;   // 페이지 배경색
   let lucky;       // 행운의 색 이름
   let chipColor;   // 행운의 색 색상

   //   luck 이 1 이면 이 운세, 2 이면 저 운세 … 
    if (luck === 1) {
        emoji = '🌟';
        title = '대박 행운!';
        message = '오늘은 무엇을 해도 잘 풀리는 날이에요. \n하고 싶었던 일에 도전해 보세요!';
        cardColor = '#fff3b0';
        pageColor = '#fff9db';
        lucky = '노랑';
        chipColor = '#ffd43b';
    } else if (luck === 2) {
        emoji = '🍀';
        title = '좋은 일이 생겨요';
        message = '뜻밖의 반가운 소식이 찾아올 거예요. \n친구에게 먼저 인사해 보세요.';
        cardColor = '#d3f9d8';
        pageColor = '#ebfbee';
        lucky = '초록';
        chipColor = '#51cf66';
    } else if (luck === 3) {
        emoji = '☁️';
        title = '평범하지만 편안한 날';
        message = '큰일은 없지만 마음이 편안한 하루예요. \n좋아하는 음악을 들어 보세요.';
        cardColor = '#d0ebff';
        pageColor = '#e7f5ff';
        lucky = '하늘';
        chipColor = '#74c0fc';
    } else if (luck === 4) {
        emoji = '☔';
        title = '조심조심!';
        message = '서두르면 실수할 수 있어요. \n오늘은 천천히, 두 번 확인하세요.';
        cardColor = '#e5dbff';
        pageColor = '#f3f0ff';
        lucky = '보라';
        chipColor = '#9775fa';
    } else {
        emoji = '🔥';
        title = '열정이 가득한 날';
        message = '에너지가 넘치는 하루예요. \n운동이나 공부에 집중하면 큰 성과가 있어요!';
        cardColor = '#ffd8d8';
        pageColor = '#fff0f0';
        lucky = '빨강';
        chipColor = '#ff6b6b';
    }

   // ★ STEP 4-3. 값을 화면에 보여 줍니다. 
   fortuneEmoji.textContent = emoji;
   fortuneTitle.textContent = title;
   fortuneMessage.textContent = message;
   page.style.backgroundColor = pageColor;
   fortuneCard.style.backgroundColor = cardColor;
   colorName.textContent = lucky;
   colorChip.style.backgroundColor = chipColor;
   luckyNumber.textContent = getRandom(45);  // 1 ~ 45 사이 랜덤 숫자

   //뽑은 횟수를 센다
   drawCount = drawCount + 1;
   countText.textContent ="지금까지"+ drawCount + "번 뽑았어요.";
}

/* ---------------------------------------------------------
   5. 이벤트: 버튼을 누르면 함수 실행
   --------------------------------------------------------- */
// ★ STEP 5. 뽑기 버튼을 누르면 drawFortune 이 실행되게 합니다. 
drawBtn.addEventListener('click', drawFortune);

