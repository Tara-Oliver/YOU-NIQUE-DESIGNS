import { changes } from "./palette.js";

const container = window.appContainer;

const design_area = document.createElement("div");
design_area.setAttribute("class", "design box-borders");

const design_title = document.createElement("div");
design_title.innerText = "Design away";
design_title.setAttribute = ("id", "design_title");

design_area.appendChild(design_title);
container.appendChild(design_area);

export const oopsBtn = document.createElement("button");
oopsBtn.innerText = "Oops!";
oopsBtn.setAttribute("id", "oopsBtn");
oopsBtn.setAttribute("class", "btn oopsbtn");
design_title.appendChild(oopsBtn);

oopsBtn.onclick = function () {
	changes[changes.length - 1].element.style.fill =
		changes[changes.length - 1].previousColor;
	changes.pop();
};

const largePump = document.querySelector("#Layer_1");
const largeFlat = document.querySelector("#Layer_2");
const largeSnkr = document.querySelector("#Layer_3");

design_area.append(largePump, largeSnkr, largeFlat);

document.getElementById("pumpBtn").addEventListener("click", displayImage);
document.getElementById("flatBtn").addEventListener("click", displayImage);
document.getElementById("snkrBtn").addEventListener("click", displayImage);

function displayImage(ev) {
	if (ev.currentTarget.id == "pumpBtn") {
		document.querySelector("#Layer_2").style.display = "none";
		document.querySelector("#Layer_3").style.display = "none";
		document.querySelector("#Layer_1").style.display = "inline-block";
	} else if (ev.currentTarget.id == "flatBtn") {
		document.querySelector("#Layer_2").style.display = "inline-block";
		document.querySelector("#Layer_1").style.display = "none";
		document.querySelector("#Layer_3").style.display = "none";
	} else {
		document.querySelector("#Layer_2").style.display = "none";
		document.querySelector("#Layer_1").style.display = "none";
		document.querySelector("#Layer_3").style.display = "inline-block";
	}
}

export function init(container) {
	// Use the container element for sidebar initialization
	// ...
}
