let EmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let DNIValidate = /^[XYZ]?\d{5,8}[A-Z]$/;
let TelValidate = /^[6|7][0-9]{8}$/

$(document).ready(function () {
    $("#SubmitButton").click(function () {
        const nombre = $("#idNombre").val();
        const apellido = $("#idApellido").val();
        const email1 = $("#idEmail1").val();
        const email2 = $("#idEmail2").val();
        const DNI = $("#idDNI").val();
        const movil = $("#idMovil").val();

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
                                    if (response == "Usuario creado correctamente") {
                                        $("#idNombre").val("");
                                        $("#idApellido").val("");
                                        $("#idEmail1").val("");
                                        $("#idEmail2").val("");
                                        $("#idDNI").val("");
                                        $("#idMovil").val("");
                                    }
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