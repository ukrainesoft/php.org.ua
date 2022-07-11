- [« Memcache::getVersion](memcache.getversion.md)
- [Memcache::pconnect »](memcache.pconnect.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Збільшити значення елемента

# Memcache::increment

(PECL memcache \>u003d 0.2.0)

Memcache::increment — Збільшити значення елемента

### Опис

**Memcache::increment**(string `$key`, int `$value` u003d 1): int\|false

**Memcache::increment()** збільшує значення елемента на величину
`value`. Якщо елемент із зазначеним ключем `key` не числовий і не може
бути приведений до числа, його значення буде встановлено в `value`.
**Memcache::increment()** *не* створює елемент, якщо він до цього не
існував.

> **Примітка**:
>
> Не використовуйте **Memcache::increment()** з елементами, які були
> збережені за допомогою стиснення, тому що відповідний виклик
> [Memcache::get()](memcache.get.md) обернеться невдачею.

Також можна використовувати функцію **memcache_increment()**.

### Список параметрів

`key`
Ключ елемент.

`value`
Збільшення значення величину `value`.

### Значення, що повертаються

У разі успішного виконання повертає нове значення елемента або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::increment()****

`<?php/* процедурне API */$memcache_obj u003d memcache_connect('memcache_host', 11211);/* інкрементувати лічильник на 2 */$current_value <m'ca API */$memcache_obj u003d new Memcache;$memcache_obj->connect('memcache_host', 11211);/* інкрементувати лічильник на 3 */$current_value u003d $memca

### Дивіться також

- [Memcache::decrement()](memcache.decrement.md) - Декрементувати
значення елемента
- [Memcache::replace()](memcache.replace.md) - Замінити значення
існуючого елемента
