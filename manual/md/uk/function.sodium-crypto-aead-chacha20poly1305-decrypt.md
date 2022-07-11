- [«
sodium_crypto_aead_aes256gcm_keygen](function.sodium-crypto-aead-aes256gcm-keygen.md)
- [sodium_crypto_aead_chacha20poly1305_encrypt
»](function.sodium-crypto-aead-chacha20poly1305-encrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевіряє, потім розшифровує за допомогою ChaCha20-Poly1305

# sodium_crypto_aead_chacha20poly1305_decrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_chacha20poly1305_decrypt — Перевіряє, потім
розшифровує за допомогою ChaCha20-Poly1305

### Опис

**sodium_crypto_aead_chacha20poly1305_decrypt**(
string `$ciphertext`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string\|false

Перевіряє, потім розшифровує за допомогою ChaCha20-Poly1305

### Список параметрів

`ciphertext`
Має бути у форматі, наданому
[sodium_crypto_aead_chacha20poly1305_encrypt()](function.sodium-crypto-aead-chacha20poly1305-encrypt.md)
(зашифрований текст та тег, об'єднані).

`additional_data`
Додаткові дані. Це використовується при перевірці тега
автентичності, доданого до зашифрованого тексту, але він не шифрується і
не зберігається у зашифрованому тексті.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 8 байт.

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

У разі успішного виконання повертає текст або **`false`** у разі
виникнення помилки.
