let date2 = new Date(2027, 3, 31);
const timer = document.getElementById("timer")

function formatSeconds(num) {
	const difference = num - Date.now();
	
	const differenceDays = difference / (1000 * 60 * 60 * 24);
	const differenceHours = (difference / (1000 * 60 * 60)) % 24;
	const differenceMinutes = (difference / (1000 * 60)) % 60;
	const differenceSeconds = (difference / (1000)) % 60;
	
	return [differenceDays, differenceHours, differenceMinutes, differenceSeconds];
}

// change the text of the element
function changeText() {
	const children = document.getElementById("timer").children;
	let times = formatSeconds(date2);
	let timeArray = []
	date2 -= 1;

	// if the number of seconds is negative, the date is passed
	if (times[3] < 0) {
		const title = document.getElementById("timerTitle");
		const description = document.getElementById("timerDescription");
		timeArray = [0,0,0,0];

		title.textContent = "Competition happening now!";
		description.innerHTML = "Check back later when the competition is over to see how we did! In the meantime, <a href='#contactUs'>check out our socials!</a>"

	} else {
		// calculate the values
		const fDays = Math.floor(times[0]).toString()
		const fHours = Math.floor(times[1]).toString().padStart(2, '0');
		const fMinutes = Math.floor(times[2]).toString().padStart(2, '0');
		const fSeconds = Math.floor(times[3]).toString().padStart(2, '0');
		timeArray = [ fDays, fHours, fMinutes, fSeconds ]
	}
	
	// add each calculated time to the items
	for (let i = 0; i < children.length; ++i) {
		const element = children[i];
		const time = element.getElementsByTagName("h1")[0];
		const measurement = element.getElementsByTagName("p")[0];

		time.textContent = timeArray[i];
	}
}

setInterval(changeText, 1000)
changeText()
