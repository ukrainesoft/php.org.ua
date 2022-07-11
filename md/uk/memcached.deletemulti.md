- [« Memcached::deleteByKey](memcached.deletebykey.md)
- [Memcached::deleteMultiByKey »](memcached.deletemultibykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Видаляє кілька записів

# Memcached::deleteMulti

(PECL memcached \>u003d 2.0.0)

Memcached::deleteMulti — Видаляє кілька записів

### Опис

public **Memcached::deleteMulti**(array `$keys`, int `$time` u003d 0): array

**Memcached::deleteMulti()** видаляє записи, передані в масиві
`keys`, із сервера. Параметр `time` задає період часу в секундах
протягом якого (або тимчасову мітку у форматі Unix до якої) сервер
буде відхиляти `add` та `replace` запити клієнта по даному ключу. В
протягом цього часу, запис міститься в чергу на видалення, що
означає неможливість набуття значення за допомогою команди `get`,
команди `add` та `replace` за цим ключем також будуть завершені
невдачею (проте команда `set` буде успішно виконана). Після закінчення
цього часу запис буде остаточно видалено з пам'яті сервера. за
замовчуванням параметр `time` встановлено в 0 (що означає негайне
видалення запису та подальші операції з цим записом будуть успішними
виконані).

### Список параметрів

`keys`
Ключ запису, що видаляється.

`time`
Час протягом якого сервер очікує видалення запису.

### Значення, що повертаються

Повертає масив з індексами `keys` та значеннями, що позначають вдало
чи ні завершилася операція. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_NOTFOUND`** якщо заданий ключ не існує.

### Дивіться також

- [Memcached::delete()](memcached.delete.md) - Видаляє запис
- [Memcached::deleteByKey()](memcached.deletebykey.md) - Видаляє
запис із зазначеного сервера
- [Memcached::deleteMultiByKey()](memcached.deletemultibykey.md) -
Видаляє кілька записів із вказаного сервера
