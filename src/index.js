function initializeApp() {
	const container = document.createElement("div");
	window.appContainer = container;
	container.setAttribute("class", "container");
	document.body.appendChild(container);
	const contentWrapper = document.createElement("div");
	contentWrapper.setAttribute("class", "contentWrapper");
	container.appendChild(contentWrapper);
	window.contentWrapper = contentWrapper;
	// Import the dependencies and call the init functions
	import("./scripts/header.js")
		.then((headerModule) => {
			headerModule.init(contentWrapper);
			const howToPlayBtn = document.querySelector("#modalBtn");
			// console.log(howToPlayBtn);
			if (howToPlayBtn) {
				howToPlayBtn.addEventListener("click", () => {
					console.log("How to Play button clicked!");
					modal.style.display = "block";
					contentWrapper.style.filter = "blur(8px)";
				});
			} else {
				console.error("Button #modalBtn not found in the DOM");
			}
		})
		.catch((error) => {
			console.error("Error importing header module:", error);
		});

	import("./scripts/sidebar.js")
		.then((sidebarModule) => {
			sidebarModule.init(contentWrapper);
			const { pumpBtn, flatBtn, snkrBtn } = sidebarModule;
			// Access and use the exported buttons as needed
		})
		.catch((error) => {
			console.error("Error importing sidebar module:", error);
		});

	import("./scripts/design_area.js")
		.then((designModule) => {
			designModule.init(contentWrapper);
			const { oopsBtn } = designModule;
		})
		.catch((error) => {
			console.error("Error importing design module:", error);
		});

	import("./scripts/palette.js")
		.then((paletteModule) => {
			paletteModule.init(contentWrapper);
			const { changes } = paletteModule;
		})
		.catch((error) => {
			console.error("Error importing palette module:", error);
		});

	const modal = document.createElement("div");
	modal.setAttribute("class", "modal");

	const modal_content = document.createElement("div");
	modal_content.setAttribute("class", "modal_content");

	const instruct_txt = document.createElement("p");
	instruct_txt.innerHTML =
		"Show off your design skills by making a one of a kind creation!<br><br>Decide on a sketch to design from the left sidebar and click the button below when you're ready to begin. The choosen sketch will then show up in the main design area.<br><br>Click the color square next to 'Pick a color!' in the bottom section to open the color picker. Once you find the correct shade, it will automatically be added to your color palette when you press enter or click the left button on your mouse.<br><br>Click on any part of the sketch to add your most recent chosen color to that part of the shoe.<br><br>If you make a mistake, click the 'Oops!' button to undo your most recent change.<br><br>If you want to re-use previously color from your palette, just click on the color swatch provided.<br><br> ENJOY!";

	const closebtn = document.createElement("span");
	closebtn.innerText = "X";
	closebtn.setAttribute("class", "close");
	closebtn.onclick = function () {
		modal.style.display = "none";
		contentWrapper.style.filter = "none";
	};

	modal_content.append(closebtn, instruct_txt);
	modal.append(modal_content);
	document.body.append(modal);

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
}

document.addEventListener("DOMContentLoaded", initializeApp);
