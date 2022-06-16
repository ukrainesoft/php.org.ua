- [« LuaSandbox::wrapPhpFunction](luasandbox.wrapphpfunction.md)
- [LuaSandboxFunction::call »](luasandboxfunction.call.md)

- [PHP Manual](index.md)
- [LuaSandbox](book.luasandbox.md)
- Клас LuaSandboxFunction

# Клас LuaSandboxFunction

(PECL luasandbox \>u003d 1.0.0)

## Вступ

Представляє функцію Lua, що дозволяє викликати її із PHP.

Функція LuaSandboxFunction може бути отримана як значення, що повертається
з Lua, як параметр, переданий в callback-функцію з Lua, або з
допомогою
[LuaSandbox::wrapPhpFunction()](luasandbox.wrapphpfunction.md),
[LuaSandbox::loadString()](luasandbox.loadstring.md) або
[LuaSandbox::loadBinary()](luasandbox.loadbinary.md).

## Огляд класів

class **LuaSandboxFunction** {

/\* Методи \*/

public [call](luasandboxfunction.call.md)(string `...$args`):
array\|bool

public [dump](luasandboxfunction.dump.md)(): string

}

## Зміст

- [LuaSandboxFunction::call](luasandboxfunction.call.md) — Викликає
Lua-функцію
- [LuaSandboxFunction::\_\_construct](luasandboxfunction.construct.md)
- Не використовується
- [LuaSandboxFunction::dump](luasandboxfunction.dump.md) — Вивантажує
функцію у вигляді BLOB
