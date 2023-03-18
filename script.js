//your JS code here. If required.
function myPromise (){
	return new Promise((resolve) => {
	  setTimeout(() => { 
		  resolve("Hello, world!");
	  }, 1000);
    });
}
myPromise.then((value) => document.querySelector(''#output').innerText= value);

// function func(){
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("Hello, world!");
// 		}, 1000);
// 	});
// }
// func().then((value) => document.getElementById("output").innerText = value);
  