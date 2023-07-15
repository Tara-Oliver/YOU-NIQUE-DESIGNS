function initializeApp() {
	const container = document.createElement("div");
	window.appContainer = container;
	container.setAttribute("class", "container");
	document.body.appendChild(container);

	// Import the dependencies and call the init functions
	import("./scripts/header.js")
		.then((headerModule) => {
			headerModule.init();
		})
		.catch((error) => {
			console.error("Error importing header module:", error);
		});

	import("./scripts/sidebar.js")
		.then((sidebarModule) => {
			sidebarModule.init(container);
			const { pumpBtn, flatBtn, snkrBtn } = sidebarModule;
			// Access and use the exported buttons as needed
		})
		.catch((error) => {
			console.error("Error importing sidebar module:", error);
		});

	import("./scripts/design_area.js")
		.then((designModule) => {
			designModule.init(container);
			const { oopsBtn } = designModule;
		})
		.catch((error) => {
			console.error("Error importing design module:", error);
		});

	import("./scripts/palette.js")
		.then((paletteModule) => {
			paletteModule.init(container);
			const { changes } = paletteModule;
		})
		.catch((error) => {
			console.error("Error importing palette module:", error);
		});
}

document.addEventListener("DOMContentLoaded", initializeApp);
// import * as sidebarModule from "./scripts/sidebar.js";
// import * as headerModule from "./scripts/header.js";

// import("./scripts/header").then((header) => {
// 	// Use the imported module for the header
// 	header.init();
// });

// import("./scripts/sidebar").then((sidebar) => {
// 	// Use the imported module for the sidebar
// 	sidebar.init();
// });

// import("./scripts/design_area").then((design) => {
// 	// Use the imported module for the design
// 	design.init();
// });

// document.addEventListener("DOMContentLoaded", function () {
// 	// npm run watch to start server

// 	const body = document.body;
// 	const container = document.createElement("div");
// 	window.appContainer = container;
// 	container.setAttribute("class", "container");
// 	body.appendChild(container);

// 	import * as sidebarModule from "./scripts/sidebar.js";
// 	import * as headerModule from "./scripts/header.js";

// 	sidebarModule.init(container);
// 	headerModule.init();
///////////////////////////////////////////////////////////////////////////
////////////////////////// HEADER SECTION /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// //create header div for the top of page with class of header
// const header = document.createElement("div");
// header.setAttribute("class", "header box-borders");

// //add wave bkgrd image to header div
// header.style.backgroundImage = "url('assets/images/waves.svg')";
// container.appendChild(header);

// //create YD logo image with class of yd-logo
// const ydLogo = document.createElement("img");
// ydLogo.setAttribute("class", "yd-logo");
// ydLogo.setAttribute("alt", "younique design logo");
// ydLogo.src = "assets/images/bitmap.png";

// // add YD logo to the header div
// header.appendChild(ydLogo);

// // create headerBtm div for the bottom of the header with class of header-btm
// const headerBtm = document.createElement("div");
// headerBtm.setAttribute("class", "header-btm");

// //create contactLinksDiv(LEFT) and playBtmDiv(RIGHT) and add to the header btm div
// const contactLinksDiv = document.createElement("div");
// const playBtnDiv = document.createElement("div");
// headerBtm.append(contactLinksDiv, playBtnDiv);

// //create link for gitHub page
// const gitlink = document.createElement("a"); // create the link
// gitlink.setAttribute(
// 	"href",
// 	"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git"
// );

// //create gitHub logo image with class of logo
// const github_logo = document.createElement("img");
// github_logo.src = "assets/images/Github_logo.png";
// gitlink.setAttribute("class", "logo");
// gitlink.setAttribute("alt", "gitHub logo");

// //add the gitHub logo image to the gitHub link
// gitlink.append(github_logo);

// //create link for LinkedIn page
// const linkedin_link = document.createElement("a");
// linkedin_link.setAttribute("href", "https://www.linkedin.com/in/tara-oliver");

// //create LinkedIn logo image with class of logo
// const linkedin_logo = document.createElement("img");
// linkedin_logo.src = "assets/images/linkedin_logo.png";
// linkedin_link.setAttribute("class", "logo");
// linkedin_link.setAttribute("alt", "LinkedIn logo");

// //add the LinkedIn logo image to the LinkedIn link
// linkedin_link.append(linkedin_logo);

// // add LinkedIn and gitHub logos to the contactLinks div(left side of header btm)
// contactLinksDiv.append(gitlink, linkedin_link);

// //create how to play button with classes btn and playbtn
// const howToPlayBtn = document.createElement("button");
// howToPlayBtn.setAttribute("class", "btn playbtn");
// howToPlayBtn.innerText = "How to Play";

// // add play button to the playbtn div(right side of header btm)
// playBtnDiv.appendChild(howToPlayBtn);

// //add header  btm div to the header
// header.append(headerBtm);

///////////////////////////////////////////////////////////////////////////
////////////////////////// SIDEBAR SECTION /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//add left sidebar to page
// const left_sidebar = document.createElement("div");
// left_sidebar.innerText = "Choose a style";
// left_sidebar.setAttribute("class", "left_side box-borders");
// container.appendChild(left_sidebar);

// const img_container = document.createElement("div");
// img_container.setAttribute("class", "imgcontainer");

