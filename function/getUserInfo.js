$(search_data());

function removeUser(id) {
    id = "id=" + id;
    let opcion = confirm("¿Estas seguro de elimar este user?");
    if (opcion == true) {
        $.ajax({
            type: "POST",
            url: "model/deleteUsers.php",
            data: id,
            success: function (result) {
                if (result == 1) {
                    window.location = "http://localhost/pruebaBVirtual/listOfUsers.php";
                }
            }
        })
    }
}
function search_data(value) {
    $.ajax({
        type: "POST",
        url: "model/getUsers.php",
        data: value,
        success: function (datas) {
            let items = "";
            if (datas == "No rows") {
                items += "<img src='img/nodata.jpg' alt='No Rows' id='imgNodata'>";
            } else {
                datas = JSON.parse(datas);

                items += "<div class='table-responsive-sm'>";
                items += "<table class='table'>";
                items += "<tr>";
                items += "<th>Nombre</th>";
                items += "<th>Apellido</th>";
                items += "<th>Email</th>";
                items += "<th>DNI</th>";
                items += "<th>Móvil</th>";
                items += "<th></th>";
                items += "</tr>";

                datas.forEach(element => {
                    items += "<tr>";
                    items += "<td>" + element["nombre"] + "</td>";
                    items += "<td>" + element["apellido"] + "</td>";
                    items += "<td>" + element["email"] + "</td>";
                    items += "<td>" + element["dni"] + "</td>";
                    items += "<td>" + element["movil"] + "</td>";
                    items += "<td>" + "<i class='fa fa-trash' id='removeItem' onclick='(removeUser(" + element["id"] + "))'></i>" + "</td>";
                    items += "</tr>";
                });
                items += "</table>";
                items += "</div>";
            }
            $("#dataSearch").html(items);
        }
    })
}
$(document).on('keyup', '#search', (function () {
    let value = $("#searchUpFrom").serialize();
    if (value != "") {
        search_data(value);
    } else {
        search_data();
    }
}))
