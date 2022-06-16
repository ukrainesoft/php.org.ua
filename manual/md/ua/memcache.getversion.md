- [« Memcache::getStats](memcache.getstats.md)
- [Memcache::increment »](memcache.increment.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Повернути версію сервера

# Memcache::getVersion

(PECL memcache \>u003d 0.2.0)

Memcache::getVersion — Повернути версію сервера

### Опис

**Memcache::getVersion**(): string\|false

**Memcache::getVersion()** повертає рядок із номером версії сервера.
Також можна використовувати функцію **memcache_get_version()**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок із номером версії сервера або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::getVersion()****

` <?php/* об'єктно-орієнтоване API */$memcache u003d new Memcache;$memcache->connect('memcache_host', 11211);echo $memcache->getVersion()/emu003du003d ('memcache_host', 11211);echo memcache_get_version($memcache);?> `

### Дивіться також

- [Memcache::getExtendedStats()](memcache.getextendedstats.md) -
Отримати статистику з усіх серверів у пулі
- [Memcache::getStats()](memcache.getstats.md) - Отримати статистику
сервера
