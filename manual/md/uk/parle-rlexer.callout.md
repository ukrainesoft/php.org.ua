- [« Parle\RLexer::build](parle-rlexer.build.md)
- [Parle\RLexer::consume »](parle-rlexer.consume.md)

- [PHP Manual](index.md)
- [Parle\RLexer](class.parle-rlexer.md)
- визначає callback-функцію токена

# Parle\RLexer::callout

(PECL parle \>u003d 0.7.2)

Parle\RLexer::callout — Визначає callback-функцію токена

### Опис

public **Parle\RLexer::callout**(int `$id`,
[callable](language.types.callable.md) `$callback`): void

Визначає callback-функцію, яка буде викликатись, коли лексер
зустрічає певний ток.

### Список параметрів

`id`
Token ID.

`callback`
Callable-функція. Об'єкт, що викликається, не отримує аргументів, а його
значення, що повертається, ігнорується.

### Значення, що повертаються

Функція не повертає значення після виконання.
