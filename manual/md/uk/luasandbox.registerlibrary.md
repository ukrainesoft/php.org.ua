- [« LuaSandbox::pauseUsageTimer](luasandbox.pauseusagetimer.md)
- [LuaSandbox::setCPULimit »](luasandbox.setcpulimit.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Реєструє набір PHP-функцій як бібліотеку Lua

# LuaSandbox::registerLibrary

(PECL luasandbox \>u003d 1.0.0)

LuaSandbox::registerLibrary — Реєструє набір PHP-функцій як
бібліотеку Lua

### Опис

public **LuaSandbox::registerLibrary**(string `$libname`, array
`$functions`): void

Реєструє набір PHP-функцій як бібліотеку Lua, щоб Lua міг
викликати відповідний PHP-код.

Для отримання додаткової інформації про виклик функцій Lua та
повертаних значеннях дивіться
[LuaSandboxFunction::call()](luasandboxfunction.call.md).

### Список параметрів

`libname`
Назва бібліотеки. Може Lua глобальна змінна з цим ім'ям
буде встановлено таблицю функцій. Якщо таблиця вже існує, до неї
будуть додані нові функції.

`functions`
Масив (array), де кожен ключ – це ім'я функції, а кожне значення –
це відповідний викликаний
([callable](language.types.callable.md)) PHP-код.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Реєстрація PHP-функцій для виклику з Lua**

`<?php// створення нового LuaSandbox$sandbox u003d new LuaSandbox();// реєстрація деяких функцій в середі Luafunction frobnosticate( $v ) v|$| [   'frobnosticate' u003d> 'frobnosticate',   'output' u003d> function ( $string ) {       echo "$string
";    },    'error' u003d> function () {       throw new LuaSandboxRuntimeError( "Щось пішло не так" ); |

### Дивіться також

- [LuaSandbox::loadString()](luasandbox.loadstring.md) - Завантажує
код Lua у середу Lua
- [LuaSandbox::wrapPhpFunction()](luasandbox.wrapphpfunction.md) -
Обертає викликаний PHP-об'єкт у LuaSandboxFunction
