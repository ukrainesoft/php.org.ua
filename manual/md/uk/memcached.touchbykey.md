- [« Memcached::touch](memcached.touch.md)
- [MemcachedException »](class.memcachedexception.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Встановлює новий термін зберігання для запису на вказаному сервері

# Memcached::touchByKey

(PECL memcached \>u003d 2.0.0)

Memcached::touchByKey — Встановлює новий термін зберігання для запису на
вказаному сервері

### Опис

public **Memcached::touchByKey**(string `$server_key`, string `$key`,
int `$expiration`): bool

**Memcached::touchByKey()** працює аналогічно
[Memcached::touch()](memcached.touch.md), за винятком того, що
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
Ключ, під яким зберігається значення.

`expiration`
Час зберігання об'єкта за промовчанням дорівнює 0. Для більш докладної
інформації дивіться [Час зберігання об'єкта](memcached.expiration.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Дивіться також

- [Memcached::touch()](memcached.touch.md) - Встановлює новий
термін зберігання для запису
