
document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const container = document.createElement('div');
        container.setAttribute("class", "container");
        body.appendChild(container);

 //HEADER SECTION//

    //add header to top of page
    const header = document.createElement('div');
    header.setAttribute("class", "header");
        header.style.backgroundImage = "url('assets/images/headerstripes.jpg')";
        container.appendChild(header);


    const title = document.createElement('h3');
        title.innerText = 'You-nique Designs';
        title.setAttribute("class", "title");
        header.appendChild(title);


    const gitlink = document.createElement('a'); // create the link
        gitlink.setAttribute('href', 'https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git'); // set link path

    const github_logo = document.createElement('img');
        github_logo.src = 'assets/images/Github_logo.png';
        github_logo.setAttribute("class", "logo");
        gitlink.append(github_logo); // append to link

    const linkedin_logo = document.createElement('img');
        linkedin_logo.src = 'assets/images/linkedin_logo.png';
        linkedin_logo.setAttribute("class", "logo");

    const linkedin_link = document.createElement('a');
        linkedin_link.setAttribute('href', 'https://www.linkedin.com/in/tara-oliver'); // set link path
        linkedin_link.append(linkedin_logo);

    // header.append(gitlink, linkedin_link);



 //SIDEBAR SECTION//

    //add left sidebar to page
    const left_sidebar = document.createElement("div");
        left_sidebar.innerText = 'Choose a style!';
        left_sidebar.setAttribute("class", "left_side");
        container.appendChild(left_sidebar);

    const img_container = document.createElement("div");
        img_container.setAttribute("class", "imgcontainer");

    // //define pump image, create div, add div to sidebar
    const pumpImg = document.createElement('img');
        pumpImg.src = 'assets/images/clean_tstrap.svg';

    const pumpBtn = document.createElement('button');
        pumpBtn.setAttribute("id", "pumpBtn");
        pumpBtn.setAttribute("class", "btn");
        pumpBtn.innerText = 'Design Pump!';

        
    const flatImg = document.createElement('img');
        flatImg.src = 'assets/images/clean_flatform.svg';
        
    const flatBtn = document.createElement('button');
        flatBtn.setAttribute("id", "flatBtn");
        flatBtn.setAttribute("class", "btn");
        flatBtn.innerText = 'Design Sandal!';
        
    img_container.append(pumpImg, pumpBtn, flatImg, flatBtn);
    left_sidebar.append(img_container);

 //DESIGN AREA SECTION//

    //add design area to page
    const design_area = document.createElement("div");
        design_area.setAttribute("class", "design");
    
    const design_title = document.createElement("div"); 
        design_title.innerText = 'Design away!';
        design_title.setAttribute = ("id", "design_title");
    design_area.appendChild(design_title);
    container.appendChild(design_area);

    const oopsBtn = document.createElement("button");
        oopsBtn.innerText = 'Oops!';
        oopsBtn.setAttribute("id", "oopsBtn");
        oopsBtn.setAttribute("class", "btn2");
        design_title.appendChild(oopsBtn);

    // const oops = document.getElementById("oopsBtn");

    oopsBtn.onclick = function () {
        history[history.length - 1].element.style.fill = history[history.length - 1].previousColor;
        history.pop();
    };


    const largePump = document.querySelector('#Layer_1');
    const largeFlat = document.querySelector('#Layer_2');

    design_area.append(largePump, largeFlat);

    document.getElementById("pumpBtn").addEventListener("click", displayImage);
    document.getElementById("flatBtn").addEventListener("click", displayImage);

    function displayImage(ev) {
        if (ev.currentTarget.id == "pumpBtn") {
            document.querySelector('#Layer_2').style.display = "none";
            document.querySelector('#Layer_1').style.display = "inline-block";
        } else {
            document.querySelector('#Layer_2').style.display = "inline-block";
            document.querySelector('#Layer_1').style.display = "none";
        }
    }



 //PALETTE SECTION//

    //add palette to page
    const palette = document.createElement("div");
        palette.setAttribute("class", "palette");
        palette.innerText = 'Pick a color! ';
        container.appendChild(palette);

    //color picker
    const colorPicker = document.createElement('input');
        colorPicker.setAttribute("type", "color");
        colorPicker.setAttribute("class", "colorPicker");
        colorPicker.setAttribute("value", "#000000");

        palette.append(colorPicker);

    //div to store colors picked by user
    const pickedColors = document.createElement("div");
        pickedColors.setAttribute("class", "pickedColors");
        palette.append(pickedColors);

    let currentColor = '#000000';
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

    const paths = document.querySelectorAll('path');
    let changes = [];
    let orgColor = '#ffffff';

    paths.forEach(path => {
        path.onclick = function (event) {
            orgColor = event.target.style.fill;

            const action = {
                element: event.target,
                previousColor: orgColor
            };

            console.log(changes);
            event.target.style.fill = currentColor;
            changes.push(action);
        };
    });

 //ADD MODAL TO PAGE

    const howToPlayBtn = document.createElement('button');
        howToPlayBtn.setAttribute("class", "btn1");
        howToPlayBtn.innerText = 'How to Play';
        header.appendChild(howToPlayBtn);

    // const instructions = document.createElement('div');
    //     instructions.setAttribute("class", "instruct");
    //     container.appendChild(instructions);

    const modal = document.createElement("div");
        modal.setAttribute("class", "modal");

    const modal_content = document.createElement("div");
        modal_content.setAttribute("class", "modal_content");
    
    const instruct_txt = document.createElement('p');
    instruct_txt.innerHTML = "Show off your design skills by making a one of kind creation!<br><br>Select a style on the left sidebar<br><br>Pick out a color in the bottom section-it will automatically be added to your color palette.<br><br>Click on any part of the sketch to add color to that part of the shoe<br><br>If you make a mistake click the Oops button to undo your recent changes<br><br>If you want to re-use a previous color from your palette just click on the color swatch provided<br><br> ENJOY!";

    const closebtn = document.createElement('span');
        closebtn.innerText = 'CLOSE X';
        closebtn.setAttribute('class', "close");
    
    modal_content.append(instruct_txt, closebtn);
    modal.append(modal_content);
    container.append(modal);

    howToPlayBtn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    closebtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }; 











  

});