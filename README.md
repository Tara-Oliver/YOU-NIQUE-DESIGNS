# YOU-NIQUE-DESIGNS

**Background**

You-nique Designs gives is classic interactive coloring demo. Inspired by my love fashion, I wanted to users a small taste of life as a footwear designer.

**Functionality & MVPs**  
In You-nique Designs, users are able to:  
*Choose a sketch to modify  
*Create a custom color palette    
*Click on previous selected colors to use again  
*Click on each component of the sketch to add/edit colors as they choose  
*Undo any/all changes made to the sketch  
*Read about how to use the demo by clicking 'How to Play'  

**Live Link**
https://tarao1185.github.io/YOU-NIQUE-DESIGNS/

**Technologies, Libraries, APIs**  
*Webpack and Babel to bundle and transpile the source JavaScript code  
*npm to manage project dependencies  

**Implementation Timeline**  
*Friday Afternoon & Weekend: Set up project, including getting webpack up and running. Create a working, responsive grid layout  

*Monday: Build out basic HTML structure using vanilla JS. Find all assets needed-including SVGs for the fashion sketches. Finish all functionality for color palette.  

*Tuesday: Edit the SVGs in Adobe Illustrator to make sure all paths are defined and can accept color. Finish all functionality for rendering the correct sketch from left sidebar to the design area and adding colors to sketches.  

*Wednesday: Add modal for instructions and professional links to the page. Style entire page.  

*Thursday Morning: Deploy to GitHub pages.  

**Bonus Features**  
*After user is done with a sketch:  
  *Render a video visual of all changes made to sketch  
  *Give user the ability to save a finished sketch to their local machine  

**Code Snippet**  
*This function gives user the ability to change the color of the selected path and created an array where all changes are stored so they can be undone later if neccesary.  

```
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
  ```
