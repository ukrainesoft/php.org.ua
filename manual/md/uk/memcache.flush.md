- [« Memcache::delete](memcache.delete.md)
- [Memcache::get »](memcache.get.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Скинути всі наявні елементи на сервері

# Memcache::flush

(PECL memcache \>u003d 1.0.0)

Memcache::flush — Скинути всі наявні елементи на сервері

### Опис

**Memcache::flush**(): bool

**Memcache::flush()** негайно анулює всі існуючі елементи.
**Memcache::flush()** фактично не звільняє ресурси, а лише
позначає всі елементи як минулі, тому зайнята пам'ять буде
перезаписано новими елементами. Ви також можете використати функцію
**memcache_flush()**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::flush()****

`<?php/* процедурне API */$memcache_obj u003d memcache_connect('memcache_host', 11211);memcache_flush($memcache_obj);/* об'єктно-орієнтоване API > ', 11211);$memcache_obj->flush();?> `
