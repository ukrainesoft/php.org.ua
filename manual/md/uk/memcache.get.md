- [« Memcache::flush](memcache.flush.md)
- [Memcache::getExtendedStats »](memcache.getextendedstats.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Вийняти елемент із сервера

# Memcache::get

(PECL memcache \>u003d 0.2.0)

Memcache::get — Вийняти елемент із сервера

### Опис

**Memcache::get**(string `$key`, int `&$flags` u003d ?): string

**Memcache::get**(array `$keys`, array `&$flags` u003d ?): array

**Memcache::get()** повертає раніше збережений елемент із ключем `key`,
якщо він зараз існує на сервері.

Ви можете передати масив ключів у **Memcache::get()**, щоб отримати
масив елементів. Результуючий масив міститиме лише
існуючі пари ключ-значення.

### Список параметрів

`key`
Ключ або масив ключів для читання.

`flags`
Якщо встановлено, прапори, отримані разом зі значеннями, будуть записані в
цей параметр. Це точно ті прапори, що і передані, наприклад в
[Memcache::set()](memcache.set.md). Молодший байт значення
зарезервований для внутрішнього використання pecl/memcache (наприклад для
індикації стиснення або серіалізації статусу).

### Значення, що повертаються

Повертає значення, пов'язане з ключем `key` або масив знайдених пар
ключ-значення, якщо в key задано масив. Повертає **`false`** у
у разі виникнення помилки або якщо вказаний ключ `key` не був знайдений
або є порожнім масивом.

### Приклади

**Приклад #1 Приклад використання **Memcache::get()****

`<?php/* процедурне API */$memcache_obj u003d memcache_connect('memcache_host', 11211);$var u003d memcache_get($memcache_obj, 'om'е_не$ memcache_obj->connect('memcache_host', 11211);$var u003d $memcache_obj->get('some_key');/*Також в якості параметра ви можете то мати не буде включений цей ключ. */$memcache_obj u003d new Memcache;$memcache_obj->connect('memcache_host', 11211);$var u003d $memcache_obj->get(Array('some_key', 'second_key'));?> `
