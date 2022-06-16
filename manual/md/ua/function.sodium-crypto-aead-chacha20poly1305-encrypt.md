- [«
sodium_crypto_aead_chacha20poly1305_decrypt](function.sodium-crypto-aead-chacha20poly1305-decrypt.md)
- [sodium_crypto_aead_chacha20poly1305_ietf_decrypt
»](function.sodium-crypto-aead-chacha20poly1305-ietf-decrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрує, а потім перевіряє справжність за допомогою ChaCha20-Poly1305

# sodium_crypto_aead_chacha20poly1305_encrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_chacha20poly1305_encrypt — Шифрує, а потім перевіряє
справжність за допомогою ChaCha20-Poly1305

### Опис

**sodium_crypto_aead_chacha20poly1305_encrypt**(
string `$message`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string

Шифрує, а потім перевіряє справжність за допомогою ChaCha20-Poly1305

### Список параметрів

`message`
Текстове повідомлення, яке потрібно зашифрувати.

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

У разі успішного виконання повертає зашифрований текст та тег або
**`false`** у разі виникнення помилки.
