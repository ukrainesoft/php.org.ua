- [«Memcache](class.memcache.md)
- [Memcache::addServer »](memcache.addserver.md)

- [PHP Manual](index.md)
- [Memcache](class.memcache.md)
- Додати елемент із зазначеним ключем

# Memcache::add

(PECL memcache \>u003d 0.2.0)

Memcache::add — Додати елемент із зазначеним ключем

### Опис

**Memcache::add**(
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`,
int `$flag` u003d ?,
int `$expire` u003d ?
): bool

**Memcache::add()** записує елемент `var` із зазначеним ключем `key`
тільки якщо цей ключ ще не існує на сервері. Також ви можете
використовувати функцію **memcache_add()**.

### Список параметрів

`key`
Ключ, з яким пов'язаний елемент.

`var`
Змінна для збереження. Строкові та числові значення зберігаються як
є, інші типи серіалізуються.

`flag`
Використовуйте **`MEMCACHE_COMPRESSED`** для запису елемента зі стисненням
(Використовується zlib).

`expire`
Час життя елемент. Якщо дорівнює нулю, елемент ніколи не старіє.
Також можна використовувати мітку часу Unix або число секунд,
починаючи з поточного моменту, однак, у цьому випадку кількість секунд не може
бути більше 2592000 (30 днів).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Повертає **`false`**, якщо такий ключ уже
існує. В інших випадках поведінка **Memcache::add()** аналогічна
[Memcache::set()](memcache.set.md).

### Приклади

**Приклад #1 Приклад використання **Memcache::add()****

`<?php$memcache_obj u003d memcache_connect("localhost", 11211);/* процедурне API */memcache_add($memcache_obj, 'var_key', 'test'varіable', fal  memcache_obj->add('var_key', 'test variable', false, 30);?> `

### Дивіться також

- [Memcache::set()](memcache.set.md) - Зберегти дані на сервері
- [Memcache::replace()](memcache.replace.md) - Замінити значення
існуючого елемента
