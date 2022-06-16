- [«
sodium_crypto_aead_chacha20poly1305_keygen](function.sodium-crypto-aead-chacha20poly1305-keygen.md)
- [sodium_crypto_aead_xchacha20poly1305_ietf_encrypt
»](function.sodium-crypto-aead-xchacha20poly1305-ietf-encrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- (Переважно) Перевіряє, потім розшифровує за допомогою
XChaCha20-Poly1305

# sodium_crypto_aead_xchacha20poly1305_ietf_decrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_xchacha20poly1305_ietf_decrypt — (Переважно)
Перевіряє, потім розшифровує за допомогою XChaCha20-Poly1305

### Опис

**sodium_crypto_aead_xchacha20poly1305_ietf_decrypt**(
string `$ciphertext`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string\|false

(Переважно) Перевіряє, потім розшифровує за допомогою
XChaCha20-Poly1305

Як правило, XChaCha20-Poly1305 - найкращий з наявних режимів AEAD для
використання.

### Список параметрів

`ciphertext`
Має бути у форматі, наданому
[sodium_crypto_aead_chacha20poly1305_ietf_encrypt()](function.sodium-crypto-aead-chacha20poly1305-ietf-encrypt.md)
(зашифрований текст та тег, об'єднані).

`additional_data`
Додаткові дані. Це використовується при перевірці тега
автентичності, доданого до зашифрованого тексту, але він не шифрується і
не зберігається у зашифрованому тексті.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

У разі успішного виконання повертає текст або **`false`** у разі
виникнення помилки.
