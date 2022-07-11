- [« Memcached::getVersion](memcached.getversion.md)
- [Memcached::incrementByKey »](memcached.incrementbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Збільшує числове значення запису

# Memcached::increment

(PECL memcached \>u003d 0.1.0)

Memcached::increment — Збільшує числове значення запису

### Опис

public **Memcached::increment**(
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

**Memcached::increment()** збільшує числове значення запису на
величину, вказану в параметрі `offset`. Якщо запис містить не
числове значення, то буде повернено помилку. Метод
**Memcached::increment()** встановить запису значення, передане в
`initial_value`, якщо запису із зазначеним ключем не існує.

### Список параметрів

`key`
Ключ запису, що збільшується.

`offset`
Величина, на яку відбувається збільшення значення запису.

`initial_value`
Ініціююче значення, яке буде встановлено запису, якщо
переданого ключа немає.

`expiry`
Час, коли термін дії запису спливає.

### Значення, що повертаються

Повертає нове значення запису у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcached::increment()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->set('counter', 0);$m->increment('counter');$ nu003du003d$m->increment('counter', 10);var_dump($n);$m->set('counter', 'abc');$n u003d $m->increment('counter'); // Завершиться невдачею т.к. значення запису не є числовим var_dump($n);?> `

Результат виконання цього прикладу:

int(11)
bool(false)

### Дивіться також

- [Memcached::decrement()](memcached.decrement.md) - Зменшує
числове значення запису
- [Memcached::decrementByKey()](memcached.decrementbykey.md) -
Зменшує числове значення запису, що зберігається на певному
сервері
- [Memcached::incrementByKey()](memcached.incrementbykey.md) -
Збільшує числове значення запису, що зберігається на вказаному сервері
