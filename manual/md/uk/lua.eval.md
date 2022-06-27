- [« Lua::\_\_construct](lua.construct.md)
- [Lua::getVersion »](lua.getversion.md)

- [PHP Manual](index.md)
- [Lua](class.lua.md)
- Розбирає рядок як код Lua

# Lua::eval

(PECL lua \>u003d0.9.0)

Lua::eval — Розбирає рядок як код Lua

### Опис

public **Lua::eval**(string `$statements`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`statements`

### Значення, що повертаються

Повертає результат виконаного коду, **`null`** у разі некоректних
аргументів і **`false`** у разі помилки.

### Приклади

**Приклад #1 Приклад використання **Lua::eval()****

` <?php$lua u003d new Lua();$lua->eval(<<<CODE    print(2);CODE);?> `

Результат виконання цього прикладу:

2
