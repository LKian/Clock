console.log("If you're using IE, leave now.");
console.log("\n\n\n\n\n\n\nI SAID LEAVE!!!!!!!");

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand'); 

function getDate() {
const now = new Date();
	var seconds = now.getSeconds();
		if (seconds<10) {
			seconds = '0' + seconds;
		}

	var minutes = now.getMinutes();
		if (minutes<10) {
			minutes = '0' + minutes;
		}

	var hours = now.getHours();

	const secondsToDegrees = ((seconds/60)*360)+90;
		if (secondsToDegrees == 90) {
			secondHand.style.transition = 'all 0s';
		}
		else {
			secondHand.style.transition = 'all 0.5s'; 
		}

	const minutesToDegrees = ((minutes/60)*360)+90;
	const hoursToDegrees = ((hours/60)*360)+90;

	secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

	console.log(hours + ":"+ minutes + ":" + seconds);
}

	setInterval(getDate,1000);
	

