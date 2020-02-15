$(document).ready(function () {
    $("#consultarUser").click(function () {
        $.ajax({
            type: "GET",
            url: "getUsers.php",
            success: function (data) {
                $("#dataSearch").html(data);
            }
        })
        return false;
    })
})