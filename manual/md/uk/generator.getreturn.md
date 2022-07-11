- [«Generator::current](generator.current.md)
- [Generator::key »](generator.key.md)

- [PHP Manual](index.md)
- [Generator](class.generator.md)
- Отримати значення, що повертається генератором

# Generator::getReturn

(PHP 7, PHP 8)

Generator::getReturn — Отримати значення, що повертається генератором

### Опис

public **Generator::getReturn**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Отримує значення генератора, що повертається, після його завершення.

### Приклади

**Приклад #1 Приклад використання **Generator::getReturn()****

`<?php$gen u003d (function() {    yield 1;    yield 2;   return 3;})();foreach ($gen as $val) { P|$| , PHP_EOL; `

Результат виконання цього прикладу:

1
2
3
