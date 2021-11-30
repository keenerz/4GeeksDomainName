/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our", "how", "bog"];
let adj = ["great", "big", "tall", "short"];
let noun = ["jogger", "racoon", "wizard", "pokemon"];
let domain = [".com", ".us", ".net", ".org"];

window.onload = function() {
  for (let i = 0; i < 8; i++) {
    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let adjIndex = Math.floor(Math.random() * adj.length);
    let nounIndex = Math.floor(Math.random() * noun.length);
    let domainIndex = Math.floor(Math.random() * domain.length);

    let domainName =
      pronoun[pronounIndex] +
      adj[adjIndex] +
      noun[nounIndex] +
      domain[domainIndex];

    console.log(domainName);
  }
};
