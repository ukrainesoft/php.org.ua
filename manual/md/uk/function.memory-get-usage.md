- [«memory_get_peak_usage](function.memory-get-peak-usage.md)
- [php_ini_loaded_file »](function.php-ini-loaded-file.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає кількість пам'яті, виділену для PHP

# memory_get_usage

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

memory_get_usage — Повертає кількість пам'яті, виділену для PHP

### Опис

**memory_get_usage**(bool `$real_usage` u003d **`false`**): int

Повертає кількість пам'яті в байтах, яка була виділена PHP-скрипту
на даний момент.

### Список параметрів

`real_usage`
Передача **`true`** дозволяє дізнатися реальну кількість пам'яті,
виділеною PHP скрипту системою, включаючи сторінки, що не використовуються. Якщо
аргумент не заданий або дорівнює **`false`**, буде повернено лише
кількість пам'яті, що використовується.

> **Примітка**:
>
> PHP не відстежує пам'ять, яка виділялася не `emalloc()`

### Значення, що повертаються

Повертає кількість пам'яті у байтах.

### Приклади

**Приклад #1 Приклад використання **memory_get_usage()****

` <?php// Це просто приклад, цифри нижче будуть// відрізнятися в залежності від вашої системиecho memory_get_usage() . "
"; // 36640$a u003d str_repeat("Hello", 4242);echo memory_get_usage() . "
"; // 57960unset($a);echo memory_get_usage() . "
"; // 36744?> `

### Дивіться також

- [memory_get_peak_usage()](function.memory-get-peak-usage.md) -
Повертає пікове значення обсягу пам'яті, виділене PHP
- [memory_limit](ini.core.md#ini.memory-limit)
