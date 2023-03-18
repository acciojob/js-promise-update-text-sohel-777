//your JS code here. If required.
function myPromise (){
	return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, world!");
    
  }, 1000);
}


myPromise
  .then((res) => {
   document.querySelector(#output).textContent=res;
   
  })
  .catch((e) => {
    console.log(e);
  });