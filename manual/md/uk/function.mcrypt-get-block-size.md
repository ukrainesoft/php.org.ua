- [«mcrypt_generic](function.mcrypt-generic.md)
- [mcrypt_get_cipher_name »](function.mcrypt-get-cipher-name.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає розмір блоку для зазначеного шифру

# mcrypt_get_block_size

(PHP 4, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_get_block_size — Повертає розмір блоку для зазначеного шифру

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_get_block_size**(int `$cipher`): int\|false

**mcrypt_get_block_size**(string `$cipher`, string `$mode`): int\|false

Перший прототип зібраний з бібліотекою libmcrypt 2.2.x, а другий
libmcrypt 2.4.x або 2.5.x.

**mcrypt_get_block_size()** використовується для отримання розміру блоку
зазначеного `cipher` (у поєднанні з режимом шифрування).

Правильніше використовувати
[mcrypt_enc_get_block_size()](function.mcrypt-enc-get-block-size.md),
яка використовує ресурс, що повертається
[mcrypt_module_open()](function.mcrypt-module-open.md).

### Список параметрів

`cipher`
Одна з констант **`MCRYPT_ciphername`** або назва алгоритму у вигляді
рядки.

`mode`
Одна з констант **`MCRYPT_MODE_modename`**, або одна з наступних
рядків: "ecb", "cbc", "cfb", "ofb", "nofb" та "stream".

### Значення, що повертаються

Повертає розмір блоку алгоритму в байтах або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mcrypt_get_block_size()****

Цей приклад демонструє використання функції, зібраної з libmcrypt
2.4.x та 2.5.x.

`<?phpecho mcrypt_get_block_size('tripledes', 'ecb'); // 8?> `

### Дивіться також

- [mcrypt_get_key_size()](function.mcrypt-get-key-size.md) -
Отримати розмір ключа заданого шифру
- [mcrypt_enc_get_block_size()](function.mcrypt-enc-get-block-size.md) -
Повертає розмір блоку алгоритму
- [mcrypt_encrypt()](function.mcrypt-encrypt.md) - Шифрує текст з
заданими параметрами
