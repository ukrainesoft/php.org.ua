- [« Типи ресурсів](lua.resources.md)
- [Lua::assign »](lua.assign.md)

- [PHP Manual](index.md)
- [Lua](book.lua.md)
- Клас Lua

# Клас Lua

(PECL lua \>u003d0.9.0)

## Вступ

## Огляд класів

class **Lua** {

/\* Константи \*/

const string `LUA_VERSION` u003d Lua 5.1.4;

/\* Методи \*/

public [assign](lua.assign.md)(string `$name`, string `$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [call](lua.call.md)([callable](language.types.callable.md)
`$lua_func`, array `$args` u003d ?, int `$use_self` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[\_\_call](lua.call.md)([callable](language.types.callable.md)
`$lua_func`, array `$args` u003d ?, int `$use_self` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [\_\_construct](lua.construct.md)(string `$lua_script_file` u003d
NULL)

public [eval](lua.eval.md)(string `$statements`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getVersion](lua.getversion.md)(): string

public [include](lua.include.md)(string `$file`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [registerCallback](lua.registercallback.md)(string `$name`,
[callable](language.types.callable.md) `$function`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Зумовлені константи

**`Lua::LUA_VERSION`**

## Зміст

- [Lua::assign](lua.assign.md) - Присвоїти PHP-змінній Lua
- [Lua::call](lua.call.md) — Викликати функції Lua
- [Lua::\_\_construct](lua.construct.md) - Конструктор Lua
- [Lua::eval](lua.eval.md) — Розбирає рядок як код Lua
- [Lua::getVersion](lua.getversion.md) - Повертає версію
- [Lua::include](lua.include.md) — Розбирає файл, що містить скрипт
Lua
- [Lua::registerCallback](lua.registercallback.md)
Зареєструвати функцію PHP у Lua
