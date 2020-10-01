const fromRight = (show, duration, position) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        var modalwidth = modal.style.width;
        modal.style.marginTop = changeDefaultPositiontoBottom(position);
        if (modalwidth !== "100%") {
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

const fromLeft = (show, duration, position) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        modal.style.marginTop = changeDefaultPositiontoBottom(position);
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

const fromTop = (show, duration, position) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        modal.style.marginLeft = changeDefaultPositiontoRight(position)
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
        modal.style.marginTop = "0";
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "-2000px";
    }
}

const fromBottom = (show, duration, position) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        var modalheight = modal.style.height;
        modal.style.marginLeft = changeDefaultPositiontoRight(position);
        if (modalheight !== "100%") {
            modal.style.transition = duration + "s";
            modal.style.visibility = "visible";
            modal.style.marginTop = window.innerHeight - modalheight.substring(0, modalheight.length - 2) + "px";
        } else {
            modal.style.transition = duration + "s";
            modal.style.visibility = "visible";
            modal.style.marginTop = "0";
        }
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "2000px";
    }
}

const toCenter = (duration, show) => {
    var modal = document.getElementById('modal');
    var w = modal.style.width.substring(0, (modal.style.width).length - 2);
    var h = modal.style.height.substring(0, (modal.style.height).length - 2);

    if (show == true) {
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
        modal.style.marginLeft = ((parseInt(window.innerWidth) - parseInt(w)) / 2) + "px";
        modal.style.marginTop = ((parseInt(window.innerHeight) - parseInt(h)) / 2) + "px";
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "-2000px";
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
                } else {
                    modal.style.transition = "0";
                    modal.style.marginTop = "-3000px";
                }
            }
        }
    }
}

var counter = 1;
const Direction = (direction, show, duration, position) => {

    if (typeof direction === "undefined") { direction = "left" };

    if (counter != 1) {
        if (direction === "left") {
            fromLeft(show, duration, position);
        } else {
            if (direction === "right") {
                fromRight(show, duration, position);
            } else {
                if (direction === "top") {
                    fromTop(show, duration, position);
                } else {
                    if (direction === "bottom") {
                        fromBottom(show, duration, position);
                    } else {
                        if (position === "center" && direction === "center") {
                            toCenter(duration, show);
                        } else {
                            var modal = document.getElementById('modal');
                            modal.style.marginTop = "-2000px";
                        }
                    }
                }
            }
        }
    } else {
        makeDrawerhidden(direction);
    }
    counter++;
}


const changeDefaultPositiontoRight = (position) => {
    var modal = document.getElementById('modal');
    var modalwidth = modal.style.width;
    if (position === "right") {
        return modal.style.marginLeft = window.innerWidth - modalwidth.substring(0, modalwidth.length - 2) + "px";
    } else {
        return "0px"
    }
}

const changeDefaultPositiontoBottom = (position) => {
    var modal = document.getElementById('modal');
    var modalheight = modal.style.height;
    if (position === "bottom") {
        return modal.style.marginTop = window.innerHeight - modalheight.substring(0, modalheight.length - 2) + "px";
    } else {
        return "0px"
    }
}


export default { Direction }
