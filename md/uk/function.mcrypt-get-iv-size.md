- [« mcrypt_get_cipher_name](function.mcrypt-get-cipher-name.md)
- [mcrypt_get_key_size »](function.mcrypt-get-key-size.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає розмір вектора, що ініціалізує, для відповідної
комбінації шифру та режиму

# mcrypt_get_iv_size

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_get_iv_size — Повертає розмір вектора, що ініціалізує.
відповідної комбінації шифру та режиму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_get_iv_size**(string `$cipher`, string `$mode`): int

Повертає розмір вектора, що ініціалізує, для відповідної заданої
комбінації шифру `cipher` та режиму `mode`.

Правильніше використовуватиме
[mcrypt_enc_get_iv_size()](function.mcrypt-enc-get-iv-size.md), так
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

Ініціалізуючий вектор ігнорується в режимі ECB, тому що він там не
потрібний. Вам знадобиться той самий ініціалізуючий вектор як для
шифрування, так і для дешифрування, інакше все ваше шифрування перетвориться
у гарбуз.

### Значення, що повертаються

Повертає розмір вектора, що ініціалізує, в байтах. В разі
виникнення помилки буде повернено **`false`**. Якщо при заданій
комбінації шифру та режиму ініціалізуючий вектор не потрібен, буде
повернено нуль.

### Приклади

**Приклад #1 Приклад використання **mcrypt_get_iv_size()****

`<?php   echo mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB) . "
";   echo mcrypt_get_iv_size('des', 'ecb') . "
";?> `

### Дивіться також

- [mcrypt_get_block_size()](function.mcrypt-get-block-size.md) -
Повертає розмір блоку для зазначеного шифру
- [mcrypt_enc_get_iv_size()](function.mcrypt-enc-get-iv-size.md) -
Повертає розмір вектора, що ініціалізує, для алгоритму
- [mcrypt_create_iv()](function.mcrypt-create-iv.md) - Створити
ініціалізуючий вектор (Initialization Vector або IV) з випадкового
джерела
