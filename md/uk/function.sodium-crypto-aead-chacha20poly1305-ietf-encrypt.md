- [«
sodium_crypto_aead_chacha20poly1305_ietf_decrypt](function.sodium-crypto-aead-chacha20poly1305-ietf-decrypt.md)
- [sodium_crypto_aead_chacha20poly1305_ietf_keygen
»](function.sodium-crypto-aead-chacha20poly1305-ietf-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Зашифрувати повідомлення

# sodium_crypto_aead_chacha20poly1305_ietf_encrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_chacha20poly1305_ietf_encrypt — Зашифрувати повідомлення

### Опис

**sodium_crypto_aead_chacha20poly1305_ietf_encrypt**(
string `$message`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string

Шифрує, а потім перевіряє справжність за допомогою ChaCha20-Poly1305
(Варіант IETF).

Варіант IETF використовує 96-бітові одноразові номери та 32-бітові
внутрішні лічильники замість 64-бітних і для того, і для іншого.

### Список параметрів

`message`
Текстове повідомлення, яке потрібно зашифрувати.

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

У разі успішного виконання повертає зашифрований текст та тег або
**`false`** у разі виникнення помилки.
