- [« sodium_crypto_stream](function.sodium-crypto-stream.md)
- [sodium_increment »](function.sodium-increment.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- декодує рядок у шістнадцятковому поданні у бінарне

# sodium_hex2bin

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_hex2bin — Декодує рядок у шістнадцятковому поданні в
бінарне

### Опис

**sodium_hex2bin**(string `$string`, string `$ignore` u003d ""): string

Декодує рядок, закодований у шістнадцяткове подання в
бінарне.

Як і [sodium_bin2hex()](function.sodium-bin2hex.md), функція
**sodium_hex2bin()** стійка до атак по стороннім каналам
(side-channel attacks), на відміну функції
[hex2bin()](function.hex2bin.md).

### Список параметрів

`string`
Шістнадцяткове представлення даних.

`ignore`
Необов'язковий рядковий аргумент з символами, що ігноруються.

### Значення, що повертаються

Повертає двійкову виставу переданих в аргументі `string`
даних.
