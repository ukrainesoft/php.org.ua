- [«Memcache::set](memcache.set.md)
- [Memcache::setServerParams »](memcache.setserverparams.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Увімкнути автоматичне стискування для великих значень

# Memcache::setCompressThreshold

(PECL memcache \>u003d 2.0.0)

Memcache::setCompressThreshold — Увімкнути автоматичне стиснення для
великих значень

### Опис

**Memcache::setCompressThreshold**(int `$threshold`, float
`$min_savings` u003d ?): bool

**Memcache::setCompressThreshold()** включає автоматичне стиснення для
великих значень. Ви також можете використати функцію
**memcache_set_compress_threshold()**.

> **Примітка**:
>
> Ця функція була додана до Memcache версії 2.0.0.

### Список параметрів

`threshold`
Задає мінімальний розмір елементів спроб автоматичного стиснення.

`min_saving`
Вказує мінімальний розмір заощадженого розміру. Передане значення
має бути в межах від 0 до 1. Значення за умовчанням 0.2, що задає
мінімальний розмір зекономленого розміру 20%.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::setCompressThreshold()****

`<?php/* об'єктно-орієнтоване API */$memcache_obj u003d new Memcache;$memcache_obj->addServer('memcache_host', 11211);$memcache_obj->setCompressThres$ u003d memcache_connect('memcache_host', 11211); memcache_set_compress_threshold($memcache_obj, 20000, 0.2);?> `
