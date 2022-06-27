- [«Memcache::increment](memcache.increment.md)
- [Memcache::replace »](memcache.replace.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Відкриває постійне з'єднання з сервером memcached

# Memcache::pconnect

(PECL memcache \>u003d 0.4.0)

Memcache::pconnect — Відкриває постійне з'єднання із сервером
memcached

### Опис

**Memcache::pconnect**(string `$host`, int `$port` u003d ?, int `$timeout` u003d
?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Memcache::pconnect()** аналогічна
[Memcache::connect()](memcache.connect.md) з тією різницею, що
з'єднання встановлюється незмінним. Це з'єднання не закривається
після завершення виконання скрипту та функцією
[Memcache::close()](memcache.close.md). Ви також можете використати
функцію **memcache_pconnect()**.

### Список параметрів

`host`
Вказує на хост, на якому memcached прослуховує з'єднання. Цей
параметр також може вказувати на інший транспорт, такий як
`unix:///path/to/memcached.sock`, для використання сокетів домену UNIX,
у цьому випадку `port` повинен встановлений у `0`.

`port`
Вказує на порт, на якому memcached прослуховує з'єднання.
Встановіть цей параметр на `0`, коли використовуються сокети домену UNIX.

`timeout`
Значення в секундах, яке використовуватиметься для підключення до
домену. Подумайте двічі, перш ніж змінювати значення за замовчуванням.
секунду - ви можете втратити всі переваги кешування, якщо ваше
з'єднання надто повільне.

### Значення, що повертаються

Повертає об'єкт Memcache або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::pconnect()****

`<?php/* процедурне API */$memcache_obj u003d memcache_pconnect('memcache_host', 11211);/* об'єктно-орієнтоване API */$memcache_obj u003d new| > `

### Дивіться також

- [Memcache::connect()](memcache.connect.md) - Відкриває з'єднання
з сервером memcached
