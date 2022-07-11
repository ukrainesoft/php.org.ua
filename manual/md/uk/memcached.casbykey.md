- [«Memcached::cas](memcached.cas.md)
- [Memcached::\_\_construct »](memcached.construct.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Порівнює та встановлює значення для запису на конкретному сервері

# Memcached::casByKey

(PECL memcached \>u003d 0.1.0)

Memcached::casByKey — Порівнює та встановлює значення для запису на
конкретному сервері

### Опис

public **Memcached::casByKey**(
float `$cas_token`,
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

**Memcached::casByKey()** працює аналогічно методу
[Memcached::cas()](memcached.cas.md), за винятком того, що
довільний `server_key` може бути використаний для визначення сервера
та установки `key` на конкретний сервер. Це корисно, коли необхідно
тримати кілька пов'язаних значень конкретному сервері.

### Список параметрів

`cas_token`
Унікальне значення, пов'язане з наявним записом. Генерується
сервером memcache.

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
**`Memcached::RES_DATA_EXISTS`** якщо запис який ви намагаєтесь
зберегти було змінено з моменту останнього звернення.

### Дивіться також

- [Memcached::cas()](memcached.cas.md) - Порівнює та встановлює
значення для запису
