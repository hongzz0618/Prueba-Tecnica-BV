let EmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let DNIValidate = /^[XYZ]?\d{5,8}[A-Z]$/;
let TelValidate = /^[6|7][0-9]{8}$/

function Notification(htmlElement) {
    this.htmlElement = htmlElement;
    this.icon = htmlElement.querySelector('.icon > i');
    this.text = htmlElement.querySelector('.notificationText');
    this.isRunning = false;
    this.timeout;
};

Notification.prototype.info = function (message) {
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
    let self = this;
    this.timeout = window.setTimeout(function () {
        self.reset();
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
        notificator.info(response);
    }
}

$(document).ready(function () {
    $("#SubmitButton").click(function () {
        let nombre = $("#idNombre").val();
        let apellido = $("#idApellido").val();
        let email1 = $("#idEmail1").val();
        let email2 = $("#idEmail2").val();
        let DNI = $("#idDNI").val();
        let movil = $("#idMovil").val();

        let FormInfo = [nombre, apellido, email1, email2, DNI, movil];
        FormInfo.map(function (item, index) {
            let indexReal = index + 1;
            if (item === "") {
                $("#message" + indexReal).html("vuelva a introducir un formato correcto").fadeIn();
            } else if (item != "") {
                $("#message" + indexReal).fadeOut();
            }
        });
        if (!EmailValidate.test(email1)) {
            $("#message3").html("vuelva a introducir un formato correcto").fadeIn();
            return false;
        } else {
            $("#message3").fadeOut();
            if (!EmailValidate.test(email2)) {
                $("#message4").html("vuelva a introducir un formato correcto").fadeIn();
                return false;
            } else {
                $("#message4").fadeOut();
                if (email2 != email1) {
                    $("#message4").html("emails diferentes").fadeIn();
                    return false;
                } else {
                    $("#message4").fadeOut();
                    if (!DNIValidate.test(DNI)) {
                        $("#message5").html("vuelva a introducir un formato correcto").fadeIn();
                        return false;
                    } else {
                        $("#message5").fadeOut();
                        if (!TelValidate.test(movil)) {
                            $("#message6").html("vuelva a introducir un formato correcto").fadeIn();
                            return false;
                        } else {
                            $("#message6").fadeOut();
                            let datos = $("#signUpFrom").serialize();
                            $.ajax({
                                type: "POST",
                                url: "model/signUp.php",
                                data: datos,
                                success: function (response) {
                                    init(response);
                                }
                            })
                            return false;
                        }

                    }
                }
            }

        }
    })
})