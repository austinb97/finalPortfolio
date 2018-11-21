import {projects} from './projects.js'

const projectsContainer = document.querySelector('#projectList');
let count = 1;

projects.forEach(elm => {
	let numPrefix = count < 10 ? '00' : '0';
	let imgName = `${numPrefix}${count++}${elm.ename}.png`;
	let card = document.createElement('div');
	card.className = "card";
	let cardFront = document.createElement('div');
	cardFront.className = "cardFace cardFront";
	let cardBack = document.createElement('div');
	cardBack.className = "cardFace cardBack";
	card.appendChild(cardFront);
	card.appendChild(cardBack);
	let fig = document.createElement('fig');
	let cap = document.createElement('figcaption');
	let img = document.createElement('img');
	img.src = `img/${imgName}`;
	cap.textContent = elm.ename;
	cardFront.appendChild(fig);
	fig.appendChild(img);
	fig.appendChild(cap);

	let statContainer = document.createElement('div');
	statContainer.classList.add('statContainer');
	var statsArray = elm.base;
	for(var stat in statsArray){
		var p = document.createElement('p');
		p.classList.add('stat');
		p.textContent = stat+": "+statsArray[stat];
		console.log(p);
		statContainer.appendChild(p);
	}
	cardBack.appendChild(statContainer);

	pokeContainer.appendChild(card);

});


document.getElementById('container').addEventListener("mouseover", function(e) {
		if(e.target && e.target.matches('.card')){
		  console.log('flip');
		  e.target.classList.toggle('flip');
		}
	});