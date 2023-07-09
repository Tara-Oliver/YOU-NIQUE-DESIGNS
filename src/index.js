document.addEventListener("DOMContentLoaded", function () {
	const body = document.body;
	const container = document.createElement("div");
	container.setAttribute("class", "container");
	body.appendChild(container);

	//HEADER SECTION//

	//add header to top of page
	const header = document.createElement("div");
	header.setAttribute("class", "header");
	header.style.backgroundImage = "url('assets/images/waves.svg')";
	container.appendChild(header);

	const title = document.createElement("img");
	// title.innerText = 'You-nique Designs';
	title.setAttribute("class", "title");
	// title.src = "assets/images/text-1659028942969.png";
	title.src = "assets/images/bitmap.png";

	header.appendChild(title);

	const controls = document.createElement("div");
	controls.setAttribute("class", "controls");
	const controlLeft = document.createElement("div");
	const controlRight = document.createElement("div");
	controls.append(controlLeft, controlRight);

	const gitlink = document.createElement("a"); // create the link
	gitlink.setAttribute(
		"href",
		"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git"
	); // set link path

	const github_logo = document.createElement("img");
	github_logo.src = "assets/images/Github_logo.png";
	gitlink.setAttribute("class", "logo");
	gitlink.append(github_logo); // append to link

	const linkedin_logo = document.createElement("img");
	linkedin_logo.src = "assets/images/linkedin_logo.png";

	const linkedin_link = document.createElement("a");
	linkedin_link.setAttribute("href", "https://www.linkedin.com/in/tara-oliver"); // set link path
	linkedin_link.append(linkedin_logo);

	linkedin_link.setAttribute("class", "logo");
	controlLeft.append(gitlink, linkedin_link);

	const howToPlayBtn = document.createElement("button");
	howToPlayBtn.setAttribute("class", "playbtn");
	howToPlayBtn.innerText = "How to Play";
	controlRight.appendChild(howToPlayBtn);

	header.append(controls);

	//SIDEBAR SECTION//

	//add left sidebar to page
	const left_sidebar = document.createElement("div");
	left_sidebar.innerText = "Choose a style";
	left_sidebar.setAttribute("class", "left_side");
	container.appendChild(left_sidebar);

	const img_container = document.createElement("div");
	img_container.setAttribute("class", "imgcontainer");

	// //define pump image, create div, add div to sidebar
	const pumpImg = document.createElement("img");
	pumpImg.src = "assets/images/clean_tstrap.svg";

	const pumpBtn = document.createElement("button");
	pumpBtn.setAttribute("id", "pumpBtn");
	pumpBtn.setAttribute("class", "btn");
	pumpBtn.innerText = "Design Pump";

	const flatImg = document.createElement("img");
	flatImg.src = "assets/images/clean_flatform.svg";

	const flatBtn = document.createElement("button");
	flatBtn.setAttribute("id", "flatBtn");
	flatBtn.setAttribute("class", "btn");
	flatBtn.innerText = "Design Sandal";

	const sneakerImg = document.createElement("img");
	sneakerImg.src = "assets/images/sneaker.svg";

	const snkrBtn = document.createElement("button");
	snkrBtn.setAttribute("id", "snkrBtn");
	snkrBtn.setAttribute("class", "btn");
	snkrBtn.innerText = "Design Sneaker";

	img_container.append(pumpImg, pumpBtn, flatImg, flatBtn, sneakerImg, snkrBtn);
	left_sidebar.append(img_container);

	//DESIGN AREA SECTION//

	//add design area to page
	const design_area = document.createElement("div");
	design_area.setAttribute("class", "design");

	const design_title = document.createElement("div");
	design_title.innerText = "Design away";
	design_title.setAttribute = ("id", "design_title");

	design_area.appendChild(design_title);
	container.appendChild(design_area);

	const oopsBtn = document.createElement("button");
	oopsBtn.innerText = "Oops";
	oopsBtn.setAttribute("id", "oopsBtn");
	oopsBtn.setAttribute("class", "oopsbtn");
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

	//PALETTE SECTION//

	//add palette to page
	const palette = document.createElement("div");

	palette.setAttribute("class", "palette");
	// palette.innerText = "Pick a color" + "&rarr;";
	const span = document.createElement("span");

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
	let changes = [];
	let orgColor = "#ffffff";

	paths.forEach((path) => {
		path.onclick = function (event) {
			orgColor = event.target.style.fill;

			const action = {
				element: event.target,
				previousColor: orgColor,
			};

			console.log(changes);
			event.target.style.fill = currentColor;
			changes.push(action);
		};
	});

	//ADD MODAL TO PAGE

	const modal = document.createElement("div");
	modal.setAttribute("class", "modal");

	const modal_content = document.createElement("div");
	modal_content.setAttribute("class", "modal_content");

	const instruct_txt = document.createElement("p");
	instruct_txt.innerHTML =
		"Show off your design skills by making a one of a kind creation!<br><br>Decide on a sketch to design from the left sidebar and click the button below when you're ready to begin. The choosen sketch will then show up in the main design area.<br><br>Click the color square next to 'Pick a color!' in the bottom section to open the color picker. Once you find the correct shade, it will automatically be added to your color palette when you press enter or click the left button on your mouse.<br><br>Click on any part of the sketch to add your most recent chosen color to that part of the shoe.<br><br>If you make a mistake, click the 'Oops!' button to undo your most recent change.<br><br>If you want to re-use previously color from your palette, just click on the color swatch provided.<br><br> ENJOY!";

	const closebtn = document.createElement("span");
	closebtn.innerText = "CLOSE X";
	closebtn.setAttribute("class", "close");

	modal_content.append(instruct_txt, closebtn);
	modal.append(modal_content);
	container.append(modal);

	howToPlayBtn.onclick = function () {
		modal.style.display = "block";
		// container.className = 'blur';
	};

	closebtn.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
});
