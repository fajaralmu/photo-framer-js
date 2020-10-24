var drag = false;

function showDragInfo() {
    byId("info-draggable").innerHTML = "DRAG " + drag;
    if (!drag) {
        byId("brief").innerHTML = "Click the circle to start movement";
    } else {
        byId("brief").innerHTML = "Specify movement point, Click again to stop movement";
    }
}

function toggleDrag(evt) {
    let briefInfo;
    if (!drag) {
        startDrag(evt);
    } else {
        stopDrag(evt);
        drag = false;
    }
    showDragInfo();
}

function startDrag(evt) {

    drag = true;
    showDragInfo();
    // dragInitialPosition.x =  evt.clientX;
    // dragInitialPosition.y =  evt.clientY;
    console.debug("Start Drag at", evt.clientX, ",", evt.clientY);
}

function stopDrag(evt) {
    // drag = false; 
    var dragLatestPosition = {};
    dragLatestPosition.x = evt.clientX;
    dragLatestPosition.y = evt.clientY;
    console.debug("Stopped Drag at", dragLatestPosition.x, ",", dragLatestPosition.y);
    showDragInfo();
}

function release() {
    setDragStatus(false);
    console.debug("On Mouse Up");

}
/**
 * 
 * @param {boolean} status 
 */
function setDragStatus(status) {
    drag = status;
    showDragInfo();
}