- [« Memcache::getServerStatus](memcache.getserverstatus.md)
- [Memcache::getVersion »](memcache.getversion.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Отримати статистику сервера

# Memcache::getStats

(PECL memcache \>u003d 0.2.0)

Memcache::getStats — Отримати статистику сервера

### Опис

**Memcache::getStats**(string `$type` u003d ?, int `$slabid` u003d ?, int
`$limit` u003d 100): array\|false

**Memcache::getStats()** повертає асоціативний масив, що містить
статистика сервера. Ключі масиву відповідають параметрам статистики, а
значення - значення параметрів. Також ви можете використати функцію
**memcache_get_stats()**.

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

### Значення, що повертаються

Повертає асоціативний масив, що містить статистику сервера або
**`false`** у разі виникнення помилки.

### Дивіться також

- [Memcache::getVersion()](memcache.getversion.md) - Повернути версію
сервера
- [Memcache::getExtendedStats()](memcache.getextendedstats.md) -
Отримати статистику з усіх серверів у пулі
