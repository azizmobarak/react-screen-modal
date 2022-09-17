export var showModal = function () {
    var container = document.getElementById('container');
    var disable = document.getElementById('disable');
    var modal = document.getElementById('single-modal');
    modal.style.transition = '1s';
    modal.style.marginTop = '0';
    container.style.visibility = 'visible';
    disable.style.visibility = 'visible';
    modal.style.visibility = 'visible';
};
export var closeModal = function () {
    var container = document.getElementById('container');
    var disable = document.getElementById('disable');
    var modal = document.getElementById('single-modal');
    modal.style.transition = '0.4s';
    modal.style.marginTop = '-100px';
    container.style.visibility = 'hidden';
    disable.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
};
