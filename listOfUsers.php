<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>list of users</title>
    <link rel="stylesheet" href="style/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="function/getUserInfo.js"></script>
</head>

<body>
    <div class="container">
        <?php
        include("header.php");
        ?>
        <div class="box">
            <form id="searchUpFrom" method="POST">
                <div class="container-2">
                    <span class="icon"><i class="fa fa-search"></i></span>
                    <input name="valueSearch" type="text" id="search" placeholder="Search..." />
                </div>
            </form>
        </div>
        <div id="dataSearch"></div>
    </div>
</body>

</html>