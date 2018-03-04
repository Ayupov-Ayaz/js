<<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Test</title>
<!-- подключаем стили Mocha, для отображения результатов -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css">
<!-- подключаем библиотеку Mocha для тестирования -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js"></script>
<!-- настраиваем Mocha: предстоит BDD-тестирование -->
  
<script>
  mocha.setup('bdd');
</script>

<!-- подключаем chai -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js"></script>
</head>

<body>
<script src='libraries/functions.js'></script>
<script src='libraries/math.js'></script>
<script src='tests/math.js'></script>
<!-- Результаты тестов -->
<div id="mocha"></div>

<!-- run test -->
<script>
  mocha.run();
</script>
</body>
</html>