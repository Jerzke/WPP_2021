var login_modal = document.getElementById('login_modal');
var register_modal = document.getElementById('register_modal');
var login_button = document.getElementById('login_button');
var register_button = document.getElementById('register_button');
var home_button = document.getElementById('home_button');

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