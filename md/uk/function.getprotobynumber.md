- [«getprotobyname](function.getprotobyname.md)
- [getservbyname »](function.getservbyname.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує ім'я протоколу за номером

#getprotobynumber

(PHP 4, PHP 5, PHP 7, PHP 8)

getprotobynumber — Отримує ім'я протоколу за номером

### Опис

**getprotobynumber**(int `$protocol`): string\|false

Функція **getprotobynumber()** повертає ім'я протоколу за номером,
вказаному в параметрі `protocol` згідно `/etc/protocols`.

### Список параметрів

`protocol`
Номер протоколу.

### Значення, що повертаються

Повертає ім'я протоколу у вигляді рядка або **`false`** у разі
виникнення помилки.

### Дивіться також

- [getprotobyname()](function.getprotobyname.md) - Отримує номер
протоколу на ім'я
