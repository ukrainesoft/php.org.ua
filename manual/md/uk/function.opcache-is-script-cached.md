- [«opcache_invalidate](function.opcache-invalidate.md)
- [opcache_reset»] (function.opcache-reset.md)

- [PHP Manual](index.md)
- [Функції OPcache](ref.opcache.md)
- Перевіряє, чи закешовано скрипт в OPCache

# opcache_is_script_cached

(PHP 5 u003d 5.5.11, PHP 7, PHP 8, PECL ZendOpcache u003d 7.0.4)

opcache_is_script_cached — Перевіряє, чи закешовано скрипт в OPCache

### Опис

**opcache_is_script_cached**(string `$filename`): bool

Функція перевіряє, чи вказаний скрипт в OPCache. Може бути
використана для визначення, чи прогрітий кеш для конкретного скрипта.
Функція перевіряє лише кеш у пам'яті, не перевіряючи файловий кеш.

### Список параметрів

`filename`
Шлях до файлу сценарію.

### Значення, що повертаються

Повертає **`true`**, якщо `filename` закешовано в OPCache,
**`false`** якщо ні.

### Дивіться також

- [opcache_compile_file()](function.opcache-compile-file.md) -
Скомпілювати та закешувати, але не виконувати скрипт PHP
