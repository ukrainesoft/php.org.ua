- [« Lua::include](lua.include.md)
- [LuaClosure »](class.luaclosure.md)

- [PHP Manual](index.md)
- [Lua](class.lua.md)
- Зареєструвати функцію PHP у Lua

# Lua::registerCallback

(No version information available, might only be in Git)

Lua::registerCallback — Зареєструвати функцію PHP в Lua

### Опис

public **Lua::registerCallback**(string `$name`,
[callable](language.types.callable.md) `$function`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Реєструє функцію PHP у Lua з ім'ям "$name"

### Список параметрів

`name`

`function`
Коректна функція зворотного виклику PHP

### Значення, що повертаються

Повертає `$this`, **`null`** у разі некоректних аргументів, або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Lua::registerCallback()****

` <?php$lua u003d new Lua();$lua->registerCallback("echo", "var_dump");$lua->eval(<<<CODE   echo({1, 2, 3});CODE) ;?> `

Результат виконання цього прикладу:

array(3) {
[1]u003d>
float(1)
[2]u003d>
float(2)
[3]u003d>
float(3)
}
