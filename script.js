function toggleForgeConfig() {
    var configDiv = document.getElementById("forgeConfig");
    if (configDiv.style.display === "none" || configDiv.style.display === "") {
        configDiv.style.display = "block";
    } else {
        configDiv.style.display = "none";
    }
}


dragElement(document.getElementById("forgeConfig"));
dragElement(document.getElementById("showBtn"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var dragBtn = elmnt.querySelector('.drag-button');

    dragBtn.addEventListener('mousedown', dragMouseDown);

    function dragMouseDown(e) {
        if (e.target === dragBtn || e.target === elmnt) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.body.style.cursor = "grabbing";
            document.addEventListener('mouseup', closeDragElement);
            document.addEventListener('mousemove', elementDrag);
        }
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        var newX = elmnt.offsetLeft - pos1;
        var newY = elmnt.offsetTop - pos2;
        if (newX >= 0 && newY >= 0 && newX + elmnt.offsetWidth <= window.innerWidth && newY + elmnt.offsetHeight <= window.innerHeight) {
            elmnt.style.top = newY + "px";
            elmnt.style.left = newX + "px";
        }
    }

    function closeDragElement() {
        document.body.style.cursor = "auto";
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
    }
}
