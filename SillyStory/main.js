const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was :insertw: hot outside, so :insertx: went for a :insertp:. When he got to :inserty:, he stared in horror for a few moments, then :insertz:. You saw the whole thing, but were not surprised — :insertx: weighs 300 pounds, and it was :insertw: hot out.";
const insertX = ["Jeremy Clarkson", "James May", "Richard Hammond"];
const insertY = ["the soup kitchen", "Putin's house", "the White House", "the BBC office", "the Police station"];
const insertZ = ["creashed", "melted into a puddle on the sidewalk", "lit the car on fire", "went to the gulag", "drowned"];
const insertW = ["really", "not", "a little", "very"];
const insertP = ["drive", "walk", "run", "ride",];

randomize.addEventListener('click', result);

function result() {

	let newStory = storyText;

	const xItem = randomValueFromArray(insertX);
	const yItem = randomValueFromArray(insertY);
	const zItem = randomValueFromArray(insertZ);
	const wItem = randomValueFromArray(insertW);
	const pItem = randomValueFromArray(insertP);

	
	newStory = newStory.replaceAll(':insertx:',xItem);
	newStory = newStory.replaceAll(':inserty:',yItem);
	newStory = newStory.replaceAll(':insertz:',zItem);
	newStory = newStory.replaceAll(':insertw:',wItem);
	newStory = newStory.replaceAll(':insertp:',pItem);



  if(customName.value !== '') {
    const name = customName.value;
	newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300/2.25)} kilograms`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  
}