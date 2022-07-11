- [«
ReflectionGenerator::getExecutingGenerator](reflectiongenerator.getexecutinggenerator.md)
- [ReflectionGenerator::getFunction
»](reflectiongenerator.getfunction.md)

- [PHP Manual](index.md)
- [ReflectionGenerator](class.reflectiongenerator.md)
- Отримати поточний рядок генератора, що виконується

# ReflectionGenerator::getExecutingLine

(PHP 7, PHP 8)

ReflectionGenerator::getExecutingLine — Отримати поточну виконувану
рядок генератора

### Опис

public **ReflectionGenerator::getExecutingLine**(): int

Повертає поточний рядок генератора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає номер поточного рядка генератора, що виконується.

### Приклади

**Приклад #1 Приклад використання
**ReflectionGenerator::getExecutingLine()****

` <?phpclass GenExample{    public function gen()    {       yield 1; }}$gen u003d (new GenExample)->gen();$reflectionGenu003du003dnew ReflectionGenerator($gen);echo "Рядок: {$reflectionGen->getExecutingLine()}"; `

Результатом виконання цього прикладу буде щось подібне:

Рядок: 7

### Дивіться також

- [ReflectionGenerator::getExecutingGenerator()](reflectiongenerator.getexecutinggenerator.md) -
Отримати запущений об'єкт Generator
- [ReflectionGenerator::getExecutingFile()](reflectiongenerator.getexecutingfile.md) -
Отримати ім'я файлу, з якого запущено генератор
