- [«ReflectionGenerator](class.reflectiongenerator.md)
- [ReflectionGenerator::getExecutingFile
»](reflectiongenerator.getexecutingfile.md)

- [PHP Manual](index.md)
- [ReflectionGenerator](class.reflectiongenerator.md)
- Конструктор ReflectionGenerator

# ReflectionGenerator::\_\_construct

(PHP 7, PHP 8)

ReflectionGenerator::\_\_construct — Конструктор ReflectionGenerator

### Опис

public
**ReflectionGenerator::\_\_construct**([Generator](class.generator.md)
`$generator`)

Створює об'єкт [ReflectionGenerator](class.reflectiongenerator.md).

### Список параметрів

`generator`
Об'єкт генератора.

### Приклади

**Приклад #1 Приклад використання
**ReflectionGenerator::\_\_construct()****

` <?phpfunction gen(){   yield 1;}$gen u003d gen();$reflectionGenu003d new ReflectionGenerator($gen);echo <<<<output{$reflectionGen->getFunction()->name} reflectionGen->getExecutingLine()}Файл: {$reflectionGen->getExecutingFile()}output; `

Результатом виконання цього прикладу буде щось подібне:

gen
Рядок: 5
Файл: /path/to/file/example.php

### Дивіться також

- [ReflectionGenerator::getFunction()](reflectiongenerator.getfunction.md) -
Отримати ім'я функції генератора
- [ReflectionGenerator::getExecutingLine()](reflectiongenerator.getexecutingline.md) -
Отримати поточний рядок генератора, що виконується
- [ReflectionGenerator::getExecutingFile()](reflectiongenerator.getexecutingfile.md) -
Отримати ім'я файлу, з якого запущено генератор
