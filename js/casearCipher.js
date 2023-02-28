
// Encrypts text using a shift od s
function encrypt()
{
        let text = document.getElementById('plainText').value;
        let s = document.getElementById('plainTextShift').value;
        
        
		let result=""
		for (let i = 0; i < text.length; i++)
		{
			let char = text[i];
			if (char.toUpperCase(text[i]))
			{
				let ch = String.fromCharCode((char.charCodeAt(0) + 1-65) % 26 + 65);
				result += ch;
                return;
                
			}
			else
			{
				let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
				result += ch;
			}
		}
        document.getElementById('readonlyCipher').value = result;
	}

	// Decypts text using a shift od s
	function decrypt()
	{
        let text = document.getElementById('cipherText').value;
        let s = document.getElementById('cipherTextShift').value;
		let result=""
		for (let i = 0; i < text.length; i++)
		{
			let char = text[i];
			if (char.toUpperCase(text[i]))
			{
				let ch = String.fromCharCode((char.charCodeAt(0) - s-65) % 26 + 65);
				result += ch;
			}
			else
			{
				let ch = String.fromCharCode((char.charCodeAt(0) - s-97) % 26 + 97);
				result += ch;
			}
		}
		document.getElementById('readonlyPlain').value = result;
	}
	
	// Driver code
	// document.write("Text : " + text + "<br>");
	// document.write("Shift : " + s + "<br>");
	// document.write("Cipher: " + encrypt(text, s) + "<br>");
	
