let p = console.log;

let navs = document.querySelectorAll(".navbar");
let container = document.querySelector('.container');
let url = './partials/home.html';


function changePage() {
	fetch(url)
		.then(function (rsp) {
			if (rsp.statusText === "OK") {
				return rsp.text();
			}

			throw new Error(rsp.statusText);
		})
		.then(function (data) {
			container.innerHTML = data;
		})
		.catch(function (error) {
			p(error.name, error.message);
		});
}

//Load the initial partial on the page-load.
changePage();

//Load the required partial based on the link clicked.
function handleClick(e) {
	
	//Prevent the default behaviour of link element.
	e.preventDefault();
	
	//Get the reference to the clicked link.
	let click = e.target;
	
	//Reasign the existing value of >>url<< with the 
	//value of href-attribute that blongs to the clicked link.
	url = click.href;
	
	//call the function that updates the content
	changePage();
}

for (let nav of navs) {
	nav.addEventListener("click", handleClick);
}