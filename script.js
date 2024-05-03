for (let i = 0; i < 11; i++) {
	if (i === 0) {
		console.log(`${i} – это ноль`)
	} else if (i % 2 === 0) {
		console.log(`${i} - четное число`)
	} else {
		console.log(`${i} - нечетное число`)
	}
}

const arr = [1, 2, 3, 4, 5, 6, 7]

arr.splice(3, 2)

console.log(arr)

const randomArr = []
let sum = 0

for (let i = 0; i <= 5; i++) {
	randomArr.push(Math.round(Math.random() * 9))
}
let min = randomArr[0]
for (let i = 0; i < randomArr.length; i++) {
	sum += randomArr[i]
	if (randomArr[i] < min) {
		min = randomArr[i]
	}
}

console.log(randomArr)
console.log(sum)
console.log(min)
console.log(randomArr.indexOf(3))
let tree = ''
for (let i = 0; i <= 20; i++) {
	tree += 'x'
	console.log(tree)
}
