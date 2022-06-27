- [«mcrypt_get_iv_size](function.mcrypt-get-iv-size.md)
- [mcrypt_list_algorithms »](function.mcrypt-list-algorithms.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Отримати розмір ключа заданого шифру

# mcrypt_get_key_size

(PHP 4, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_get_key_size — Отримати розмір ключа заданого шифру

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_get_key_size**(int `$cipher`): int\|false

**mcrypt_get_key_size**(string `$cipher`, string `$mode`): int\|false

Перший прототип зібраний з бібліотекою libmcrypt 2.2.x, а другий
libmcrypt 2.4.x або 2.5.x.

**mcrypt_get_key_size()** використовується для отримання розміру ключа для
зазначеного шифру `cipher` (у поєднанні з режимом шифрування).

Правильніше використовуватиме
[mcrypt_enc_get_key_size()](function.mcrypt-enc-get-key-size.md), так
як вона повертає результат по існуючому дескриптору шифрування,
отриманого за допомогою
[mcrypt_module_open()](function.mcrypt-module-open.md).

### Список параметрів

`cipher`
Одна з констант **`MCRYPT_ciphername`** або назва алгоритму у вигляді
рядки.

`mode`
Одна з констант **`MCRYPT_MODE_modename`**, або одна з наступних
рядків: "ecb", "cbc", "cfb", "ofb", "nofb" та "stream".

### Значення, що повертаються

Повертає максимально допустиму довжину ключа в байтах або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mcrypt_get_key_size()****

`<?php    echo mcrypt_get_key_size('tripledes', 'ecb');?> `

Цей приклад демонструє використання функції, зібраної з libmcrypt
2.4.x та 2.5.x.

Результат виконання цього прикладу:

24

### Дивіться також

- [mcrypt_get_block_size()](function.mcrypt-get-block-size.md) -
Повертає розмір блоку для зазначеного шифру
- [mcrypt_enc_get_key_size()](function.mcrypt-enc-get-key-size.md) -
Повертає максимальну допустиму довжину ключа алгоритму
- [mcrypt_encrypt()](function.mcrypt-encrypt.md) - Шифрує текст з
заданими параметрами
