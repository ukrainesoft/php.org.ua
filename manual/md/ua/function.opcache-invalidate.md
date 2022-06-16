- [« opcache_get_status](function.opcache-get-status.md)
- [opcache_is_script_cached »](function.opcache-is-script-cached.md)

- [PHP Manual](index.md)
- [Функції OPcache](ref.opcache.md)
- анулює закешований скрипт

# opcache_invalidate

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8, PECL ZendOpcache \>u003d 7.0.0)

opcache_invalidate — Анулює закешований скрипт

### Опис

**opcache_invalidate**(string `$filename`, bool `$force` u003d **`false`**):
bool

Функція анулює закешований скрипт. Якщо параметр `force` не заданий
або заданий як **`false`**, скрипт анулюється, тільки якщо скрипт був
модифікований після поміщення в кеш. Функція анулює тільки кеш у
пам'яті, не торкаючись файлового кешу.

### Список параметрів

`filename`
Шлях до сценарію.

`force`
Якщо встановлено як **`true`**, кеш скрипту буде примусово
анульований незалежно від того, потрібно це чи ні

### Значення, що повертаються

Повертає **`true`**, якщо кеш опкодів для `filename` анульований, або
якщо анулювати нічого. У випадку, якщо кеш опкодів вимкнено,
повертається **`false`**.

### Дивіться також

- [opcache_compile_file()](function.opcache-compile-file.md) -
Скомпілювати та закешувати, але не виконувати скрипт PHP
- [opcache_reset()](function.opcache-reset.md) - Скидає
вміст кеша опкодів
