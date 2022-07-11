- [« Memcached::getServerByKey](memcached.getserverbykey.md)
- [Memcached::getStats »](memcached.getstats.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує список серверів у пулі

# Memcached::getServerList

(PECL memcached \>u003d 0.1.0)

Memcached::getServerList — Отримує список серверів у пулі

### Опис

public **Memcached::getServerList**(): array

**Memcached::getServerList()** повертає список усіх серверів, які
перебувають у пулі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Список серверів у пулі.

### Приклади

**Приклад #1 Приклад використання **Memcached::getServerList()****

` <?php$m u003d new Memcached();$m->addServers(array(    array('mem1.domain.com', 11211, 20),    array('mem2.domain.com', 1) ));var_dump($m->getServerList());?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
array(3) {
["host"]u003d>
string(15) "mem1.domain.com"
["port"]u003d>
int(11211)
["weight"]u003d>
int(20)
}
[1]u003d>
array(3) {
["host"]u003d>
string(15) "mem2.domain.com"
["port"]u003d>
int(11311)
["weight"]u003d>
int(80)
}
}
