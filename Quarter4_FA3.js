// (1)
function askNumber() {
	var number;
	do {
	number = prompt("Enter a number:");
	} while (isNaN(number) || number === "");

number = parseInt(number);
var output = "Number inputted: " + number + "\n";

if (number % 2 === 1) {
	// Rectangle
	for (var i = number; i >= 1; i--) {
		output += (i + " ").repeat(number) + "\n";
		}
	} else {
	// Triangle
	for (var i = number; i >= 1; i--) {
		output += (i + " ").repeat(i) + "\n";
		}
	}
	document.getElementById("output").innerHTML = output.replace(/\n/g, "<br>");
}

// (2)
var contacts = [];

function updateContactsDisplay() {
	document.getElementById("contactsOutput").textContent = "Contacts: " + contacts.join(", ");
}

function addContact() {
	const input = document.getElementById("contactInput").value.trim();
	if (input === "") return;

	if (contacts.length === 7) {
		contacts.shift();
	}

	contacts.push(input);
	updateContactsDisplay();
	document.getElementById("contactInput").value = "";
}

function removeContact() {
	contacts.pop();
	updateContactsDisplay();
}
