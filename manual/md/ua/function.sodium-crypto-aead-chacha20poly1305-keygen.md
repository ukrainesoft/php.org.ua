- [«
sodium_crypto_aead_chacha20poly1305_ietf_keygen](function.sodium-crypto-aead-chacha20poly1305-ietf-keygen.md)
- [sodium_crypto_aead_xchacha20poly1305_ietf_decrypt
»](function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Створює випадковий ключ ChaCha20-Poly1305

# sodium_crypto_aead_chacha20poly1305_keygen

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_chacha20poly1305_keygen — Створює випадковий ключ
ChaCha20-Poly1305

### Опис

**sodium_crypto_aead_chacha20poly1305_keygen**(): string

Створює випадковий ключ для використання в
[sodium_crypto_aead_chacha20poly1305_encrypt()](function.sodium-crypto-aead-chacha20poly1305-encrypt.md)
і
[sodium_crypto_aead_chacha20poly1305_decrypt()](function.sodium-crypto-aead-chacha20poly1305-decrypt.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає 256-бітний випадковий ключ.
