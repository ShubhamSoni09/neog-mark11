let inputDate = document.querySelector("#input-date");
let inputLucky = document.querySelector("#input-lucky");
let formDate = document.querySelector("#form");
let resultDiv = document.querySelector("#result");


let icon = document.querySelector(".fa");
let privacyDiv = document.querySelector(".privacy");
let happyAnimationsDiv = document.querySelector('.happy-animation');
let sadAnimationsDiv = document.querySelector('.sad-animation');

icon.addEventListener("click", () => {
	privacyDiv.style.display = "none";
})

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let sum = 0, rem = 0;

	let date = inputDate.value.split('-').join('');
	while (date !== 0) {
		rem = date % 10;
		sum += rem;
		date = Math.floor(date / 10);
	}

	if (sum % inputLucky.value === 0) {
		resultDiv.style.display = 'block';

		happyAnimationsDiv.style.display = 'block';
		sadAnimationsDiv.style.display = 'none';

		resultDiv.innerText = "Yay! Your birthdate is lucky. 😍";
		resultDiv.style.backgroundColor = "#88fd96";
	} else {
		resultDiv.style.display = 'block';

		happyAnimationsDiv.style.display = 'none';
		sadAnimationsDiv.style.display = 'block';

		resultDiv.innerText = "OOPS! Your birthdate is unlucky. 😓";
		resultDiv.style.backgroundColor = "#ff2c2d";
		resultDiv.style.color = "#000000";
	}
});
