- [« Memcache::addServer](memcache.addserver.md)
- [Memcache::connect »](memcache.connect.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Закрити з'єднання з сервером memcached

# Memcache::close

(PECL memcache \>u003d 0.4.0)

Memcache::close — Закрити з'єднання з сервером memcached

### Опис

**Memcache::close**(): bool

**Memcache::close()** закриває з'єднання з сервером memcached. Ця
функція не закриває постійне з'єднання, яке закривається тільки
під час завершення роботи/перезапуску веб-сервера. ви також можете
використовувати функцію **memcache_close()**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::close()****

` <?php/* процедурне API */$memcache_obj u003d memcache_connect('memcache_host', 11211);/*зробити що-небудь тут...*/memcache_close($memcache_obj) u003d new Memcache;$memcache_obj->connect('memcache_host', 11211);/*зробити що-небудь тут...*/$memcache_obj->close();?> `

### Дивіться також

- [Memcache::connect()](memcache.connect.md) - Відкриває з'єднання
з сервером memcached
- [Memcache::pconnect()](memcache.pconnect.md) - Відкриває
постійне з'єднання з сервером memcached
