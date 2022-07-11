- [« Lua::assign](lua.assign.md)
- [Lua::\_\_construct »](lua.construct.md)

- [PHP Manual](index.md)
- [Lua](class.lua.md)
- Викликати функції Lua

# Lua::call

# Lua::\_\_call

(PECL lua \>u003d0.9.0)

Lua::call -- Lua::\_\_call — Викликати функції Lua:

### Опис

public **Lua::call**([callable](language.types.callable.md)
`$lua_func`, array `$args` u003d ?, int `$use_self` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public **Lua::\_\_call**([callable](language.types.callable.md)
`$lua_func`, array `$args` u003d ?, int `$use_self` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`lua_func`
Ім'я функції lua

`args`
Передані аргументи

`use_self`
Чи використовувати `self`

### Значення, що повертаються

Повертає результат функції, **`null`** у випадку
некоректних аргументів, або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Lua::call()****

` <?php$lua u003d new Lua();$lua->eval(<<<CODE     function dummy(foo, bar)       print(foo, ",", bar)  >| ", array("Lua", "geiliable
")); $lua->dummy("Lua", "geiliable"); // __call()var_dump($lua->call(array("table", "concat"), array(array(1u003d> 1, 2u003d>2, 3u003d>3), "-")));?> `

Результат виконання цього прикладу:

Lua,geiliable
Lua,geiliable
string(5) "1-2-3"

### Дивіться також

- [\_\_call()](language.oop5.overloading.md#object.call)
