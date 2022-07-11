- [«
ReflectionGenerator::getExecutingFile](reflectiongenerator.getexecutingfile.md)
- [ReflectionGenerator::getExecutingLine
»](reflectiongenerator.getexecutingline.md)

- [PHP Manual](index.md)
- [ReflectionGenerator](class.reflectiongenerator.md)
- Отримати запущений об'єкт Generator

# ReflectionGenerator::getExecutingGenerator

(PHP 7, PHP 8)

ReflectionGenerator::getExecutingGenerator — Отримати запущений об'єкт
[Generator](class.generator.md)

### Опис

public **ReflectionGenerator::getExecutingGenerator**():
[Generator](class.generator.md)

Повертає запущений об'єкт [Generator](class.generator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає запущений об'єкт [Generator](class.generator.md).

### Приклади

**Приклад #1 Приклад використання
**ReflectionGenerator::getExecutingGenerator()****

` <?phpclass GenExample{    public function gen()    {       yield 1; }}$gen u003d (new GenExample)->gen();$reflectionGenu003d new ReflectionGenerator($gen);$gen2 u003d $reflectionGen->getExecutingGenerator();var_dump($gen2 u003du003du003du003d$$ gen2->current()); `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
int(1);

### Дивіться також

- [ReflectionGenerator::getExecutingLine()](reflectiongenerator.getexecutingline.md) -
Отримати поточний рядок генератора, що виконується
- [ReflectionGenerator::getExecutingFile()](reflectiongenerator.getexecutingfile.md) -
Отримати ім'я файлу, з якого запущено генератор
