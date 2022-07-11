- [« Parle\Lexer::build](parle-lexer.build.md)
- [Parle\Lexer::consume »](parle-lexer.consume.md)

- [PHP Manual](index.md)
- [Parle\Lexer](class.parle-lexer.md)
- визначає callback-функцію токена

# Parle\Lexer::callout

(PECL parle \>u003d 0.7.2)

Parle\Lexer::callout — Визначає callback-функцію токена

### Опис

public **Parle\Lexer::callout**(int `$id`,
[callable](language.types.callable.md) `$callback`): void

Визначає callback-функцію, яка буде викликатись, коли лексер
зустрічає певний ток.

### Список параметрів

`id`
Ідентифікатор токена.

`callback`
Callable для дзвінка. Об'єкт, що викликається, не отримує аргументів, а його
значення, що повертається, ігнорується.

### Значення, що повертаються

Функція не повертає значення після виконання.
