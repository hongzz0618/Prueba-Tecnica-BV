$(search_data());
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
                items += "</tr>";

                datas.forEach(element => {
                    items += "<tr>";
                    items += "<td>" + element["nombre"] + "</td>";
                    items += "<td>" + element["apellido"] + "</td>";
                    items += "<td>" + element["email"] + "</td>";
                    items += "<td>" + element["dni"] + "</td>";
                    items += "<td>" + element["movil"] + "</td>";
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
