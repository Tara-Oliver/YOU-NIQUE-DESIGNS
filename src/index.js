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
