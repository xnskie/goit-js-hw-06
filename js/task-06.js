const inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");

let intTotallenght = parseInt(totalLenght, 10);

// inputVal.oninput = function () {
//     if (inputVal.value.length === intTotallenght) {
//         inputVal.classList.remove("invalid");
//         inputVal.classList.add("valid");
//     }
//     else if (inputVal.value.length === 0) {
//         inputVal.classList.remove("valid");
//         inputVal.classList.remove("invalid");
//     }
//     else {
//         inputVal.classList.add("invalid");
//     }
// };
inputVal.addEventListener('blur', event => {
	if (event.target.value.length === intTotallenght) {
		inputVal.classList.add('valid')
		if (inputVal.classList.contains('invalid')) {
			inputVal.classList.remove('invalid')
		}
	} else {
		if (inputVal.classList.contains('valid')) {
			inputVal.classList.remove('valid')
		}
		inputVal.classList.add('invalid')
	}
})