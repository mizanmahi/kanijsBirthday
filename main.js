const aud = document.getElementById("audio");
// const button = document.querySelector("button");
// const prome = document.querySelector(".prome");
// console.log(prome);

// button.addEventListener("click", () => {
  
//    prome.style.opacity = 1;
//    prome.animate(
//       [
//          {
//             // from
//             filter: `blur(10px)`,
//          },
//          {
//             // to
//             filter: `blur(0px)`,
//          },
//       ],
//       10000
//    ); // 2000 duration
//    if (aud.currentTime === 0) {
//       aud.play();
//       return;
//    }
//    aud.pause();
//    aud.currentTime = 0;
// });

// // startConfetti();

// aud.play();
toggleConfetti();
let can = document.querySelector("canvas");
can.style.position = "absolute";
can.style.top = "0px";
can.style.left = "0px";