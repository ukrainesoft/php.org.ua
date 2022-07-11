- [« Memcached::delete](memcached.delete.md)
- [Memcached::deleteMulti »](memcached.deletemulti.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Видаляє запис із вказаного сервера

# Memcached::deleteByKey

(PECL memcached \>u003d 0.1.0)

Memcached::deleteByKey — Видалення запису з вказаного сервера

### Опис

public **Memcached::deleteByKey**(string `$server_key`, string `$key`,
int `$time` u003d 0): bool

**Memcached::deleteByKey()** працює аналогічно
[Memcached::delete()](memcached.delete.md), за винятком того, що
довільний `server_key` може бути використаний для визначення сервера
та встановлення значення з ключем `key` на конкретний сервер.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

`key`
Ключ запису, що видаляється.

`time`
Період часу, протягом якого сервер очікує видалення запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTFOUND`** якщо вказаний ключ не існує.

### Дивіться також

- [Memcached::delete()](memcached.delete.md) - Видаляє запис
- [Memcached::deleteMulti()](memcached.deletemulti.md) - Видаляє
кілька записів
- [Memcached::deleteMultiByKey()](memcached.deletemultibykey.md) -
Видаляє кілька записів із вказаного сервера
