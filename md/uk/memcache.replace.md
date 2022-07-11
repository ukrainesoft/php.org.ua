- [« Memcache::pconnect](memcache.pconnect.md)
- [Memcache::set »](memcache.set.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Замінити значення наявного елемента

# Memcache::replace

(PECL memcache \>u003d 0.2.0)

Memcache::replace — Замінити значення наявного елемента

### Опис

**Memcache::replace**(
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`,
int `$flag` u003d ?,
int `$expire` u003d ?
): bool

**Memcache::replace()** використовується для заміни значення існуючого
елемента з цим ключем `key`. У випадку, якщо елемент із таким ключем не
знайдено, **Memcache::replace()** повертає **`false`**. В інших
випадках **Memcache::replace()** працює аналогічно
[Memcache::set()](memcache.set.md). Ви також можете використати
функцію **memcache_replace()**.

### Список параметрів

`key`
Ключ, пов'язаний із елементом.

`var`
Значення, що зберігається. Рядки та числа зберігаються як є, інші
типи серіалізуються.

`flag`
Використовуйте **`MEMCACHE_COMPRESSED`** для збереження елемента стиснутим
(Використовується zlib).

`expire`
Термін життя елемент. Якщо дорівнює нулю, термін життя ніколи не спливе. Ви
також можна використовувати тимчасову мітку Unix, або число секунд,
починаючи з поточного часу, однак у цьому випадку кількість секунд не
може бути більше 2592000 (30 днів).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcache::replace()****

` <?php$memcache_obj u003d memcache_connect('memcache_host', 11211);/* процедурне API */memcache_replace($memcache_obj, test_key', fal'є;   memcache_obj->replace("test_key", "some variable", false, 30);?> `

### Дивіться також

- [Memcache::set()](memcache.set.md) - Зберегти дані на сервері
- [Memcache::add()](memcache.add.md) - Додати елемент із зазначеним
ключем
