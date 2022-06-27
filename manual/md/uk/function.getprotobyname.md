- [«getmxrr](function.getmxrr.md)
- [getprotobynumber »](function.getprotobynumber.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує номер протоколу на ім'я

# getprotobyname

(PHP 4, PHP 5, PHP 7, PHP 8)

getprotobyname — Отримує номер протоколу на ім'я

### Опис

**getprotobyname**(string `$protocol`): int\|false

Функція **getprotobyname()** повертає номер протоколу на ім'я,
вказаному в параметрі `protocol` згідно `/etc/protocols`.

### Список параметрів

`protocol`
Ім'я протоколу.

### Значення, що повертаються

Повертає номер протоколу або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **getprotobyname()****

` <?php$protocol u003d 'tcp';$get_prot u003d getprotobyname($protocol);if ($get_prot u003du003du003d FALSE) {   echo 'Протокол не найдено';} else $get_prot;}?> `

### Дивіться також

- [getprotobynumber()](function.getprotobynumber.md) - Отримує ім'я
протоколу за номером
