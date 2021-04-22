var login_modal = document.getElementById('login_modal');
var register_modal = document.getElementById('register_modal');
var login_button = document.getElementById('login_button');
var register_button = document.getElementById('register_button');

window.onclick = function(event) {
    if (event.target == login_modal || event.target == register_modal) {
        login_modal.style.display = "none";
        register_modal.style.display = "none";
    }
    if (event.target == login_button) {
        register_modal.style.display = "none";
        login_modal.style.display = "block";
    }
    if (event.target == register_button) {
        login_modal.style.display = "none";
        register_modal.style.display = "block";
    }
}

function togglePopup(){
    document.getElementById('popup-1').classList.toggle("active");
    
}

const chk = document.getElementById('chk');
const css = document.getElementById('link');
var count = 1;

chk.addEventListener('change', () => { //Change Between two CSS files
    count++;
    if (count%2 == 0) {
    css.innerHTML = '<link id="link" rel="stylesheet" href="styles2.css"/>';
    }
    else {
    css.innerHTML = '<link id="link" rel="stylesheet" href="styles.css"/>';
    }
});