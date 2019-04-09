const fetch = require("node-fetch");

function sobiraj(a, b) {
	return a+b;
}

function odzimaj(a, b) {
	return a-b;
}

//console.log(sobiraj(2, 3));

var calc = function(c, d, fn){

	return fn(c, d);
}

//console.log(calc);

var res = calc(1, 2, odzimaj);

console.log(res);

var res2 = calc(2, 3, (a, b) =>{
	return a*b;
})

console.log(res2);


var p1 = (a, b) => {
	return new Promise((success, fail) =>{
		var sum = a + b;

		if(sum <= 15){
			return success(sum);
		}
		else{
			return fail("Sum is too big");
		}
	})
}


var p2 = (x, y) => {

	return new Promise((success, fail) => {

		if(x >= y){
			return success(x - y);
		}
		else{
			return fail("Invalid parameters");
		}
	})

}

// p1(10, 2)
// 	.then(
// 		(data) => {
// 			console.log("Sumata e "+data);
// 		},

// 		(err) =>{
// 			console.log(err);
// 		});


// p2(8, 8)
// 	.then(
// 		(data) => {
// 			console.log("Razlikata e "+data);
// 		},

// 		(err) => {
// 			console.log(err);
// 		})


p1(3, 8)
	.then(
		(data) => {
			return p2(data, 2);
		},

		(err) => {
			console.log(err);
		})
	.then(
		(data) => {
			console.log("Rezultatot e "+data);
		},

		(err) => {
			console.log(err);
		})


var isOnline = (broj, ime) =>{

	return new Promise((success, fail) =>{
		if(broj > 0){
			return success(ime + " is online");
		}
		else{
			return fail (ime + "isn't online");
		}
	})

}


isOnline(3, "Test")
	.then(
		(data) => {
			console.log(data);
		},
		(err) => {
			console.log(err);
		})






function returnTaskIfCompleted(){
	return new Promise((success, fail) => {
		fetch("https://jsonplaceholder.typicode.com/todos/17")
			.then(
				(response) => {
					return response.json();
				},
				(fail) => {
					console.log("error");
				}

				)
			.then( (value) => {

				if(value.completed == true){
					return success(value);
				}

				else{
					return fail("Task not completed");
				}
			})
	})

}

returnTaskIfCompleted().then(
	(success) => {
		console.log(success)
	},

	(fail) => {
		console.log(fail);
	})