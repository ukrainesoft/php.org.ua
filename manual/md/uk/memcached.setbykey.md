- [« Memcached::set](memcached.set.md)
- [Memcached::setMulti »](memcached.setmulti.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Зберігає запис на вказаному сервері

# Memcached::setByKey

(PECL memcached \>u003d 0.1.0)

Memcached::setByKey — Зберігає запис на вказаному сервері

### Опис

public **Memcached::setByKey**(
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

**Memcached::setByKey()** працює аналогічно
[Memcached::set()](memcached.set.md), за винятком того, що
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
у разі виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Приклади

**Приклад #1 Приклад використання **Memcached::setByKey()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);/* Зберігання блоків IP адресів на певному сервері */$m->setByKey('api' -ip:169.254.253.252', 1);$m->setByKey('api-cache', 'block-ip:169.127.127.202', 1);?> `

### Дивіться також

- [Memcached::set()](memcached.set.md) - Зберігає запис
