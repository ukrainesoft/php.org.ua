- [« Memcached::append](memcached.append.md)
- [Memcached::cas »](memcached.cas.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Додає дані до наявного запису на заданому сервері

# Memcached::appendByKey

(PECL memcached \>u003d 0.1.0)

Memcached::appendByKey — Додає дані до наявного запису на
заданому сервері

### Опис

public **Memcached::appendByKey**(string `$server_key`, string `$key`,
string `$value`): bool

**Memcached::appendByKey()** працює аналогічно методу
[Memcached::append()](memcached.append.md), за винятком того, що
довільний `server_key` може бути використаний для визначення сервера
та установки `key` на конкретний сервер.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

`key`
Ключ, під яким зберігається значення.

`value`
Рядок для додавання до кінця існуючого запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTSTORED`** якщо переданий ключ не існує.

### Дивіться також

- [Memcached::append()](memcached.append.md) - Додає дані до
існуючого запису
- [Memcached::prepend()](memcached.prepend.md) - Додає дані до
початок існуючого запису
