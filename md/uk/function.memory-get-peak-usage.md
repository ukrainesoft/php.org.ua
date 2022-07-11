- [«ini_set](function.ini-set.md)
- [memory_get_usage »](function.memory-get-usage.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає пікове значення об'єму пам'яті, виділене PHP

# memory_get_peak_usage

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

memory_get_peak_usage — Повертає пікове значення обсягу пам'яті,
виділене PHP

### Опис

**memory_get_peak_usage**(bool `$real_usage` u003d **`false`**): int

Повертає максимальний обсяг пам'яті в байтах, виділеному
PHP-скрипт.

### Список параметрів

`real_usage`
Передача **`true`** як цей аргумент дозволяє отримати
реальний обсяг пам'яті виділений системою. Якщо аргумент не заданий або
дорівнює **`false`**, повертаються відомості лише про пам'ять, виділену
функцією `emalloc()`.

### Значення, що повертаються

Повертає максимальний обсяг пам'яті у байтах.

### Дивіться також

- [memory_get_usage()](function.memory-get-usage.md) - Повертає
кількість пам'яті, виділена для PHP
- [memory_limit](ini.core.md#ini.memory-limit)
