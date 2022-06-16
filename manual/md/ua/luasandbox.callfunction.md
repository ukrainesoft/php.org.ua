- [« LuaSandbox](class.luasandbox.md)
- [LuaSandbox::disableProfiler »](luasandbox.disableprofiler.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Викликає функцію у глобальній змінній Lua

# LuaSandbox::callFunction

(PECL luasandbox \>u003d 1.0.0)

LuaSandbox::callFunction — Викликає функцію у глобальній змінній Lua

### Опис

public **LuaSandbox::callFunction**(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): array\|bool

Викликає функцію у глобальній змінній Lua.

Якщо ім'я містить символи ".", функція перебуває через рекурсивний
доступ до таблиці, якби ім'я було виразом Lua.

Якщо змінна не існує або не є функцією, буде повернено
значення false та буде видано попередження.

Для отримання додаткової інформації про виклик функцій Lua та
повертаних значеннях дивіться
[LuaSandboxFunction::call()](luasandboxfunction.call.md).

### Список параметрів

`name`
Ім'я змінної Lua.

`args`
Аргументи функцій.

### Значення, що повертаються

Повертає масив (array) значень, що повертаються функцією Lua, які
можуть бути порожніми або `false` у разі виникнення помилки.

### Приклади

**Приклад #1 Виклик функції Lua**

`<?php// створення нового LuaSandbox$sandbox u003d new LuaSandbox();// Виклик Lua-функції string.match$captures u003d $sandbox->callFunction( 'string.match', $string, >string| `
