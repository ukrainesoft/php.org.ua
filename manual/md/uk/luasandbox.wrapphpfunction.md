- [« LuaSandbox::unpauseUsageTimer](luasandbox.unpauseusagetimer.md)
- [LuaSandboxFunction »](class.luasandboxfunction.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Обертає викликаний PHP-об'єкт у LuaSandboxFunction

# LuaSandbox::wrapPhpFunction

(PECL luasandbox \>u003d 1.2.0)

LuaSandbox::wrapPhpFunction — Обертає викликаний PHP-об'єкт в
[LuaSandboxFunction](class.luasandboxfunction.md)

### Опис

public
**LuaSandbox::wrapPhpFunction**([callable](language.types.callable.md)
`$function`): [LuaSandboxFunction](class.luasandboxfunction.md)

Обертає викликаний PHP-об'єкт в
[LuaSandboxFunction](class.luasandboxfunction.md), тому його можна
передати до Lua як анонімну функцію.

Функція повинна повертати або масив значень (який може бути
порожнім), або **`null`**, що еквівалентно поверненню порожнього масиву.

Винятки виникатимуть як помилки в Lua, однак лише винятки
[LuaSandboxRuntimeError](class.luasandboxruntimeerror.md) може бути
оброблені всередині Lua за допомогою `pcall()` або `xpcall()`.

Для отримання додаткової інформації про виклик функцій Lua та
повертаних значеннях дивіться
[LuaSandboxFunction::call()](luasandboxfunction.call.md).

### Список параметрів

`function`
Функція для обгортання.

### Значення, що повертаються

Повертає [LuaSandboxFunction](class.luasandboxfunction.md).

### Дивіться також

- [LuaSandbox::loadString()](luasandbox.loadstring.md) - Завантажує
код Lua у середу Lua
- [LuaSandbox::registerLibrary()](luasandbox.registerlibrary.md) -
Реєструє набір PHP-функцій як бібліотеку Lua
