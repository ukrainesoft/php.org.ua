- [« Memcached::getMulti](memcached.getmulti.md)
- [Memcached::getOption »](memcached.getoption.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує кілька записів із вказаного сервера

# Memcached::getMultiByKey

(PECL memcached \>u003d 0.1.0)

Memcached::getMultiByKey — Отримує кілька записів із зазначеного
сервера

### Опис

public **Memcached::getMultiByKey**(string `$server_key`, array `$keys`,
int `$flags` u003d ?): array\|false

**Memcached::getMultiByKey()** працює аналогічно
[Memcached::getMulti()](memcached.getmulti.md), за винятком того,
що довільний `server_key` може бути використаний для визначення
сервера та встановлення значення з ключем `key` на конкретний сервер.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

`keys`
Масив із ключами для отримання записів.

`flags`
Прапори для отримання записів.

### Значення, що повертаються

Повертає масив знайдених записів або **`false`** у разі
виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Список змін

| Версія | Опис |
|----------------------|-------------------------- -------------------------------------------------- --------------------------------|
| PECL memcached 3.0.0 | Видалено параметр `&cas_tokens`. Додано константу **`Memcached::GET_EXTENDED`** для повернення токенів CAS. |

### Дивіться також

- [Memcached::getMulti()](memcached.getmulti.md) - Отримує
кілька записів
- [Memcached::get()](memcached.get.md) - Отримання запису
- [Memcached::getDelayed()](memcached.getdelayed.md) - Запитує
кілька записів
