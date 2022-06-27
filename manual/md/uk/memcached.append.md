- [« Memcached::addServers](memcached.addservers.md)
- [Memcached::appendByKey »](memcached.appendbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Додає дані до існуючого запису

# Memcached::append

(PECL memcached \>u003d 0.1.0)

Memcached::append — Додає дані до наявного запису

### Опис

public **Memcached::append**(string `$key`, string `$value`): bool

**Memcached::append()** додає переданий у `value` рядок до
існуючого запису. Причина того, що `value` наводиться до рядка в
те, що додавання змішаних типів не визначено.

> **Примітка**:
>
> Якщо параметр **`Memcached::OPT_COMPRESSION`** встановлено, то операція
> буде завершено помилкою і буде виведено попередження, тому що
> Додавання стислих даних до запису, який вже стиснутий, неможливо.

### Список параметрів

`key`
Ключ, під яким зберігається значення.

`value`
Рядок для додавання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTSTORED`**, якщо переданий ключ не існує.

### Приклади

**Приклад #1 Приклад використання **Memcached::append()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->setOption(Memcached::OPT_COMPRESSION, false);$m->set('foo', ' abc');$m->append('foo', 'def');var_dump($m->get('foo'));?> `

Результат виконання цього прикладу:

string(6) "abcdef"

### Дивіться також

- [Memcached::appendByKey()](memcached.appendbykey.md) - Додає
дані до існуючого запису на заданому сервері
- [Memcached::prepend()](memcached.prepend.md) - Додає дані до
початок існуючого запису
