- [«
sodium_crypto_aead_chacha20poly1305_encrypt](function.sodium-crypto-aead-chacha20poly1305-encrypt.md)
- [sodium_crypto_aead_chacha20poly1305_ietf_encrypt
»](function.sodium-crypto-aead-chacha20poly1305-ietf-encrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевірити, чи зашифрований текст містить допустимий тег

# sodium_crypto_aead_chacha20poly1305_ietf_decrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_chacha20poly1305_ietf_decrypt — Перевірити, що
зашифрований текст містить допустимий тег

### Опис

**sodium_crypto_aead_chacha20poly1305_ietf_decrypt**(
string `$ciphertext`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string\|false

Перевіряє, потім розшифровує за допомогою ChaCha20-Poly1305 (варіант
IETF).

Варіант IETF використовує 96-бітові одноразові номери та 32-бітові
внутрішні лічильники замість 64-бітних і для того, і для іншого.

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
повідомлення. Довжина 12 байт.

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

У разі успішного виконання повертає текст або **`false`** у разі
виникнення помилки.
