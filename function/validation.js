var EmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var DNIValidate = /^[XYZ]?\d{5,8}[A-Z]$/;
var TelValidate = /^[6|7][0-9]{8}$/
$(document).ready(function () {
    $("#SubmitButton").click(function () {
        var nombre = $("#idNombre").val();
        var apellido = $("#idApellido").val();
        var email1 = $("#idEmail1").val();
        var email2 = $("#idEmail2").val();
        var DNI = $("#idDNI").val();
        var movil = $("#idMovil").val();
        if (nombre == "") {
            $("#message1").fadeIn();
            return false;
        } else {
            $("#message1").fadeOut();
            if (apellido == "") {
                $("#message2").fadeIn();
                return false;
            } else {
                $("#message2").fadeOut();
                if (email1 == "" || !EmailValidate.test(email1)) {
                    $("#message3").fadeIn();
                    return false;
                } else {
                    $("#message3").fadeOut();
                    if (email2 == "" || !EmailValidate.test(email2) || email2 != email1) {
                        $("#message4").fadeIn();
                        return false;
                    } else {
                        $("#message4").fadeOut();
                        if (DNI == "" || !DNIValidate.test(DNI)) {
                            $("#message5").fadeIn();
                            return false;
                        } else {
                            $("#message5").fadeOut();
                            if (movil == "" || !TelValidate.test(movil)) {
                                $("#message6").fadeIn();
                                return false;
                            } else {
                                $("#message6").fadeOut();
                                var datos = $("#signUpFrom").serialize();
                                $.ajax({
                                    type: "POST",
                                    url: "signUp.php",
                                    data: datos,
                                    success: function (response) {
                                        $("#responseCreate").html(response);
                                    }
                                })
                                return false;
                            }

                        }
                    }
                }
            }
        }
    })
})