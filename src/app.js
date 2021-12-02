/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net"];

window.onload = function() {
  let domainName = [];
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

let suggestions = ["solution", "torrent"];
function autocompleteMatch(input) {
  if (input == "") {
    return [];
  }
  var reg = new RegExp(input);
  return suggestions.filter(function(term) {
    if (term.match(reg)) {
      return term;
    }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = "";
  let list = "";
  let terms = autocompleteMatch(val);
  for (i = 0; i < terms.length; i++) {
    list += "<li>" + terms[i] + "</li>";
  }
  res.innerHTML = "<ul>" + list + "</ul>";
}

$("#input").click(function(e) {
  $("#NavDropdownListContainer").css("visibility", "visible");
});

$(".ms-qSuggest-listItem").click(function() {
  $("#input").val($(this).text());
  $("#NavDropdownListContainer").css("visibility", "hidden");
});
