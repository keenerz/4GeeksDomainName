/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our", "how", "bog"];
let adj = ["great", "big", "tall", "short"];
let noun = ["jogger", "racoon", "wizard", "pokemon"];
let domain = [".com", ".us", ".net", ".org"];
let domainName = [];

window.onload = function() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        for (let l = 0; l < 4; l++) {
          let basedName = pronoun[i] + adj[j] + noun[k] + domain[l];
          domainName.push(basedName);
        }
      }
    }
  }
  console.log(domainName);
};
