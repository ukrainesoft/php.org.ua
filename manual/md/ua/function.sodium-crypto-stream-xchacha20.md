- [«
sodium_crypto_stream_xchacha20_xor](function.sodium-crypto-stream-xchacha20-xor.md)
- [sodium_crypto_stream_xor »](function.sodium-crypto-stream-xor.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Розширює ключ та одноразовий номер у ключовий потік псевдовипадкових
байтів

# sodium_crypto_stream_xchacha20

(PHP 8 \>u003d 8.1.0)

sodium_crypto_stream_xchacha20 — Розширює ключ та одноразовий номер у
ключовий потік псевдовипадкових байтів

### Опис

**sodium_crypto_stream_xchacha20**(int `$length`, string `$nonce`,
string `$key`): string

Розширює ключ `key` та одноразовий номер `nonce` у ключовий потік
псевдовипадкових байтів.

### Список параметрів

`length`
Бажана кількість байтів.

`nonce`
24-байтовий одноразовий номер.

`key`
Ключ, можливо, згенерований за допомогою функції
[sodium_crypto_stream_xchacha20_keygen()](function.sodium-crypto-stream-xchacha20-keygen.md).

### Значення, що повертаються

Повертає псевдовипадковий потік, який можна використовувати функцією
[sodium_crypto_stream_xchacha20_xor()](function.sodium-crypto-stream-xchacha20-xor.md).
