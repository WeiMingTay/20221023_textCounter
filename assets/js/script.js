// Variablen erstellen

let stats = document.querySelector(".status");
let text = document.getElementById("textArea");
let char = document.getElementById("characters");
let words = document.getElementById("words");
let lines = document.getElementById("lines");
let symbols = document.getElementById("symbols");

// Funktion erstellen

// words.value -= 1;
// lines.value -= 1;
// symbols.value -= 1;

function count() {


	char.innerHTML = text.value.length + " Zeichen";

	words.innerHTML = text.value.trim().split(/\s+/).length + " Worte";
	lines.innerHTML = text.value.split("\n").length + " Zeilen";
	symbols.innerHTML =
		text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Sonderzeichen";

	if (text.value.length === 0) {
		stats.style.display = "none";
	} else {
		stats.style.display = "block";
	}
}

// Funktion mit Event Listener aufrufen

text.addEventListener("input", count);
