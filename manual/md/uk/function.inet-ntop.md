- [«http_response_code](function.http-response-code.md)
- [inet_pton »] (function.inet-pton.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Конвертує упаковану інтернет-адресу в формат, що читається

#inet_ntop

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

inet_ntop — Конвертує упаковану інтернет-адресу в формат, що читається

### Опис

**inet_ntop**(string `$ip`): string\|false

Ця функція конвертує 32-бітну IPv4 або 128-бітову IPv6-адресу (якщо
PHP був зібраний за допомогою IPv6) у відповідне рядкове
подання адреси.

### Список параметрів

`ip`
32-бітова IPv4-адреса або 128-бітова IPv6-адреса.

### Значення, що повертаються

Повертає строкове подання адреси або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **inet_ntop()****

`<?php$packed u003d chr(127) . chr(0) . chr(0) . chr(1);$expandedu003du003dinet_ntop($packed);/* Виведе: 127.0.0.1 */echo $expanded;$packed u003d str_repeat(chr(0), 15) . chr(1);$expandedu003du003dinet_ntop($packed);/* Виведе: ::1 */echo $expanded;?> `

### Дивіться також

- [long2ip()](function.long2ip.md) - Конвертує ціле число в
IPv4-адреса
- [ip2long()](function.ip2long.md) - Конвертує рядок, що містить
IPv4-адреса в ціле число
- [inet_pton()](function.inet-pton.md) - Конвертує читаний
IP-адреса в його упаковані in_addr
