import {projects} from './projects.js'

const projectList = document.querySelector('#projectList');

function Project(obj){
	this.name = obj.projName;
	this.link = obj.link;
	this.desc = obj.description;
	this.skills = obj.skillsUsed;
	this.languages = obj.languagesUsed;
	this.imgSrc = `img/proj${obj.id}.png`;

	this.createCard = function(){
		// create card faces - front and back
		// let cardLink = document.createElement('a');
		// cardLink.classList.add('cardLink');
		// cardLink.href = this.link;
		// cardLink.target = "_blank";
		// projectList.appendChild(cardLink);
		let card = document.createElement('a');
		card.classList.add('projectCard');
		card.href = this.link;
		card.target = "_blank";
		projectList.appendChild(card);
		let cardFront = document.createElement('div');
		cardFront.classList.add('cardFace','cardFront');
		card.appendChild(cardFront);
		let cardBack = document.createElement('div');
		cardBack.classList.add('cardFace','cardBack');
		card.appendChild(cardBack);

		// create card title - project name
		let projName = document.createElement('h1');
		projName.textContent = this.name;
		cardFront.appendChild(projName);

		// create card image
		let imgContainer = document.createElement('div');
		imgContainer.classList.add('imgContainer');
		cardFront.appendChild(imgContainer);
		let img = document.createElement('img');
		img.src = this.imgSrc;
		imgContainer.appendChild(img);

		// create Description on cardBack
		let description = document.createElement('p');
		description.classList.add('description');
		description.textContent = this.desc;
		cardBack.appendChild(description);

		// create skills section on cardBack
		let skillsTitle = document.createElement('h2');
		skillsTitle.textContent = "Skills Used";
		cardBack.appendChild(skillsTitle);
		let skillsContain = document.createElement('ul');
		skillsContain.classList.add('skillsContainer');
		var skillsArray = this.skills;
		for(var skill in skillsArray){
			var p = document.createElement('li');
			p.classList.add('skill');
			p.textContent = skill+": "+skillsArray[skill];
			skillsContain.appendChild(p);
		}
		cardBack.appendChild(skillsContain);

		// check for languages, if so, create
		// var languagesArray = this.languages;
		// var langArray = JSON.stringify(languagesArray);
		// console.log(langArray);
		// if(languagesArray.length > 1){
		// 	console.log(this.name+" has languages");
		// }

	};
}


projects.forEach(elm => {
	let newProj = new Project(elm);
	newProj.createCard();

});

document.getElementById('projectList').addEventListener("mouseover", function(e) {
		if(e.target && e.target.matches('.projectCard')){
		  console.log('flip');
		  e.target.classList.toggle('flip');
		}
});
