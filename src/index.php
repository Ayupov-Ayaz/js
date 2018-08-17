<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Типо учим js</title>

</head>
<body>
<script src='libraries/functions.js'></script>
<script src='libraries/math.js'></script>
<script src='libraries/arrays.js'></script>
<script src='libraries/object.js'></script>
<script src='libraries/string.js'></script>
<script src='libraries/list.js'></script>
<script src='libraries/date.js'></script>
<script src='libraries/callback.js'></script>
<script src='classes/User.js'></script>
<script src='classes/Machine.js'></script>
<script src='classes/CoffeeMachine.js'></script>
<script src='classes/Fridge.js'></script>
<script src='libraries/index.js'></script>

<?php

    function __autoload($className)
    {
        $partsOfClass = explode('\\', $className);
        require (__DIR__ . '/'. implode(DIRECTORY_SEPARATOR, $partsOfClass) . '.php');
    }

?>

</body>
</html>