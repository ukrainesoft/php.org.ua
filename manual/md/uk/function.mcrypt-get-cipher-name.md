- [«mcrypt_get_block_size](function.mcrypt-get-block-size.md)
- [mcrypt_get_iv_size »](function.mcrypt-get-iv-size.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Отримує ім'я вказаного шифру

# mcrypt_get_cipher_name

(PHP 4, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_get_cipher_name — Отримує ім'я вказаного шифру

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_get_cipher_name**(int `$cipher`): string

**mcrypt_get_cipher_name**(string `$cipher`): string

Функція **mcrypt_get_cipher_name()** використовується для отримання імені
вказаного шифру.

**mcrypt_get_cipher_name()** бере номер шифру як аргумент
(libmcrypt 2.2.x) або ім'я шифру (libmcrypt 2.4.x або вище) та повертає
ім'я шифру чи **`false`**, якщо шифр відсутній.

### Список параметрів

`cipher`
Одна з констант **`MCRYPT_ciphername`** або назва алгоритму у вигляді
рядки.

### Значення, що повертаються

Функція повертає ім'я шифру або ** false, якщо такого шифру немає.

### Приклади

**Приклад #1 Приклад використання **mcrypt_get_cipher_name()****

`<?php  $cipheru003du003dMCRYPT_TripleDES; echo mcrypt_get_cipher_name($cipher);?> `

Результат виконання цього прикладу:

3DES
