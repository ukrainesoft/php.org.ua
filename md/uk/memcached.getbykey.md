- [« Memcached::getAllKeys](memcached.getallkeys.md)
- [Memcached::getDelayed »](memcached.getdelayed.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує запис із певного сервера

# Memcached::getByKey

(PECL memcached \>u003d 0.1.0)

Memcached::getByKey — Отримує запис із певного сервера

### Опис

public **Memcached::getByKey**(
string `$server_key`,
string `$key`,
[callable](language.types.callable.md) `$cache_cb` u003d ?,
int `$flags` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Memcached::getByKey()** працює аналогічно
[Memcached::get()](memcached.get.md), за винятком того, що
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
Ключ отриманого запису.

`cache_cb`
Callback-функція для читання, що кешується, або **`null`**

`flags`
Прапори визначають повертається результат. Якщо містить
**`Memcached::GET_EXTENDED`**, то буде повернуто токен CAS.

### Значення, що повертаються

Повертає значення, що зберігається в кеші або **`false`** в іншому випадку.
Метод [Memcached::getResultCode()](memcached.getresultcode.md)
повертає **`Memcached::RES_NOTFOUND`** якщо переданий ключ не
існує.

### Список змін

| Версія | Опис |
|----------------------|-------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| PECL memcached 3.0.0 | Видалено параметр `&cas_token`. Замість нього доданий параметр `flags`, в який можна передати значення **`Memcached::GET_EXTENDED`** для того, щоб повернуто токен CAS. |

### Дивіться також

- [Memcached::get()](memcached.get.md) - Отримання запису
- [Memcached::getMulti()](memcached.getmulti.md) - Отримує
кілька записів
- [Memcached::getDelayed()](memcached.getdelayed.md) - Запитує
кілька записів
