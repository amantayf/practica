<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="ITF-8">
    <meta name="viewport" content="width=divice-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Изучение JavaScript</title>
    </head>
    <body>
        <form id="main-form" method="post">
            <label for="name">Имя:</label>
            <input type="text0" name="name" placeholder="Имя" id="name"><br><br>
            <label for="password">Пароль:</label>
            <input type="password" name="pass" placeholder="Пароль" id="pass" ><br><br>
            <label for="repss">Проверка пароля:</label>
            <input type="password" name="repass" placeholder="Проверка пароля" id="repass"><br><br>
            <span>Пол:</span>
            <input type="radio" name="state" id="male" value="Мужской">
            <label for="male">Мужской</label>
            <input type="radio" name="state" id="female" value="Женский">
            <label for="female">Женский</label>><br><br>
            <div id="error" style="color: red"></div>
            <input type="sumbit" name="sumbit" value="Готово">

        </form>
        <script scr="js/main.js"></script>
    </body>
    </html>