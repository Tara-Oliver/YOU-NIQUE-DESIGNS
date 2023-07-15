const container = window.appContainer;
//add palette to page
const palette = document.createElement("div");

palette.setAttribute("class", "palette box-borders");
// palette.innerText = "Pick a color" + "&rarr;";
const span = document.createElement("label");

const textNode = document.createTextNode("Pick a color ");
span.appendChild(textNode);

// const arrowNode = document.createTextNode(" " + "\u2192"); // Unicode character code for the right arrow
// span.appendChild(arrowNode);

// document.body.appendChild(span);

palette.appendChild(span);

container.appendChild(palette);

//color picker
const colorPicker = document.createElement("input");
colorPicker.setAttribute("type", "color");
colorPicker.setAttribute("class", "colorPicker");
colorPicker.setAttribute("value", "#ffffff");

palette.append(colorPicker);

//div to store colors picked by user
const pickedColors = document.createElement("div");
pickedColors.setAttribute("class", "pickedColors");
palette.append(pickedColors);

let currentColor;
colorPicker.onchange = function () {
	currentColor = colorPicker.value;
	let i = 0;
	let previousColor = document.createElement("div");

	previousColor.setAttribute("class", "prevColor");
	previousColor.style.backgroundColor = currentColor;
	for (let i = 0; i < 16; i++) {
		pickedColors.appendChild(previousColor);
	}
};

pickedColors.onclick = function (event) {
	currentColor = event.target.style.backgroundColor;
};

const paths = document.querySelectorAll("path");
export let changes = [];
let orgColor = "#ffffff";

paths.forEach((path) => {
	path.onclick = function (event) {
		orgColor = event.target.style.fill;

		const action = {
			element: event.target,
			previousColor: orgColor,
		};

		// console.log(changes);
		event.target.style.fill = currentColor;
		changes.push(action);
	};
});

export function init(container, changes) {
	// Use the container element for sidebar initialization
	// ...
}
