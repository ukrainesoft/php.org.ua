- [«Memcached::quit](memcached.quit.md)
- [Memcached::replaceByKey »](memcached.replacebykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Замінює існуючий запис із зазначеним ключем

# Memcached::replace

(PECL memcached \>u003d 0.1.0)

Memcached::replace — Замінює існуючий запис із зазначеним ключем

### Опис

public **Memcached::replace**(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$expiration` u003d ?): bool

**Memcached::replace()** схожий на метод
[Memcached::set()](memcached.set.md), але операція завершиться невдачею
якщо ключ `key` відсутній на сервері.

### Список параметрів

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

- [Memcached::replaceByKey()](memcached.replacebykey.md) - Замінює
існуючий запис із заданим ключем на вказаному сервері
- [Memcached::set()](memcached.set.md) - Зберігає запис
- [Memcached::add()](memcached.add.md) - Додає елемент із новим
ключем
