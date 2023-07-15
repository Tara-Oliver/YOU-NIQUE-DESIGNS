// export function init(container) {
// 	const container = window.appContainer;
// 	const left_sidebar = document.createElement("div");
// 	left_sidebar.innerText = "Choose a style";
// 	left_sidebar.setAttribute("class", "left_side box-borders");
// 	container.appendChild(left_sidebar);

// 	const img_container = document.createElement("div");
// 	img_container.setAttribute("class", "imgcontainer");

// 	// //define pump image, create div, add div to sidebar
// 	const pumpImg = document.createElement("img");
// 	pumpImg.src = "assets/images/clean_tstrap.svg";
// 	pumpImg.setAttribute("alt", "sketch of T-strap kitten heel pump");

// 	const pumpBtn = document.createElement("button");
// 	pumpBtn.setAttribute("id", "pumpBtn");
// 	pumpBtn.setAttribute("class", "btn");
// 	pumpBtn.innerText = "Design Pump";

// 	const flatImg = document.createElement("img");
// 	flatImg.src = "assets/images/clean_flatform.svg";
// 	flatImg.setAttribute("alt", "sketch of single band flatform sandal");

// 	const flatBtn = document.createElement("button");
// 	flatBtn.setAttribute("id", "flatBtn");
// 	flatBtn.setAttribute("class", "btn");
// 	flatBtn.innerText = "Design Sandal";

// 	const sneakerImg = document.createElement("img");
// 	sneakerImg.src = "assets/images/sneaker.svg";
// 	sneakerImg.setAttribute("alt", "sketch of low profile lace up sneaker");

// 	const snkrBtn = document.createElement("button");
// 	snkrBtn.setAttribute("id", "snkrBtn");
// 	snkrBtn.setAttribute("class", "btn");
// 	snkrBtn.innerText = "Design Sneaker";

// 	img_container.append(pumpImg, pumpBtn, flatImg, flatBtn, sneakerImg, snkrBtn);
// 	left_sidebar.append(img_container);
// }

const container = window.appContainer;

const left_sidebar = document.createElement("div");
left_sidebar.innerText = "Choose a style";
left_sidebar.setAttribute("class", "left_side box-borders");
container.appendChild(left_sidebar);

const img_container = document.createElement("div");
img_container.setAttribute("class", "imgcontainer");

const pumpImg = document.createElement("img");
pumpImg.src = "assets/images/clean_tstrap.svg";
pumpImg.setAttribute("alt", "sketch of T-strap kitten heel pump");

export const pumpBtn = document.createElement("a");
pumpBtn.setAttribute("id", "pumpBtn");
pumpBtn.setAttribute("class", "btn");
pumpBtn.innerText = "Design Pump";

const flatImg = document.createElement("img");
flatImg.src = "assets/images/clean_flatform.svg";
flatImg.setAttribute("alt", "sketch of single band flatform sandal");

export const flatBtn = document.createElement("a");
flatBtn.setAttribute("id", "flatBtn");
flatBtn.setAttribute("class", "btn");
flatBtn.innerText = "Design Sandal";

const sneakerImg = document.createElement("img");
sneakerImg.src = "assets/images/sneaker.svg";
sneakerImg.setAttribute("alt", "sketch of low profile lace-up sneaker");

export const snkrBtn = document.createElement("a");
snkrBtn.setAttribute("id", "snkrBtn");
snkrBtn.setAttribute("class", "btn");
snkrBtn.innerText = "Design Sneaker";

img_container.append(pumpImg, pumpBtn, flatImg, flatBtn, sneakerImg, snkrBtn);
left_sidebar.append(img_container);

export function init(container) {
	// Use the container element for sidebar initialization
	// ...
}
