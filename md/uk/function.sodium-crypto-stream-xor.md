- [«
sodium_crypto_stream_xchacha20](function.sodium-crypto-stream-xchacha20.md)
- [sodium_crypto_stream »](function.sodium-crypto-stream.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрує повідомлення без автентифікації

# sodium_crypto_stream_xor

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_stream_xor — Шифрує повідомлення без автентифікації

### Опис

**sodium_crypto_stream_xor**(string `$message`, string `$nonce`, string
`$key`): string

Функція шифрує повідомлення за допомогою XSalsa20, але не надає
жодних гарантій зашифрованого тексту для відкритого тексту.

### Список параметрів

`message`
Повідомлення для шифрування

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

Зашифровані повідомлення.
