- [« Memcache::get](memcache.get.md)
- [Memcache::getServerStatus »](memcache.getserverstatus.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Отримати статистику з усіх серверів у пулі

# Memcache::getExtendedStats

(PECL memcache \>u003d 2.0.0)

Memcache::getExtendedStats — Отримати статистику з усіх серверів у пулі

### Опис

**Memcache::getExtendedStats**(string `$type` u003d ?, int `$slabid` u003d ?,
int `$limit` u003d 100): array

**Memcache::getExtendedStats()** повертає двомірний асоціативний
масив, який містить статистику сервера. Ключі масиву відповідають
host:port сервера, а значення містять статистику даного сервера.
Якщо не вдалося отримати дані для будь-якого сервера, то
відповідне значення буде виставлено у **`false`**. ви також можете
використовувати функцію **memcache_get_extended_stats()**.

> **Примітка**:
>
> Ця функція була додана до Memcache версії 2.0.0.

### Список параметрів

`type`
Тип статистики для отримання. Коректні значення: reset, malloc, maps,
cachedump, slabs, items, sizes. Відповідно до специфікації
протоколу memcached, ці додаткові аргументи "можуть бути змінені
для зручності розробників memcache".

`slabid`
Використовується спільно з `type` для вказівки з якого файлу slab
вивантаження. Використовується лише для налагодження. Команда cachedump
намагається запустити сервер і має використовуватись тільки для налагодження.

`limit`
Використовується разом з `type` для обмеження кількості видобутих
записів.

**Увага**

Тип статистики cachedump був вилучений з демона memcached для
безпеки.

### Значення, що повертаються

Повертає двомірний асоціативний масив, що містить статистику за
серверам або **`false`** у разі невдачі.

### Приклади

**Приклад #1 Приклад використання **Memcache::getExtendedStats()****

`<?php   $memcache_obj u003d new Memcache; $memcache_obj->addServer('memcache_host', 11211); $memcache_obj->addServer('failed_host', 11211); $statsu003du003d$memcache_obj->getExtendedStats(); print_r($stats);?> `

Результат виконання цього прикладу:

Array
(
[memcache_host:11211] u003d> Array
(
[pid] u003d> 3756
[uptime] u003d> 603011
[time] u003d> 1133810435
[version] u003d> 1.1.12
[rusage_user] u003d> 0.451931
[rusage_system] u003d> 0.634903
[curr_items] u003d> 2483
[total_items] u003d> 3079
[bytes] u003d> 2718136
[curr_connections] u003d> 2
[total_connections] u003d> 807
[connection_structures] u003d> 13
[cmd_get] u003d> 9748
[cmd_set] u003d> 3096
[get_hits] u003d> 5976
[get_misses] u003d> 3772
[bytes_read] u003d> 3448968
[bytes_written] u003d> 2318883
[limit_maxbytes] u003d> 33554432
)

[failed_host:11211] u003d> false
)

### Дивіться також

- [Memcache::getVersion()](memcache.getversion.md) - Повернути версію
сервера
- [Memcache::getStats()](memcache.getstats.md) - Отримати статистику
сервера
