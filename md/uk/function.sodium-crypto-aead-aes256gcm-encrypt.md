- [«
sodium_crypto_aead_aes256gcm_decrypt](function.sodium-crypto-aead-aes256gcm-decrypt.md)
- [sodium_crypto_aead_aes256gcm_is_available
»](function.sodium-crypto-aead-aes256gcm-is-available.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрує, а потім перевіряє справжність за допомогою AES-256-GCM

# sodium_crypto_aead_aes256gcm_encrypt

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_aead_aes256gcm_encrypt — Шифрує, а потім перевіряє
справжність за допомогою AES-256-GCM

### Опис

**sodium_crypto_aead_aes256gcm_encrypt**(
string `$message`,
string `$additional_data`,
string `$nonce`,
string `$key`
): string

Шифрує, а потім перевіряє автентичність за допомогою AES-256-GCM. Доступно,
тільки якщо
[sodium_crypto_aead_aes256gcm_is_available()](function.sodium-crypto-aead-aes256gcm-is-available.md)
повертає **`true`**.

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

Повертає зашифрований текст і тег автентичності у вигляді рядка
необроблені двійкові байти. (Формат: зашифрований текст, потім
тег.)
