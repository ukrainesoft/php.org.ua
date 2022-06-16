- [«
sodium_crypto_stream_xchacha20_keygen](function.sodium-crypto-stream-xchacha20-keygen.md)
- [sodium_crypto_stream_xchacha20
»](function.sodium-crypto-stream-xchacha20.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрує повідомлення, використовуючи одноразовий номер та секретний ключ (без
аутентифікації)

# sodium_crypto_stream_xchacha20_xor

(PHP 8 \>u003d 8.1.0)

sodium_crypto_stream_xchacha20_xor — Шифрує повідомлення, використовуючи
одноразовий номер та секретний ключ (без аутентифікації)

### Опис

**sodium_crypto_stream_xchacha20_xor**(string `$message`, string
`$nonce`, string `$key`): string

Шифрує повідомлення `message`, використовуючи одноразовий номер `nonce` та
секретний ключ `key` (без автентифікації).

**Застереження**

Це шифрування не автентифікується і не запобігає атакам з вибраним
зашифрований текст. Обов'язково поєднайте зашифрований текст з
кодом аутентифікації повідомлення (Message Authentication Code), наприклад,
за допомогою функції
[sodium_crypto_aead_xchacha20poly1305_ietf_encrypt()](function.sodium-crypto-aead-xchacha20poly1305-ietf-encrypt.md)
або [sodium_crypto_auth()](function.sodium-crypto-auth.md).

### Список параметрів

`message`
Повідомлення для шифрування.

`nonce`
24-байтовий одноразовий номер.

`key`
Ключ, можливо, згенерований за допомогою функції
[sodium_crypto_stream_xchacha20_keygen()](function.sodium-crypto-stream-xchacha20-keygen.md).

### Значення, що повертаються

Зашифровані повідомлення.
