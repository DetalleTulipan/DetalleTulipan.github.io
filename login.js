document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'yuyu' && password === 'ñamñam') {
        message.textContent = 'bañate djshjs';

        setTimeout(function() {
            window.location.href = 'mensaje.html';
        }, 1500);
    } else {
        showMessage('"UPS, ERROR xd "');
    }
});

function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function mostrarAlerta(){
    alert("La contraseña esta detras de la cajita de alfaflores xd");

}

setTimeout(mostrarAlerta,1000);