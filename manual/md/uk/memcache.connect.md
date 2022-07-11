- [« Memcache::close](memcache.close.md)
- [Memcache::decrement »](memcache.decrement.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Відкриває з'єднання з сервером memcached

# Memcache::connect

(PECL memcache \>u003d 0.2.0)

Memcache::connect — Відкриває з'єднання з сервером memcached

### Опис

**Memcache::connect**(string `$host`, int `$port` u003d ?, int `$timeout` u003d
?): bool

**Memcache::connect()** встановлює з'єднання з сервером memcached.
З'єднання, відкрите за допомогою **Memcache::connect()**, автоматично
закривається після закінчення виконання скрипта. Також ви можете закрити
з'єднання за допомогою [Memcache::close()](memcache.close.md). Також ви
Ви можете використовувати функцію **memcache_connect()**.

### Список параметрів

`host`
Визначає хост, на якому memcached очікує підключення. Цей параметр
також може задавати інший транспорт, наприклад
`unix:///path/to/memcached.sock` для використання сокетів Unix. У такому
у випадку, `port` повинен бути заданий як `0`.

`port`
Визначає порт, на якому слухає memcached. Встановіть цей параметр
рівним `0`, якщо використовуєте сокети Unix.

Зверніть увагу: `port`, якщо не заданий, за замовчуванням дорівнюватиме
[memcache.default_port](memcache.ini.md#ini.memcache.default-port). за
цій причині є сенс вказати порт явно при виклику методу.

`timeout`
Значення в секундах, яке буде використане для підключення до
демону. Двічі подумайте, перш ніж змінити значення за замовчуванням.
секунди - ви можете втратити всі переваги від кешування, якщо ваше
з'єднання дуже повільне.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::connect()****

`<?php/* процедурне API */$memcache_obj u003d memcache_connect('memcache_host', 11211);/* об'єктно-орієнтоване API */$memcache u003d new Memca > `

### Примітки

**Увага**

Якщо порт `port` не заданий, цей метод використовує значення за промовчанням,
задане в ini-налаштуванні
[memcache.default_port](memcache.ini.md#ini.memcache.default-port).
Якщо це значення зміниться десь у вашому додатку – це може
призвести до несподіваних результатів. З цієї причини має сенс завжди
вказати порт явно під час виклику методу.

### Дивіться також

- [Memcache::pconnect()](memcache.pconnect.md) - Відкриває
постійне з'єднання з сервером memcached
- [Memcache::close()](memcache.close.md) - Закрити з'єднання з
сервером memcached
