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

		// CARD BACK
		// create Description on cardBack
		let descHead = document.createElement('h2');
		descHead.textContent = "Description";
		cardBack.appendChild(descHead);
		let description = document.createElement('p');
		description.classList.add('description');
		description.textContent = this.desc;
		cardBack.appendChild(description);

		// CREATE LISTS SECTION
		let listsSection = document.createElement('div');
		listsSection.classList.add('listsContain');
		cardBack.appendChild(listsSection);

		// create skills section on cardBack
		let skillSection = document.createElement('div');
		skillSection.classList.add('skillContainer');
		listsSection.appendChild(skillSection);
		let skillsTitle = document.createElement('h2');
		skillsTitle.textContent = "Skills Used";
		skillSection.appendChild(skillsTitle);
		let skillsContain = document.createElement('ul');
		skillsContain.classList.add('skillsList');
		var skillsArray = this.skills;
		for(var skill in skillsArray){
			var p = document.createElement('li');
			p.classList.add('skill');
			p.textContent = skill+": "+skillsArray[skill];
			skillsContain.appendChild(p);
		}
		skillSection.appendChild(skillsContain);

		// check for languages, if so, create
		var languagesArray = this.languages;
		var langArray = JSON.stringify(languagesArray);
		// console.log(this.name + langArray);
		if(languagesArray.length > 1){
			console.log(this.name+" has languages");
			// LANG DIV
			let langDiv=document.createElement('div');
			langDiv.classList.add('langContainer');
			listsSection.appendChild(langDiv);
			// LANG HEADER
			let langHead=document.createElement('h2');
			langHead.textContent="Languages Used";
			langDiv.appendChild(langHead);
			// LANG UL
			let langList=document.createElement('ul');
			languagesArray.forEach(elm =>{
				let lang = document.createElement('li');
				console.log(elm);
				lang.textContent=elm;
				langList.appendChild(lang);
			});
			langDiv.appendChild(langList);
		}

	};
}

// LOOPS THROUGH PROJECTS IMPORTED FROM JSON FILE AND CALLS FUNCTIONS
projects.forEach(elm => {
	let newProj = new Project(elm);
	newProj.createCard();

});

// CARD FLIPPING FUNCTIONALITY
document.getElementById('projectList').addEventListener("mouseover", function(e) {
		if(e.target && e.target.matches('.projectCard')){
		  console.log('flip');
		  e.target.classList.toggle('flip');
		}
});
