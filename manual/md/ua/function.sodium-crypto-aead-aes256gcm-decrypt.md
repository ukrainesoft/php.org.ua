- [« sodium_compare](function.sodium-compare.md)
- [sodium_crypto_aead_aes256gcm_encrypt
»](function.sodium-crypto-aead-aes256gcm-encrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевіряє та розшифровує повідомлення за допомогою AES-256-GCM

# sodium_crypto_aead_aes256gcm_decrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_aes256gcm_decrypt — Перевіряє та розшифровує
повідомлення за допомогою AES-256-GCM

### Опис

**sodium_crypto_aead_aes256gcm_decrypt**(
string `$ciphertext`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string\|false

Перевіряє та розшифровує повідомлення за допомогою AES-256-GCM Доступно,
тільки якщо
[sodium_crypto_aead_aes256gcm_is_available()](function.sodium-crypto-aead-aes256gcm-is-available.md)
повертає **`true`**.

### Список параметрів

`ciphertext`
Має бути у форматі, наданому
[sodium_crypto_aead_aes256gcm_encrypt()](function.sodium-crypto-aead-aes256gcm-encrypt.md)
(зашифрований текст та тег, об'єднані).

`additional_data`
Додаткові дані. Це використовується при перевірці тега
автентифікації, доданого до зашифрованого тексту, але він не шифрується
і не зберігається у зашифрованому тексті.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 12 байт.

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

У разі успішного виконання повертає текст або **`false`** у разі
виникнення помилки.
