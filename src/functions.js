const fromRight = (show, duration) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        var modalwidth = modal.style.width;
        if (modalwidth != "100%") {
            modal.style.transition = duration + "s";
            modal.style.marginLeft = window.innerWidth - modalwidth.substring(0, modalwidth.length - 2) + "px";
            modal.style.visibility = "visible";
        } else {
            modal.style.transition = duration + "s";
            modal.style.marginLeft = "0";
            modal.style.visibility = "visible";
            console.log('yes')
        }
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginLeft = "2000px";
    }
}

const fromLeft = (show, duration) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
        modal.style.marginLeft = "0";
        console.log("100%")
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginLeft = "-2000px";
    }
}

const fromTop = (show, duration) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
        modal.style.marginTop = "0";
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "-2000px";
    }
}

const fromBottom = (show, duration) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
        modal.style.marginTop = "0";
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "2000px";
    }
}

const makeDrawerhidden = (direction) => {
    var modal = document.getElementById('modal');
    if (direction == "top") {
        modal.style.transition = "0";
        modal.style.marginTop = "-2000px";
    } else {
        if (direction == "bottom") {
            modal.style.transition = "0";
            modal.style.marginTop = "2000px";
        } else {
            if (direction == "left") {
                modal.style.transition = "0";
                modal.style.marginLeft = "-2000px";
            } else {
                if (direction == "right") {
                    modal.style.transition = "0";
                    modal.style.marginLeft = "2000px";
                }
            }
        }
    }
}

var counter = 1;
const Direction = (direction, show, duration) => {

    if (typeof direction === "undefined") { direction = "left" };

    if (counter != 1) {
        if (direction === "left") {
            fromLeft(show, duration);
        } else {
            if (direction === "right") {
                fromRight(show, duration);
            } else {
                if (direction === "top") {
                    fromTop(show, duration);
                } else {
                    if (direction === "bottom") {
                        fromBottom(show, duration);
                    } else {}
                }
            }
        }
    } else {
        makeDrawerhidden(direction);
    }
    counter++;
}


export default { Direction }