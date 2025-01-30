export function init() {
	const container = window.appContainer;

	//create header div for the top of page with class of header
	const header = document.createElement("div");
	header.setAttribute("class", "header box-borders");

	container.appendChild(header);

	// //add wave bkgrd image to header div
	header.style.backgroundImage = "url('assets/images/bg_logo.png')";
	// header.style.backgroundImage = "url('assets/images/waves.svg')";

	//create contactLinksDiv(LEFT) and playBtmDiv(RIGHT) and add to the header btm div
	const contactLinksDiv = document.createElement("div");
	const playBtnDiv = document.createElement("div");
	playBtnDiv.setAttribute("class", "playBtnDiv");
	header.append(contactLinksDiv, playBtnDiv);
	// header.append(contactLinksDiv);

	//create link for gitHub page
	const gitlink = document.createElement("a"); // create the link
	gitlink.setAttribute(
		"href",
		"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git"
	);

	//create gitHub logo image with class of logo
	const github_logo = document.createElement("img");
	github_logo.src = "assets/images/github.svg";
	// github_logo.src = "assets/images/waves.svg";
	gitlink.setAttribute("class", "logo");
	gitlink.setAttribute("alt", "gitHub logo");
	gitlink.setAttribute("aria-label", "gitHub logo and link");
	//add the gitHub logo image to the gitHub link
	gitlink.append(github_logo);

	//create link for LinkedIn page
	const linkedin_link = document.createElement("a");
	linkedin_link.setAttribute("href", "https://www.linkedin.com/in/tara-oliver");

	//create LinkedIn logo image with class of logo
	const linkedin_logo = document.createElement("img");
	linkedin_logo.src = "assets/images/linkedin.svg";
	linkedin_link.setAttribute("class", "logo");
	linkedin_link.setAttribute("alt", "LinkedIn logo");
	linkedin_link.setAttribute("aria-label", "LinkedIn logo and link");

	//add the LinkedIn logo image to the LinkedIn link
	linkedin_link.append(linkedin_logo);

	// add LinkedIn and gitHub logos to the contactLinks div(left side of header btm)
	contactLinksDiv.append(gitlink, linkedin_link);

	//create how to play button with classes btn and playbtn
	const howToPlayBtn = document.createElement("button");
	howToPlayBtn.setAttribute("class", "btn playbtn");
	howToPlayBtn.innerText = "How to Play";

	// add play button to the playbtn div(right side of header btm)
	playBtnDiv.appendChild(howToPlayBtn);
	// contactLinksDiv.appendChild(howToPlayBtn);

	//add header  btm div to the header
	// header.append(headerBtm);

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
}
