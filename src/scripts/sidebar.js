//Creat a sidebar and add it to the container
const sidebar = document.createElement("div");
    left_sidebar.innerText = 'Choose a style!';
    sidebar.setAttribute("class", "left_side");
    container.appendChild(sidebar);

//Create a div to hold the images to be staged in the design area
const img_container1 = document.createElement("div");
    img_container1.setAttribute("class", "imgcontainer");


//Create ele for pump image, create div, add div to sidebar
const pumpImg = document.createElement('img');
    pumpImg.src = 'assets/images/clean_tstrap.svg';

//Create pump button to render image to design area
const pumpBtn = document.createElement('button');
    pumpBtn.setAttribute("id", "pumpBtn");
    pumpBtn.innerText = 'Design Pump';

//Add pump button and image to the image container
    img_container1.append(pumpImg, pumpBtn);


//Create ele for the flatform image
const flatImg = document.createElement('img');
    flatImg.src = 'assets/images/clean_flatform.svg';

//Create sandal button to render image to design area
const flatBtn = document.createElement('button');
    flatBtn.setAttribute("id", "flatBtn");
    flatBtn.innerText = 'Design Sandal';

//Add flatform image and button to the image container
img_container1.append(flatImg, flatBtn);

//Add image container to the sidebar
    sidebar.append(img_container1);


//Create event listeners for both pump and flatform buttons
document.getElementById("pumpBtn").addEventListener("click", displayImage);
document.getElementById("flatBtn").addEventListener("click", displayImage);



//This functions renders the correct image in the design area depending on which button is pressed
function displayImage(ev) {
    if (ev.currentTarget.id == "pumpBtn") {
        document.querySelector('#Layer_2').style.display = "none";
        document.querySelector('#Layer_1').style.display = "inline-block";
    } else {
        document.querySelector('#Layer_2').style.display = "inline-block";
        document.querySelector('#Layer_1').style.display = "none";
    }
}
