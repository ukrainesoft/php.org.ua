- [«
sodium_crypto_aead_xchacha20poly1305_ietf_decrypt](function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt.md)
- [sodium_crypto_aead_xchacha20poly1305_ietf_keygen
»](function.sodium-crypto-aead-xchacha20poly1305-ietf-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- (Переважно) Шифрує, а потім перевіряє справжність за допомогою
XChaCha20-Poly1305

# sodium_crypto_aead_xchacha20poly1305_ietf_encrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_xchacha20poly1305_ietf_encrypt — (Переважно)
Шифрує, а потім перевіряє справжність за допомогою XChaCha20-Poly1305

### Опис

**sodium_crypto_aead_xchacha20poly1305_ietf_encrypt**(
string `$message`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string

Шифрує, а потім перевіряє справжність за допомогою
XChaCha20-Poly1305 (варіант eXtended-nonce).

Як правило, XChaCha20-Poly1305 - найкращий з наявних режимів AEAD для
використання.

### Список параметрів

`message`
Текстове повідомлення, яке потрібно зашифрувати.

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

У разі успішного виконання повертає зашифрований текст та тег або
**`false`** у разі виникнення помилки.
