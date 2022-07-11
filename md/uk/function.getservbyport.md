- [«getservbyname](function.getservbyname.md)
- [header_register_callback »](function.header-register-callback.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує інтернет-службу, що відповідає заданому порту та
протоколу

#getservbyport

(PHP 4, PHP 5, PHP 7, PHP 8)

getservbyport — Отримує інтернет-службу, що відповідає заданому
порту та протоколу

### Опис

**getservbyport**(int `$port`, string `$protocol`): string\|false

Функція **getservbyport()** повертає відповідну Інтернет-службу.
заданому у параметрі `port` порту для певного протоколу
`protocol` згідно `/etc/services`.

### Список параметрів

`port`
Номер порту.

`protocol`
Параметр 'protocol' може бути ''tcp'' or ''udp'' (у нижньому регістрі).

### Значення, що повертаються

Повертає ім'я Інтернет-служби у вигляді рядка або **`false`** у разі
виникнення помилки.

### Дивіться також

- [getservbyname()](function.getservbyname.md) - Отримує номер
порту, пов'язаного з інтернет-службою та протоколом
