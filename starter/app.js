"use strict";

const reviews = [
	{
		id: 1,
		name: "susan smith",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		name: 'susan smith',
		job: "web developer",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
		name: 'anna johnson',
		job: 'web designer',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
		name: 'peter jones',
		job: 'intern',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
		name: 'bill anderson',
		job: 'the boss',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

const goToLeft = document.getElementById('left');
const goToRight = document.getElementById('right');
const surpriseBtn = document.getElementById('btn');
const personImage = document.getElementById('person-img');
const personName = document.getElementById('person-name');
const personJob = document.getElementById('person-job');
const personText = document.getElementById('person-text');

surpriseBtn.addEventListener('click', () => {
	const randomPerson = Math.floor(Math.random() * reviews.length);
	personImage.src = reviews[randomPerson].img;
	personName.textContent = reviews[randomPerson].name
	personJob.textContent = reviews[randomPerson].job
	personText.textContent = reviews[randomPerson].text
});

function nextItem() {
	for (let i = 0; i < reviews.length; i++) {
		if (reviews[i].id <= reviews[i].id + 1) {
			reviews[i].id += 1;
			console.log(reviews[i].id);
		}
	}
}

goToLeft.addEventListener('click', () => {
	nextItem();
});