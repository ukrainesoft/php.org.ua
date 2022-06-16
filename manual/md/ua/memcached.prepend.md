- [« Memcached::isPristine](memcached.ispristine.md)
- [Memcached::prependByKey »](memcached.prependbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Додає дані на початок існуючого запису

# Memcached::prepend

(PECL memcached \>u003d 0.1.0)

Memcached::prepend — Додає дані на початок існуючого запису

### Опис

public **Memcached::prepend**(string `$key`, string `$value`): bool

**Memcached::prepend()** додає рядок, переданий у параметрі
`value` на початок існуючого запису. Причина того, що `value`
приводиться до рядкового типу в тому, що додавання значення на початок
комплексних типів не визначено.

> **Примітка**:
>
> Якщо встановлено параметр **`Memcached::OPT_COMPRESSION`**, то
> виконання даного методу завершиться невдачею та буде виведено
> попередження, тому що додавання стислих даних до значення,
> яке можливе вже стисло, неможливо.

### Список параметрів

`key`
Ключ запису до якого відбувається додавання на початок.

`value`
Доданий рядок.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTSTORED`** якщо переданий ключ не існує.

### Приклади

**Приклад #1 Приклад використання **Memcached::prepend()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->setOption(Memcached::OPT_COMPRESSION, false);$m->set('foo', ' abc');$m->prepend('foo', 'def');var_dump($m->get('foo'));?> `

Результат виконання цього прикладу:

string(6) "defabc"

### Дивіться також

- [Memcached::prependByKey()](memcached.prependbykey.md) - Додає
дані на початок існуючого запису на вказаному сервері
- [Memcached::append()](memcached.append.md) - Додає дані до
існуючого запису
