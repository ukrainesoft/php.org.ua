- [«Mcrypt](ref.mcrypt.md)
- [mcrypt_decrypt »](function.mcrypt-decrypt.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Створити ініціалізуючий вектор (Initialization Vector або IV) з
випадкового джерела

# mcrypt_create_iv

(PHP 4, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_create_iv — Створити вектор, що ініціалізує (Initialization
Vector або IV) із випадкового джерела

**Увага**

Ця функція оголошена *УСТАРНІЙ* у PHP 7.1.0 та *Видалена* у PHP 7.2.0.

Є такі альтернативи:

- [random_bytes()](function.random-bytes.md)

### Опис

**mcrypt_create_iv**(int `$size`, int `$source` u003d MCRYPT_DEV_URANDOM):
string

Створює вектор, що ініціалізує, з випадкового джерела.

IV призначений тільки для завдання альтернативного початкового випадкового
числа для процедур шифрування IV не обов'язково має бути секретним,
хоч це й бажано. Ви навіть можете надіслати його разом зі своїм
зашифрованим текстом, не втрачаючи при цьому безпеки.

### Список параметрів

`size`
Розмір ІV.

`source`
Джерело IV. Джерело може бути задане однією з констант:
**`MCRYPT_RAND`** (системний генератор випадкових чисел),
**`MCRYPT_DEV_RANDOM`** (читає дані з `/dev/random`) або
**`MCRYPT_DEV_URANDOM`** (читає дані з `/dev/urandom`). До версії
5.3.0, на Windows підтримувався лише **`MCRYPT_RAND`**.

Зверніть увагу, що до PHP 5.6.0 значення за замовчуванням було
**`MCRYPT_DEV_RANDOM`**.

> **Примітка**: Зверніть увагу, що **`MCRYPT_DEV_RANDOM`** може
> блокуватись до появи достатньої ентропії.

### Значення, що повертаються

Повертає ініціалізуючий вектор або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mcrypt_create_iv()****

`<?php   $size u003d mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB); $iv u003d mcrypt_create_iv($size, MCRYPT_DEV_RANDOM);?> `

### Дивіться також

- [»http://www.ciphersbyritter.com/GLOSSARY.HTM#IV](http://www.ciphersbyritter.com/GLOSSARY.HTM#IV)
- [»http://www.quadibloc.com/crypto/co0409.htm](http://www.quadibloc.com/crypto/co0409.htm)
- Applied Cryptography by Schneier (ISBN 0-471-11709-9), розділ 9.3
- [random_bytes()](function.random-bytes.md) - Генерує
криптографічно безпечні псевдовипадкові байти
