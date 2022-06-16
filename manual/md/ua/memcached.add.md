- [«Memcached](class.memcached.md)
- [Memcached::addByKey »](memcached.addbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Додає елемент із новим ключем

# Memcached::add

(PECL memcached \>u003d 0.1.0)

Memcached::add — Додає елемент із новим ключем

### Опис

public **Memcached::add**(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$expiration` u003d ?): bool

Метод **Memcached::add()** схожий
[Memcached::set()](memcached.set.md), але операція додавання
завершиться помилкою, якщо ключ `key` вже існує на сервері.

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
**`Memcached::RES_NOTSTORED`**, якщо переданий ключ уже існує.

### Дивіться також

- [Memcached::addByKey()](memcached.addbykey.md) - Додає новий
елемент на заданий сервер
- [Memcached::set()](memcached.set.md) - Зберігає запис
- [Memcached::replace()](memcached.replace.md) - Замінює
існуючий запис із зазначеним ключем
