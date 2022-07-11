- [« opcache_is_script_cached](function.opcache-is-script-cached.md)
- [Контроль виведення »] (book.outcontrol.md)

- [PHP Manual](index.md)
- [Функції OPcache](ref.opcache.md)
- скидає вміст кешу опкодів

# opcache_reset

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8, PECL ZendOpcache \>u003d 7.0.0)

opcache_reset — Скидає вміст кешу опкодів

### Опис

**opcache_reset**(): bool

Функція скидає весь кеш. Після виклику **opcache_reset()** все
скрипти будуть заново завантажені, скомпільовані і поміщені в кеш після їх
наступного дзвінка. Функція скидає лише кеш у пам'яті, не торкаючись
файловий кеш.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо кеш скинутий або **`false`**, якщо не
використовується.

### Дивіться також

- [opcache_invalidate()](function.opcache-invalidate.md) -
Анулює закешований скрипт
