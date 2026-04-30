let date2 = new Date(2027, 4, 7);
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
	let times = formatSeconds(date2);
	date2 -= 1;
	
	// calculate the values
	const children = document.getElementById("timer").children;
	const fDays = Math.floor(times[0]).toString()
	const fHours = Math.floor(times[1]).toString().padStart(2, '0');
	const fMinutes = Math.floor(times[2]).toString().padStart(2, '0');
	const fSeconds = Math.floor(times[3]).toString().padStart(2, '0');
	const timeArray = [ fDays, fHours, fMinutes, fSeconds ]
	
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