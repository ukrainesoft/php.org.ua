- [« LuaClosure](class.luaclosure.md)
- [LuaSandbox »](book.luasandbox.md)

- [PHP Manual](index.md)
- [LuaClosure](class.luaclosure.md)
- Виклик замикання Lua

# LuaClosure::\_\_invoke

(PECL lua \>u003d0.9.0)

LuaClosure::\_\_invoke — Виклик замикання Lua

### Опис

public
**LuaClosure::\_\_invoke**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): void

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`args`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання**LuaClosure::\_\_invoke()****

`<?php$lua u003d new Lua();$closure u003d $lua->eval(<<<CODE   return (function ()       print("hello world")   | );$closure();?> `

Результат виконання цього прикладу:

hello worldhello world
