- [« mysqli::debug](mysqli.debug.md)
- [mysqli::$errno »](mysqli.errno.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Журналування налагоджувальної інформації

# mysqli::dump_debug_info

# mysqli_dump_debug_info

(PHP 5, PHP 7, PHP 8)

mysqli::dump_debug_info -- mysqli_dump_debug_info -- Журнал
налагоджувальної інформації

### Опис

Об'єктно-орієнтований стиль

public **mysqli::dump_debug_info**(): bool

Процедурний стиль

**mysqli_dump_debug_info**([mysqli](class.mysqli.md) `$mysql`): bool

Функція розроблена для запуску від імені користувача з привілеями
SUPER і використовується для складання налагоджувальної інформації в журнал сервера
MySQL, до якого здійснено підключення.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mysqli_debug()](mysqli.debug.md) - Виконує процедури налагодження
