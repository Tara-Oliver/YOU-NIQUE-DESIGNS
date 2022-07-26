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
});