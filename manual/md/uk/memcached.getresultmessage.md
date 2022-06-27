- [« Memcached::getResultCode](memcached.getresultcode.md)
- [Memcached::getServerByKey »](memcached.getserverbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Повертає повідомлення, що описує результат виконання останньої
операції

# Memcached::getResultMessage

(PECL memcached \>u003d 1.0.0)

Memcached::getResultMessage — Повертає повідомлення, що описує
результат виконання останньої операції

### Опис

public **Memcached::getResultMessage**(): string

**Memcached::getResultMessage()** повертає рядок, що описує
результуючий код виконання останнього методу Memcached.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повідомлення, що описує результат виконання останньої Memcached
операції.

### Приклади

**Приклад #1 Приклад використання **Memcached::getResultMessage()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->add('foo', 'bar'); // перше додавання успішно виконається$m->add('foo', 'bar');echo $m->getResultMessage(),"
";?> `

Результат виконання цього прикладу:

NOT STORED
