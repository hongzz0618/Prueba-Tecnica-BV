// Hacer una notificación lateral dependiendo si es succes o error sale con cosas diferentes, con un instante de 2segundos.

function Notification(htmlElement) {
    this.htmlElement = htmlElement;
    this.icon = htmlElement.querySelector('.icon > i');
    this.text = htmlElement.querySelector('.notificationText');
    this.isRunning = false;
    this.timeout;
};

Notification.prototype.success = function (message) {
    if (this.isRunning) return false;
    this.text.innerHTML = message;
    this.htmlElement.className = 'notification info';
    this.icon.className = 'fa fa-2x fa-info-circle';

    this.show();
}

Notification.prototype.error = function (message) {
    if (this.isRunning) return false;
    this.text.innerHTML = message;
    this.htmlElement.className = 'notification error';
    this.icon.className = 'fa fa-2x fa-exclamation-circle';

    this.show();
}

Notification.prototype.show = function () {
    if (!this.htmlElement.classList.contains('visible'))
        this.htmlElement.classList.add('visible');

    this.isRunning = true;
    this.autoReset();
};

Notification.prototype.autoReset = function () {
    let data = this;
    this.timeout = window.setTimeout(function () {
        data.reset();
    }, 2000);
}

Notification.prototype.reset = function () {
    this.htmlElement.className = "notification";
    this.icon.className = "";
    this.isRunning = false;
};

document.addEventListener('DOMContentLoaded', init);

function init(response) {
    let notificator = new Notification(document.querySelector('.notification'));
    if (response == "El usuario ya existe" || response == "Rellena todos los campos") {
        notificator.error(response);
    } else if (response == "Usuario creado correctamente") {
        notificator.success(response);
    }
}
