export const hidescroll = () => {
    var container = document.getElementById('container');
    container.style.overflowY = "hidden";
}

export const showscroll = () => {
    var container = document.getElementById('container');
    container.style.overflowY = "auto";
}