- [«Memcached::decrement](memcached.decrement.md)
- [Memcached::delete »](memcached.delete.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Зменшує числове значення запису, що зберігається на певному
сервері

# Memcached::decrementByKey

(PECL memcached \>u003d 2.0.0)

Memcached::decrementByKey — Зменшує числове значення запису,
що зберігається на певному сервері

### Опис

public **Memcached::decrementByKey**(
string `$server_key`,
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

**Memcached::decrementByKey()** зменшує числове значення запису на
величину задану в `offset`. Якщо значення запису не є числовим,
то буде повернено помилку. Якщо функція зменшить значення запису менше
нуля, буде встановлено нульове значення.
**Memcached::decrementByKey()** встановить запису значення параметра
`initial_value` якщо переданого ключа немає.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

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

### Дивіться також

- [Memcached::decrement()](memcached.decrement.md) - Зменшує
числове значення запису
- [Memcached::increment()](memcached.increment.md) - Збільшує
числове значення запису
- [Memcached::incrementByKey()](memcached.incrementbykey.md) -
Збільшує числове значення запису, що зберігається на вказаному сервері
