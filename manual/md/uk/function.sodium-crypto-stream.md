- [« sodium_crypto_stream_xor](function.sodium-crypto-stream-xor.md)
- [sodium_hex2bin »](function.sodium-hex2bin.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Створює детерміновану послідовність байтів із початкового
числа

# sodium_crypto_stream

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_stream — Створює детерміновану послідовність
байтів із початкового числа

### Опис

**sodium_crypto_stream**(int `$length`, string `$nonce`, string `$key`):
string

Створює детерміновану послідовність байтів із початкового числа
з використанням потокового шифру XSalsa20.

### Список параметрів

`length`
Кількість байтів, що повертаються.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

Рядок псевдовипадкових байтів.
