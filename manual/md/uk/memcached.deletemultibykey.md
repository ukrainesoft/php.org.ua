- [« Memcached::deleteMulti](memcached.deletemulti.md)
- [Memcached::fetch »](memcached.fetch.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Видаляє кілька записів із вказаного сервера

# Memcached::deleteMultiByKey

(PECL memcached \>u003d 2.0.0)

Memcached::deleteMultiByKey — Видаляє кілька записів із зазначеного
сервера

### Опис

public **Memcached::deleteMultiByKey**(string `$server_key`, array
`$keys`, int `$time` u003d 0): bool

**Memcached::deleteMultiByKey()** працює аналогічно
[Memcached::deleteMulti()](memcached.deletemulti.md), крім
того, що довільний `server_key` може бути використаний для
визначення сервера та встановлення значення з ключем `keys` на конкретний
сервер.

### Список параметрів

`server_key`
Ключ, що ідентифікує сервер, де зберігається значення. Замість
хешування за ключом самого елемента, ми хешуємо за ключом сервера при
Вибір сервера, що підключається, memcached. Цей підхід дозволяє
групувати пов'язані елементи разом на одному сервері, що покращує
ефективність групових операцій.

`keys`
Ключ запису, що видаляється.

`time`
Час протягом якого сервер очікує видалення запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTFOUND`** якщо заданий ключ не існує.

### Дивіться також

- [Memcached::delete()](memcached.delete.md) - Видаляє запис
- [Memcached::deleteByKey()](memcached.deletebykey.md) - Видаляє
запис із зазначеного сервера
- [Memcached::deleteMulti()](memcached.deletemulti.md) - Видаляє
кілька записів
