$(document).ready(function () {
    $("#consultarUser").click(function () {
        $.ajax({
            type: "GET",
            url: "./model/getUsers.php",
            success: function (data) {
                $("#dataSearch").html(data);
            }
        })
        return false;
    })
})