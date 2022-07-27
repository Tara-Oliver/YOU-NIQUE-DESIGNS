
document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const container = document.createElement('div');
    container.setAttribute("class", "container");
    body.appendChild(container);

    //add header to top of page
    const header = document.createElement('div');
    header.setAttribute("class", "header");
    container.appendChild(header);

    const title = document.createElement('h3');
    title.innerText = 'You-nique Designs';
    title.setAttribute("class", "title");
    header.appendChild(title);

    const instructions = document.createElement('div');
    instructions.setAttribute("class", "instruct");
    container.appendChild(instructions);

    const inst_btn = document.createElement('button');
    inst_btn.setAttribute("class", "btn1");
    inst_btn.innerText = 'How to Play';
    header.appendChild(inst_btn);

    // const banner = document.createElement('img');
    // banner.src = 'assets/images/banner.svg';
    // banner.setAttribute("class", "banner");
    // header.appendChild(header);



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


    header.append(gitlink, linkedin_link);





    //add left sidebar to page
    const left_sidebar = document.createElement("div");
    left_sidebar.innerText = 'Choose a style!';
    left_sidebar.setAttribute("class", "left_side");
    container.appendChild(left_sidebar);

    const img_container1 = document.createElement("div");
    img_container1.setAttribute("class", "imgcontainer");


    // //define pump image, create div, add div to sidebar
    const pumpImg = document.createElement('img');
    pumpImg.src = 'assets/images/clean_tstrap.svg';

    const pumpBtn = document.createElement('button');
    pumpBtn.setAttribute("id", "pumpBtn");
    pumpBtn.setAttribute("class", "btn");
    pumpBtn.innerText = 'Design Pump!';

    img_container1.append(pumpImg, pumpBtn);
    // left_sidebar.append(img_container1);




    // //define flat image

    const flatImg = document.createElement('img');
    flatImg.src = 'assets/images/clean_flatform.svg';

    const flatBtn = document.createElement('button');
    flatBtn.setAttribute("id", "flatBtn");
    flatBtn.setAttribute("class", "btn");
    flatBtn.innerText = 'Design Sandal!';

    img_container1.append(flatImg, flatBtn);
    // // left_sidebar.append(img_container2);






    left_sidebar.append(img_container1);




    // // //add right sidebar to page
    // // const right_sidebar = document.createElement("div");
    // // right_sidebar.innerText = 'All views!';
    // // right_sidebar.setAttribute("class", "right_side");
    // // container.appendChild(right_sidebar);

    // // const img_container2 = document.createElement("div");


    // // //flat images
    // // const flatMainImg = document.createElement('img');
    // // flatMainImg.src = 'assets/images/sidebar_flat.svg';
    // // flatMainImg.setAttribute("class", "flat");

    // // const flatFrontImg = document.createElement('img');
    // // flatFrontImg.src = 'assets/images/flat_front.svg';
    // // flatFrontImg.setAttribute("class", "flat");


    // // //pump images
    // // const pumpMainImg = document.createElement('img');
    // // pumpMainImg.src = 'assets/images/clean_tstrap.svg';
    // // pumpMainImg.setAttribute("class", "pump");

    // // const pumpSideImg = document.createElement('img');
    // // pumpSideImg.src = 'assets/images/pump_side.svg';
    // // pumpSideImg.setAttribute("class", "pump");

    // // const pumpTopImg = document.createElement('img');
    // // pumpTopImg.src = 'assets/images/pump_top.svg';
    // // pumpTopImg.setAttribute("class", "pump");

    // // const pumpBackImg = document.createElement('img');
    // // pumpBackImg.src = 'assets/images/pump_back.svg';
    // // pumpBackImg.setAttribute("class", "pump");

    // // //sneaker images
    // // const sneakerMainImg = document.createElement('img');
    // // sneakerMainImg.src = 'assets/images/sidebar_sneaker.svg';
    // // sneakerMainImg.setAttribute("class", "snkr");

    // // const sneakerTopImg = document.createElement('img');
    // // sneakerTopImg.src = 'assets/images/sneaker_top.svg';
    // // sneakerTopImg.setAttribute("class", "snkr");



    // // img_container2.append(flatMainImg, flatFrontImg, pumpMainImg, pumpSideImg, pumpTopImg, pumpBackImg, sneakerMainImg, sneakerTopImg);
    // // right_sidebar.append(img_container2);






    //add design area to page
    const design_area = document.createElement("div");
    design_area.innerText = 'Design away!';
    design_area.setAttribute("class", "design");
    container.appendChild(design_area);

    const oopsBtn = document.createElement("button");
    oopsBtn.innerText = 'Oops!';
    oopsBtn.setAttribute("id", "oopsBtn");
    oopsBtn.setAttribute("class", "btn");

    design_area.appendChild(oopsBtn);







    // const display = document.createElement("div");
    // display.setAttribute("id", "display");


    const largePump = document.querySelector('#Layer_1');
    const largeFlat = document.querySelector('#Layer_2');







    // const largeFlat = document.createElement('img');
    // largeFlat.src = 'assets/images/sidebar_flat.svg';
    // largeFlat.setAttribute("id", "flat");


    // const largeSneaker = document.createElement('img');
    // largeSneaker.src = 'assets/images/sidebar_sneaker.svg';
    // largeSneaker.setAttribute("id", "snkr");


    design_area.append(largePump, largeFlat);

    // //add palette to page
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
        while (i <= 15) {
            pickedColors.appendChild(previousColor);
            i++;
        }
    };

    pickedColors.onclick = function (event) {

        // = 'inline-block';
        // document.querySelector('#Layer_1').style.display = "inline-block";
        currentColor = event.target.style.backgroundColor;
    };


    const paths = document.querySelectorAll('path');
    let history = [];
    let orgColor = '#ffffff';

    paths.forEach(path => {
        path.onclick = function (event) {
            orgColor = event.target.style.fill;

            const action = {
                element: event.target,
                previousColor: orgColor
            };

            console.log(history);
            event.target.style.fill = currentColor;
            history.push(action);
        };
    });


    const oops = document.getElementById("oopsBtn");



    oops.onclick = function () {
        history[history.length - 1].element.style.fill = history[history.length - 1].previousColor;
        history.pop();
    };





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





});