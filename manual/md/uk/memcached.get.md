- [« Memcached::flush](memcached.flush.md)
- [Memcached::getAllKeys »](memcached.getallkeys.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримання запису

# Memcached::get

(PECL memcached \>u003d 0.1.0)

Memcached::get — Отримання запису

### Опис

public **Memcached::get**(string `$key`,
[callable](language.types.callable.md) `$cache_cb` u003d ?, int `$flags` u003d
?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Memcached::get()** повертає запис, який раніше був збережений під
ключем `key`. Якщо елемент не знайдено і для параметра `flags` встановлено
**`Memcached::GET_EXTENDED`**, то вона також поверне значення токена
CAS для цього запису. Зверніться до документації щодо
[Memcached::cas()](memcached.cas.md) для отримання інформації про
використання CAS токена. [Читання за допомогою кешуючих
callback-функцій](memcached.callbacks.md) може бути використано з
за допомогою параметра `cache_cb`.

### Список параметрів

`key`
Ключ отриманого запису.

`cache_cb`
Функція зворотного виклику для читання, що кешується, або **`null`**.

`flags`
Прапори, що визначають результат, що повертається. Якщо задана константа
**`Memcached::GET_EXTENDED`**, функція також поверне токен CAS.

### Значення, що повертаються

Повертає значення, що зберігається в кеші або **`false`** в іншому випадку.
Якщо `flags` встановлена константа, **`Memcached::GET_EXTENDED`**,
повертається масив, що містить значення і токен CAS замість
єдиного значення. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTFOUND`** якщо переданий ключ не існує.

### Список змін

| Версія | Опис |
|----------------------|-------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| PECL memcached 3.0.0 | Видалено параметр `&cas_token`. Замість нього доданий параметр `flags`, в який можна передати значення **`Memcached::GET_EXTENDED`** для того, щоб повернуто токен CAS. |

### Приклади

**Приклад #1 Приклад використання **Memcached::get()** #1**

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->set('foo', 100);var_dump($m->get('foo') );?> `

Результат виконання цього прикладу:

int(100)

**Приклад #2 Приклад використання **Memcached::get()** #2**

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);if (!($ip u003d $m->get('ip_block'))) {    if ($m- >getResultCode() u003du003d Memcached::RES_NOTFOUND) {        $ip u003d array(); $m->set('ip_block', $ip); } else {         /* log error */        /* ...       */    }}?> `

### Дивіться також

- [Memcached::getByKey()](memcached.getbykey.md) - Отримує запис з
певного сервера
- [Memcached::getMulti()](memcached.getmulti.md) - Отримує
кілька записів
- [Memcached::getDelayed()](memcached.getdelayed.md) - Запитує
кілька записів
