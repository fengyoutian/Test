function test() {
	return 'test'
}

function problem() {
	return 'We have a problem with promises'
}

function print(result) {
	console.log(result)
}

Promise.resolve('resolve')
	.then(test)
	.then(function () {
		return Promise.resolve('resolve2')
	})
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

Promise.resolve('resolve')
	.then(test)
	.then(function () {
		Promise.resolve('resolve2')
	})
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

Promise.resolve('resolve')
	.then(test)
	.then(Promise.resolve('resolve2'))
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

Promise.resolve('resolve')
	.then(test)
	.then(null)
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

// resolve2
// undefined
// test
// test

console.log('======== We have a problem with promises. ======')

Promise.resolve('problem')
	.then(function () {
		return problem()
	})
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

Promise.resolve('problem')
	.then(function () {
		problem()
	})
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

Promise.resolve('problem')
	.then(problem())
	.then(print)
	.catch(function (err) {
		console.log(err)
	})

Promise.resolve('problem')
	.then(problem)
	.then(print)
	.catch(function (err) {
		console.log(err)
	})


// We have a problem with promises
// undefined
// problem
// We have a problem with promises
