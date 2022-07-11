- [« Memcached::decrementByKey](memcached.decrementbykey.md)
- [Memcached::deleteByKey »](memcached.deletebykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Видаляє запис

# Memcached::delete

(PECL memcached \>u003d 0.1.0)

Memcached::delete — Видаляє запис

### Опис

public **Memcached::delete**(string `$key`, int `$time` u003d 0): bool

**Memcached::delete()** видаляє запис із ключем `key` з сервера.
Параметр `time` задає період часу в секундах протягом якого (або
тимчасову мітку у форматі Unix до якої) сервер відхилятиме `add`
і `replace` запити клієнта за цим ключем. Протягом цього часу
запис міститься в чергу на видалення, що означає неможливість
отримання значення за допомогою команди `get`, команди `add` та `replace` по
даному ключу також будуть завершені невдачею (проте команда `set` буде
успішно виконано). Після закінчення цього часу, запис буде
остаточно видалено з пам'яті сервера. За замовчуванням параметр time
встановлений в 0 (що означає негайне видалення запису та наступні
операції із цим записом будуть успішно виконані).

### Список параметрів

`key`
Ключ запису, що видаляється.

`time`
Час протягом якого сервер очікує видалення запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTFOUND`** якщо заданий ключ не існує.

### Приклади

**Приклад #1 Приклад використання **Memcached::delete()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->delete('key1');?> `

### Дивіться також

- [Memcached::deleteByKey()](memcached.deletebykey.md) - Видаляє
запис із зазначеного сервера
- [Memcached::deleteMulti()](memcached.deletemulti.md) - Видаляє
кілька записів
