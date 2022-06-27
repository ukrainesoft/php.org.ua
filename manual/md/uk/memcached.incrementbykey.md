- [«Memcached::increment](memcached.increment.md)
- [Memcached::isPersistent »](memcached.ispersistent.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Збільшує числове значення запису, що зберігається на вказаному сервері

# Memcached::incrementByKey

(PECL memcached \>u003d 2.0.0)

Memcached::incrementByKey — Збільшує числове значення запису,
що зберігається на вказаному сервері

### Опис

public **Memcached::incrementByKey**(
string `$server_key`,
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

**Memcached::incrementByKey()** збільшує числове значення запису на
величину, вказану в параметрі `offset`. Якщо значення запису не
є числовим, то буде повернено помилку.
**Memcached::incrementByKey()** встановить запису значення параметра
`initial_value` якщо переданого ключа немає.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

`key`
Ключ запису, що збільшується

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

### Дивіться також

- [Memcached::decrement()](memcached.decrement.md) - Зменшує
числове значення запису
- [Memcached::decrementByKey()](memcached.decrementbykey.md) -
Зменшує числове значення запису, що зберігається на певному
сервері
- [Memcached::increment()](memcached.increment.md) - Збільшує
числове значення запису
