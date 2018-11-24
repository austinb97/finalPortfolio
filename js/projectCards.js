import {projects} from './projects.js'

const projectList = document.querySelector('#projectList');

function Project(obj){
	this.name = obj.projName;
	this.link = obj.link;
	this.desc = obj.description;
	this.skills = obj.skillsUsed;
	this.languages = obj.languagesUsed;
	this.imgSrc = `proj${obj.id}.png`;

	this.createCard = function(){
		let card = document.createElement('div');
		card.classList.add('projectCard');
		projectList.appendChild(card);
		let cardFront = document.createElement('div');
		cardFront.classList.add('cardFace cardFront');
		card.appendChild(cardFront);
		let cardBack = document.createElement('div');
		cardBack.classList.add('cardFace cardBack');
		card.appendChild(cardBack);

		let projName = document.createElement('p');
		projName.textContent = this.name;
		cardFront.appendChild(projName);
		console.log(projName);
	};
}

// function createProjCard(proj){

// }

projects.forEach(elm => {
	let newProj = new Project(elm);
	newProj.createCard();

});

