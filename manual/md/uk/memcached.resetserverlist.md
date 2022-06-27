- [« Memcached::replaceByKey](memcached.replacebykey.md)
- [Memcached::set »](memcached.set.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Очищає список серверів

# Memcached::resetServerList

(PECL memcached \>u003d 2.0.0)

Memcached::resetServerList — Очищає список серверів

### Опис

public **Memcached::resetServerList**(): bool

**Memcached::resetserverlist()** видаляє всі сервери memcache з пулу,
роблячи його знову пустим.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [Memcached::addServer()](memcached.addserver.md) - Додає
сервер у пул
- [Memcached::addServers()](memcached.addservers.md) - Додає
кілька серверів у пул
