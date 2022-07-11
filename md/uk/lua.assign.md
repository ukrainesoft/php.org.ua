- [« Lua] (class.lua.md)
- [Lua::call »](lua.call.md)

- [PHP Manual](index.md)
- [Lua](class.lua.md)
- Присвоїти PHP-змінній Lua

# Lua::assign

(PECL lua \>u003d0.9.0)

Lua::assign — Присвоїти PHP-змінній Lua

### Опис

public **Lua::assign**(string `$name`, string `$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`name`

`value`

### Значення, що повертаються

Повертає `$this` або **`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Lua::assign()****

` <?php$lua u003d new Lua();$lua->assign("php_var", array(1u003d>1, 2, 3)); // індекси таблиці lua починаються з 1$lua->eval(<<<CODE    print(php_var);CODE);?> `

Результат виконання цього прикладу:

Array
(
[1] u003d> 1
[2] u003d> 2
[3] u003d> 3
)
