- [«
LuaSandbox::getProfilerFunctionReport](luasandbox.getprofilerfunctionreport.md)
- [LuaSandbox::loadBinary »](luasandbox.loadbinary.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Повертає версії LuaSandbox та Lua

# LuaSandbox::getVersionInfo

(PECL luasandbox \>u003d 1.6.0)

LuaSandbox::getVersionInfo — Повертає версії LuaSandbox та Lua

### Опис

public static **LuaSandbox::getVersionInfo**(): array

Повертає версії LuaSandbox та Lua.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив із двома ключами:

| element | тип | опис |
|------------|--------|---------------------------- -------------------------------------------------- -------|
| LuaSandbox | string | Версія модуля LuaSandbox. |
| Lua | string | Ім'я та версія бібліотеки, визначені макросом LUA_RELEASE, наприклад "Lua 5.1.5". |