// // //define pump image, create div, add div to sidebar
// const pumpImg = document.createElement("img");
// pumpImg.src = "assets/images/clean_tstrap.svg";
// pumpImg.setAttribute("alt", "sketch of T-strap kitten heel pump");

// const pumpBtn = document.createElement("button");
// pumpBtn.setAttribute("id", "pumpBtn");
// pumpBtn.setAttribute("class", "btn");
// pumpBtn.innerText = "Design Pump";

// const flatImg = document.createElement("img");
// flatImg.src = "assets/images/clean_flatform.svg";
// flatImg.setAttribute("alt", "sketch of single band flatform sandal");

// const flatBtn = document.createElement("button");
// flatBtn.setAttribute("id", "flatBtn");
// flatBtn.setAttribute("class", "btn");
// flatBtn.innerText = "Design Sandal";

// const sneakerImg = document.createElement("img");
// sneakerImg.src = "assets/images/sneaker.svg";
// sneakerImg.setAttribute("alt", "sketch of low profile lace up sneaker");

// const snkrBtn = document.createElement("button");
// snkrBtn.setAttribute("id", "snkrBtn");
// snkrBtn.setAttribute("class", "btn");
// snkrBtn.innerText = "Design Sneaker";

// img_container.append(pumpImg, pumpBtn, flatImg, flatBtn, sneakerImg, snkrBtn);
// left_sidebar.append(img_container);

//DESIGN AREA SECTION//

//add design area to page

// import { pumpBtn, flatBtn, snkrBtn } from "./sidebar";
// const design_area = document.createElement("div");
// design_area.setAttribute("class", "design box-borders");

// const design_title = document.createElement("div");
// design_title.innerText = "Design away";
// design_title.setAttribute = ("id", "design_title");

// design_area.appendChild(design_title);
// container.appendChild(design_area);

// const oopsBtn = document.createElement("button");
// oopsBtn.innerText = "Oops!";
// oopsBtn.setAttribute("id", "oopsBtn");
// oopsBtn.setAttribute("class", "btn oopsbtn");
// design_title.appendChild(oopsBtn);

// oopsBtn.onclick = function () {
// 	changes[changes.length - 1].element.style.fill =
// 		changes[changes.length - 1].previousColor;
// 	changes.pop();
// };

// const largePump = document.querySelector("#Layer_1");
// const largeFlat = document.querySelector("#Layer_2");
// const largeSnkr = document.querySelector("#Layer_3");

// design_area.append(largePump, largeSnkr, largeFlat);

// document.getElementById("pumpBtn").addEventListener("click", displayImage);
// document.getElementById("flatBtn").addEventListener("click", displayImage);
// document.getElementById("snkrBtn").addEventListener("click", displayImage);

// function displayImage(ev) {
// 	if (ev.currentTarget.id == "pumpBtn") {
// 		document.querySelector("#Layer_2").style.display = "none";
// 		document.querySelector("#Layer_3").style.display = "none";
// 		document.querySelector("#Layer_1").style.display = "inline-block";
// 	} else if (ev.currentTarget.id == "flatBtn") {
// 		document.querySelector("#Layer_2").style.display = "inline-block";
// 		document.querySelector("#Layer_1").style.display = "none";
// 		document.querySelector("#Layer_3").style.display = "none";
// 	} else {
// 		document.querySelector("#Layer_2").style.display = "none";
// 		document.querySelector("#Layer_1").style.display = "none";
// 		document.querySelector("#Layer_3").style.display = "inline-block";
// 	}
// }

//PALETTE SECTION//

// //add palette to page
// const palette = document.createElement("div");

// palette.setAttribute("class", "palette box-borders");
// // palette.innerText = "Pick a color" + "&rarr;";
// const span = document.createElement("span");

// const textNode = document.createTextNode("Pick a color ");
// span.appendChild(textNode);

// // const arrowNode = document.createTextNode(" " + "\u2192"); // Unicode character code for the right arrow
// // span.appendChild(arrowNode);

// // document.body.appendChild(span);

// palette.appendChild(span);

// container.appendChild(palette);

// //color picker
// const colorPicker = document.createElement("input");
// colorPicker.setAttribute("type", "color");
// colorPicker.setAttribute("class", "colorPicker");
// colorPicker.setAttribute("value", "#ffffff");

// palette.append(colorPicker);

// //div to store colors picked by user
// const pickedColors = document.createElement("div");
// pickedColors.setAttribute("class", "pickedColors");
// palette.append(pickedColors);

// let currentColor;
// colorPicker.onchange = function () {
// 	currentColor = colorPicker.value;
// 	let i = 0;
// 	let previousColor = document.createElement("div");

// 	previousColor.setAttribute("class", "prevColor");
// 	previousColor.style.backgroundColor = currentColor;
// 	for (let i = 0; i < 16; i++) {
// 		pickedColors.appendChild(previousColor);
// 	}
// };

// pickedColors.onclick = function (event) {
// 	currentColor = event.target.style.backgroundColor;
// };

// const paths = document.querySelectorAll("path");
// let changes = [];
// let orgColor = "#ffffff";

// paths.forEach((path) => {
// 	path.onclick = function (event) {
// 		orgColor = event.target.style.fill;

// 		const action = {
// 			element: event.target,
// 			previousColor: orgColor,
// 		};

// 		console.log(changes);
// 		event.target.style.fill = currentColor;
// 		changes.push(action);
// 	};
// });
// });
