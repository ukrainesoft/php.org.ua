- [« Memcache::connect](memcache.connect.md)
- [Memcache::delete »](memcache.delete.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- декрементувати значення елемента

# Memcache::decrement

(PECL memcache \>u003d 0.2.0)

Memcache::decrement — Декрементувати значення елемента

### Опис

**Memcache::decrement**(string `$key`, int `$value` u003d 1): int\|false

**Memcache::decrement()** зменшує значення елемента на величину
`value`. Аналогічно [Memcache::increment()](memcache.increment.md),
поточне значення елемента наводиться до числового і після цього з нього
віднімається `value`.

> **Примітка**:
>
> Нове значення елемента не може бути меншим за нуль.

> **Примітка**:
>
> Не використовуйте **Memcache::decrement()** з елементами, які були
> збережені за допомогою стиснення, тому що відповідний виклик
> [Memcache::get()](memcache.get.md) обернеться невдачею.

**Memcache::decrement()** *не* створює елемент, якщо він раніше не
існував. Також ви можете використати функцію
**memcache_decrement()**.

### Список параметрів

`key`
Ключ елемента, що декрементується.

`value`
Зменшення елемента на величину `value`.

### Значення, що повертаються

У разі успішного виконання повертає нове значення елемента або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::decrement()****

` <?php/* процедурне API */$memcache_obj u003d memcache_connect('memcache_host', 11211);/* декрементувати на 2 */$new_value u003d memcache_decret| */$memcache_obj u003d new Memcache;$memcache_obj->connect('memcache_host', 11211);/* декрементувати на 3 */$new_value u003d $memcache_obj->_deem'?

### Дивіться також

- [Memcache::increment()](memcache.increment.md) - Збільшити
значення елемента
- [Memcache::replace()](memcache.replace.md) - Замінити значення
існуючого елемента
