document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const container = document.createElement('div');
    container.setAttribute("class", "container");
    body.appendChild(container);

    //add header to top of page
    const header = document.createElement('div');
    header.innerText = 'You-nique Designs';
    header.setAttribute("class", "header");
    container.appendChild(header);



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
    pumpBtn.innerText = 'Style Pump';

    img_container1.append(pumpImg, pumpBtn);
    // left_sidebar.append(img_container1);




    // //define flat image

    const flatImg = document.createElement('img');
    flatImg.src = 'assets/images/clean_flatform.svg';

    const flatBtn = document.createElement('button');
    flatBtn.setAttribute("id", "flatBtn");
    flatBtn.innerText = 'Style Sandal';

    img_container1.append(flatImg, flatBtn);
   

    left_sidebar.append(img_container1);




  






    //add design area to page
    const design_area = document.createElement("div");
    design_area.innerText = 'Design away!';
    design_area.setAttribute("class", "design");
    container.appendChild(design_area);

    const oopsBtn = document.createElement("button");
    oopsBtn.innerText = 'Oops!';
    oopsBtn.setAttribute("id", "oopsBtn");
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
    // let previousColor = document.createElement("div")
    // previousColor.setAttribute("class", "prevColor");



    colorPicker.onchange = function () {
        currentColor = colorPicker.value;
        let previousColor = document.createElement("div");
        previousColor.setAttribute("class", "prevColor");
        previousColor.style.backgroundColor = currentColor;
        pickedColors.appendChild(previousColor);
    };

    pickedColors.onclick = function (event) {
        console.log(pickedColors.style.display)
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