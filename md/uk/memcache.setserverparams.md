- [«
Memcache::setCompressThreshold](memcache.setcompressthreshold.md)
- [Функції Memcache »](ref.memcache.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Змінює параметри сервера та статус під час виконання

# Memcache::setServerParams

(PECL memcache \>u003d 2.1.0)

Memcache::setServerParams — Змінює параметри сервера та статус під час
виконання

### Опис

**Memcache::setServerParams**(
string `$host`,
int `$port` u003d 11211,
int `$timeout` u003d ?,
int `$retry_interval` u003d **`false`**,
bool `$status` u003d ?,
[callable](language.types.callable.md) `$failure_callback` u003d ?
): bool

**Memcache::setServerParams()** змінює параметри сервера під час
виконання. Ви також можете використати функцію
**memcache_set_server_params()**.

> **Примітка**:
>
> Ця функція була додана до Memcache версії 2.1.0.

### Список параметрів

`host`
Вказує на хост, на якому memcached прослуховує з'єднання.

`port`
Вказує на порт, на якому memcached прослуховує з'єднання.

`timeout`
Значення в секундах, яке використовуватиметься для підключення до
домену. Подумайте двічі, перш ніж змінювати значення за замовчуванням.
секунду - ви можете втратити всі переваги кешування, якщо ваше
з'єднання надто повільне.

`retry_interval`
Керує частотою перевірки доступності сервера, що відмовив,
15 секунд. Якщо встановити значення "-1", то спроб перевірити
доступність сервера не буде. Ні цей параметр, ні
параметр `persistent` не впливає, якщо модуль
завантажений динамічно через функцію [dl()](function.dl.md).

`status`
Визначає, чи сервер позначений прапором як "онлайн". Встановлення
цього параметра в **`false`** та `retry_interval` у -1 дозволить зберегти
сервер у пулі, але не використовувати його в алгоритмі розподілу ключів.
Запит на цей сервер або запустить механізм забезпечення
відмови стійкості, або відразу ж перерветься з помилкою, залежно від
налаштування `memcache.allow_failover`. За умовчанням одно **`true`**, що
означає, що сервер активний та готовий приймати запити.

`failure_callback`
Дозволяє користувачеві задати callback-функцію, яка запуститься в
у разі будь-якої помилки. Ця функція буде викликана раніше, ніж буде
запущено механізм забезпечення відмовостійкості. Функція приймає два
параметра - ім'я хоста і порт сервера, що відмовив.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::setServerParams()****

`<?phpfunction _callback_memcache_failure($host, $port) {    print "невдале підключення memcache - '$host:$port'";}/* об'єктно-орієнтоване API */  режим$memcache->addServer('memcache_host', 11211, false, 1, 1, -1, false); '_callback_memcache_failure');/* процедурное API */$memcache_obj u003d memcache_connect('memcache_host', 11211);memcache_set_server_params($memcache_obj, 'memcache_host', 11211, 1, 15, true, '_callback_memcache_failure');?> `

### Дивіться також

- [Memcache::addServer()](memcache.addserver.md) - Додає сервер
memcached в пул з'єднань
- [Memcache::getServerStatus()](memcache.getserverstatus.md) -
Повертає статус сервера
