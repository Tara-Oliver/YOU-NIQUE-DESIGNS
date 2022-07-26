//Create color palette and add it to container
const palette = document.createElement("div");
palette.setAttribute("class", "palette");
container.appendChild(palette);

//Create color picker and add it to the palette div
const colorPicker = document.createElement('input');
colorPicker.setAttribute("type", "color");
colorPicker.setAttribute("class", "colorPicker");
colorPicker.setAttribute("value", "#000000");
palette.append(colorPicker);


//Create a new div to store colors picked by user
const pickedColors = document.createElement("div");
pickedColors.setAttribute("class", "pickedColors");
palette.append(pickedColors);

//this funtion creates a var(currentColor) to store current HEX value then when the value changes as the user clicks the color picker, the value of the current color is updated. A div is then created, the background is filled, and its added to the pickedColors div 
let currentColor = '#000000';
colorPicker.onchange = function () {
    currentColor = colorPicker.value;
    let previousColor = document.createElement("div");
    previousColor.setAttribute("class", "prevColor");
    previousColor.style.backgroundColor = currentColor;
    pickedColors.appendChild(previousColor);
};


//this function listens for a click anywhere in the picked colors div. It records the site of the click(event) and changes the current color to the color selected from picked Colors
pickedColors.onclick = function(event) {
    currentColor = event.target.style.backgroundColor;
};




let orgColor = '#ffffff';
let changes = [];
const paths = document.querySelectorAll('path');

//this function listens for a click on any path. It stores the location of the click (event) and fills the the lcation of that path. It also saves the location of the event and the color filled so these changes can be undone later by the Oops button
  
paths.forEach(path => {
    path.onclick = function(event) {
        orgColor = event.target.style.fill;

        const action = {
            element: event.target,
            previousColor: orgColor
        };

        console.log(changes);
        event.target.style.fill = currentColor;
        history.push(action);
    };
});