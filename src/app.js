/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {

  const update = () => {

    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = [
      "<span class='red'>&hearts;</span>", 
      "<span class='black'>&spades;</span>", 
      "<span class='black'>&clubs;</span>", 
      "<span class='red'>&diam;</span>"
    ];
  
    let suit = suits[Math.floor(Math.random() * suits.length)];
    document.querySelector(".card-header").innerHTML = suit;
    document.querySelector(".card-footer").innerHTML = suit;
    document.querySelector(".card-value").innerHTML = values[Math.floor(Math.random() * values.length)];

  }

  update();

  document.querySelector(".btn").onclick = update;
  console.log(update);

  

}  

