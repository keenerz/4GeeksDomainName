/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net"];
let domainName = [];

window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let basedName = " " + pronoun[i] + adj[j] + noun[k] + domain[l];
          domainName.push(basedName);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domainresults").innerHTML = domainName;
};

let btnAdd = document.querySelector("#add");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
  if (input == null) {
    return;
  } else {
    pronoun.push(input.value);
    input.value = "";
    window.onload();
  }
});
