- [«realpath_cache_get](function.realpath-cache-get.md)
- [realpath »] (function.realpath.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Отримує розмір кеша realpath

#realpath_cache_size

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8)

realpath_cache_size — Отримує розмір кеша realpath

### Опис

**realpath_cache_size**(): int

Отримує обсяг пам'яті, який використовується кешем realpath.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає скільки використовується кеш-пам'яті realpath.

### Приклади

**Приклад #1 Приклад використання **realpath_cache_size()****

` <?phpvar_dump(realpath_cache_size());?> `

Результатом виконання цього прикладу буде щось подібне:

int(412)

### Дивіться також

- [realpath_cache_get()](function.realpath-cache-get.md) - Отримує
записи з кеша realpath
- Конфігураційна опція
[realpath_cache_size](ini.core.md#ini.realpath-cache-size)
