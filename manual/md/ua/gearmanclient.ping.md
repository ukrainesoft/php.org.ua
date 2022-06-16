- [« GearmanClient::jobStatus](gearmanclient.jobstatus.md)
- [GearmanClient::removeOptions »](gearmanclient.removeoptions.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Надсилає дані на всі сервери, щоб перевірити, які з них
виведуть ці дані

# GearmanClient::ping

(No version information available, might only be in Git)

GearmanClient::ping — надсилає дані на всі сервери, щоб перевірити,
які з них виведуть ці дані

### Опис

public **GearmanClient::ping**(string `$workload`): bool

Посилає дані на всі сервери та визначає, які з них виведуть ці
дані у вихідний потік. Надсилані дані не обробляються.
Метод використовується для тестування та налагодження.

### Список параметрів

`workload`
Дані, які можна вивести у вихідний потік.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
