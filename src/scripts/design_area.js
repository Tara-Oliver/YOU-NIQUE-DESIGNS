//Add Design area to page so users can add color to the sketch
const design_area = document.createElement("div");
    design_area.innerText = 'Design away!';
    design_area.setAttribute("class", "design");
    container.appendChild(design_area);

//Create an Oops button to undo any change and it the design area 
const oopsBtn = document.createElement("button");
    oopsBtn.innerText = 'Oops!';
    oopsBtn.setAttribute("id", "oopsBtn");
    design_area.appendChild(oopsBtn);

//this function listens for a click on the oops button and changes the element from the last action's fill color to the previus color
oops.onclick = function () {
    changes[changes.length - 1].element.style.fill = changes[history.length - 1].previousColor;
    history.pop();
};


//finds the SVGs stored in the HTML file and adds them to the design area
const largePump = document.querySelector('#Layer_1');
const largeFlat = document.querySelector('#Layer_2');
design_area.append(largePump, largeFlat);



