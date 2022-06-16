- [«
ReflectionGenerator::getExecutingLine](reflectiongenerator.getexecutingline.md)
- [ReflectionGenerator::getThis »](reflectiongenerator.getthis.md)

- [PHP Manual](index.md)
- [ReflectionGenerator](class.reflectiongenerator.md)
- Отримати ім'я функції генератора

# ReflectionGenerator::getFunction

(PHP 7, PHP 8)

ReflectionGenerator::getFunction — Отримати назву функції генератора

### Опис

public **ReflectionGenerator::getFunction**():
[ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)

Дозволяє отримати ім'я функції генератора, повертаючи похідний клас
від [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає клас
[ReflectionFunctionAbstract](class.reflectionfunctionabstract.md).
Можливо [ReflectionFunction](class.reflectionfunction.md) для
або [ReflectionMethod](class.reflectionmethod.md) для методів.

### Приклади

**Приклад #1 Приклад використання
**ReflectionGenerator::getFunction()****

` <?phpfunction gen(){   yield 1;}$gen u003d gen();$reflectionGenu003du003dnew ReflectionGenerator($gen);var_dump($reflectionGen->getFunction()); `

Результатом виконання цього прикладу буде щось подібне:

object(ReflectionFunction)#3 (1) {
["name"]u003d>
string(3) "gen"
}

### Дивіться також

- [ReflectionGenerator::getThis()](reflectiongenerator.getthis.md) -
Отримує значення $this генератора
- [ReflectionGenerator::getTrace()](reflectiongenerator.gettrace.md) -
Отримати трасування запущеного генератора
