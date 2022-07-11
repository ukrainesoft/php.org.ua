- [« Memcached::setMulti](memcached.setmulti.md)
- [Memcached::setOption »](memcached.setoption.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Зберігає кілька записів на вказаному сервері

# Memcached::setMultiByKey

(PECL memcached \>u003d 0.1.0)

Memcached::setMultiByKey — Зберігає кілька записів на вказаному
сервері

### Опис

public **Memcached::setMultiByKey**(string `$server_key`, array
`$items`, int `$expiration` u003d ?): bool

**Memcached::setMultiByKey()** працює аналогічно
[Memcached::setMulti()](memcached.setmulti.md), за винятком того,
що довільний `server_key` може бути використаний для визначення
сервера та встановлення значення з ключем `key` на конкретний сервер. Це
корисно коли необхідно тримати кілька пов'язаних значень на
конкретному сервері.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

`items`
Масив пар ключів/значень, що зберігається.

`expiration`
Час зберігання об'єкта за промовчанням дорівнює 0. Для більш докладної
інформації дивіться [Час зберігання об'єкта](memcached.expiration.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Дивіться також

- [Memcached::setMulti()](memcached.setmulti.md) - Зберігає
кілька записів
- [Memcached::set()](memcached.set.md) - Зберігає запис
