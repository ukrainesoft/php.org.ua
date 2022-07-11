- [« openssl_cipher_iv_length](function.openssl-cipher-iv-length.md)
- [openssl_cms_encrypt »](function.openssl-cms-encrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розшифровує CMS-повідомлення

#openssl_cms_decrypt

(PHP 8)

openssl_cms_decrypt — Розшифровує CMS-повідомлення

### Опис

**openssl_cms_decrypt**(
string `$input_filename`,
string `$output_filename`,
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string\|null
`$private_key` u003d **`null`**,
int `$encoding` u003d **`OPENSSL_ENCODING_SMIME`**
): bool

Розшифровує CMS-повідомлення.

### Список параметрів

`input_filename`
Ім'я файлу, який містить зашифрований вміст.

`output_filename`
Ім'я файлу для збереження розшифрованого вмісту.

`certificate`
Ім'я файлу, який містить сертифікат одержувача.

`private_key`
Назва файлу, що містить ключ PKCS#8.

`encoding`
Кодування вхідного файлу. **`OPENSSL_ENCODING_SMIME`**,
**`OPENSSL_ENCODING_DER`** або **`OPENSSL_ENCODING_PEM`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
