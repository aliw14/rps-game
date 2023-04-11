let rock = document.querySelector(".rock img");
let paper = document.querySelector(".paper img");
let scissors = document.querySelector(".scissors img");

let random2 = document.querySelector(".random2 img");
let random3 = document.querySelector(".random3 img");
let random1 = document.querySelector(".random1 img");

let value1 = document.querySelector(".results .ran-one span");
let value2 = document.querySelector(".results .ran-two span");

let btn = document.querySelector("button");

let countone = 0;
let counttwo = 0;

let arr = [rock.src, paper.src, scissors.src];
let randarr = [random1.src, random2.src, random3.src];

rock.onclick = () => {
  let random = Math.floor(Math.random() * 3);
  let findCom = randarr[random];
  console.log(findCom);
  if (findCom === random3.src) {
    countone++;
    value1.innerHTML = countone;
  } else if (findCom === random2.src) {
    counttwo++;
    value2.innerHTML = counttwo;
  }
};

paper.onclick = () => {
  let random = Math.floor(Math.random() * 3);
  let findCom = randarr[random];
  console.log(findCom);
  if (findCom === random3.src) {
    countone++;
    value1.innerHTML = countone;
  } else if (findCom === random1.src) {
    counttwo++;
    value2.innerHTML = counttwo;
  }
};

scissors.onclick = () => {
  let random = Math.floor(Math.random() * 3);
  let findCom = randarr[random];
  console.log(findCom);
  if (findCom === random1.src) {
    countone++;
    value1.innerHTML = countone;
  } else if (findCom === random2.src) {
    counttwo++;
    value2.innerHTML = counttwo;
  }
};
btn.addEventListener("click", () => {
    countone = 0;
    counttwo = 0;
    value1.innerHTML = countone;
    value2.innerHTML = counttwo;
  });
  rock.onclick = () => {
    let random = Math.floor(Math.random() * 3);
    let findCom = randarr[random];
    console.log(findCom);
    if (findCom === random3.src) {
      countone++;
      value1.innerHTML = countone;
    } else if (findCom === random2.src) {
      counttwo++;
      value2.innerHTML = counttwo;
    }
    
    if (countone === 5) {
      alert("Player 1 wins!");
    } else if (counttwo === 5) {
      alert("Player 2 wins!");
    }
  };
  