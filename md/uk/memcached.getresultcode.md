- [« Memcached::getOption](memcached.getoption.md)
- [Memcached::getResultMessage »](memcached.getresultmessage.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Повертає результуючий код останньої виконаної операції

# Memcached::getResultCode

(PECL memcached \>u003d 0.1.0)

Memcached::getResultCode — Повертає результуючий код останньої
виконаної операції

### Опис

public **Memcached::getResultCode**(): int

**Memcached::getResultCode()** повертає одну з констант
**`Memcached::RES_*`**, що є результуючим кодом виконання
останнього методу Memcached.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Результуючий код останньої операції Memcached.

### Приклади

**Приклад #1 Приклад використання **Memcached::getResultCode()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->add('foo', 'bar');if ($m->getResultCode() u003d u003d Memcached::RES_NOTSTORED) {    /* ... */}?> `
