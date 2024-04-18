function getCube() {
	number = document.querySelector('[data-cube="input"]').value
	let answer = document.querySelector('[data-cube="answer"]')
	answer.innerHTML = number * 3
}
function getSalary() {
	number = parseInt(document.querySelector('[data-salary="input"]').value)
	let answer = document.querySelector('[data-salary="answer"]')
	if (isNaN(number)) {
		answer.innerHTML = 'Error'
	} else {
		answer.innerHTML = number * 0.87
	}
}

function getMax() {
	number1 = parseInt(document.querySelector('[data-max="input1"]').value)
	number2 = parseInt(document.querySelector('[data-max="input2"]').value)
	number3 = parseInt(document.querySelector('[data-max="input3"]').value)
	let answer = document.querySelector('[data-max="answer"]')
	let max = number1
	if (max < number2) {
		max = number2
	}
	if (max < number3) {
		max = number3
	}
	answer.innerHTML = max
}
function getNumber1() {
	return parseInt(document.querySelector('[data-calc="input1"]').value)
}
function getNumber2() {
	return parseInt(document.querySelector('[data-calc="input2"]').value)
}
let answerCalc = document.querySelector('[data-calc="answer"]')

function addition(number1, number2) {
	answerCalc.innerHTML = number1 + number2
}

function difference(number1, number2) {
	answerCalc.innerHTML = number1 - number2
}
function multiplication(number1, number2) {
	answerCalc.innerHTML = number1 * number2
}
function division(number1, number2) {
	answerCalc.innerHTML = number1 / number2
}