- [« Memcached::replace](memcached.replace.md)
- [Memcached::resetServerList »](memcached.resetserverlist.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Замінює існуючий запис із заданим ключем на вказаному сервері

# Memcached::replaceByKey

(PECL memcached \>u003d 0.1.0)

Memcached::replaceByKey — Замінює існуючий запис із заданим ключем
на вказаному сервері

### Опис

public **Memcached::replaceByKey**(
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

**Memcached::replaceByKey()** працює аналогічно
[Memcached::replace()](memcached.replace.md), за винятком того, що
довільний `server_key` може бути використаний для визначення сервера
та встановлення значення з ключем `key` на конкретний сервер. Це корисно
коли необхідно тримати кілька пов'язаних значень на конкретному
сервер.

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
Значення, що зберігається.

`expiration`
Час зберігання об'єкта за промовчанням дорівнює 0. Для більш докладної
інформації дивіться [Час зберігання об'єкта](memcached.expiration.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTSTORED`** якщо вказаного ключа немає.

### Дивіться також

- [Memcached::replace()](memcached.replace.md) - Замінює
існуючий запис із зазначеним ключем
- [Memcached::set()](memcached.set.md) - Зберігає запис
- [Memcached::add()](memcached.add.md) - Додає елемент із новим
ключем
