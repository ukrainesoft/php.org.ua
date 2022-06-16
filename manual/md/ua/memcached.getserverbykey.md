- [« Memcached::getResultMessage](memcached.getresultmessage.md)
- [Memcached::getServerList »](memcached.getserverlist.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує інформацію про сервер по ключу

# Memcached::getServerByKey

(PECL memcached \>u003d 0.1.0)

Memcached::getServerByKey — Отримує інформацію про сервер за ключом

### Опис

public **Memcached::getServerByKey**(string `$server_key`): array

**Memcached::getServerByKey()** повертає інформацію про сервер, який
може бути обраний за допомогою спеціального параметра `server_key`, який
використовується в **Memcached::\*ByKey()** функціях.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

### Значення, що повертаються

Повертає масив, що містить такі ключі: `host`, `port`, та
`weight` у разі успішного виконання або **`false`** у разі невдачі.
Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Приклади

**Приклад #1 Приклад використання **Memcached::getServerByKey()****

` <?php$m u003d new Memcached();$m->addServers(array(    array('mem1.domain.com', 11211, 40),    array('mem2.domain.com', 1) array('mem3.domain.com', 11211, 20),));$m->setOption(Memcached::OPT_LIBKETAMA_COMPATIBLE, true);var_dump($m->getServerByKey('user'));var_dump($m ->getServerByKey('log'));var_dump($m->getServerByKey('ip'));?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
["host"]u003d>
string(15) "mem3.domain.com"
["port"]u003d>
int(11211)
["weight"]u003d>
int(20)
}
array(3) {
["host"]u003d>
string(15) "mem2.domain.com"
["port"]u003d>
int(11211)
["weight"]u003d>
int(40)
}
array(3) {
["host"]u003d>
string(15) "mem2.domain.com"
["port"]u003d>
int(11211)
["weight"]u003d>
int(40)
}
