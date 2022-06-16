- [« Memcached::\_\_construct](memcached.construct.md)
- [Memcached::decrementByKey »](memcached.decrementbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Зменшує числове значення запису

# Memcached::decrement

(PECL memcached \>u003d 0.1.0)

Memcached::decrement — Зменшує числове значення запису

### Опис

public **Memcached::decrement**(
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

**Memcached::decrement()** зменшує числове значення запису на
величину, вказану в `offset`. Якщо значення запису не є
числовим, то буде повернено помилку. Якщо функція зменшить значення
запису менше нуля, буде встановлено нульове значення.
**Memcached::decrement()** встановить запису значення параметра
`initial_value` якщо переданого ключа немає.

### Список параметрів

`key`
Ключ запису, що зменшується.

`offset`
Величина, на яку зменшується значення запису.

`initial_value`
Ініціює значення запису, якщо ключа не існує.

`expiry`
Час, коли термін дії запису спливає.

### Значення, що повертаються

Повертає нове значення запису у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcached::decrement()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->set('counter', 5);$n u003d $m->decrement('counter' );var_dump($n);$n u003d $m->decrement('counter', 10);var_dump($n);var_dump($m->get('counter'));$m->set( 'counter', 'abc');$n u003d $m->increment('counter');// Завершиться невдачею т.к. значення запису не є числовим var_dump($n);?> `

Результат виконання цього прикладу:

int(4)
int(0)
int(0)
bool(false)

### Дивіться також

- [Memcached::increment()](memcached.increment.md) - Збільшує
числове значення запису
- [Memcached::incrementByKey()](memcached.incrementbykey.md) -
Збільшує числове значення запису, що зберігається на вказаному сервері
- [Memcached::decrementByKey()](memcached.decrementbykey.md) -
Зменшує числове значення запису, що зберігається на певному
сервері
