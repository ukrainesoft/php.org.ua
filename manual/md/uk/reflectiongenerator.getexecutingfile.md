- [«
ReflectionGenerator::\_\_construct](reflectiongenerator.construct.md)
- [ReflectionGenerator::getExecutingGenerator
»](reflectiongenerator.getexecutinggenerator.md)

- [PHP Manual](index.md)
- [ReflectionGenerator](class.reflectiongenerator.md)
- Отримати ім'я файлу, з якого запущено генератор

# ReflectionGenerator::getExecutingFile

(PHP 7, PHP 8)

ReflectionGenerator::getExecutingFile — Отримати ім'я файлу, з якого
запущений генератор

### Опис

public **ReflectionGenerator::getExecutingFile**(): string

Повертає повний шлях та ім'я файлу поточного запущеного генератора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає повний шлях та ім'я файлу поточного запущеного генератора.

### Приклади

**Приклад #1 Приклад використання
**ReflectionGenerator::getExecutingFile()****

` <?phpclass GenExample{    public function gen()    {       yield 1; }}$gen u003d (new GenExample)->gen();$reflectionGen u003d new ReflectionGenerator($gen);echo "Файл: {$reflectionGen->getExecutingFile()}"; `

Результатом виконання цього прикладу буде щось подібне:

Файл: /path/to/file/example.php

### Дивіться також

- [ReflectionGenerator::getExecutingLine()](reflectiongenerator.getexecutingline.md) -
Отримати поточний рядок генератора, що виконується
- [ReflectionGenerator::getExecutingGenerator()](reflectiongenerator.getexecutinggenerator.md) -
Отримати запущений об'єкт Generator
