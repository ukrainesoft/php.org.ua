- [« ReflectionUnionType::getTypes](reflectionuniontype.gettypes.md)
- [ReflectionGenerator::\_\_construct
»](reflectiongenerator.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionGenerator

# Клас ReflectionGenerator

(PHP 7, PHP 8)

## Вступ

Клас **ReflectionGenerator** повідомляє інформацію про генератор.

## Огляд класів

final class **ReflectionGenerator** {

/\* Методи \*/

public
[\_\_construct](reflectiongenerator.construct.md)([Generator](class.generator.md)
`$generator`)

public [getExecutingFile](reflectiongenerator.getexecutingfile.md)():
string

public
[getExecutingGenerator](reflectiongenerator.getexecutinggenerator.md)():
[Generator](class.generator.md)

public [getExecutingLine](reflectiongenerator.getexecutingline.md)():
int

public [getFunction](reflectiongenerator.getfunction.md)():
[ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)

public [getThis](reflectiongenerator.getthis.md)(): ?object

public [getTrace](reflectiongenerator.gettrace.md)(int `$options` u003d
**`DEBUG_BACKTRACE_PROVIDE_OBJECT`**): array

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- ------|
| 8.0.0 | Клас тепер є остаточним (final). |

## Зміст

- [ReflectionGenerator::\_\_construct](reflectiongenerator.construct.md)
- Конструктор ReflectionGenerator
- [ReflectionGenerator::getExecutingFile](reflectiongenerator.getexecutingfile.md)
— Отримати ім'я файлу, з якого запущено генератор
- [ReflectionGenerator::getExecutingGenerator](reflectiongenerator.getexecutinggenerator.md)
— Отримати запущений об'єкт Generator
- [ReflectionGenerator::getExecutingLine](reflectiongenerator.getexecutingline.md)
— Отримати поточний рядок генератора, що виконується.
- [ReflectionGenerator::getFunction](reflectiongenerator.getfunction.md)
- Отримати ім'я функції генератора
- [ReflectionGenerator::getThis](reflectiongenerator.getthis.md) -
Отримує значення $this генератора
- [ReflectionGenerator::getTrace](reflectiongenerator.gettrace.md) -
Отримати трасування запущеного генератора
