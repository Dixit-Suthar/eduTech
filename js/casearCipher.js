speechSynthesis.addEventListener(' ', speak());


function speak(message, element) {
	speechSynthesis.cancel();
	var msg = new SpeechSynthesisUtterance(message);

	var voices = window.speechSynthesis.getVoices();
	msg.rate = 1;
	msg.pitch = 1;
	msg.voice = voices[1];
	window.speechSynthesis.speak(msg);
}

function encrypt() {
	let text = document.getElementById('plainText').value;
	let s = +document.getElementById('plainTextShift').value;


	let result = ""
	for (let i = 0; i < text.length; i++) {
		let char = text[i];
		if (char == char.toUpperCase(text[i]) && char != char.toLowerCase(text[i])) {

			let ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
			result += ch;
		}
		else {
			let ch = String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
			result += ch;
		}
	}
	document.getElementById('readonlyCipher').value = result;
}

// Decypts text using a shift od s
function decrypt() {
	let text = document.getElementById('cipherText').value;
	let s = +document.getElementById('cipherTextShift').value;
	let result = ""
	for (let i = 0; i < text.length; i++) {
		let char = text[i];
		if (char == char.toUpperCase(text[i]) && char != char.toLowerCase(text[i])) {
			let ch = String.fromCharCode((char.charCodeAt(0) - s - 65) % 26 + 65);
			result += ch;
		}
		else {
			let ch = String.fromCharCode((char.charCodeAt(0) - s - 97) % 26 + 97);
			result += ch;
		}
	}
	document.getElementById('readonlyPlain').value = result;
}

function copyToClipBoard(e) {
console.log($(e).attr('title', "copied"));

	$(document).ready(function () {
		$(".").mouseenter(function () {
			var word = $(this).value();
			$(this).attr('title', word);
		});
	});
	// Get the text field
	var copyText = document.getElementById("myInput");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);

	// Alert the copied text
	alert("Copied the text: " + copyText.value);
}