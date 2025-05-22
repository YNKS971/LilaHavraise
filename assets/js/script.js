
document.addEventListener("DOMContentLoaded", function () {
    var myModal = document.getElementById("Modal_send_message");

    myModal.addEventListener("hidden.bs.modal", function () {
        window.location.href = "index.html"; // Redirection après fermeture
    });
});