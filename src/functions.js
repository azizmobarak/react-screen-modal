//it will show the content from right and will close it to the right too
//when it's 100% it igniore the default the margins
const fromright = (show, duration, position) => {
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
        }
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginLeft = "2000px";
    }
}

//it will keep the default margins to 0 0 and also will keep the default direction
// from the right of the window
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

//by default it's on the left of the top
//the postion will change automatically by the changedefaultpositiontoright method
// when the user want it to display from the right of the screen
const fromTop = (show, duration, position) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        modal.style.marginLeft = changeDefaultPositiontoRight(position);
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
        modal.style.marginTop = "0";
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "-2000px";
    }
}

// by default it's on the top , so to let it be in the bottom and display from the botom
// we have to do some job and let user don't feel it was on the top of the screen
// here we change the position before starting and the changedefaultpositiontoright will
//change the default position from left to right when the user want it to come from the right
const fromBottom = (show, duration, position) => {
    var modal = document.getElementById('modal');
    if (show == true) {
        var modalheight = modal.style.height;
        console.log('here')
        modal.style.marginLeft = changeDefaultPositiontoRight(position);
        if (modalheight !== "100vh") {
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

// this funtion check if the user ask for centrlized the modal /div
// so it helps to make it at the middle of the page just by calculing
// the window size and the modal size and put it on the right position
const toCenter = (duration, show) => {
    var modal = document.getElementById('modal');
    var w = modal.style.width.substring(0, (modal.style.width).length - 2);
    var h = modal.style.height.substring(0, (modal.style.height).length - 2);

    if (show == true) {
        if (modal.style.width === "100%") {
            modal.style.marginLeft = "0px";
        } else {
            modal.style.marginLeft = ((parseInt(window.innerWidth) - parseInt(w)) / 2) + "px";
        }
        if (modal.style.height === "100vh") {
            modal.style.marginTop = "0px";
        } else {
            modal.style.marginTop = ((parseInt(window.innerHeight) - parseInt(h)) / 2) + "px";
        }
        modal.style.transition = duration + "s";
        modal.style.visibility = "visible";
    } else {
        modal.style.transition = duration + "s";
        modal.style.visibility = "hidden";
        modal.style.marginTop = "-2000px";
    }
}

//this function have an important role when the page is refreched
//it will hide the modal , because by default it's on the page
// it uses a counter and lanch the modal into the right place before starting
// bu using the direction that mentioned in the first refrech
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

// it will change the default position to the right corner and it will display the modal from the bottom
// with keeping it's size.
const changeDefaultPositiontoRight = (position) => {
    var modal = document.getElementById('modal');
    var modalwidth = modal.style.width;
    if (position === "right") {
        if (modalwidth !== "100%") {
            return modal.style.marginLeft = (parseInt(window.innerWidth) - parseInt(modalwidth.substring(0, modalwidth.length - 2))) + "px";
        }
    } else {
        return "0px"
    }
}

// it will change the default position to the bottom and it will display the modal from the bottom
// with keeping it's size.
const changeDefaultPositiontoBottom = (position) => {
    var modal = document.getElementById('modal');
    var modalheight = modal.style.height;
    if (position === "bottom") {
        if (modalheight !== "100vh") {
            return modal.style.marginTop = (window.innerHeight - modalheight.substring(0, modalheight.length - 2)) + "px";
        }
    } else {
        return "0px"
    }
}

// the div posiion before start to help it come from the right direction
const PositionConfiguration = (position) => {
    var modal = document.getElementById('modal');
    var w = modal.style.width.substring(0, (modal.style.width).length - 2);
    var h = modal.style.height.substring(0, (modal.style.height).length - 2);
    switch (position) {
        case "right":
            if (modal.style.width !== "100%") {
                modal.style.marginLeft = (parseInt(window.innerWidth) - parseInt(w)) + "px";
            }
            break;
        case "bottom":
            if (modal.style.height !== "100vh") {
                modal.style.marginTop = (parseInt(window.innerHeight) - parseInt(h)) + "px";
            }
        default:
            return;
    }
}





// a counter will tell us this page is refreched or not.
var counter = 1;

// the main of our functions is that , it will do a great job usng all the
// functions on the top.
const Direction = (direction, show, duration, position) => {

    if (typeof direction === "undefined") { direction = "left" };
    //check if the position in the right or bottom and place it on the right place
    PositionConfiguration(position);
    if (counter != 1) {
        if (direction === "left") {
            fromLeft(show, duration, position);
        } else {
            if (direction === "right") {
                fromright(show, duration, position);
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
        //hide it or send it to bee unwatched but in the right corner
        makeDrawerhidden(direction);
    }
    counter++;
}



export default { Direction }