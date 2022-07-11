- [« Memcache::getExtendedStats](memcache.getextendedstats.md)
- [Memcache::getStats »](memcache.getstats.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Повертає статус сервера

# Memcache::getServerStatus

(PECL memcache \>u003d 2.1.0)

Memcache::getServerStatus — Повертає статус сервера

### Опис

**Memcache::getServerStatus**(string `$host`, int `$port` u003d 11211): int

**Memcache::getServerStatus()** повертає статус онлайн/офлайн
серверів. Ви також можете використати функцію
**memcache_get_server_status()**.

> **Примітка**:
>
> Ця функція була додана до Memcache версії 2.1.0.

### Список параметрів

`host`
Вказує на хост, на якому memcached прослуховує з'єднання.

`port`
Вказує на порт, на якому memcached прослуховує з'єднання.

### Значення, що повертаються

Повертає статус серверів. 0, у разі виникнення помилки на сервері
і значення, відмінне від нуля, інакше

### Приклади

**Приклад #1 Приклад використання **Memcache::getServerStatus()****

`<?php/* об'єктно-орієнтоване API */$memcache u003d new Memcache;$memcache->addServer('memcache_host', 11211);echo $memcache->getServerStatus('m це /$memcache u003d memcache_connect('memcache_host', 11211);echo memcache_get_server_status($memcache, 'memcache_host', 11211);?> `

### Дивіться також

- [Memcache::addServer()](memcache.addserver.md) - Додає сервер
memcached в пул з'єднань
- [Memcache::setServerParams()](memcache.setserverparams.md) -
Змінює параметри сервера та статус під час виконання
