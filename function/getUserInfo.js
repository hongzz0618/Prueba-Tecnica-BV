$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "./model/getUsers.php",
        success: function (data) {
            data = JSON.parse(data);
            let items = "";

            items += "<div class='table-responsive-sm'>";
            items += "<table class='table'>";
            items += "<tr>";
            items += "<th>Nombre</th>";
            items += "<th>Apellido</th>";
            items += "<th>Email</th>";
            items += "<th>DNI</th>";
            items += "<th>Móvil</th>";
            items += "</tr>";

            data.forEach(element => {
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

            $("#dataSearch").html(items);
        }
    })
    return false;
})